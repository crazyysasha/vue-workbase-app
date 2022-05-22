<template>
    <section
        class="section-banner relative flex w-full items-center justify-center h-[calc(70vh-76px)] sm:h-[calc(85vh-76px)]"
    >
        <div
            class="bg-black bg-opacity-40 h-full w-full absolute block z-10"
        ></div>
        <div class="w-full absolute h-full block -z-0">
            <video
                class="object-cover object-center h-full w-full"
                src="@/assets/temp/videobg.webm"
                autoplay
                allowfullscreen
                muted
                loop
            ></video>
        </div>
        <div class="container px-4 z-10 2xl:px-20 mx-auto">
            <h1 class="md:text-5xl text-3xl font-semibold text-white leading-3">
                {{ $t("home.title") }}
            </h1>
            <p class="text-md md:text-2xl font-normal md:my-10 my-5 text-white">
                Вы ищете? Мы находим!
            </p>
            <search-widget class="md:w-2/3 z-20"></search-widget>
            <ul class="flex flex-wrap mt-10 text-white text-xl">
                <li class="mr-5 my-2 md:text-xl text-sm">
                    <a
                        class="
                            border-b border-white
                            hover:border-transparent
                            transition-all
                            duration-500
                        "
                        href="#"
                        ># Уборка</a
                    >
                </li>
                <li class="mr-5 my-2 md:text-xl text-sm">
                    <a
                        class="
                            border-b border-white
                            hover:border-transparent
                            transition-all
                            duration-500
                        "
                        href="#"
                        ># IELTS</a
                    >
                </li>
                <li class="mr-5 my-2 md:text-xl text-sm">
                    <a
                        class="
                            border-b border-white
                            hover:border-transparent
                            transition-all
                            duration-500
                        "
                        href="#"
                        ># Электрика</a
                    >
                </li>
                <li class="mr-5 my-2 md:text-xl text-sm">
                    <a
                        class="
                            border-b border-white
                            hover:border-transparent
                            transition-all
                            duration-500
                        "
                        href="#"
                        ># Юристы</a
                    >
                </li>
            </ul>
        </div>
    </section>
</template>
<script setup>
import SearchWidget from "@/components/widgets/search-widget.vue";
</script>
