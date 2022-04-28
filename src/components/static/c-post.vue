<script setup>
import usePosts from "@/composables/posts.js";
const { collection } = usePosts();
</script>
<template>
    <section class="bg-white py-12">
        <div 
        v-for="post in collection"
        :key="post.id"
        class="mx-auto container px-4">
            <h2 class="text-2xl font-medium mb-10">{{ post.title }}</h2>
            <p class="mb-8">{{ post.description }}</p>
            <span class="italic">{{ post.date }}</span>
        </div>
    </section>
</template>