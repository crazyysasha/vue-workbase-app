<template>
        <div class="mb-4">
			<c-search
				class="w-full sm:w-2/3"
				:class="{ 'animate-pulse': isLoading }"
				:disabled="isLoading"
				:placeholder="categoryIsLoading ? '' : 'Услуга или специалист'"
				v-model="search"
				:loading="!servicesIsLoaded"
				:items="services"
				@on-select-item="onSelectItem"
			>
				<template #no-items>
					<div class="text-center">
						По вашему запросу услуги не найдены
					</div>
				</template>
			</c-search>
			<div
				class="text-red-500"
				v-for="error of v.service.$errors"
				:key="error.$uid"
			>
				{{ error.$message }}
			</div>
		</div>
		<div v-if="categoryIsLoading" class="pt-1.5 pb-0.5">
			<div class="h-4 w-20 bg-primary/10 rounded-md animate-pulse"></div>
		</div>
		<p
			v-else-if="
				categoryIsLoaded && category.priority_services?.length > 0
			"
			:class="{ 'animate-pulse': isLoading }"
		>
			Например:
		</p>
		<div
			class="flex gap-4 flex-wrap min-h-[2.375rem] py-5"
			v-if="categoryIsLoaded"
		>
			<c-button
				v-for="service in category?.priority_services || []"
				class="rounded-full py-1 text-sm"
				outlined
				:loading="isLoading"
				:disabled="isLoading"
				:key="service.id"
				type="button"
				@click="onSelectItem(service)"
			>
				{{ service.name }}
			</c-button>
		</div>
</template>
<script setup>
	import BaseForm from "@/components/order/forms/base-form.vue";
	import useCategoryApi from "@/composables/categories/instance";
	import {
		useCreateOrderApi,
		useUpdateOrderApi,
	} from "@/composables/orders/instance&storage";
	import useServicesApi from "@/composables/services";
	import useServiceApi from "@/composables/services/instance";
	import {
		computed,
		onMounted,
		onUnmounted,
		reactive,
		ref,
		toRefs,
		watch,
	} from "@vue/runtime-core";
	import useVuelidate from "@vuelidate/core";
	import { required } from "@vuelidate/validators";
	import debounce from "lodash.debounce";
	import { useRouter } from "vue-router";
	const props = defineProps({ categorySlug: {} });

	const { categorySlug } = toRefs(props);

	const router = useRouter();

	const {
		category,
		isLoading: categoryIsLoading,
		isLoaded: categoryIsLoaded,
		onGetWhenNotLoaded: onGetCategoryWhenNotLoaded,
	} = useCategoryApi();

	onMounted(() => {
		onGetCategoryWhenNotLoaded(categorySlug.value, {
			with: ["priority_services", "image"],
		});
	});

	const {
		services,
		isLoading: servicesIsLoading,
		isLoaded: servicesIsLoaded,
		onGet: onGetServices,
		cancel: cancelLoadingServices,
		clear: clearServices,
	} = useServicesApi({ category: categorySlug.value, perPage: 20 });

	onUnmounted(() => {
		clearServices();
	});

	const {
		onCreate: onCreateOrder,
		isCreated: orderIsCreated,
		isCreating: orderIsCreating,
		currentDraftedOrder,
	} = useCreateOrderApi(categorySlug.value);

	const {
		isUpdated: orderIsUpdated,
		isUpdating: orderIsUpdating,
		onUpdate: onUpdateOrder,
	} = useUpdateOrderApi(categorySlug.value);

	const back = (e) => {
		router.back();
	};

	const service = ref(currentDraftedOrder.value?.services?.[0]?.slug || null);
	const search = ref(currentDraftedOrder.value?.services?.[0]?.name || "");

	watch(search, () => {
		const searched =
			category?.priority_services?.find((s) => search.value == s.name) ||
			services.value.find((s) => search.value == s.name);
		if (searched) {
			service.value = searched.slug;
		} else {
			service.value = null;
		}

		debounce(() => {
			if (servicesIsLoading.value) {
				cancelLoadingServices();
			}
			onGetServices({
				category: category.slug,
				with: [],
				search: search.value,
			});
		}, 200)();

		$externalResults.service = null;
	});

	const onSelectItem = (item) => {
		search.value = item.name;
	};

	const $externalResults = reactive({});

	const v = useVuelidate(
		{ service: { required } },
		{ service },
		{ $externalResults }
	);

	const {
		service: fetchedService,
		onGet: onGetService,
		isLoading: serviceIsLoading,
	} = useServiceApi();

	const onSubmit = async (e) => {
		if (!(await v.value.$validate())) {
			return;
		}

		await onGetService(service.value, { count: ["children"] });

		if (currentDraftedOrder.value) {
			await onUpdateOrder({
				services: [service.value],
			}).catch(({ response }) => {
				if (response.status == 400) {
					const { error } = response?.data;
					if (error.type == "validation") {
						$externalResults.service = error.fields.services || [];
						$externalResults.category = error.fields.category || [];
					}
				}
			});
		} else {
			await onCreateOrder({
				category: category.slug,
				services: [service.value],
			}).catch(({ response }) => {
				if (response.status == 400) {
					const { error } = response?.data;
					if (error.type == "validation") {
						$externalResults.service = error.fields.services || [];
						$externalResults.category = error.fields.category || [];
					}
				}
			});
		}

		router.push({
			name: "order.update",
			params: {
				categorySlug: categorySlug.value,
				serviceSlugs: [service.value],
				form:
					fetchedService.value.children_count > 0
						? "select"
						: "work-place",
			},
		});
	};

	const isLoading = computed(
		() =>
			categoryIsLoading.value ||
			orderIsCreating.value ||
			orderIsUpdating.value ||
			serviceIsLoading.value
	);
</script>