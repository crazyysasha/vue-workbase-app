<template>
    <label
        :for="fieldName + 'RadioField-' + value"
        class="
            cursor-pointer
            select-none
            border
            py-2
            px-6
            text-gray-400 text-center
            transition-all
            duration-200
            font-medium
            text-sm
            md:text-md
            rounded-sm
            justify-center
            items-center
            flex
            mb-3
            focus:outline-orange-500
        "
        tabindex="0"
        @keypress.enter.space="emit('update:modelValue', value)"
        :class="{ 'border-orange-500 text-orange-500': modelValue == value }"
    >
        <input
            type="radio"
            hidden
            :value="modelValue"
            :name="fieldName"
            @change="emit('update:modelValue', value)"
            :id="fieldName + 'RadioField-' + value"
        />
        <slot></slot>
    </label>
</template>

<script setup>
import { toRefs } from "vue";

const props = defineProps({
    name: { type: String, required: true },
    modelValue: {
        type: [Boolean, String, Number],
        required: true,
        default: null,
    },
    value: {
        type: [Boolean, String, Number],
        required: true,
    },
});
const { value, modelValue, name: fieldName } = toRefs(props);

const emit = defineEmits(["update:modelValue"]);
</script>