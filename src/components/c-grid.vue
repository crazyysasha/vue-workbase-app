<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    setup(props, { attrs }) {
        const classes = ref(["grid"]);

        if ("cols" in attrs) {
            classes.value.push(`grid-cols-${attrs.cols}`);
        }

        if ('gap' in attrs) {
            classes.value.push(`gap-${attrs.gap}`);
        }

        return { classes };
    },
};
</script>

<style>
</style>