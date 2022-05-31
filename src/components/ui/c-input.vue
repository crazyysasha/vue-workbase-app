<template>
  <div class="relative group">
    <label
      :for="fieldName + 'Field'"
      class="
        text-primary
        absolute
        pointer-events-none
        rounded-full
        -translate-y-1/2
        group-focus-within:top-0
        group-focus-within:text-sm
        group-focus-within:px-1
        group-focus-within:!left-3
        transition-all
        duration-200
        before:-z-10
        before:h-px
        before:w-full
        before:bg-[#e8ecf7]
        before:absolute
        before:top-1/2
        before:left-0
      "
      :class="{
        'top-1/2': !!!modelValue,
        'text-sm': !!modelValue,
        'px-1': !!modelValue,
        'left-4': !!!modelValue,
        'left-3': !!modelValue,
        'text-red-500': isInvalid,
      }"
      v-if="$slots.default"
    >
      <slot></slot>
    </label>
    <label
      class="
        flex
        items-center
        focus:outline-none
        bg-primary/10
        px-3
        py-1
        rounded-md
        border border-primary/10
        focus:border-primary
        disabled:cursor-pointer
        transition
        duration-200
        focus:shadow-md focus:shadow-primary/10
      "
    >
      <div
        class="transition duration-200 pr-2"
        :class="{
          'text-transparent group-focus-within:text-primary': !!!modelValue,
          'text-primary': !!modelValue,
        }"
        v-if="$slots.sufix"
      >
        <slot name="sufix"></slot>
      </div>
      <input
        ref="input"
        :type="type"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        :step="step"
        :min="min"
        :max="max"
        class="
          block
          w-full
          pr-2
          py-1.5
          bg-transparent
          focus:outline-none
          placeholder:transition
          placeholder:duration-200
          placeholder:select-none
          focus:placeholder:text-gray-400
        "
        :class="[
          { 'placeholder:text-transparent': $slots.default },
          inputClass,
        ]"
        :autofocus="autofocus"
      />
    </label>
  </div>
</template>
<script setup>
import { onMounted, ref, toRefs } from "vue";

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
  type: {
    type: [String],
    default: "text",
  },
  class: {
    type: Object,
    default: function () {
      return {};
    },
  },
  autofocus: {
    type: Boolean,
    required: false,
    default: false,
  },
  step: {
      type: Number,
      required: false,
      default: 1,
  },
  min: {
      type: Number,
      required: false,
  },
  max: {
      type: Number,
      required: false,
  },
});
const { value, class: inputClass, modelValue, name: fieldName, autofocus } = toRefs(props);

const emit = defineEmits(["update:modelValue"]);

const input = ref();
onMounted(() => {
    if (autofocus.value) {
        input.value.focus();
    }
});
</script>
<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    @apply hidden m-0;
}
</style>