
<script setup>
import useCategoryApi from "@/composables/categories/instance";
import { defineAsyncComponent, onMounted, ref, toRefs } from "vue";
import { useRouter } from "vue-router";

const forms = {
    select: defineAsyncComponent(() =>
        import(
            /* webpackChunkName: "order-form-select" */ "@/components/order/forms/select-form.vue"
        )
    ),
    "work-place": defineAsyncComponent(() =>
        import(
            /* webpackChunkName: "order-form-work-place" */ "@/components/order/forms/work-place-form.vue"
        )
    ),
    address: defineAsyncComponent(() =>
        import(
            /* webpackChunkName: "order-form-address" */ "@/components/order/forms/address-form.vue"
        )
    ),
    "exit-locations": defineAsyncComponent(() =>
        import(
            /* webpackChunkName: "order-form-exit-locations" */ "@/components/order/forms/exit-locations-form.vue"
        )
    ),
    time: defineAsyncComponent(() =>
        import(
            /* webpackChunkName: "order-form-time" */ "@/components/order/forms/time-form.vue"
        )
    ),
    price: defineAsyncComponent(() =>
        import(
            /* webpackChunkName: "order-form-price" */ "@/components/order/forms/price-form.vue"
        )
    ),

    other: defineAsyncComponent(() =>
        import(
            /* webpackChunkName: "order-form-other" */ "@/components/order/forms/other-form.vue"
        )
    ),

    publish: defineAsyncComponent(() =>
        import(
            /* webpackChunkName: "order-form-publish" */ "@/components/order/forms/publish-form.vue"
        )
    ),
};

const onSubmit = (e) => {
    router.push("");
};

const router = useRouter();

const back = (e) => {
    router.back();
};
const props = defineProps({
    categorySlug: {},
    serviceSlugs: {},
    form: {},
});

const { categorySlug, serviceSlugs, form } = toRefs(props);

const services = ref([]);

const { promise, category, isLoading, isLoaded, onGetWhenNotLoaded } =
    useCategoryApi();

onMounted(async () => {
    await onGetWhenNotLoaded(categorySlug.value, {
        with: ["priority_services", "image"],
    });
});
</script>
<template>
    <component :is="forms[form]" :="props"> </component>
</template>