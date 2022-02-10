<template>
    <header class="sticky top-0 z-50 bg-primary text-white">
        <div class="container mx-auto flex items-center justify-between">
            <router-link to="/" class="py-2">
                <img src="@/assets/logo-white.svg" alt="" class="w-40" />
            </router-link>
            <nav v-if="isAuthentificated">
                <button @click="onLogout">
                    {{user.name}} - logout
                </button>
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
                    <ul class="py-1" aria-labelledby="dropdownButton">
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