<template>
	<div>
		<slot :expanded="expanded" :on-expand="onExpand"></slot>
	</div>
</template>

<script setup>
	import { ref, toRefs, watch } from "vue";

	const expanded = ref(null);

	const onExpand = (item) => {
		expanded.value = item;
	};
</script>
