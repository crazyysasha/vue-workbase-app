
<script setup>
import useCategoryApi from "@/composables/categories/instance";
import useServicesApi from "@/composables/services";
import { useCreateOrderApi } from "@/composables/orders/instance&storage";
import debounce from "lodash.debounce";
import { onMounted, onUnmounted, ref, toRefs, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();

const router = useRouter();

const back = (e) => {
    router.back();
};
const props = defineProps({
    categorySlug: {},
    serviceSlugs: {},
});

const { categorySlug } = toRefs(props);

const { promise, category, isLoading, isLoaded, onGetWhenNotLoaded } =
    useCategoryApi();

onMounted(async () => {
    await onGetWhenNotLoaded(categorySlug.value);
});

const {
    isLoading: isLoadingServices,
    isLoaded: isLoadedServices,
    services,
    onGet: onGetServices,
    cancel: searchCancel,
    promise: servicesApiPromise,
    clear: clearServices,
} = useServicesApi();

const service = ref();
const search = ref("");

const onSelectItem = (item) => {
    service.value = item.slug;
    search.value = item.name;
};

watch(search, () => {
    const searched = services.value.find((s) => search.value == s.name);
    if (searched) {
        service.value = searched.slug;
    }
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

onUnmounted(() => {
    clearServices();
});

const { onCreate, isCreating, isCreated, draftedOrders, currentDraftedOrder } =
    useCreateOrderApi(categorySlug);
// console.log(
//     isCreating.value,
//     isCreated.value,
//     draftedOrders.value,
//     currentDraftedOrder
// );
const onSubmit = async (e) => {
    console.log([service.value]);
    router.push({
        name: "order.update",
        params: {
            categorySlug: categorySlug.value,
            serviceSlugs: [service.value],
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
                    :loading="!isLoadedServices"
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
            <p v-else-if="isLoaded && category.priority_services" class="mb-3">
                Например:
            </p>
            <div class="flex gap-4 flex-wrap min-h-[2.375rem]" v-if="isLoaded">
                <c-button
                    v-for="service in category?.priority_services || []"
                    class="rounded-full py-1 text-sm"
                    outlined
                    :loading="isLoading"
                    :key="service.id"
                    @click="onSelectItem(service)"
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