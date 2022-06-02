<template>
	<div>{{ orderId }} asd</div>
</template>

<script setup>
	import { onMounted, toRefs } from "vue";
	import useOrderModel from "@/composables/orders/model";
	const props = defineProps({
		orderId: { type: [Number, String] },
	});

	const { orderId } = toRefs(props);

	const { onGet, model, onUpdate } = useOrderModel(orderId.value);
	const {
		execute: getOrderExecute,
		isLoading: getOrderIsLoading,
		isLoaded: getOrderIsLoaded,
		promise: getOrderPromise,
	} = onGet();
	onMounted(async () => {
		await getOrderExecute().catch(({ type }) => {
			if (type == "validation") {
				return;
			}
			if (type == "not_found") {
				return;
			}
		});
		console.log(model.value);
	});
</script>