<template>
    <section
        class="section-banner relative flex w-full items-center justify-center"
    >
        <div
            class="bg-black bg-opacity-40 h-full w-full z-10 absolute block"
        ></div>
        <div class="w-full absolute h-full block">
            <video
                class="object-cover object-center h-full w-full"
                src="../assets/temp/videobg.webm"
                autoplay
                allowfullscreen
                muted
                loop
            ></video>
        </div>
        <div class="container z-30 px-4 sm:px-0">
            <h1 class="md:text-5xl text-3xl font-semibold text-white leading-3">
                Работа в Узбекистане
            </h1>
            <p class="text-md md:text-2xl font-normal md:my-10 my-5 text-white">
                Вы ищите, мы находим
            </p>
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
                        ># русский онлайн</a
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
                        ># Ielts</a
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
                        ># создать сайт</a
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
                        ># матыё ковров</a
                    >
                </li>
            </ul>
        </div>
    </section>
    <c-categories></c-categories>
    <section class="bg-gray-50 py-5">
        <div
            class="
                container px-4 sm:px-0
                md:flex
                items-center
                justify-between
                md:px-4
                2xl:px-20
                mx-auto
            "
        >
            <div class="">
                <h2
                    class="text-xl text-center md:text-left md:text-3xl font-medium pb-4 md:pb-8"
                >
                    Для максимального <br />
                    удобства, скачайте <br />
                    бесплатное
                    <span class="text-blue-800"
                        >мобильное <br />
                        приложение.</span
                    >
                </h2>
                <div class="flex justify-center md:justify-start">
                    <a
                        class="
                            mr-4
                            transition-all
                            duration-500
                            transform
                            hover:scale-110
                        "
                        href="#"
                        ><img class="w-30 h-10" src="../assets/temp/apple.png" alt=""
                    /></a>
                    <a
                        class="
                            transition-all
                            duration-500
                            transform
                            hover:scale-110
                        "
                        href="#"
                        ><img class="w-30 h-10" src="../assets/temp/android.png" alt=""
                    /></a>
                </div>
            </div>
            <div class="relative mx-auto w-5/12 mt-5 lg:my-0">
                <!-- <div class="swiper mySwiper w-full">
                    <div class="swiper-wrapper mx-auto">
                        <div class="swiper-slide"><img src="" alt="" /></div>
                        <div class="swiper-slide"><img src="" alt="" /></div>
                        <div class="swiper-slide"><img src="" alt="" /></div>
                    </div>
                </div> -->
                <swiper
                    :modules="modules"
                    :slides-per-view="1"
                    :space-between="0"
                    :loop="1"
                    :effect="'fade'"
                    :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                    }"
                    @swiper="onSwiper2"
                    @slideChange="onSlideChange"
                >
                    <swiper-slide>
                        <img src="../assets/temp/sw-1.png" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/temp/sw-2.png" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/temp/sw-3.png" alt="" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
    <footer class="bg-gray-700 py-6 flex w-full items-center justify-center">
        <div class="container">
            <!-- <div class="flex flex-col md:flex-row items-center text-center md:text-left md:justify-between border-b border-2-gray-200 pb-6">
                <h3 class="text-gray-200 text-sm ms:text-md md:text-lg lg:text-xl font-semibold">
                    Скачайте наше бесплатное приложение на смартфон!
                </h3>
                <div class="md:flex first:mr-5"  >
                    <a href="{{ this.theme.Android }}" class="mr-2">
                        <img class="" src="{{'assets/images/app.png' | theme}}" alt="">
                    </a>
                    <a href="{{ this.theme.Ios }}" class="">
                        <img class="" src="{{'assets/images/play.png' | theme}}" alt="">
                    </a>
                </div>
            </div> -->
            <div
                class="
                    md:grid md:grid-cols-3
                    text-sm
                    md:text-lg
                    font-medium
                    text-center
                    md:text-left
                    text-gray-200
                    pb-5
                "
            >
                <div class="">
                    <ul>
                        <li
                            class="
                                my-3
                                text-xs
                                sm:text-sm
                                md:text-md
                                lg:text-lg
                            "
                        >
                            <a class="hover:text-blue-300" href="#"
                                >Специалистам</a
                            >
                        </li>
                        <li
                            class="
                                my-3
                                text-xs
                                sm:text-sm
                                md:text-md
                                lg:text-lg
                            "
                        >
                            <a class="hover:text-blue-300" href="#"
                                >Стать специалистом</a
                            >
                        </li>
                    </ul>
                </div>
                <div class="">
                    <ul>
                        <li
                            class="
                                my-3
                                text-xs
                                sm:text-sm
                                md:text-md
                                lg:text-lg
                            "
                        >
                            <a class="hover:text-blue-300" href="#">
                                Заказчикам
                            </a>
                        </li>
                        <li
                            class="
                                my-3
                                text-xs
                                sm:text-sm
                                md:text-md
                                lg:text-lg
                            "
                        >
                            <a class="hover:text-blue-300" href="#">
                                Создать заявк
                            </a>
                        </li>
                        <li
                            class="
                                my-3
                                text-xs
                                sm:text-sm
                                md:text-md
                                lg:text-lg
                            "
                        >
                            <a class="hover:text-blue-300" href="#">
                                Инструкция по оплате
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="">
                    <ul>
                        <li
                            class="
                                my-3
                                text-xs
                                sm:text-sm
                                md:text-md
                                lg:text-lg
                            "
                        >
                            <a class="hover:text-blue-300" href="#">
                                О компании
                            </a>
                        </li>
                        <li
                            class="
                                my-3
                                text-xs
                                sm:text-sm
                                md:text-md
                                lg:text-lg
                            "
                        >
                            <a class="hover:text-blue-300" href="#">
                                Служба поддержки
                            </a>
                        </li>
                        <li
                            class="
                                my-3
                                text-xs
                                sm:text-sm
                                md:text-md
                                lg:text-lg
                            "
                        >
                            <a class="hover:text-blue-300" href="#">
                                Частые вопросы
                            </a>
                        </li>
                        <li
                            class="
                                my-3
                                text-xs
                                sm:text-sm
                                md:text-md
                                lg:text-lg
                            "
                        >
                            <a class="hover:text-blue-300" href="#">
                                Условия использования
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                class="
                    md:grid
                    text-center
                    md:text-left
                    font-medium
                    text-sm
                    md:text-lg
                    grid-cols-3
                    text-gray-200
                "
            >
                <div class="my-2">
                    <ul>
                        <li class="text-xs sm:text-sm md:text-md lg:text-lg">
                            <span> © 2022. Все права защищены </span>
                        </li>
                    </ul>
                </div>
                <div class="my-2">
                    <ul
                        class="
                            flex
                            items-center
                            justify-center
                            md:justify-start
                        "
                    >
                        <li class="mr-5">
                            <a target="_blank" href="{{ social.link }}">
                                <img
                                    class="
                                        transition-all
                                        duration-500
                                        transform
                                        hover:scale-110
                                    "
                                    src="#"
                                    alt=""
                                />
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="my-2">
                    <ul>
                        <li class="text-xs sm:text-sm md:text-md lg:text-lg">
                            <a href="#"
                                >Разработка сайта:
                                <span class="hover:text-blue-300"
                                    >BigSoft</span
                                ></a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>


<style>
.section-banner {
    height: calc(85vh - 76px);
}

@media only screen and (max-width: 600px) {
    .section-banner {
        height: calc(70vh - 76px);
    }
}
</style>


<script setup>
import CCategories from "@/components/home/c-categories";

import { Autoplay, EffectFade, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';




const onSwiper = (swiper) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};
</script>