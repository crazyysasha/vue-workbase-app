<script setup>
	import BaseForm from "@/components/order/forms/base-form.vue";
	import useCategoryApi from "@/composables/categories/instance";
	import useServicesApi from "@/composables/services";
	import {
		computed,
		onMounted,
		reactive,
		ref,
		toRefs,
		watch,
	} from "@vue/runtime-core";
	import useVuelidate from "@vuelidate/core";
	import { helpers, requiredIf, requiredUnless } from "@vuelidate/validators";
	import { useRouter } from "vue-router";
	import useCreateServiceApi from "@/composables/services/create";
	import {
		useCreateOrderApi,
		useUpdateOrderApi,
	} from "@/composables/orders/instance&storage";
	import useServiceApi from "@/composables/services/instance";

	const props = defineProps({ categorySlug: {}, serviceSlugs: {} });
	const { categorySlug, serviceSlugs } = toRefs(props);
	const router = useRouter();

	const {
		onGetWhenNotLoaded,
		category,
		isLoading: categoryIsLoading,
		isLoaded: categoryIsLoaded,
	} = useCategoryApi();

	onMounted(async () => {
		await onGetWhenNotLoaded(categorySlug.value);
	});

	const {
		services,
		isLoading: servicesIsLoading,
		isLoaded: servicesIsLoaded,
		onGet: onGetServices,
	} = useServicesApi({
		perPage: 1000,
		category: categorySlug.value,
		parent: serviceSlugs.value?.[serviceSlugs.value?.length - 1],
	});
	const isExpanded = ref(false);
	onMounted(async () => {
		await onGetServices({});
		if (services.value.length < 8) {
			isExpanded.value = true;
		}
		if (!!!currentDraftedOrder.value) return;
		const s = currentDraftedOrder.value.services.find((ss) =>
			services.value.find((sss) => sss.slug == ss.slug)
		);
		service.value = s?.slug;
		// const serv = currentDraftedOrder?.value?.services.find(
		//     (s) =>
		//         !s.is_active &&
		//         s.parent?.slug ==
		//             serviceSlugs.value?.[serviceSlugs.value?.length - 1]
		// );
		// console.log(serv);
	});

	const back = () => {
		router.back();
	};
	const computedServices = computed(() => {
		if (isExpanded.value) {
			return services.value;
		}
		const index =
			services.value?.findIndex((s) =>
				currentDraftedOrder.value?.services?.find((ss) => ss.slug == s.slug)
			) + 1;
		return services.value?.slice(0, index > 8 ? index : 8);
	});

	const isLoading = computed(
		() =>
			categoryIsLoading.value ||
			servicesIsLoading.value ||
			orderIsUpdating.value ||
			orderIsCreating.value ||
			serviceIsLoading.value
	);

	const service = ref();
	const newEntry = ref(false);
	const newEntryField = ref("");
	watch(service, (value) => {
		if (value != null) newEntry.value = false;
		$externalResults.service = null;
	});
	watch(newEntry, (value) => {
		if (!!value) service.value = null;
		$externalResults.newEntryField = null;
	});

	watch(newEntryField, () => {
		$externalResults.newEntryField = null;
	});

	const $externalResults = reactive({});
	const rules = {
		service: {
			requiredUnless: helpers.withMessage(
				"Выберите услугу",
				requiredUnless(newEntry)
			),
		},
		newEntry: {},
		newEntryField: {
			requiredif: helpers.withMessage(
				"Заполните данное поле",
				requiredIf(newEntry)
			),
		},
	};

	const v = useVuelidate(
		rules,
		{ service, newEntry, newEntryField },
		{ $externalResults }
	);

	const { onCreate: onCreateService, isCreating: serviceIsCreating } =
		useCreateServiceApi();

	const {
		onUpdate: onUpdateOrder,
		isUpdating: orderIsUpdating,
		currentDraftedOrder,
	} = useUpdateOrderApi(categorySlug.value);

	const { onCreate: onCreateOrder, isCreating: orderIsCreating } =
		useCreateOrderApi(categorySlug.value);

	const {
		service: fetchedService,
		onGet: onGetService,
		isLoading: serviceIsLoading,
	} = useServiceApi();

	const onSubmit = async (e) => {
		if (!(await v.value.$validate())) {
			return;
		}
		let newService;
		if (newEntry.value) {
			newService = await onCreateService({
				name: newEntryField.value,
				parent: serviceSlugs.value?.[serviceSlugs.value?.length - 1],
				category: categorySlug.value,
			}).catch(({ response }) => {
				if (response.status != 400) {
					return;
				}

				const { type, fields } = response.data?.error;

				if (type == "validation") {
					$externalResults.newEntryField = fields.name;
				}
			});
			if (!!!newService?.id) return;
			console.log(newService);
		} else {
			await onGetService(service.value, { count: ["children"] });
		}

		const servicesList = serviceSlugs.value || [];
		if (service.value) {
			servicesList.push(service.value);
		} else {
			servicesList.push(newService.slug);
		}

		if (!!!currentDraftedOrder.value)
			await onCreateOrder({
				category: categorySlug.value,
				services: servicesList,
			});
		else
			await onUpdateOrder({
				services: servicesList,
			});

		if (fetchedService?.value?.children_count > 0) {
			location.href =
				"/" +
				Object.values({
					categorySlug: categorySlug.value,
					serviceSlugs: servicesList,
					form: "select",
				})
					.map((element) =>
						Array.isArray(element) ? element.join("/") : element
					)
					.join("/");
		} else {
			router.push({
				name: "order.update",
				params: {
					categorySlug: categorySlug.value,
					serviceSlugs: servicesList,
					form: "work-place",
				},
			});
		}
	};
