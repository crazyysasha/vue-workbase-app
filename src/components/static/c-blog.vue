<script setup>
import usePosts from "@/composables/posts.js";
const { collection } = usePosts();
</script>
<template>
  <section class="bg-white pb-12">
    <div class="mx-auto container px-4">
      <nav class="flex py-12" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
              <li class="inline-flex items-center">
                    <router-link to="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                      Главная
                  </router-link>
              </li>
              <li aria-current="page">
                  <div class="flex items-center">
                  <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  <span class="ml-1 text-sm font-medium text-gray-400 md:ml-2">Блог</span>
                  </div>
              </li>
          </ol>
      </nav>
      <h2 class="text-3xl font-bold mb-10">Блог</h2>

      <div class="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
        <router-link
          v-for="post in collection"
          :key="post.id"
          :to="`/post/${post.slug}`"
          class="
            flex flex-col
            items-center
            bg-white
            rounded-lg
            border
            shadow-md
            md:flex-row md:max-w-xl
            hover:bg-gray-100
          "
        >
          <img
            class="
              object-cover
              w-full
              h-96
              rounded-t-lg
              md:h-auto md:w-48 md:rounded-none md:rounded-l-lg
            "
            :src="post.img"
            alt=""
          />
          <div class="flex flex-col justify-between p-3 leading-normal">
            <h5 class="mb-2 text-xl leading-5 font-bold tracking-tight text-gray-900">
               {{ post.title }}
            </h5>
            <p v-html="post.excerpt" class="mb-3 leading-5  text-md font-normal text-gray-700"></p>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>