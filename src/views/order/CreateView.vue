
<script setup>
import useCategoryApi from "@/composables/categories/instance";
import useServicesApi from "@/composables/services";
import { useCreateOrderApi } from "@/composables/orders/instance&storage";
import debounce from "lodash.debounce";
import { onMounted, ref, toRefs, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();

const router = useRouter();

const back = (e) => {
    console.log(e);
};
const props = defineProps({
    categorySlug: {},
    serviceSlugs: {},
});
const { categorySlug } = toRefs(props);

const { promise, category, isLoading, isLoaded, onGetWhenNotLoaded } =
    useCategoryApi();

onMounted(async () => {
    await onGetWhenNotLoaded(categorySlug?.value);
});

const {
    isLoading: isLoadingServices,
    isLoaded: isLoadedServices,
    services,
    onGet: onGetServices,
    cancel: searchCancel,
    promise: servicesApiPromise,
} = useServicesApi();

const service = ref();
const search = ref("");

const onSelectItem = (item) => {
    service.value = item.id;
    search.value = item.name;
};

watch(search, () => {
    service.value = null;
    debounce(() => {
        if (isLoadingServices.value) {
            searchCancel();
        }
        onGetServices({
            category: category.id,
            with: [],
            search: search.value,
        });
    }, 200)();
});

const { onCreate, isCreating, isCreated, draftedOrders, currentDraftedOrder } =
    useCreateOrderApi(categorySlug);
console.log(
    isCreating.value,
    isCreated.value,
    draftedOrders.value,
    currentDraftedOrder
);
const onSubmit = async (e) => {
    router.push({
        name: "order.update",
        params: {
            categorySlug: "repetitory",
            serviceSlugs: ["angliyskiy-yazik"],
            form: "service",
        },
    });
};
</script>
<template>
    <form
        class="
            flex flex-col
            relative
            w-full
            min-h-full
            rounded-lg
            bg-white
            shadow shadow-primary/25
            overflow-clip
        "
        @submit.prevent="onSubmit"
    >
        <div class="p-4 pb-16 mb-auto min-h-[20rem]">
            <div class="pt-1.5 pb-0.5" v-if="isLoading">
                <div
                    class="h-6 w-96 bg-primary/10 rounded-lg animate-pulse"
                ></div>
            </div>
            <h1 class="text-2xl text-primary" v-else>
                {{
                    category.id == 1
                        ? "По какому предмету нужен репетитор?"
                        : "Что нужно сделать?"
                }}
            </h1>
            <div v-if="isLoading" class="pt-1.5 pb-0.5 mb-3">
                <div
                    class="h-4 w-64 bg-primary/10 rounded-md animate-pulse"
                ></div>
            </div>
            <p class="mb-3 text-orange-500" v-else>{{ category.name }}</p>
            <div class="mb-10 mt-4">
                <c-search
                    class="w-full sm:w-2/3"
                    :class="{ 'animate-pulse': isLoading }"
                    :disabled="isLoading"
                    :placeholder="isLoading ? '' : 'Услуга или специалист'"
                    v-model="search"
                    :items="services"
                    @on-select-item="onSelectItem"
                >
                </c-search>
            </div>
            <div v-if="isLoading" class="pt-1.5 pb-0.5 mb-3">
                <div
                    class="h-4 w-20 bg-primary/10 rounded-md animate-pulse"
                ></div>
            </div>
            <p v-else class="mb-3">Например:</p>
            <div class="flex gap-4 flex-wrap min-h-[2.375rem]">
                <c-button
                    v-for="service in category.priority_services"
                    class="rounded-full py-1 text-sm"
                    outlined
                    :loading="isLoading"
                    :key="service.id"
                >
                    {{ service.name }}
                </c-button>
            </div>
        </div>
        <div class="p-4 sticky bottom-0 bg-white flex justify-between">
            <c-button
                scheme="secondary"
                type="button"
                @click="back"
                :loading="isLoading"
            >
                отмена
            </c-button>
            <c-button :loading="isLoading">Продолжить</c-button>
        </div>
    </form>
</template>