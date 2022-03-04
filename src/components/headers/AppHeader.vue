<template>
    <header class="sticky top-0 z-50 bg-primary text-white">
        <div class="container px-4 mx-auto flex items-stretch">
            <div class="flex">
                <router-link to="/" class="py-2 my-auto w-40">
                    <img src="@/assets/logo-white.svg" alt="" class="" />
                </router-link>
            </div>
            <nav class="font-medium py-3 flex gap-4 justify-between ml-auto">
                <div class="block xl:hidden">
                    <button
                        @click="toggle"
                        class="
                            flex
                            items-center
                            text-teal-lighter
                            border-teal-light
                            hover:text-white hover:border-white
                            ml-auto
                        "
                    >
                        <svg
                            class="fill-current h-7 w-7"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384.97 384.97"
                        >
                            <g>
                                <path
                                    d="M12.03,84.212h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
                                C5.39,60.152,0,65.541,0,72.182C0,78.823,5.39,84.212,12.03,84.212z"
                                />
                                <path
                                    d="M372.939,300.758H12.03c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h360.909
                                c6.641,0,12.03-5.39,12.03-12.03C384.97,306.147,379.58,300.758,372.939,300.758z"
                                />
                                <path
                                    d="M336.848,144.364c-22.4,0-41.059,15.375-46.425,36.091H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03
                                h278.393c5.366,20.716,24.025,36.091,46.425,36.091c26.575,0,48.121-21.546,48.121-48.121S363.423,144.364,336.848,144.364z
                                M336.848,216.545c-13.293,0-24.061-10.779-24.061-24.061c0-13.281,10.767-24.061,24.061-24.061s24.061,10.767,24.061,24.061
                                C360.909,205.766,350.142,216.545,336.848,216.545z"
                                />
                            </g>
                        </svg>
                    </button>
                </div>
                <div
                    :class="'block'"
                    class="w-full flex-grow xl:flex xl:items-center xl:w-auto"
                >
                    <div class="text-sm xl:flex-grow"></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>
            <nav class="font-medium justify-between items-stretch flex ml-auto">
                <ul
                    v-if="isAuthentificated"
                    class="flex items-center py-3 gap-4"
                >
                    <li>
                        <router-link
                            to="/orders"
                            class="
                                no-underline
                                block
                                px-3
                                mt-4
                                sm:inline-block sm:mt-0
                                text-lg
                                hover:text-white
                                mr-4
                            "
                        >
                            <h-order></h-order>
                            Заказы
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            to="/orders"
                            class="
                                no-underline
                                block
                                px-3
                                mt-4
                                sm:inline-block sm:mt-0
                                text-lg text-teal-lighter
                                hover:text-white
                                mr-4
                            "
                        >
                            <h-wallet></h-wallet>
                            Кошелёк
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            to="/orders"
                            class="
                                no-underline
                                block
                                px-3
                                mt-4
                                sm:inline-block sm:mt-0
                                text-lg text-teal-lighter
                                hover:text-white
                                mr-4
                            "
                        >
                            <h-account></h-account>
                            Анкета
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            to="/orders"
                            class="
                                no-underline
                                block
                                px-3
                                mt-4
                                sm:inline-block sm:mt-0
                                text-lg text-teal-lighter
                                hover:text-white
                                mr-4
                            "
                        >
                            <h-support></h-support>
                            Поддержка
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            to="/orders"
                            class="
                                no-underline
                                block
                                px-3
                                mt-4
                                sm:inline-block sm:mt-0
                                text-lg text-teal-lighter
                                hover:text-white
                                mr-4
                            "
                        >
                            <h-bonus></h-bonus>
                            Бонусы
                        </router-link>
                    </li>
                    <li>
                        <c-user-menu></c-user-menu>
                    </li>
                    <li>
                        <c-language></c-language>
                    </li>
                </ul>
                <ul class="flex items-center py-3 gap-4" v-else>
                    <!--<li>
                         <button
                    type="button"
                    class="
                        flex
                        items-center
                        border-2 border-white
                        rounded-full
                        px-5
                        py-2
                        hover:bg-white hover:text-primary
                        transition
                        duration-200
                    "
                >
                    <h-location class="mr-2"></h-location>
                    г. Ташкент
                </button>                    </li> -->

                    <li>
                        <button
                            @click="showLoginModal = true"
                            type="button"
                            class="
                                flex
                                items-center
                                border-2 border-white
                                rounded-full
                                px-5
                                py-2
                                hover:bg-white hover:text-primary
                                transition
                                duration-200
                                outline-0
                            "
                        >
                            <h-enter class="mr-2"></h-enter>
                            Вход
                        </button>
                    </li>
                    <li>
                        <button
                            @click="showRegisterModal = true"
                            type="button"
                            class="
                                flex
                                items-center
                                border-2 border-white
                                rounded-full
                                px-5
                                py-2
                                hover:bg-white hover:text-primary
                                transition
                                duration-200
                                outline-0
                            "
                        >
                            <h-pencil class="mr-2"></h-pencil>
                            Регистрация
                        </button>
                    </li>
                    <li>
                        <c-language></c-language>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    <c-modal
        v-model="showLoginModal"
        v-slot="{ close }"
        v-if="!isAuthentificated"
    >
        <button
            class="
                absolute
                top-3
                right-3
                bg-gray-300
                hover:bg-primary hover:text-white
                transition
                duration-200
                rounded-full
                p-2
            "
            @click="close"
        >
            <h-x class="w-3 h-3"></h-x>
        </button>
        <c-login @successful="close"></c-login>
    </c-modal>
    <c-modal
        v-model="showRegisterModal"
        v-slot="{ close }"
        v-if="!isAuthentificated"
    >
        <button
            class="
                absolute
                top-3
                right-3
                bg-gray-300
                hover:bg-primary hover:text-white
                transition
                duration-200
                rounded-full
                p-2
            "
            @click="close"
        >
            <h-x class="w-3 h-3"></h-x>
        </button>
        <c-register></c-register>
    </c-modal>
</template>
<script setup>
import { ref } from "vue";
import CLogin from "@/components/auth/c-login";
import cRegister from "@/components/auth/c-register";
import useAuth from "@/composables/auth";
import cUserMenu from "@/components/userMenu/c-user-menu";
import cLanguage from "@/components/userMenu/c-language";
const showLoginModal = ref(false);
const showRegisterModal = ref(false);
const { isAuthentificated, user } = useAuth();
</script>
