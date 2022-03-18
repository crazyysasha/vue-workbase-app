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
                active:scale-95
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
            }"
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
            return ["primary", "secondary"].includes(value);
        },
        default() {
            return "primary";
        },
    },
});

const isPrimary = computed(() => props.type == "primary");
const isSecondary = computed(() => props.type == "secondary");
</script>
