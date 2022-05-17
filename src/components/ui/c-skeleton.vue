<script setup>
import { computed, h, renderSlot, useSlots } from "@vue/runtime-core";

const props = defineProps({
    loading: {
        type: Boolean,
        required: false,
        default() {
            return false;
        },
    },
    type: {
        type: String,
        required: false,
        default() {
            return "text";
        },
        validator(value) {
            return ["text"].includes(value);
        },
    },
});
const isLoading = computed(() => props.loading);
const isText = computed(() => props.type == "text");
const slots = useSlots();
console.log((h("div", slots.default())));
</script>
<template>
    <div>
        <div
            v-if="isLoading"
            :class="{
                'pt-1.5 pb-0.5': isText,
            }"
        >
            <div class="h-6 w-96 bg-primary/10 rounded-lg animate-pulse"></div>
        </div>
        <div v-else>
            <slot></slot>
        </div>
    </div>
</template>