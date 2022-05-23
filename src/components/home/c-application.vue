<script setup>
import { ref } from "vue";
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

const onSwiper = (swiper) => {};
const onSlideChange = () => {};
</script>

<template>
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
                            src="@/assets/temp/apple.png"
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
                            src="@/assets/temp/android.png"
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
                        <img src="@/assets/temp/sw-1.png" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img src="@/assets/temp/sw-2.png" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img src="@/assets/temp/sw-3.png" alt="" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>