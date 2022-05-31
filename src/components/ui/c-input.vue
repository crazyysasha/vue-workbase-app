<template>
	<div class="relative group">
		<input
			:type="type"
			:value="modelValue"
			@input="emit('update:modelValue', $event.target.value)"
			:name="name"
			:disabled="disabled"
			:placeholder="placeholder"
			class="
				focus:outline-none
				px-3
				py-2
				rounded-md
				border border-primary/20
				focus:border-primary
				placeholder:transition
				placeholder:duration-200
				placeholder:select-none
				focus:placeholder:text-gray-400
				transition
				duration-200
				focus:shadow-md focus:shadow-primary/10
				disabled:bg-gray-50 disabled:cursor-not-allowed
				peer
			"
			:class="[
				{ 'placeholder:text-transparent': $slots.default },
				{ '!border-red-500/50': isInvalid },
				{ 'focus:!border-red-500': isInvalid },
				inputClass,
			]"
		/>
		<label
			:for="fieldName + 'Field'"
			class="
				text-primary
				absolute
				pointer-events-none
				rounded-full
				-translate-y-1/2
				peer-focus:top-0
				peer-focus:text-sm
				peer-focus:px-1
				peer-focus:!left-2
				peer-focus:bg-white
				transition-all
				duration-200
				peer-disabled:before:top-1/2
				peer-disabled:before:h-1/2
				peer-disabled:before:w-full
				peer-disabled:before:absolute
				peer-disabled:before:bg-gray-50
				peer-disabled:before:-z-10
				peer-disabled:before:left-0
			"
			:class="{
				'top-1/2': !!!modelValue,
				'text-sm': !!modelValue,
				'px-1': !!modelValue,
				'left-4': !!!modelValue,
				'left-2': !!modelValue,
				'bg-white': !!modelValue,
				'!text-red-500': isInvalid,
			}"
			v-if="$slots.default"
		>
			<slot></slot>
		</label>
	</div>
</template>
<script setup>
	import { computed, toRefs } from "vue";

	const props = defineProps({
		name: { type: String, required: false },
		modelValue: {
			type: [String, Number],
			required: true,
			default: null,
		},
		placeholder: {
			type: [String, Number],
		},
		type: {
			type: [String],
			default: "text",
			validator(value) {
				return ["text", "number", "password", "email"].includes(value);
			},
		},
		class: {
			type: [Object, String, Array],
			required: false,
			default: function () {
				return {};
			},
		},
		valid: {
			type: Boolean,
			required: false,
			default: true,
		},
		disabled: {
			type: Boolean,
			required: false,
			default: false,
		},
	});
	const {
		value,
		class: inputClass,
		modelValue,
		name: fieldName,
		valid,
		disabled,
	} = toRefs(props);

	const isInvalid = computed(() => !valid.value);

	const emit = defineEmits(["update:modelValue"]);
</script>