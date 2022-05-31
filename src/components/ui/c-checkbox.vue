<script setup>
	defineProps({
		modelValue: {
			type: [Boolean],
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	});
	const emit = defineEmits(["update:modelValue"]);

	const onChange = ({ target }) => {
		emit("update:modelValue", target.checked);
	};
</script>
<template>
	<label class="select-none py-1.5 flex gap-2 items-center cursor-pointer">
		<input
			:checked="modelValue"
			type="checkbox"
			:value="true"
			@change="onChange"
			:disabled="disabled"
			class="
				relative
				appearance-none
				rounded-sm
				h-4
				w-4
				border border-primary/50
				hover:border-primary/75
				focus:ring-2 focus:ring-primary/59 focus:outline-none
				transition-all
				disabled:ring-0
				disabled:!bg-primary/10
				disabled:!border-primary/20
				checked:disabled:!bg-primary/20
				duration-200
				checked:bg-primary
				checked:before:absolute
				checked:before:bottom-[3px]
				checked:before:left-[3px]
				checked:before:-rotate-45
				checked:before:w-0.5
				checked:before:h-1.5
				checked:before:rounded-full
				checked:before:bg-white
				checked:after:absolute
				checked:after:bottom-[3px]
				checked:after:right-1
				checked:after:rotate-45
				checked:after:w-0.5
				checked:after:h-[9px]
				checked:after:rounded-full
				checked:after:bg-white
			"
		/>
		<span class="peer-checked:text-primary"><slot></slot></span>
	</label>
</template>