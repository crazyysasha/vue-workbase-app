<template>
    <transition>
        <button
            class="
                select-none
                text-white
                rounded-md
                px-4
                py-2
                transition-all
                duration-200
                shadow-lg
                transform
                scale-100
            "
            :class="{
                'bg-primary': isPrimary,
                'hover:bg-primary/80': isPrimary,
                'disabled:bg-primary/50': isPrimary,
                'shadow-primary/25': isPrimary,
                'bg-orange-500': isSecondary,
                'hover:bg-orange-500/80': isSecondary,
                'disabled:bg-orange-500/50': isSecondary,
                'shadow-orange-500/25': isSecondary,
                'bg-red-500': isError,
                'hover:bg-red-500/80': isError,
                'disabled:bg-red-500/50': isError,
                'shadow-red-500/25': isError,
                'animate-pulse': isLoading,
                'active:scale-95': !isDisabled,
            }"
            :disabled="isDisabled"
        >
            <slot></slot>
        </button>
    </transition>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
    type: {
        type: String,
        required: false,
        validator(value) {
            return ["primary", "secondary", "error"].includes(value);
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
});

const isPrimary = computed(() => props.type == "primary");
const isSecondary = computed(() => props.type == "secondary");
const isError = computed(() => props.type == "error");

const isLoading = computed(() => props.loading);
const isDisabled = computed(() => props.disabled);
</script>
