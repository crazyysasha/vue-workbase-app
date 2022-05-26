
<script setup>
import CCard from "./c-card";
import useCategoriesApi from "@/composables/categories/collection";
import { onMounted } from "vue";
const { isLoaded, isLoading, categories, promise, onGetWhenNotLoaded } =
    useCategoriesApi();

onMounted(async () => {
    await onGetWhenNotLoaded({ with: ["image", "priority_services"], count: ["services"] });
});
</script>
<template>
    <section class="flex w-full items-center justify-center py-12" id="asd">
        <div class="container px-4 2xl:px-20 mx-auto">
            <div class="text-center sm:text-left pb-8">
                <h2 class="text-2xl md:text-3xl text-gray-900 font-medium">
                    Для Вашего удобства, мы собрали<span class="text-blue-800">
                        более 10 000 услуг</span
                    >
                    в одном удобном сервисе
                </h2>
            </div>
            <div
                class="
                    grid
                    md:grid-cols-1
                    lg:grid-cols-2
                    xl:grid-cols-4
                    2xl:grid-cols-4
                    gap-7
                    py-5
                "
                v-if="isLoading"
            >
                <div
                    v-for="index in 8"
                    :key="index"
                    class="p-4 bg-white animate-pulse rounded-lg"
                >
                    <div class="flex items-center justify-around mb-10">
                        <div class="w-12 h-12 rounded-full bg-gray-200"></div>
                        <div class="w-3/5 h-12">
                            <div
                                class="w-full h-4 bg-gray-200 rounded-lg mb-3"
                            ></div>
                            <div class="w-3/5 h-4 bg-gray-200 rounded-lg"></div>
                        </div>
                    </div>
                    <div>
                        <div
                            class="w-full h-4 mb-4 bg-gray-200 rounded-lg"
                        ></div>
                        <div
                            class="w-3/5 h-4 mb-4 bg-gray-200 rounded-lg"
                        ></div>
                        <div
                            class="w-4/5 h-4 mb-4 bg-gray-200 rounded-lg"
                        ></div>
                        <div
                            class="w-full h-4 mb-4 bg-gray-200 rounded-lg"
                        ></div>
                        <div
                            class="w-2/4 h-4 mb-4 bg-gray-200 rounded-lg"
                        ></div>
                        <div
                            class="w-3/4 h-4 mb-4 bg-gray-200 rounded-lg"
                        ></div>
                    </div>
                    <div class="border-t pt-4 border-dashed border-gray-400">
                        <div
                            class="w-4/5 h-4 mb-4 bg-gray-200 rounded-lg"
                        ></div>
                    </div>
                </div>
            </div>
            <div
                class="
                    grid
                    md:grid-cols-1
                    lg:grid-cols-2
                    xl:grid-cols-4
                    gap-5
                    py-5
                "
                v-if="!isLoading"
            >
                <c-card
                    v-for="category in categories"
                    :key="category.id"
                    :name="category.name"
                    :slug="category.slug"
                    :services="category.priority_services"
                    :count="category.services_count"
                    :iconPath="category.image?.path"
                ></c-card>
            </div>
        </div>
    </section>
</template>
