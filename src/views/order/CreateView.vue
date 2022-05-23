
<script setup>
import { defineAsyncComponent } from "vue";

const props = defineProps({
    categorySlug: {},
});

const searchFormComponent = defineAsyncComponent(() =>
    import(
        /* webpackChunkName: "order-form-search" */ "@/components/order/forms/search-form.vue"
    )
);
</script>
<template>
    <component :is="searchFormComponent" :="props"></component>
</template>