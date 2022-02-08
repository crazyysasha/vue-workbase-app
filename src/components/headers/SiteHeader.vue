<template>
    <header class="sticky top-0 z-50 bg-primary text-white">
        <div class="container mx-auto flex items-center justify-between">
            <router-link to="/" class="py-2">
                <img src="@/assets/logo-white.svg" alt="" class="w-40" />
            </router-link>
            <nav class="font-medium py-4 flex gap-4">
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
                </button>
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
                    "
                >
                    <h-pencil class="mr-2"></h-pencil>
                    Регистрация
                </button>
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
        <c-login></c-login>
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

const showLoginModal = ref(false);
const showRegisterModal = ref(false);
</script>