</script>

<template>
	<BaseForm @on-submit="onSubmit">
		<template #header>
			<div class="pt-1.5 pb-0.5" v-if="categoryIsLoading">
				<div
					class="h-7 w-96 bg-primary/10 rounded-lg animate-pulse"
				></div>
			</div>
			<h1 class="text-3xl text-primary" v-else>Выберите услугу</h1>
			<div v-if="categoryIsLoading" class="pt-1.5 pb-0.5">
				<div
					class="h-4 w-64 bg-primary/10 rounded-md animate-pulse"
				></div>
			</div>
			<p class="text-orange-500">{{ category.name }}</p>
		</template>
		<ul v-if="servicesIsLoading">
			<li
				v-for="item in 8"
				:key="`service-item-skeleton${item}`"
				class="border border-transparent"
			>
				<div class="py-1.5 flex gap-2 items-center animate-pulse">
					<div
						class="rounded-full h-4 w-4 border-8 border-primary/20"
					></div>
					<div class="pt-1 pb-1">
						<div class="h-4 w-24 bg-primary/10 rounded-md"></div>
					</div>
				</div>
			</li>
			<li>
				<div class="py-0.5 flex gap-2 items-center animate-pulse">
					<div
						class="rounded-full h-4 w-4 border-8 border-primary/20"
					></div>
					<div class="h-8.5 w-48 bg-primary/10 rounded-md"></div>
				</div>
			</li>
		</ul>
		<ul v-else>
			<li
				v-for="s in computedServices"
				:key="s.id"
				class="border border-transparent"
			>
				<c-radio v-model="service" name="service" :value="s.slug">{{ s.name }}</c-radio>
				<!-- <label
					class="
						select-none
						py-1.5
						flex
						gap-2
						items-center
						cursor-pointer
					"
				>
					<input
						type="radio"
						class="
							appearance-none
							rounded-full
							h-4
							w-4
							border border-primary/50
							hover:border-primary/75
							checked:!border-[5px] checked:!border-primary/100
							focus:ring-2
							focus:ring-primary/50
							focus:outline-none
							disabled:ring-0
							disabled:border-8
							disabled:bg-white
							disabled:!border-primary/20
							transition-all
							duration-200
						"
						v-model="service"
						:value="s.slug"
					/>
					<span class="peer-checked:text-primary">
						{{ s.name }}
					</span>
				</label> -->
			</li>
			<li>
				<label
					class="
						select-none
						py-0.5
						flex
						gap-2
						items-center
						cursor-pointer
					"
					@click="newEntry = true"
				>
					<input
						type="radio"
						class="
							appearance-none
							rounded-full
							h-4
							w-4
							border border-primary/50
							hover:border-primary/75
							checked:!border-[5px] checked:!border-primary/100
							focus:ring-2
							focus:ring-primary/50
							focus:outline-none
							disabled:ring-0
							disabled:border-8
							disabled:bg-white
							disabled:!border-primary/20
							transition-all
							duration-200
						"
						v-model="newEntry"
						:value="true"
						id="radioNewEntry"
					/>
					<c-input
						v-model="newEntryField"
						@click="newEntry = true"
						placeholder="Другое"
						class="!py-1"
					>
					</c-input>
					<div
						v-for="error in v.newEntryField.$errors"
						:key="error.$uid"
						class="text-red-500"
					>
						{{ error.$message }}
					</div>
				</label>
			</li>
		</ul>

		<div
			v-for="error in v.service.$errors"
			:key="error.$uid"
			class="text-red-500"
		>
			{{ error.$message }}
		</div>
		<div v-if="servicesIsLoading" class="pt-1.5 pb-0.5 mt-2">
			<div class="h-4 w-44 bg-primary/10 rounded-md animate-pulse"></div>
		</div>
		<a
			class="text-primary hover:text-primary/75 mt-2 inline-block"
			href="javascript:;"
			@click="isExpanded = true"
			v-else-if="!isExpanded"
		>
			показать все услуги
			<h-chevron-down class="h-4 w-4 inline"></h-chevron-down>
		</a>
		<div class="h-4"></div>
		<template #footer>
			<c-button
				scheme="secondary"
				type="button"
				@click="back"
				:loading="isLoading"
				:disabled="isLoading"
			>
				назад
			</c-button>
			<c-button :loading="isLoading" :disabled="isLoading">
				продолжить
			</c-button>
		</template>
	</BaseForm>
</template>

