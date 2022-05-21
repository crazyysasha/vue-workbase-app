<script setup>
import usePosts from "@/composables/posts.js";
const { collection } = usePosts();
</script>
<template>
    <section v-for="post in collection"
        :key="post.id" class="bg-white pb-12">
        <!-- <div class="mx-auto container px-4">
            <nav class="flex py-12" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center">
                        <router-link to="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                            <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                            Главная
                        </router-link>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            <router-link to="/blog" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                Блог
                            </router-link>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        <span class="ml-1 text-sm font-medium text-gray-400 md:ml-2">{{ post.title }}</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <h2 class="text-2xl font-medium mb-10">{{ post.title }}</h2>
            <p class="mb-8">{{ post.description }}</p>
            <span class="italic">{{ post.date }}</span>
        </div> -->
        


            <article class="container px-4 2xl:px-20 mx-auto py-8">
                <img class="md:w-1/3 w-full rounded-2xl md:float-left mr-5" :src="post.img" alt="" />
                <h1 class="text-2xl font-bold">{{ post.title }}</h1>
                <h2 class="mt-2 text-sm text-gray-500">{{ post.date }}</h2>

                <p class="mt-6">
                    {{ post.description }}
                </p>
            </article>
            
    </section>
</template>