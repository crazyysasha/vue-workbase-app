<template>
	<div class="border-b border-primary/25 p-4">
		<h3
			class="text-primary transition-all duration-200 text-left text-2xl"
		>
			{{ title }}
		</h3>
        <slot name="subtitle">
            {{ subtitle }}
        </slot>
	</div>
</template>

<script setup>
	import { computed, toRefs, watch } from "vue";
	const props = defineProps({
		expanded: {
			type: Number,
			default: null,
		},
		index: {
			type: Number,
			required: false,
		},
		title: {
			type: String,
		},
		subtitle: {
			type: String,
		},
		body: {
			type: String,
		},
	});
	const { expanded, index } = toRefs(props);

	const emit = defineEmits(["on-expand"]);

	const onExpand = () => {
		if (isExpanded.value) {
			return emit("on-expand", null);
		}
		return emit("on-expand", index.value);
	};

	const isExpanded = computed(() => expanded.value == index.value);
</script>