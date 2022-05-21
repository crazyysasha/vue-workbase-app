<script setup>
import { useCategories } from "@/composables/categories";
import { onMounted } from "vue";
const { isLoaded, isLoading, exec, categories, promise } = useCategories();
</script>
<template>
    <section>
        <div class="container mx-auto gap-4 py-4 grid md:grid-cols-7">
        <div class="md:col-span-2">
            <div  class="rounded-lg bg-white shadow shadow-primary/25 p-4">
                <ul >
                    <li 
                    v-for="category in categories" 
                    :key="category.id"
                    :name="category.name"
                    :slug="category.slug"
                    :services="category.priority_services"
                    :iconPath="category.image?.path">
                        <router-link :to="`/${props.slug}`">
                            {{ props.name }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="md:col-span-5">
            
        </div>
        
    </div>
    </section>
</template>