<template>
	<label class="select-none py-1.5 flex gap-2 items-center cursor-pointer">
		<input
			type="radio"
			:name="name"
			:value="value"
			:checked="modelValue == value"
			@change="emit('update:modelValue', $event.target.value)"
			class="
				appearance-none
				rounded-full
				h-4
				w-4
				border border-primary/50
				hover:border-primary/75
				checked:!border-[5px] checked:!border-primary/100
				focus:ring-2 focus:ring-primary/50 focus:outline-none
				disabled:ring-0
				disabled:border-8
				disabled:bg-white
				disabled:!border-primary/20
				transition-all
				duration-200
			"
		/>
		<span class="peer-checked:text-primary">
			<slot></slot>
		</span>
	</label>
</template>
<script setup>
	const props = defineProps({
		modelValue: {
			type: [String, Number, null],
			required: true,
			default: null,
		},
		value: {
			type: [String, Number],
			required: true,
			default: null,
		},
		name: {
			type: [String, Number],
			required: true,
			default: null,
		},
	});

	const emit = defineEmits(["update:modelValue"]);
</script>
