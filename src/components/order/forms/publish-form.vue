<script setup>
import useCategoryApi from "@/composables/categories/instance";
import { onMounted, toRefs } from "@vue/runtime-core";
import BaseForm from "./base-form.vue";
const props = defineProps({
    categorySlug: {},
    serviceSlugs: {},
});
const { categorySlug, serviceSlugs } = toRefs(props);
const {
    onGetWhenNotLoaded: onGetCategoryWhenNotLoaded,
    isLoading: categoryIsLoading,
    category,
} = useCategoryApi();
onMounted(async () => {
    await onGetCategoryWhenNotLoaded(categorySlug.value);
});

const onSubmit = () => {};
</script>
<template>
    <BaseForm>
        <template #header>
            <div class="pt-1.5 pb-0.5" v-if="categoryIsLoading">
                <div
                    class="h-6 w-96 bg-primary/10 rounded-lg animate-pulse"
                ></div>
            </div>
            <h1 class="text-2xl text-primary" v-else>
                Последний шаг, от выполненной задачи
            </h1>
            <div v-if="categoryIsLoading" class="pt-1.5 pb-0.5">
                <div
                    class="h-4 w-64 bg-primary/10 rounded-md animate-pulse"
                ></div>
            </div>
            <p class="text-orange-500">{{ category.name }}</p>
        </template>
        <div></div>
        <template #footer>
            <c-button scheme="secondary" type="button" @click="back">
                Назад
            </c-button>
            <c-button> Продолжить </c-button>
        </template>
    </BaseForm>
</template>

