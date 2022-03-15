<template>
    <home-header></home-header>
    <c-categories></c-categories>
    <c-advantages></c-advantages>
    <section class="py-12 bg-white">
        <div class="container m-auto px-3">
            <div
                class="
                    md:flex
                    justify-between
                    2xl:px-20
                    pb-12
                    xl:grid xl:grid-cols-2
                    gap-4
                "
            >
                <div class="w-full">
                    <h2
                        class="
                            text-2xl text-center
                            md:text-left md:text-3xl
                            font-medium
                            pb-4
                            md:pb-8
                        "
                    >
                        Как нанять
                        <span class="text-blue-800">специалиста?</span>
                    </h2>
                    <ul>
                        <li class="flex mb-8">
                            <div
                                class="
                                    w-6
                                    h-6
                                    rounded-full
                                    justify-center
                                    flex
                                    items-center
                                "
                            >
                                <div
                                    class="bg-orange-400 w-3 h-3 rounded-full"
                                ></div>
                            </div>
                            <div class="ml-5">
                                <p class="text-base md:text-md text-gray-700">
                                    Используя подсказки, опишите работу которую
                                    необходимо выполнить для подбора подходящего
                                    специалиста. Процесс заполнения деталей по
                                    работе займет не более 10 минут.
                                </p>
                            </div>
                        </li>
                        <li class="flex mb-8">
                            <div
                                class="
                                    w-6
                                    h-6
                                    rounded-full
                                    justify-center
                                    flex
                                    items-center
                                "
                            >
                                <div
                                    class="bg-orange-400 w-3 h-3 rounded-full"
                                ></div>
                            </div>
                            <div class="ml-5">
                                <p class="text-base md:text-md text-gray-700">
                                    Специалисты напишут Вам сами, а Вам только
                                    необходимо выбрать того, кто Вам лучше всего
                                    подходит и договориться о цене.
                                </p>
                            </div>
                        </li>
                        <li class="flex mb-8">
                            <div
                                class="
                                    w-6
                                    h-6
                                    rounded-full
                                    justify-center
                                    flex
                                    items-center
                                "
                            >
                                <div
                                    class="bg-orange-400 w-3 h-3 rounded-full"
                                ></div>
                            </div>
                            <div class="ml-5">
                                <p class="text-base md:text-md text-gray-700">
                                    После выполнения работы, не забудьте
                                    оставить честный отзыв и оценку выбранному
                                    специалисту.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="w-full pt-4 md:pt-0">
                    <div class="relative md:w-10/12 w-full md:ml-auto ml-0">
                        <img
                            src="../assets/temp/MaskGroup.png"
                            alt=""
                            class="w-full"
                        />
                    </div>
                </div>
            </div>
            <div
                class="
                    md:flex
                    justify-between
                    2xl:px-20
                    xl:grid xl:grid-cols-2
                    gap-4
                "
            >
                <div class="w-full xl:order-2">
                    <h2
                        class="
                            text-2xl text-center
                            md:text-left md:text-3xl
                            font-medium
                            pb-4
                            md:pb-8
                        "
                    >
                        Как стать
                        <span class="text-blue-800">исполнителем?</span>
                    </h2>
                    <ul>
                        <li class="flex mb-8">
                            <div
                                class="
                                    w-6
                                    h-6
                                    rounded-full
                                    justify-center
                                    flex
                                    items-center
                                "
                            >
                                <div
                                    class="bg-orange-400 w-3 h-3 rounded-full"
                                ></div>
                            </div>
                            <div class="ml-5">
                                <p class="text-base md:text-md text-gray-700">
                                    Заполните профиль так, чтобы Вам самому
                                    захотелось себя нанять. Чем больше
                                    информации Вы заполните о себе, тем больше
                                    Вам смогут довериться Заказчики.
                                </p>
                            </div>
                        </li>
                        <li class="flex mb-8">
                            <div
                                class="
                                    w-6
                                    h-6
                                    rounded-full
                                    justify-center
                                    flex
                                    items-center
                                "
                            >
                                <div
                                    class="bg-orange-400 w-3 h-3 rounded-full"
                                ></div>
                            </div>
                            <div class="ml-5">
                                <p class="text-base md:text-md text-gray-700">
                                    Выберите задание, которое Вы могли и хотели
                                    бы выполнить. Договоритесь с Заказчиком об
                                    устраивающей вас цене и условиях выполнения
                                    заказа.
                                </p>
                            </div>
                        </li>
                        <li class="flex mb-8">
                            <div
                                class="
                                    w-6
                                    h-6
                                    rounded-full
                                    justify-center
                                    flex
                                    items-center
                                "
                            >
                                <div
                                    class="bg-orange-400 w-3 h-3 rounded-full"
                                ></div>
                            </div>
                            <div class="ml-5">
                                <p class="text-base md:text-md text-gray-700">
                                    После выполнения работы, не забудьте
                                    оставить отзыв и оценку выбранному
                                    Заказчику.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="md:w-10/12 w-full xl:order-1 pt-4 md:pt-0">
                    <div class="relative">
                        <img
                            src="../assets/temp/MaskGroup2.png"
                            alt=""
                            class="w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-gray-50 py-12">
        <div
            class="
                container
                px-4
                sm:px-0
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
                    class="
                        text-2xl text-center
                        md:text-left md:text-3xl
                        font-medium
                        pb-4
                        md:pb-8
                    "
                >
                    Теперь все услуги <br />
                    доступны в Вашем кармане <br />
                    с
                    <span class="text-blue-800">
                        бесплатным мобильным <br />
                        приложением
                    </span>
                    «WorkBase»
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
                        ><img
                            class="w-30 h-10"
                            src="../assets/temp/apple.png"
                            alt=""
                    /></a>
                    <a
                        class="
                            transition-all
                            duration-500
                            transform
                            hover:scale-110
                        "
                        href="#"
                    >
                        <img
                            class="w-30 h-10"
                            src="../assets/temp/android.png"
                            alt=""
                    /></a>
                </div>
            </div>
            <div class="relative mx-auto w-7/12 md:w-5/12 mt-5 lg:my-0">
                <!-- <div class="swiper mySwiper w-full">
                    <div class="swiper-wrapper mx-auto">
                        <div class="swiper-slide"><img src="" alt="" /></div>
                        <div class="swiper-slide"><img src="" alt="" /></div>
                        <div class="swiper-slide"><img src="" alt="" /></div>
                    </div>
                </div> -->
                <swiper
                    :slides-per-view="1"
                    :space-between="0"
                    :modules="[EffectFade, Autoplay]"
                    :loop="true"
                    :effect="'fade'"
                    :autoplay="{
                        delay: 7000,
                        disableOnInteraction: false,
                    }"
                    @swiper="onSwiper"
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
        <div class="container px-4 2xl:px-20 mx-auto">
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
                    grid
                    md:grid-cols-4
                    grid-cols-2
                    text-sm
                    md:text-lg
                    font-medium
                    md:text-left
                    text-gray-200
                    pb-5
                "
            >
                <div class="">
                    <h5 class="text-gray-400 text-base xl:text-lg">Компания</h5>
                    <ul>
                        <li
                            class="
                                my-3
                                text-xs
                                sm:text-sm
                                md:text-md
                                lg:text-base
                            "
                        >
                            <a class="hover:text-blue-300" href="#"> О нас </a>
                        </li>
                        <li
                            class="
                                my-3
                                text-xs
                                sm:text-sm
                                md:text-md
                                lg:text-base
                            "
                        >
                            <a class="hover:text-blue-300" href="#">
                                Вакансии
                            </a>
                        </li>
                        <li
                            class="
                                my-3
                                text-xs
                                sm:text-sm
                                md:text-md
                                lg:text-base
                            "
                        >
                            <a class="hover:text-blue-300" href="#">
                                Новости
                            </a>
                        </li>
                        <li
                            class="
                                my-3
                                text-xs
                                sm:text-sm
                                md:text-md
                                lg:text-base
                            "
                        >
                            <a class="hover:text-blue-300" href="#">
                                Контакты</a
                            >
                        </li>
                    </ul>
                </div>
                <div class="">
                    <h5 class="text-gray-400 text-base xl:text-lg">
                        Заказчикам
                    </h5>
                    <ul>
                        <li
                            class="
                                my-3
                                text-xs
                                sm:text-sm
                                md:text-md
                                lg:text-base
                            "
                        >
                            <a class="hover:text-blue-300" href="#"
                                >Создать заявку</a
                            >
                        </li>
                    </ul>
                </div>
                <div class="">
                    <h5 class="text-gray-400 text-base xl:text-lg">
                        Специалистам
                    </h5>
                    <ul>
                        <li
                            class="
                                my-3
                                text-xs
                                sm:text-sm
                                md:text-md
                                lg:text-base
                            "
                        >
                            <a class="hover:text-blue-300" href="#"
                                >Стать специалистом</a
                            >
                        </li>
                        <li
                            class="
                                my-3
                                text-xs
                                sm:text-sm
                                md:text-md
                                lg:text-base
                            "
                        >
                            <a class="hover:text-blue-300" href="#"
                                >Инструкция по оплате</a
                            >
                        </li>
                    </ul>
                </div>
                <div class="">
                    <h5 class="text-gray-400 text-base xl:text-lg">
                        Служба поддержки
                    </h5>
                    <ul>
                        <li
                            class="
                                my-3
                                text-xs
                                sm:text-sm
                                md:text-md
                                lg:text-base
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
                                lg:text-base
                            "
                        >
                            <a class="hover:text-blue-300" href="#">
                                Условия использования
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-gray-400 text-base xl:text-lg">
                        Социальные сети
                    </h5>
                    <div class="my-2">
                        <ul class="flex items-center justify-start">
                            <li class="mr-5">
                                <a target="_blank" href="#">
                                    <img
                                        class="
                                            transition-all
                                            duration-500
                                            transform
                                            hover:scale-110
                                        "
                                        src="../assets/images/instagram.svg"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li class="mr-5">
                                <a target="_blank" href="#">
                                    <img
                                        class="
                                            transition-all
                                            duration-500
                                            transform
                                            hover:scale-110
                                        "
                                        src="../assets/images/facebook.svg"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li class="mr-5">
                                <a target="_blank" href="#">
                                    <img
                                        class="
                                            transition-all
                                            duration-500
                                            transform
                                            hover:scale-110
                                        "
                                        src="../assets/images/telegram.svg"
                                        alt=""
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div
                class="
                    md:grid
                    block
                    items-center
                    text-center
                    md:text-left
                    font-medium
                    text-sm
                    md:text-lg md:grid-cols-4
                    text-gray-200
                    border-t border-slate-300
                "
            >
                <div class="my-2">
                    <ul>
                        <li class="text-xs sm:text-sm md:text-md lg:text-lg">
                            <a href="#" class="">
                                <img
                                    src="../assets/logo-white.svg"
                                    alt=""
                                    class="w-44 mx-auto md:mx-0"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="my-2">
                    <ul>
                        <li
                            class="text-xs sm:text-sm md:text-md lg:text-lg"
                        ></li>
                    </ul>
                </div>
                <div class="my-2">
                    <ul>
                        <li class="text-xs sm:text-sm md:text-md lg:text-lg">
                            <span>© 2022. Все права защищены </span>
                        </li>
                    </ul>
                </div>
                <div class="my-2">
                    <ul>
                        <li class="text-xs sm:text-sm md:text-md lg:text-lg">
                            <span
                                >Разработка сайта:<a
                                    class="hover:text-blue-300"
                                    href="#"
                                >
                                    BigSoft</a
                                ></span
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
import HomeHeader from "@/components/home/home-header.vue";

import CAdvantages from "@/components/home/c-advantages.vue";

import {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const onSwiper = (swiper) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log("slide change");
};
</script>