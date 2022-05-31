<script setup>
	import useCategoryApi from "@/composables/categories/instance";
	import { useUpdateOrderApi } from "@/composables/orders/instance&storage";
	import { reactive, ref, toRefs, watch } from "vue";
	import { onMounted } from "@vue/runtime-core";
	import useVuelidate from "@vuelidate/core";
	import {
		helpers,
		required,
		requiredIf,
		requiredUnless,
	} from "@vuelidate/validators";
	import { useRouter } from "vue-router";
	import BaseForm from "./base-form.vue";
	const props = defineProps({
		categorySlug: {},
		serviceSlugs: {},
	});

	const { categorySlug, serviceSlugs } = toRefs(props);

	const router = useRouter();

	const {
		category,
		onGetWhenNotLoaded: onGetCategoryWhenNotLoaded,
		isLoading: categoryIsLoading,
	} = useCategoryApi();

	onMounted(async () => {
		await onGetCategoryWhenNotLoaded(categorySlug.value);
	});

	const back = () => {
		router.back();
	};

	const {
		currentDraftedOrder,
		isUpdating: orderIsUpdating,
		onUpdate: onUpdateOrder,
	} = useUpdateOrderApi(categorySlug.value);

	const minPrice = ref(currentDraftedOrder.value?.price_min || "");
	const maxPrice = ref(currentDraftedOrder.value?.price_max || "");
	const $externalResults = reactive({
		minPrice: [],
		maxPrice: [],
	});

	watch(minPrice, () => {
		$externalResults.minPrice = [];
	});

	watch(maxPrice, () => {
		$externalResults.maxPrice = [];
	});

	const rules = {
		minPrice: {
			requiredIf: helpers.withMessage("", requiredIf(false)),
		},
		maxPrice: {
			required: helpers.withMessage("Укажите максимальную цену", required),
		},
	};

	const v = useVuelidate(rules, { minPrice, maxPrice }, { $externalResults });

	const onSubmit = async (e) => {
		if (!(await v.value.$validate())) {
			return;
		}

		await onUpdateOrder({
			price_min: minPrice.value || 0,
			price_max: maxPrice.value,
			is_ranged_price: true,
		}).catch(({ response }) => {
			const { error } = response?.data;
			if (error?.type == "validation") {
				$externalResults.minPrice = error.fields.price_min || [];
				$externalResults.maxPrice = error.fields.price_max || [];
			}

			throw new Error(error);
		});
		router.push({
			name: "order.update",
			params: {
				categorySlug: categorySlug.value,
				serviceSlugs: serviceSlugs.value,
				form: "other",
			},
		});
	};
</script>
<template>
	<BaseForm @on-submit="onSubmit">
		<template #header>
			<div class="pt-1.5 pb-0.5" v-if="categoryIsLoading">
				<div
					class="h-6 w-96 bg-primary/10 rounded-lg animate-pulse"
				></div>
			</div>
			<h1 class="text-2xl text-primary" v-else>Укажите цену за услугу</h1>
			<div v-if="categoryIsLoading" class="pt-1.5 pb-0.5">
				<div
					class="h-4 w-64 bg-primary/10 rounded-md animate-pulse"
				></div>
			</div>
			<p class="text-orange-500">{{ category.name }}</p>
		</template>
		<div class="grid gap-4 grid-cols-2">
			<!-- <div class="col-span-2">
				<label for="priceField" class="mb-2 inline-block">
					Цена за работу:
				</label>
				<label
					class="
						rounded-md
						bg-primary/10
						border border-primary/10
						hover:border-primary/50
						focus-within:!border-primary focus-within:outline-none
						overflow-hidden
						flex
					"
				>
					<div class="py-1.5 px-2">От:</div>
					<input
						id="priceField"
						type="number"
						v-model="price"
						class="
							block
							w-full
							pr-2
							py-1.5
							bg-transparent
							focus:outline-none
						"
						min="1000"
						placeholder="0"
					/>
				</label>
				<div class="mt-1 mb-3">
					<div
						class="text-red-500"
						v-for="error in v.price.$errors"
						:key="error.$uid"
					>
						{{ error.$message }}
					</div>
				</div>
			</div> -->
			<div class="col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1">
				<c-input
					placeholder="1000"
					type="number"
					v-model="minPrice"
					class="w-full py-2"
					min="0"
					name="minPrice"
				>
					<template #prefix>От:</template>
					Минимальный бюджет за работу
				</c-input>

				<div class="mt-1 mb-3">
					<div
						class="text-red-500"
						v-for="error in v.minPrice.$errors"
						:key="error.$uid"
					>
						{{ error.$message }}
					</div>
				</div>
			</div>
			<div
				class="
					col-span-2
					sm:col-span-1
					md:col-span-2
					lg:col-span-1
					flex flex-col
				"
			>
				<c-input
					placeholder="10000"
					type="number"
					v-model="maxPrice"
					name="maxPrice"
					class="w-full py-2"
					autofocus
					min="0"
				>
					<template #prefix>До:</template>
					Максимальный бюджет за работу
				</c-input>
				<div class="mt-1 mb-3">
					<div
						class="text-red-500"
						v-for="error in v.maxPrice.$errors"
						:key="error.$uid"
					>
						{{ error.$message }}
					</div>
				</div>
			</div>
		</div>
		<template #footer>
			<c-button scheme="secondary" type="button" @click="back">
				Назад
			</c-button>
			<c-button> Продолжить </c-button>
		</template>
	</BaseForm>
</template>

