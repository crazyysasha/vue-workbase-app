<template>
    <header class="sticky top-0 z-50 bg-primary text-white">
        <div class="container mx-auto flex items-center justify-between">
            <nav v-if="isAuthentificated" class="flex w-full items-center flex-wrap bg-teal py-4">
                <div class="flex items-center flex-no-shrink text-white mr-6">
                    <router-link to="/" class="py-2 mr-12">
                        <img src="@/assets/logo-white.svg" alt="" class="w-40" />
                    </router-link>
                </div>
                <div class="block sm:hidden">
                <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
                </div>
                <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
                <div class="text-sm sm:flex-grow">
                    <router-link to="/orders" class="no-underline block px-3 mt-4 sm:inline-block sm:mt-0 text-lg hover:text-white mr-4">
                        <svg class="w-6 h-6 m-auto fill-current text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M23.9136 18.7256L22.5197 14.6688C23.1916 13.2953 23.5467 11.7678 23.5491 10.2308C23.5532 7.55827 22.5192 5.03138 20.6376 3.11559C18.7555 1.19943 16.2476 0.120788 13.5757 0.0784597C10.8052 0.0346784 8.20099 1.08852 6.24316 3.04631C4.35531 4.93411 3.30822 7.42285 3.27507 10.0824C1.41441 11.4833 0.316178 13.6674 0.319788 16.0003C0.321522 17.0921 0.567241 18.1773 1.03285 19.1586L0.0727092 21.9527C-0.0923379 22.4331 0.0282248 22.9546 0.387382 23.3137C0.640132 23.5665 0.973367 23.7011 1.31607 23.7011C1.46026 23.7011 1.60613 23.6773 1.7484 23.6284L4.54258 22.6683C5.52391 23.1339 6.60911 23.3796 7.70083 23.3813C7.70477 23.3813 7.70852 23.3813 7.71246 23.3813C10.0801 23.3812 12.2809 22.2547 13.6767 20.3484C15.1292 20.3102 16.5664 19.9586 17.8656 19.323L21.9224 20.717C22.0914 20.775 22.2647 20.8033 22.4361 20.8033C22.8433 20.8033 23.2393 20.6434 23.5397 20.3429C23.9665 19.9161 24.1097 19.2964 23.9136 18.7256ZM7.71236 21.9528C7.70932 21.9528 7.70608 21.9528 7.70304 21.9528C6.73675 21.9513 5.77717 21.7131 4.92822 21.2639C4.75366 21.1716 4.54872 21.1557 4.36206 21.2198L1.49692 22.2043L2.48143 19.3392C2.54556 19.1525 2.52962 18.9476 2.43728 18.773C1.98812 17.924 1.7499 16.9645 1.7484 15.9982C1.74601 14.4439 2.35065 12.9706 3.40801 11.8675C3.75339 13.9729 4.75684 15.9131 6.31225 17.4408C7.85618 18.9573 9.7969 19.9228 11.8909 20.2385C10.7852 21.3283 9.29477 21.9528 7.71236 21.9528ZM22.5295 19.3328C22.4888 19.3734 22.4407 19.3845 22.3865 19.3658L18.0436 17.8735C17.9682 17.8476 17.8897 17.8347 17.8115 17.8347C17.6962 17.8347 17.5814 17.8626 17.4775 17.9177C16.2375 18.5736 14.8363 18.9215 13.4253 18.9237C13.4206 18.9237 13.4164 18.9237 13.4118 18.9237C8.6838 18.9237 4.7785 15.083 4.70359 10.3562C4.66586 7.97565 5.57139 5.73835 7.25332 4.05642C8.93524 2.3745 11.1729 1.46929 13.5531 1.50679C18.2845 1.58184 22.1278 5.49436 22.1205 10.2285C22.1183 11.6395 21.7704 13.0408 21.1145 14.2807C21.0222 14.4552 21.0062 14.6601 21.0704 14.8468L22.5626 19.1897C22.5812 19.2441 22.5701 19.2922 22.5295 19.3328Z" fill="white" />
                                <path d="M17.6668 8.46289H9.15618C8.76168 8.46289 8.44189 8.73155 8.44189 9.06289C8.44189 9.39427 8.76172 9.66289 9.15618 9.66289H17.6668C18.0613 9.66289 18.3811 9.39423 18.3811 9.06289C18.3811 8.73155 18.0613 8.46289 17.6668 8.46289Z" fill="white" />
                                <path d="M14.3909 11.5688H9.15618C8.76168 11.5688 8.44189 11.8375 8.44189 12.1688C8.44189 12.5002 8.76172 12.7688 9.15618 12.7688H14.3908C14.7853 12.7688 15.1051 12.5002 15.1051 12.1688C15.1051 11.8375 14.7854 11.5688 14.3909 11.5688Z" fill="white" />
                            </g>
                        </svg>
                        
                        Заказы
                    </router-link>
                    <router-link to="/orders" class="no-underline block px-3 mt-4 sm:inline-block sm:mt-0 text-lg text-teal-lighter hover:text-white mr-4">
                        <svg class="w-6 h-6 m-auto fill-current text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M21.635 4.24984C21.5057 2.58035 20.1069 1.26123 18.4048 1.26123H3.24103C1.45392 1.26123 0 2.71515 0 4.50226V19.4978C0 21.2849 1.45392 22.7388 3.24103 22.7388H20.759C22.5461 22.7388 24 21.2849 24 19.4978V7.36956C24 5.88606 22.9977 4.63309 21.635 4.24984ZM3.24103 2.77529H18.4049C19.2288 2.77529 19.9193 3.35541 20.0907 4.12857H3.24103C2.6065 4.12857 2.01445 4.31258 1.51406 4.62902V4.50226C1.51406 3.55001 2.28878 2.77529 3.24103 2.77529ZM20.759 21.2248H3.24103C2.28878 21.2248 1.51406 20.45 1.51406 19.4978V7.36956C1.51406 6.41731 2.28878 5.64258 3.24103 5.64258H20.759C21.7113 5.64258 22.486 6.41731 22.486 7.36956V10.0115H17.6587C15.7458 10.0115 14.1895 11.5678 14.1895 13.4807C14.1895 15.3936 15.7458 16.95 17.6587 16.95H22.4859V19.4978C22.4859 20.45 21.7112 21.2248 20.759 21.2248ZM22.4859 15.4359H17.6587C16.5806 15.4359 15.7036 14.5588 15.7036 13.4807C15.7036 12.4026 16.5806 11.5256 17.6587 11.5256H22.4859V15.4359Z" />
                                <path d="M17.9395 14.3263C18.3748 14.3263 18.7277 13.9734 18.7277 13.5382C18.7277 13.1029 18.3748 12.75 17.9395 12.75C17.5042 12.75 17.1514 13.1029 17.1514 13.5382C17.1514 13.9734 17.5042 14.3263 17.9395 14.3263Z" />
                            </g>
                        </svg>
                        Кошелёк
                    </router-link>
                    <router-link to="/orders" class="no-underline block px-3 mt-4 sm:inline-block sm:mt-0 text-lg text-teal-lighter hover:text-white mr-4">
                        <svg class="w-6 h-6 m-auto fill-current text-white" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M21.9215 18.8246C21.6379 17.4625 21.0965 16.1691 20.3402 15.009C20.323 14.9789 20.3102 14.9488 20.2887 14.923C20.0266 14.532 19.7387 14.1582 19.4336 13.8059C19.0211 13.3246 18.5656 12.882 18.0715 12.4738H18.0586C16.9973 11.6102 15.7941 10.9484 14.4965 10.523C15.9188 9.45312 16.8426 7.75586 16.8426 5.84375C16.8426 2.62109 14.2215 0 10.9988 0C7.77618 0 5.15508 2.62109 5.15508 5.84375C5.15508 7.75586 6.07891 9.45742 7.50118 10.523C6.19493 10.9527 4.97032 11.623 3.9004 12.5039C1.93672 14.1195 0.570319 16.3754 0.0546936 18.8504C-0.108588 19.6281 0.0847717 20.423 0.587506 21.0375C1.08594 21.6477 1.82071 22 2.60704 22L15.9531 21.9699H19.3691C20.1555 21.9699 20.8945 21.6176 21.3887 21.0074C21.8871 20.3973 22.0805 19.598 21.9215 18.8246ZM6.87383 5.84375C6.87383 3.5707 8.72579 1.71875 10.9988 1.71875C13.2719 1.71875 15.1238 3.5707 15.1238 5.84375C15.1238 8.04805 13.3836 9.85273 11.2094 9.96445C11.1406 9.96445 11.0719 9.96445 10.9988 9.96445C10.9301 9.96445 10.8613 9.96445 10.7926 9.96445C8.61407 9.85273 6.87383 8.04805 6.87383 5.84375ZM20.0266 19.9547C19.9277 20.075 19.7043 20.2812 19.3391 20.2812H15.0938H2.60704C2.2418 20.2812 2.01837 20.075 1.91954 19.9547C1.74766 19.7441 1.68321 19.4691 1.73907 19.2027C2.63282 14.9187 6.40977 11.7906 10.7711 11.6832C10.8484 11.6875 10.9215 11.6875 10.9988 11.6875C11.059 11.6875 11.1234 11.6875 11.1836 11.6832L12.8508 11.8723C12.3137 11.7605 11.7594 11.6961 11.1965 11.6789C11.2094 11.6789 11.2223 11.6789 11.2309 11.6789C11.8281 11.6918 12.4125 11.7648 12.9883 11.8852L12.8508 11.868C16.4773 12.6199 19.4379 15.4688 20.2113 19.1941C20.2672 19.4691 20.1984 19.7441 20.0266 19.9547Z" />
                            </g>
                        </svg>
                        Анкета
                    </router-link>
                    <router-link to="/orders" class="no-underline block px-3 mt-4 sm:inline-block sm:mt-0 text-lg text-teal-lighter hover:text-white mr-4">
                        <svg class="w-6 h-6 m-auto fill-current text-white" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.4507 0.0126953H2.54926C1.14354 0.0126953 0 1.15713 0 2.56394V16.0957C0 17.5025 1.14354 18.647 2.54926 18.647H7.2639L10.3924 21.7781C10.7278 22.1137 11.2721 22.1137 11.6076 21.7781L14.7361 18.647H19.4507C20.8565 18.647 22 17.5025 22 16.0957V2.56394C22 1.15713 20.8565 0.0126953 19.4507 0.0126953ZM20.2812 16.0957C20.2812 16.554 19.9086 16.9269 19.4507 16.9269H14.3803C14.1523 16.9269 13.9336 17.0176 13.7725 17.1788L11 19.9535L8.22751 17.1788C8.06638 17.0176 7.84767 16.927 7.6199 16.927H2.54926C2.09137 16.927 1.71875 16.554 1.71875 16.0957V2.56394C1.71875 2.1057 2.09137 1.73279 2.54926 1.73279H19.4507C19.9086 1.73279 20.2812 2.1057 20.2812 2.56394V16.0957ZM14.3908 6.63337C14.4513 7.94914 13.7705 9.15556 12.6138 9.78195C12.1486 10.0341 11.8594 10.5046 11.8594 11.01V11.0213C11.8594 11.4963 11.4747 11.8813 11 11.8813C10.5253 11.8813 10.1406 11.4963 10.1406 11.0213C10.1418 11.0169 10.0612 9.20881 11.7958 8.26931C12.3673 7.95972 12.7038 7.36323 12.6739 6.71249C12.6347 5.85748 11.9346 5.15685 11.0802 5.11754C10.1149 5.07319 9.32422 5.84052 9.32422 6.79278C9.32422 7.26782 8.93951 7.65283 8.46484 7.65283C7.99017 7.65283 7.60547 7.26782 7.60547 6.79278C7.60547 4.84978 9.22452 3.30808 11.1591 3.3993C12.903 3.47942 14.3108 4.89077 14.3908 6.63337ZM11.8594 13.5441V14.4042C11.8594 14.8792 11.4747 15.2642 11 15.2642C10.5253 15.2642 10.1406 14.8792 10.1406 14.4042V13.5441C10.1406 13.0691 10.5253 12.6841 11 12.6841C11.4747 12.6841 11.8594 13.0691 11.8594 13.5441Z" />
                        </svg>
                        Поддержка
                    </router-link>
                    <router-link to="/orders" class="no-underline block px-3 mt-4 sm:inline-block sm:mt-0 text-lg text-teal-lighter hover:text-white mr-4">
                        <svg class="w-6 h-6 m-auto fill-current text-white" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5625 6.4547H17.0142C17.3406 6.23189 17.6209 6.01051 17.8164 5.81214C18.975 4.64632 18.975 2.74882 17.8164 1.58301C16.6908 0.450262 14.7272 0.448824 13.6002 1.58301C12.9778 2.20832 11.3232 4.75414 11.5518 6.4547H11.4483C11.6754 4.75414 10.0223 2.20832 9.39981 1.58301C8.27281 0.448824 6.30919 0.450262 5.18362 1.58301C4.025 2.74882 4.025 4.64632 5.18219 5.81214C5.37913 6.01051 5.65944 6.23189 5.98575 6.4547H1.4375C0.645437 6.4547 0 7.10014 0 7.8922V11.4859C0 11.8827 0.322 12.2047 0.71875 12.2047H1.4375V20.8297C1.4375 21.6218 2.08294 22.2672 2.875 22.2672H20.125C20.9171 22.2672 21.5625 21.6218 21.5625 20.8297V12.2047H22.2812C22.678 12.2047 23 11.8827 23 11.4859V7.8922C23 7.10014 22.3546 6.4547 21.5625 6.4547ZM6.20281 2.59645C6.49463 2.3032 6.88131 2.1422 7.29244 2.1422C7.70213 2.1422 8.08881 2.3032 8.38062 2.59645C9.3495 3.57107 10.3126 6.06082 9.97769 6.40726C9.97769 6.40726 9.91731 6.4547 9.71175 6.4547C8.71844 6.4547 6.82238 5.42257 6.20281 4.7987C5.6005 4.19207 5.6005 3.20307 6.20281 2.59645ZM10.7812 20.8297H2.875V12.2047H10.7812V20.8297ZM10.7812 10.7672H1.4375V7.8922H9.71175H10.7812V10.7672ZM14.6194 2.59645C15.203 2.01139 16.215 2.01282 16.7972 2.59645C17.3995 3.20307 17.3995 4.19207 16.7972 4.7987C16.1776 5.42257 14.2816 6.4547 13.2883 6.4547C13.0827 6.4547 13.0223 6.4087 13.0209 6.40726C12.6874 6.06082 13.6505 3.57107 14.6194 2.59645ZM20.125 20.8297H12.2188V12.2047H20.125V20.8297ZM21.5625 10.7672H12.2188V7.8922H13.2883H21.5625V10.7672Z" />
                        </svg>
                        Бонусы
                    </router-link>
                </div>
                <div>
                    <button @click="onLogout">
                        {{user.name}} - logout
                    </button>
                    <a href="#" class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 sm:mt-0">Download</a>
                </div>
                </div>
            </nav>
            <nav class="font-medium py-4 flex gap-4" v-else>
                <!-- <button
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
                </button> -->
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
                        outline-0
                " >
                    Ru 
                    <svg class="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div id="dropdown" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow">
                    <ul class="py-1">
                        <li>
                            <a href="#" class="block text-center py-2 px-4 text-sm text-primary hover:bg-primary hover:rounded hover:mx-2 hover:text-white">
                                Уз
                            </a>
                        </li>
                        <li>
                            <a href="#" class="block text-center py-2 px-4 text-sm text-primary hover:bg-primary hover:rounded hover:mx-2 hover:text-white">
                                O'z
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    <c-modal v-model="showLoginModal" v-slot="ctx">
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
            @click="ctx.close()"
        >
            <h-x class="w-3 h-3"></h-x>
        </button>
        <c-login @successful="ctx.close()"></c-login>
    </c-modal>
    <c-modal v-model="showRegisterModal" v-slot="ctx">
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
            @click="ctx.close()"
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
    const showLoginModal = ref(false);
    const showRegisterModal = ref(false);
    const { isAuthentificated, user, onLogout } = useAuth();
    console.log(isAuthentificated.value);
</script>
