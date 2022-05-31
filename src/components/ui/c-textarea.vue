<template>
  <div class="relative group w-full h-full">
    <label
      :for="fieldName + 'Field'"
      class="
        text-primary
        absolute
        pointer-events-none
        rounded-full
        -translate-y-1/2
        group-focus-within:top-0
        group-focus-within:left-2
        group-focus-within:text-sm
        group-focus-within:px-1
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
        'top-5': !!!modelValue,
        'text-sm': !!modelValue,
        'px-1': !!modelValue,
        'left-2': !!!modelValue,
        '-left-2': !!modelValue,
        'text-red-500': isInvalid,
      }"
      v-if="$slots.default"
    >
      <slot></slot>
    </label>
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
        bg-primary/10
        px-2
        py-1.5
        rounded-md
        border border-primary/10
        focus:border-primary
        disabled:cursor-pointer
        transition
        duration-200
        focus:shadow-md focus:shadow-primary/10
        block
        w-full
        pr-2
        placeholder:transition placeholder:duration-200 placeholder:select-none
        focus:placeholder:text-gray-400
      "
      :class="[
        { 'placeholder:text-transparent': $slots.default },
        textareaClass,
      ]"
      :autofocus="autofocus"
    ></textarea>
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
  rows: {
    type: Number,
    required: false,
  },
  cols: {
    type: Number,
    required: false,
  },
});
const {
  value,
  class: textareaClass,
  modelValue,
  name: fieldName,
  autofocus,
} = toRefs(props);

const emit = defineEmits(["update:modelValue"]);

const textarea = ref();
onMounted(() => {
  if (autofocus.value) {
    textarea.value.focus();
  }
});
</script>
