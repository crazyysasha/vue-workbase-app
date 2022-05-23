<script setup>
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
</script>

<template>
    <div
        class="my-4 overflow-hidden rounded-md shadow-md shadow-primary/25 mb-3"
    >
        <div class="w-full">
            <div class="relative">
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
                    @swiper="() => {}"
                    @slideChange="() => {}"
                >
                    <swiper-slide>
                        <img
                            class="w-full h-44 rounded-md"
                            src="@/assets/images/s1.jpg"
                            alt=""
                        />
                    </swiper-slide>
                    <swiper-slide>
                        <img
                            class="w-full h-44 rounded-md"
                            src="@/assets/images/s2.jpg"
                            alt=""
                        />
                    </swiper-slide>
                    <swiper-slide>
                        <img
                            class="w-full h-44 rounded-md"
                            src="@/assets/images/s3.jpg"
                            alt=""
                        />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>