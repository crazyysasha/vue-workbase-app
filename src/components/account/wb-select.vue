<template>
    <div class="flex flex-col group transition-all duration-200 mb-2 text-base">
        <label
            class="text-primary inline-block bg-transparent align-middle px-1"
        >
            {{ label }}
        </label>
        <select
            class="
                p-1
                rounded-md
                border border-orange-500 border-opacity-25
                group-hover:border-opacity-70
                focus:!border-opacity-100 focus:outline-none
                disabled:bg-transparent
            "
            :class="{
                '!border-opacity-0': disabled,
                'text-primary/0': loading,
                '!bg-primary/10': loading,
                'animate-pulse': loading,
                '!bg-primary/10': saving,
                'animate-pulse': saving,
            }"
            :value="modelValue"
            :disabled="disabled"
            @change="onChange"
        >
            <slot></slot>
        </select>
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    modelValue: {
        type: [String, Number, null],
        required: true,
    },
    disabled: {
        type: Boolean,
        required: false,
        default() {
            return false;
        },
    },
    loading: {
        type: Boolean,
        required: false,
        default() {
            return false;
        },
    },
    label: {
        type: String,
        required: false,
    },

    saving: {
        type: Boolean,
        default() {
            return false;
        },
    },
});

const emit = defineEmits(["update:modelValue"]);

const onChange = ({ target: { value } }) => {
    emit("update:modelValue", value);
};
</script>
<style scoped>
select:disabled {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
</style>
