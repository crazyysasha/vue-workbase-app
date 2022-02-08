<template>
    <slot></slot>
</template>

<script>
// import TabContent from "./TabContent.vue";
export default {
    setup(props, { slots }) {
        slots.default().map((item) => {
            console.log(item.children)
        });
    },
};
</script>