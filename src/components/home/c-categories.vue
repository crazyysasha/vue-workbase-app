<template>
    <section class="flex w-full items-center justify-center pt-12" id="asd">
        <div class="container">
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
                v-if="isLoading"
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
                    xl:grid-cols-3
                    2xl:grid-cols-4
                    gap-7
                    py-5
                "
                v-if="!isLoading"
            >
                <c-card
                    v-for="category in categories"
                    :key="category.id"
                    :name="category.name"
                    :slug="category.slug"
                    :services="category.services.slice(0, 5)"
                    :iconPath="category.image?.path"
                ></c-card>
            </div>
        </div>
    </section>
</template>

<script setup>
import useCategories from "@/composables/categories";
import CCard from "./c-card";

const { categories, getAll, isLoading } = useCategories();

getAll({ with: ["services", "image"] });
</script>

<style>
</style>