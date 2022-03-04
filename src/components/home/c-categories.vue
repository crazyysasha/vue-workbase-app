<template>
    <section class="flex w-full items-center justify-center py-12 " id="asd">
        <div class="container px-4">
            <div class="text-center sm:text-left pb-8">
                <h2 class="text-xl md:text-3xl text-gray-900 font-medium">
                    В <span class="text-blue-800">Ташкенте работает</span> 325
                    779 специалистов, 205 469 дистанционно
                </h2>
            </div>
            <div
                class="
                    grid
                    md:grid-cols-1
                    lg:grid-cols-2
                    xl:grid-cols-3
                    2xl:grid-cols-4
                    gap-7
                    py-5
                "
                v-if="loading"
            >
                <div
                    v-for="index in 10"
                    :key="index"
                    class="p-4 bg-white animate-pulse rounded-lg"
                ></div>
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
                v-if="!loading"
            >
                <c-card
                    v-for="category in data?.data"
                    :key="category.id"
                    :name="category.name"
                    :slug="category.slug"
                    :services="category.priority_services"
                    :iconPath="category.image?.path"
                ></c-card>
            </div>
        </div>
    </section>
</template>

<script setup>
import useCategories from "@/composables/categories";
import CCard from "./c-card";
import { useAxios } from "@vue-composable/axios";
import { watch, watchEffect } from "vue";
const { data, loading, exec } = useAxios();
exec({
    method: "GET",
    url: "http://api.workbase.uz/api/crazy/freelancer/v1.0.1/categories",
    params: { with: ["priority_services", "image"] },
});
watch(data, () => console.log(data));
</script>

<style>
</style>