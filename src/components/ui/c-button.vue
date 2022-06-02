
<script setup>
import { computed } from "vue";

const props = defineProps({
    scheme: {
        type: String,
        required: false,
        validator(value) {
            return ["primary", "secondary", "danger", "gray"].includes(value);
        },
        default() {
            return "primary";
        },
    },
    loading: {
        type: Boolean,
        required: false,
        default() {
            return false;
        },
    },
    disabled: {
        type: Boolean,
        required: false,
        default() {
            return false;
        },
    },
    outlined: {
        type: Boolean,
        required: false,
        default() {
            return false;
        },
    },
});

const isPrimary = computed(() => props.scheme == "primary");
const isSecondary = computed(() => props.scheme == "secondary");
const isGray = computed(() => props.scheme == "gray");
const isDanger = computed(() => props.scheme == "danger");
const isOutlined = computed(() => props.outlined);
const isLoading = computed(() => props.loading);
const isDisabled = computed(() => props.disabled);
</script>
<template>
    <button
        class="
            select-none
            rounded-md
            px-4
            py-2
            transition-all
            duration-200
            shadow-md
            transform
            scale-100
            focus:ring-4
            focus:outline-none
            disabled:cursor-not-allowed
        "
        :class="{
            'bg-primary text-white': isPrimary && !isOutlined,
            'focus:ring-primary/50': isPrimary && !isOutlined,
            'hover:bg-primary/80': isPrimary && !isOutlined,
            'disabled:bg-primary/50': isPrimary && !isOutlined,
            'shadow-primary/25': isPrimary && !isOutlined,
            'border border-primary text-primary': isPrimary && isOutlined,
            'hover:bg-primary hover:text-white':
                isPrimary && isOutlined && !isDisabled,
            'disabled:border-primary/50 disabled:text-primary/50':
                isPrimary && isOutlined,
            'shadow-primary/25': isPrimary && isOutlined,
            'bg-orange-500 text-white': isSecondary,
            'focus:ring-orange-500/50': isSecondary,
            'hover:bg-orange-500/80': isSecondary,
            'disabled:bg-orange-500/50': isSecondary,
            'shadow-orange-500/25': isSecondary,
            'bg-red-500 text-white': isDanger,
            'hover:bg-red-500/80': isDanger,
            'disabled:bg-red-500/50': isDanger,
            'shadow-red-500/25': isDanger,
            'bg-gray-300': isGray,
            'hover:bg-gray-300/80': isGray,
            'disabled:bg-gray-300/50': isGray,
            'shadow-gray-300/25': isGray,
            'animate-pulse': isLoading,
            'active:scale-95': !isDisabled,
            
        }"
        :disabled="isDisabled"
        :loading="isLoading"
    >
        <slot></slot>
    </button>
</template>