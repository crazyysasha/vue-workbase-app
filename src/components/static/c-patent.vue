<script setup>
import { Fancybox, Panzoom } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
</script>
<style scoped>

</style>
<template>
    <section class="bg-white pb-12 ">
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
                        <span class="ml-1 text-sm font-medium text-gray-400 md:ml-2">Патент</span>
                        </div>
                    </li>
                </ol>
            </nav>
            <h2 class="text-3xl font-bold mb-6">Патент</h2>
            <p class="mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste accusantium voluptates maiores reiciendis quaerat aut, sequi nisi. Iste eaque distinctio dolores tempore quis exercitationem impedit aliquid atque. Doloribus corrupti modi distinctio ea eos blanditiis hic ullam suscipit voluptatem consequuntur voluptates incidunt quo laboriosam, nemo laudantium. Laborum aspernatur quasi incidunt unde sequi accusamus ex. Facere unde omnis tenetur enim quia voluptatum illum ab molestiae temporibus aspernatur voluptatibus odio esse est, repudiandae dicta hic recusandae. Provident eligendi sequi aspernatur possimus, ex quae, impedit molestiae earum in accusamus iusto magni eius dolores at!</p>
            <div class="flex flex-wrap ">
                <div class="mb-10 md:w-5/12 w-full border-1 rounded-lg shadow-lg mx-5">
                    <a href="http://api.workbase.uz/storage/app/media/%D0%9F%D0%B0%D1%82%D0%B5%D0%BD%D1%82/3.jpg" data-fancybox>
                       <img src="http://api.workbase.uz/storage/app/media/%D0%9F%D0%B0%D1%82%D0%B5%D0%BD%D1%82/3.jpg" alt="">
                    </a>
                </div>
                <div class="mb-10 md:w-5/12 w-full border-1 rounded-lg shadow-lg mx-5">
                    <a href="http://api.workbase.uz/storage/app/media/%D0%9F%D0%B0%D1%82%D0%B5%D0%BD%D1%82/2.jpg" data-fancybox>
                       <img src="http://api.workbase.uz/storage/app/media/%D0%9F%D0%B0%D1%82%D0%B5%D0%BD%D1%82/2.jpg" alt="">
                    </a>
                </div>
                <div class="mb-10 md:w-5/12 w-full border-1 rounded-lg shadow-lg mx-5">
                    <a href="http://api.workbase.uz/storage/app/media/%D0%9F%D0%B0%D1%82%D0%B5%D0%BD%D1%82/1.jpg" data-fancybox>
                       <img src="http://api.workbase.uz/storage/app/media/%D0%9F%D0%B0%D1%82%D0%B5%D0%BD%D1%82/1.jpg" alt="">
                    </a>
                </div>
               <div class="mb-10 md:w-5/12 w-full border-1 rounded-lg shadow-lg mx-5">
                    <a href="http://api.workbase.uz/storage/app/media/%D0%9F%D0%B0%D1%82%D0%B5%D0%BD%D1%82/4.jpg" data-fancybox>
                       <img src="http://api.workbase.uz/storage/app/media/%D0%9F%D0%B0%D1%82%D0%B5%D0%BD%D1%82/4.jpg" alt="">
                    </a>
                </div>
            </div>

        </div>
    </section>
</template>
