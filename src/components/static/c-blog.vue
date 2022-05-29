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
        <h2 class="text-3xl font-bold">Наш блог</h2>
        <div class="mt-10 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
            <div class="relative group cursor-pointer bg-white transition hover:z-[1] hover:shadow-2xl">
                <div class="relative p-4 space-y-8">
                    <div class="space-y-2">
                        <h5 class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Новости на рынке труда и услуг</h5>
                        <!-- <p class="text-sm text-gray-600">Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.</p> -->
                    </div>
                    <a href="#" class="flex justify-between items-center group-hover:text-yellow-600">
                        <span class="text-sm">Показать</span>
                        <span class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&RightArrow;</span>
                    </a>
                </div>
            </div>
            <div class="relative group cursor-pointer bg-white transition hover:z-[1] hover:shadow-2xl">
                <div class="relative p-4 space-y-8">
                    <div class="space-y-2">
                        <h5 class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Лайфхаки и <br> советы</h5>
                        <!-- <p class="text-sm text-gray-600">Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.</p> -->
                    </div>
                    <a href="#" class="flex justify-between items-center group-hover:text-yellow-600">
                        <span class="text-sm">Показать</span>
                        <span class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&RightArrow;</span>
                    </a>
                </div>
            </div>
            <div class="relative group cursor-pointer bg-white transition hover:z-[1] hover:shadow-2xl">
                <div class="relative p-4 space-y-8">
                    <div class="space-y-2">
                        <h5 class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Истории успеха пользователей WorkBase</h5>
                        <!-- <p class="text-sm text-gray-600">Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.</p> -->
                    </div>
                    <a href="#" class="flex justify-between items-center group-hover:text-yellow-600">
                        <span class="text-sm">Показать</span>
                        <span class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&RightArrow;</span>
                    </a>
                </div>
            </div>
            <div class="relative group cursor-pointer bg-white transition hover:z-[1] hover:shadow-2xl">
                <div class="relative p-4 space-y-8">
                    <div class="space-y-2">
                        <h5 class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Рекомендации по использованию сайта</h5>
                        <!-- <p class="text-sm text-gray-600">Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.</p> -->
                    </div>
                    <a href="#" class="flex justify-between items-center group-hover:text-yellow-600">
                        <span class="text-sm">Показать</span>
                        <span class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&RightArrow;</span>
                    </a>
                </div>
            </div>
        </div> 
        <div class="container mx-auto flex flex-wrap py-6">

            <!-- Posts Section -->
            <section class="w-full md:w-2/3 flex flex-col items-center px-3">

                <article class="flex flex-col shadow my-4">
                    <!-- Article Image -->
                    <a href="#" class="hover:opacity-75">
                        <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1">
                    </a>
                    <div class="bg-white flex flex-col justify-start p-6">
                        <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">Technology</a>
                        <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                        <p href="#" class="text-sm pb-3">
                            By <a href="#" class="font-semibold hover:text-gray-800">David Grzyb</a>, Published on April 25th, 2020
                        </p>
                        <a href="#" class="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                        <a href="#" class="uppercase text-gray-800 hover:text-black">Continue Reading <i class="fas fa-arrow-right"></i></a>
                    </div>
                </article>

                <article class="flex flex-col shadow my-4">
                    <!-- Article Image -->
                    <a href="#" class="hover:opacity-75">
                        <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=2">
                    </a>
                    <div class="bg-white flex flex-col justify-start p-6">
                        <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">Automotive, Finance</a>
                        <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                        <p href="#" class="text-sm pb-3">
                            By <a href="#" class="font-semibold hover:text-gray-800">David Grzyb</a>, Published on January 12th, 2020
                        </p>
                        <a href="#" class="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                        <a href="#" class="uppercase text-gray-800 hover:text-black">Continue Reading <i class="fas fa-arrow-right"></i></a>
                    </div>
                </article>

                <article class="flex flex-col shadow my-4">
                    <!-- Article Image -->
                    <a href="#" class="hover:opacity-75">
                        <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=3">
                    </a>
                    <div class="bg-white flex flex-col justify-start p-6">
                        <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">Sports</a>
                        <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a>
                        <p href="#" class="text-sm pb-3">
                            By <a href="#" class="font-semibold hover:text-gray-800">David Grzyb</a>, Published on October 22nd, 2019
                        </p>
                        <a href="#" class="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                        <a href="#" class="uppercase text-gray-800 hover:text-black">Continue Reading <i class="fas fa-arrow-right"></i></a>
                    </div>
                </article>

                <!-- Pagination -->
                <div class="flex items-center py-8">
                    <a href="#" class="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">1</a>
                    <a href="#" class="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">2</a>
                    <a href="#" class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">
                    Далее
                    </a>
                </div>

            </section>

            <!-- Sidebar Section -->
            <aside class="w-full md:w-1/3 flex flex-col items-center px-3">

                <div class="w-full bg-white shadow flex flex-col my-4 p-6">
                    <p class="text-xl font-semibold pb-5">О нас</p>
                    <p class="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
    
                    <router-link
                        to="/about"
                        class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
                    >
                        Подробнее
                    </router-link>
                </div>

                <div class="w-full bg-white shadow flex flex-col my-4 p-6">
                    <p class="text-xl font-semibold pb-5">Instagram</p>
                    <div class="grid grid-cols-3 gap-3">
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=1">
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=2">
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=3">
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=4">
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=5">
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=6">
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=7">
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=8">
                        <img class="hover:opacity-75" src="https://source.unsplash.com/collection/1346951/150x150?sig=9">
                    </div>
                    <a target="_blank" href="https://www.instagram.com/workbase.uz/" class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
                        <img
                            class="
                                transition-all
                                duration-500
                                transform
                                hover:scale-110
                                mr-3
                            "
                            src="@/assets/images/instagram.svg"
                            alt=""
                        />
                        workbase.uz
                    </a>
                </div>

            </aside>

        </div>
    </div>
  </section>
</template>