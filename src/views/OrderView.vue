
<script setup>
	import ForExecutor from "@/components/order/view/for-executor.vue";
	import ForCustomer from "@/components/order/view/for-customer.vue";
	import SkeletonLoader from "@/components/order/view/skeleton-loader.vue";
	import { computed, onMounted, reactive, toRefs, watch } from "vue";
	import { useRoute, useRouter } from "vue-router";
	import useOrderModelInstance from "@/components/order/composables/model-instance";
	import useProfile from "@/composables/profile";
	import { isAuthentificated } from "@/composables/auth";

	const props = defineProps({
		orderId: { type: [Number, String] },
	});

	const { orderId } = toRefs(props);

	// const { onGet, model, onUpdate, onDelete } = useOrderModel(orderId.value);

	// const {
	// 	execute: getOrderExecute,
	// 	isLoading: getOrderIsLoading,
	// 	isLoaded: getOrderIsLoaded,
	// 	promise: getOrderPromise,
	// } = onGet({
	// 	with: ["services", "category", "replies"], //"trashed"
	// 	count: ["replies", "services"],
	// });

	// const updateHandlers = onUpdate();

	// const {
	// 	execute: updateOrderExecute,
	// 	isLoading: updateOrderIsLoading,
	// 	isLoaded: updateOrderIsLoaded,
	// } = updateHandlers;

	// const {
	// 	execute: deleteOrderExecute,
	// 	isLoading: deleteOrderIsLoading,
	// 	isLoaded: deleteOrderIsLoaded,
	// } = onDelete();

	// const service = computed(() => {
	// 	if (!!!model.value) {
	// 		return null;
	// 	}
	// 	const { name, services } = model.value;
	// 	if (!!name) {
	// 		return name;
	// 	}
	// 	return `${services?.[services?.length - 1]?.name}`;
	// });

	// const displayedTime = computed(() => {
	// 	if (!!!model.value) {
	// 		return null;
	// 	}
	// 	const { started_at, ended_at } = model.value;

	// 	return `Начало: ${new Date(started_at)
	// 		?.toLocaleString()
	// 		?.replace("/", ".")
	// 		?.replace(",", " г.")
	// 		?.slice(0, -3)}  Завершение: ${new Date(ended_at)
	// 		?.toLocaleString()
	// 		?.replace("/", ".")
	// 		?.replace(",", " г.")
	// 		?.slice(0, -3)}`;
	// });

	// const displayedPrice = computed(() => {
	// 	if (!!!model.value) return null;

	// 	const { price, price_min, price_max, is_ranged_price } = model.value;

	// 	if (!!price && !!!is_ranged_price)
	// 		return `<span class="text-primary">${price}</span> сум за услугу`;

	// 	if (!!price_min)
	// 		return `От <span class="text-primary">${price_min}</span> до <span class="text-primary">${price_max}</span> сум за услугу`;
	// 	if (!!price_max)
	// 		return `До <span class="text-primary">${price_max}</span> сум за услугу`;

	// 	return "Договорная";
	// });

	// const workPlace = computed(() => {
	// 	if (!!!model.value) return null;

	// 	const { at_executor, at_customer, is_online } = model.value;
	// 	let text = "";
	// 	if (at_executor) {
	// 		text += "У исполнителя";
	// 	}
	// 	if (at_customer) {
	// 		text += at_executor ? ", у заказчика" : "У заказчика";
	// 	}
	// 	if (is_online) {
	// 		text += at_executor || at_customer ? ", онлайн" : "Онлайн";
	// 	}
	// 	return text;
	// });

	// const address = computed(() => {
	// 	if (!!!model.value) return null;

	// 	const { address } = model.value;

	// 	return address;
	// });
	const router = useRouter();
	const route = useRoute();

	const { profile } = useProfile();

	const { onGet, model } = useOrderModelInstance();

	const { onGetOrderIsLoading, onGetOrderExecute, onGetOrderIsLoaded } = onGet();

	onMounted(async () => {
		onGetOrderExecute(orderId.value, {
			with: ["customer", "trashed", "category", "services", "replies"],
		}).catch(({ type, message, description }) => {
			if (type == "not_found") {
				router.replace({
					name: "404",
					params: {
						pathMatch: route.path.substring(1).split("/"),
						message,
						description,
					},
				});
			}
		});
	});
	const isMyOrder = computed(() => {
		if (onGetOrderIsLoading.value) return false;

		if (!isAuthentificated.value) return false;

		return model.value?.customer?.id == profile.value?.id;
	});

	watch(isMyOrder,  (val) => {
		console.log(val);
	});
</script>
<template>
	<section class="py-12 container px-4 mx-auto">
		<skeleton-loader v-if="onGetOrderIsLoading" key="loader-view">
		</skeleton-loader>
		<for-customer
			v-if="isMyOrder && onGetOrderIsLoaded"
			key="customer-view"
		>
		</for-customer>
		<for-executor
			v-if="!isMyOrder && onGetOrderIsLoaded"
			key="executor-view"
		>
		</for-executor>
	</section>
</template>
