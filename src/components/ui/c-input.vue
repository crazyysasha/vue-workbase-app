<template>
    <label :for="fieldName + 'Field'">
        <slot></slot>
        <input
            :type="type"
            :value="modelValue"
            @input="emit('update:modelValue', $event.target.value)"
            :placeholder="placeholder"
            class="
                border
                rounded-sm
                focus:border-orange-500
                py-2
                px-4
                focus:outline-none
                w-full
            "
        />
    </label>
</template>
<script setup>
import { toRefs } from "vue";

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
});
const { value, modelValue, name: fieldName } = toRefs(props);

const emit = defineEmits(["update:modelValue"]);
</script>