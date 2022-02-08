<template>
    <label
        :for="fieldName + 'RadioField-' + value"
        class="
            cursor-pointer
            select-none
            border
            p-2
            text-center
            transition-all
            duration-200
        "
        :class="{ 'border-orange-500': modelValue == value }"
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