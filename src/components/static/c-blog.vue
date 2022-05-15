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

      <div class="mb-10">
        <a class="mr-4 w-full mb-3 2select-none text-white rounded-md px-4 py-2 transition-all duration-200 shadow-lg transform scale-100 bg-orange-400 hover:bg-orange-400/80 disabled:bg-orange-400/50 shadow-orange-400/25 active:scale-95" href="#">Все категории</a>
        <a class="mr-4 w-full mb-3 2select-none text-white rounded-md px-4 py-2 transition-all duration-200 shadow-lg transform scale-100 bg-primary hover:bg-primary/80 disabled:bg-primary/50 shadow-primary/25 active:scale-95" href="#">Новости на рынке труда и услуг</a>
        <a class="mr-4 w-full mb-3 2select-none text-white rounded-md px-4 py-2 transition-all duration-200 shadow-lg transform scale-100 bg-primary hover:bg-primary/80 disabled:bg-primary/50 shadow-primary/25 active:scale-95" href="#">Лайфхаки и советы</a>
        <a class="mr-4 w-full mb-3 2select-none text-white rounded-md px-4 py-2 transition-all duration-200 shadow-lg transform scale-100 bg-primary hover:bg-primary/80 disabled:bg-primary/50 shadow-primary/25 active:scale-95" href="#">Истории успеха пользователей WorkBase</a>
      </div>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <router-link
          v-for="post in collection"
          :key="post.id"
          :to="`/post/${post.slug}`"
        >
            <div class="p-4">
              <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" :src="post.img" alt="blog">
                <div class="p-6">
                  <h1 class="text-xl font-bold tracking-tight text-black mb-3">{{ post.title }}</h1>
                  <p v-html="post.excerpt" class="leading-relaxed mb-3"></p>
                  <div class="flex items-center justify-between">
                    <div class="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 stroke-gray-500 fill-transporent"  fill="none"  viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span class="italic">05.05.2020 г.</span>
                    </div>
                    <div>
                      <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 stroke-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span class="italic">105</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </router-link>
        <!-- <router-link
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
            <h5 class="mb-2 text-xl leading-5 font-bold tracking-tight text-black">
               {{ post.title }}
            </h5>
            <p v-html="post.excerpt" class="mb-3 leading-5  text-md font-normal text-gray-700"></p>
          </div>
        </router-link> -->
      </div>
    </div>
  </section>
</template>