<template>
	<div>{{ id }}</div>
</template>

<script setup>
	const props = defineProps({
		id: { type: [Number, String] },
	});
</script>