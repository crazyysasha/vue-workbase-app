<template>
	<div class="relative">
		<textarea
			ref="textarea"
			:name="name"
			:value="modelValue"
			:rows="rows"
			:cols="cols"
			@input="emit('update:modelValue', $event.target.value)"
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
				{ 'placeholder:text-transparent': !!$slots.default },
				{ '!border-red-500/50': isInvalid },
				{ 'focus:!border-red-500': isInvalid },
				textareaClass,
			]"
			:autofocus="autofocus"
			:disabled="disabled"
		></textarea>
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
			:class="[
				{
					'top-5': !!!modelValue,
					'text-sm': !!modelValue,
					'px-1': !!modelValue,
					'left-4': !!!modelValue,
					'left-2': !!modelValue,
					'bg-white': !!modelValue,
					'!text-red-500': isInvalid,
				},
			]"
			v-if="$slots.default"
		>
			<slot></slot>
		</label>
	</div>
</template>
<script setup>
	import { computed, onMounted, ref, toRefs } from "vue";

	const props = defineProps({
		name: { type: String, required: true },
		modelValue: {
			type: [String, Number],
			required: true,
			default: null,
		},
		placeholder: {
			type: [String, Number],
		},
		class: {
			type: [Object, String, Array],
			default: function () {
				return {};
			},
		},
		autofocus: {
			type: Boolean,
			required: false,
			default: false,
		},
		rows: {
			type: [Number, String],
			required: false,
		},
		cols: {
			type: [Number, String],
			required: false,
		},
		valid: {
			type: Boolean,
			default: true,
			required: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	});
	const {
		class: textareaClass,
		modelValue,
		name: fieldName,
		autofocus,
		valid,
		disabled,
	} = toRefs(props);

	const isInvalid = computed(() => !valid.value);
	const emit = defineEmits(["update:modelValue"]);
	const textarea = ref();
	onMounted(() => {
		if (autofocus.value) {
			textarea.value.focus();
		}
		textarea.value.addEventListener("keydown", function () {
			if (textarea.value.scrollTop > 0) {
				textarea.value.style.height = textarea.value.scrollHeight + "px";
			}
		});
	});
</script>
