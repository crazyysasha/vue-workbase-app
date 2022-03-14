<template>
  <home-header> </home-header>
  <c-categories></c-categories>
  <section class="py-12 bg-white">
    <div class="container m-auto px-4 ">
      <swiper
        :slides-per-view="1"
        :space-between="0"
        :loop="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <div
            class="
              md:flex
              justify-between
              cursor-grab
              active:cursor-grabbing
              px-2
              md:px-4
              2xl:px-20
            "
          >
            <div class="px-2">
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
                    <div class="bg-orange-400 w-3 h-3 rounded-full"></div>
                  </div>
                  <div class="px-3">
                    <h4 class="font-medium text-md md:text-xl">
                      Оставьте вашу заявку.
                    </h4>
                    <p class="text-sm md:text-md text-gray-400">
                      Опишите работу которую необходимо выполнить для подбора
                      <br />
                      подходящего специалиста.
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
                    <div class="bg-orange-400 w-3 h-3 rounded-full"></div>
                  </div>
                  <div class="px-3">
                    <h4 class="font-medium text-md md:text-xl">
                      Исполнители свяжутся с вами.
                    </h4>
                    <p class="text-sm md:text-md text-gray-400">
                      Выберите подходящего специалиста по отзывам и цене.
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
                    <div class="bg-orange-400 w-3 h-3 rounded-full"></div>
                  </div>
                  <div class="px-3">
                    <h4 class="font-medium text-md md:text-xl">
                      Оставьте отзыв по окончанию работы.
                    </h4>
                    <p class="text-sm md:text-md text-gray-400">
                      После выполнения работы не забудьте оставить отзыв и
                      <br />
                      оценку выбранному специалисту.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="w-auto h-auto pt-4 md:pt-0">
              <div class="relative">
                <img src="../assets/temp/MaskGroup.png" alt="" class="w-full" />
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="
              md:flex
              justify-between
              cursor-grab
              active:cursor-grabbing
              px-2
              md:px-4
              2xl:px-20
            "
          >
            <div class="px-2">
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
                    <div class="bg-orange-400 w-3 h-3 rounded-full"></div>
                  </div>
                  <div class="px-3">
                    <h4 class="font-medium text-md md:text-xl">
                      Оставьте вашу заявку.
                    </h4>
                    <p class="text-sm md:text-md text-gray-400">
                      Опишите работу которую необходимо выполнить для подбора
                      <br />
                      подходящего специалиста.
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
                    <div class="bg-orange-400 w-3 h-3 rounded-full"></div>
                  </div>
                  <div class="px-3">
                    <h4 class="font-medium text-md md:text-xl">
                      Исполнители свяжутся с вами.
                    </h4>
                    <p class="text-sm md:text-md text-gray-400">
                      Выберите подходящего специалиста по отзывам и цене.
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
                    <div class="bg-orange-400 w-3 h-3 rounded-full"></div>
                  </div>
                  <div class="px-3">
                    <h4 class="font-medium text-md md:text-xl">
                      Оставьте отзыв по окончанию работы.
                    </h4>
                    <p class="text-sm md:text-md text-gray-400">
                      После выполнения работы не забудьте оставить отзыв и
                      <br />
                      оценку выбранному специалисту.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="w-auto h-auto pt-4 md:pt-0">
              <div class="relative">
                <img src="../assets/temp/MaskGroup.png" alt="" class="w-full" />
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
  <section class="bg-gray-50 py-5">
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
            class="mr-4 transition-all duration-500 transform hover:scale-110"
            href="#"
            ><img class="w-30 h-10" src="../assets/temp/apple.png" alt=""
          /></a>
          <a
            class="transition-all duration-500 transform hover:scale-110"
            href="#"
            >
                <img class="w-30 h-10" src="../assets/temp/android.png" alt=""
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
          md:grid md:grid-cols-4
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
          <h5 class="text-gray-400 text-base xl:text-lg">Компания</h5>
          <ul>
            <li class="my-3 text-xs sm:text-sm md:text-md lg:text-base">
              <a class="hover:text-blue-300" href="#"> О нас </a>
            </li>
            <li class="my-3 text-xs sm:text-sm md:text-md lg:text-base">
              <a class="hover:text-blue-300" href="#"> Вакансии </a>
            </li>
            <li class="my-3 text-xs sm:text-sm md:text-md lg:text-base">
              <a class="hover:text-blue-300" href="#"> Новости </a>
            </li>
            <li class="my-3 text-xs sm:text-sm md:text-md lg:text-base">
              <a class="hover:text-blue-300" href="#"> Контакты</a>
            </li>
          </ul>
        </div>
        <div class="">
          <h5 class="text-gray-400 text-base xl:text-lg">Заказчикам</h5>
          <ul>
            <li class="my-3 text-xs sm:text-sm md:text-md lg:text-base">
              <a class="hover:text-blue-300" href="#">Создать заявку</a>
            </li>
          </ul>
        </div>
        <div class="">
          <h5 class="text-gray-400 text-base xl:text-lg">Специалистам</h5>
          <ul>
            <li class="my-3 text-xs sm:text-sm md:text-md lg:text-base">
              <a class="hover:text-blue-300" href="#">Стать специалистом</a>
            </li>
            <li class="my-3 text-xs sm:text-sm md:text-md lg:text-base">
              <a class="hover:text-blue-300" href="#">Инструкция по оплате</a>
            </li>
          </ul>
        </div>
        <div class="">
          <h5 class="text-gray-400 text-base xl:text-lg">Служба поддержки</h5>
          <ul>
            <li class="my-3 text-xs sm:text-sm md:text-md lg:text-base">
              <a class="hover:text-blue-300" href="#"> Частые вопросы </a>
            </li>
            <li class="my-3 text-xs sm:text-sm md:text-md lg:text-base">
              <a class="hover:text-blue-300" href="#"> Условия использования </a>
            </li>
          </ul>
          <h5 class="text-gray-400 text-base xl:text-lg">Социальные сети</h5>
          <div class="my-2">
            <ul class="flex items-center justify-center md:justify-start">
              <li class="mr-5">
                <a target="_blank" href="#">
                  <img
                    class="transition-all duration-500 transform hover:scale-110"
                    src="../assets/images/instagram.svg"
                    alt=""
                  />
                </a>
              </li>
              <li class="mr-5">
                <a target="_blank" href="#">
                  <img
                    class="transition-all duration-500 transform hover:scale-110"
                    src="../assets/images/facebook.svg"
                    alt=""
                  />
                </a>
              </li>
              <li class="mr-5">
                <a target="_blank" href="#">
                  <img
                    class="transition-all duration-500 transform hover:scale-110"
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
          flex
          items-center
          text-center
          md:text-left
          font-medium
          text-sm
          md:text-lg
          grid-cols-4
          text-gray-200
          border-t
          border-slate-300
          
        "
      >

        <div class="my-2">
          <ul>
            <li class="text-xs sm:text-sm md:text-md lg:text-lg">
              <a href="#" class="">
                <img
                  src="../assets/logo-white.svg"
                  alt=""
                  class="w-44"
                />
              </a>
            </li>
          </ul>
        </div>
        <div class="my-2">
          <ul>
            <li class="text-xs sm:text-sm md:text-md lg:text-lg">
             
            </li>
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
              <span>Разработка сайта:<a class="hover:text-blue-300" href="#"> BigSoft</a></span>
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