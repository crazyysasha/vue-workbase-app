<script setup>
import useCategoryApi from "@/composables/categories/instance";
import { useUpdateOrderApi } from "@/composables/orders/instance&storage";
import { ref, toRefs } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import BaseForm from "./base-form.vue";
const props = defineProps({
    categorySlug: {},
    serviceSlugs: {},
});

const { categorySlug, serviceSlugs } = toRefs(props);

const router = useRouter();

const {
    category,
    onGetWhenNotLoaded: onGetCategoryWhenNotLoaded,
    isLoading: categoryIsLoading,
} = useCategoryApi();

onMounted(async () => {
    await onGetCategoryWhenNotLoaded(categorySlug.value);
});

const back = () => {
    router.back();
};

const {
    currentDraftedOrder,
    isUpdating: orderIsUpdating,
    onUpdate: onUpdateOrder,
} = useUpdateOrderApi(categorySlug.value);

const price = ref(currentDraftedOrder.value?.price || "");
const minPrice = ref(currentDraftedOrder.value?.price_min || "");
const maxPrice = ref(currentDraftedOrder.value?.price_max || "");
const isRangedPrice = ref(currentDraftedOrder.value?.is_ranged_price || false);

const onSubmit = async (e) => {
    await onUpdateOrder({
        price: price.value,
        price_min: minPrice.value,
        price_max: maxPrice.value,
        is_ranged_price: isRangedPrice.value,
    });
    router.push({
        name: "order.update",
        params: {
            categorySlug: categorySlug.value,
            serviceSlugs: serviceSlugs.value,
            form: "other",
        },
    });
};
</script>
<template>
    <BaseForm @on-submit="onSubmit">
        <template #header>
            <div class="pt-1.5 pb-0.5" v-if="categoryIsLoading">
                <div
                    class="h-6 w-96 bg-primary/10 rounded-lg animate-pulse"
                ></div>
            </div>
            <h1 class="text-2xl text-primary" v-else>Укажите цену за услугу</h1>
            <div v-if="categoryIsLoading" class="pt-1.5 pb-0.5">
                <div
                    class="h-4 w-64 bg-primary/10 rounded-md animate-pulse"
                ></div>
            </div>
            <p class="text-orange-500">{{ category.name }}</p>
        </template>
        <div
            class="
                grid
                gap-4
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-1
                lg:grid-cols-2
            "
        >
            <div class="" v-if="!isRangedPrice">
                <label for="priceField" class="mb-2 inline-block">
                    Цена за работу:
                </label>
                <label
                    class="
                        rounded-md
                        bg-primary/10
                        border border-primary/10
                        hover:border-primary/50
                        focus-within:!border-primary focus-within:outline-none
                        overflow-hidden
                        flex
                    "
                >
                    <div class="py-1.5 px-2">От:</div>
                    <input
                        id="priceField"
                        type="number"
                        v-model="price"
                        class="
                            block
                            w-full
                            pr-2
                            py-1.5
                            bg-transparent
                            focus:outline-none
                        "
                        min="1000"
                        placeholder="0"
                    />
                </label>
            </div>
            <div class="" v-if="isRangedPrice">
                <label for="minPriceField" class="mb-2 inline-block">
                    Минимальная цена за работу:
                </label>
                <label
                    class="
                        rounded-md
                        bg-primary/10
                        border border-primary/10
                        hover:border-primary/50
                        focus-within:!border-primary focus-within:outline-none
                        overflow-hidden
                        flex
                    "
                    for="minPriceField"
                >
                    <div class="py-1.5 px-2">От:</div>
                    <input
                        id="minPriceField"
                        type="number"
                        v-model="minPrice"
                        class="
                            block
                            w-full
                            pr-2
                            py-1.5
                            bg-transparent
                            focus:outline-none
                        "
                        min="1000"
                        placeholder="1000"
                    />
                </label>
            </div>
            <div class="" v-if="isRangedPrice">
                <label for="maxPriceField" class="mb-2 inline-block">
                    Максимальная цена за работу:
                </label>
                <label
                    class="
                        rounded-md
                        bg-primary/10
                        border border-primary/10
                        hover:border-primary/50
                        focus-within:!border-primary focus-within:outline-none
                        overflow-hidden
                        flex
                    "
                    for="maxPriceField"
                >
                    <div class="py-1.5 px-2">До:</div>
                    <input
                        id="maxPriceField"
                        type="number"
                        v-model="maxPrice"
                        class="
                            block
                            w-full
                            pr-2
                            py-1.5
                            bg-transparent
                            focus:outline-none
                        "
                        min="1000"
                        placeholder="1000"
                    />
                </label>
            </div>
            <div class="col-span-2">
                <label for="isRangedPriceField">
                    <input
                        type="checkbox"
                        id="isRangedPriceField"
                        v-model="isRangedPrice"
                    />
                    Указать диапазон
                </label>
            </div>
        </div>
        <template #footer>
            <c-button scheme="secondary" type="button" @click="back">
                Назад
            </c-button>
            <c-button> Продолжить </c-button>
        </template>
    </BaseForm>
</template>

