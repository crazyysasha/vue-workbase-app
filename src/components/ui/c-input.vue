<template>
	<div class="relative group">
		<input
			ref="input"
			:type="isEyeClicked ? 'text' : type"
			:value="modelValue"
			@input="emit('update:modelValue', $event.target.value)"
			:name="name"
			:disabled="disabled"
			:placeholder="placeholder"
			:step="step"
			:min="min"
			:max="max"
			:id="fieldName"
			:autofocus="autofocus"
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
				appearance-none
				transition
				duration-200
				focus:shadow-md focus:shadow-primary/10
				disabled:bg-gray-50 disabled:cursor-not-allowed
				autofill:!bg-yellow-200
				peer
			"
			:class="[
				{ 'placeholder:text-transparent': !!$slots.default },
				{ '!border-red-500/50': isInvalid },
				{ 'focus:!border-red-500': isInvalid },
				inputClass,
			]"
		/>
		<label
			:for="fieldName"
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
		<label
			:for="fieldName"
			class="
				absolute
				flex
				pointer-events-none
				items-center
				inset-y-0
				pl-3
				pr-2
				border border-transparent
				transition
				duration-200
			"
			:class="{
				'text-transparent group-focus-within:text-primary':
					!!!modelValue,
				'text-primary': !!modelValue,
			}"
			v-if="$slots.prefix"
			ref="prefixContainer"
		>
			<slot name="prefix"></slot>
		</label>
		<button
			class="
				absolute
				inset-y-0
				right-0
				text-primary
				pr-3
				pl-2
				transition
				duration-200
			"
			:class="{
				'text-transparent group-focus-within:text-primary':
					!!!modelValue,
				'text-primary': !!modelValue,
			}"
			type="button"
			v-if="eye && type == 'password'"
			ref="eyeContainer"
			@click="isEyeClicked = !isEyeClicked"
		>
			<h-eye :class="{ hidden: isEyeClicked }"></h-eye>
			<h-eye-off :class="{ hidden: !isEyeClicked }"></h-eye-off>
		</button>
	</div>
</template>
<script setup>
	import {
		onMounted,
		ref,
		computed,
		toRefs,
		useSlots,
		onUnmounted,
		onUpdated,
		nextTick,
		watch,
	} from "vue";

	const props = defineProps({
		name: {
			type: String,
			default() {
				return `${parseInt(Math.random() * 1000000)}`;
			},
		},
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
			default: function () {
				return {};
			},
		},
		valid: {
			type: Boolean,
			default: true,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		autofocus: {
			type: Boolean,
			default: false,
		},
		step: {
			type: [Number, String],
			default: null,
		},
		min: {
			type: [Number, String],
			required: false,
		},
		max: {
			type: [Number, String],
			default: null,
		},
		eye: {
			type: Boolean,
			default: false,
		},
	});
	const {
		class: inputClass,
		modelValue,
		name,
		valid,
		disabled,
		autofocus,
	} = toRefs(props);

	const isInvalid = computed(() => !valid.value);
	const input = ref();
	const prefixContainer = ref();
	const eyeContainer = ref();
	const isEyeClicked = ref(false);
	const fieldName = computed(
		() => `${name.value}${parseInt(Math.random() * 9999999)}Field`
	);
	onMounted(() => {
		if (autofocus.value) {
			input.value.focus();
		}
		setInputPadding();
		//document.addEventListener("DOMSubtreeModified", setInputPadding);
	});

	onUnmounted(() => {
		//document.removeEventListener("DOMSubtreeModified", setInputPadding);
	});

	const setInputPadding = () => {
		if (prefixContainer.value) {
			input.value.style.paddingLeft = `${
				prefixContainer.value.clientWidth || 44
			}px`;
		}
		if (eyeContainer.value) {
			input.value.style.paddingRight = `${
				eyeContainer.value.clientWidth || 44
			}px`;
		}
	};
	const emit = defineEmits(["update:modelValue"]);
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	@apply hidden m-0;
}
</style>