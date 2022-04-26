
<script setup>
import { ref } from "vue";

</script>

<template>
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
                            <router-link
                                to="/about"
                                class="
                                    hover:text-blue-300
                                "
                            >
                                О нас
                            </router-link>
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
                                Блог
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
                            <router-link
                                to="/faq"
                                class="
                                    hover:text-blue-300
                                "
                            >
                                Частые вопросы
                            </router-link>
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
                            <router-link
                                to="/legal"
                                class="
                                    hover:text-blue-300
                                "
                            >
                                Условия использования
                            </router-link>
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
                                        src="@/assets/images/instagram.svg"
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
                                        src="@/assets/images/facebook.svg"
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
                                        src="@/assets/images/telegram.svg"
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
                                    src="@/assets/logo-white.svg"
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