<script setup>
import usePosts from "@/composables/posts.js";
const { collection } = usePosts();
</script>
<template>
  <section class="bg-white py-12">
    <div class="mx-auto container px-4">
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