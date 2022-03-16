<template>
    <button
        class="
            text-white
            rounded-md
            px-4
            py-2
            transition
            duration-200
            shadow-lg
        "
        :class="{
            'bg-primary hover:bg-primary/80 disabled:bg-primary/50 shadow-primary/25':
                $props.type == 'primary',
            'bg-orange-500 hover:bg-orange-500/80 disabled:bg-orange-500/50 shadow-orange-500/25':
                $props.type == 'secondary',
        }"
    >
        <slot></slot>
    </button>
</template>
<script setup>
defineProps({
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
</script>
