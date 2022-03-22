<template>
    <account-section class="mb-3" anchor="">
        <template #header>
            <h2 class="text-2xl text-primary font-medium">Профиль</h2>
            <p class="text-gray-500">Так пользователи видят ваш профиль</p>
        </template>
        <template #default>
            <div class="flex flex-col md:flex-row">
                <div class="rounded-full mx-auto md:mx-0">
                    <img
                        src="@/assets/images/user.png"
                        class="
                            w-32
                            h-32
                            scale-75
                            hover:scale-100
                            transition-all
                            duration-200
                        "
                    />
                </div>
                <div
                    class="
                        flex flex-col
                        p-1
                        text-center
                        md:text-left
                        mx-auto
                        md:mx-0
                    "
                >
                    <div class="text-orange-500 font-medium">Заказчик</div>
                    <h2 class="text-xl font-medium mb-2">
                        Sasha Raimov Doniyorovich
                    </h2>
                    <div class="text-green-600 leading-none mb-2">
                        <span
                            class="
                                w-2.5
                                h-2.5
                                rounded-full
                                bg-green-600
                                inline-block
                            "
                        ></span>
                        Онлайн
                    </div>
                    <div class="mb-2">
                        <div
                            class="
                                p-1
                                px-3
                                rounded-full
                                text-white
                                bg-green-600
                                inline-block
                                leading-none
                            "
                        >
                            <svg
                                class="w-5 h-5 inline-block"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                ></path></svg
                            >Паспорт проверен
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template #footer>
            <div class="gap-4 flex flex-wrap justify-center md:justify-start">
                <div class="">
                    <span>
                        <svg
                            class="w-5 h-5 inline -mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            ></path>
                        </svg>
                    </span>
                    <span> 55 Отзывов </span>
                </div>
                <div class="">
                    <span>
                        <svg
                            class="w-5 h-5 inline text-yellow-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            ></path>
                        </svg>
                    </span>
                    <span> средняя оценка: 4.7 </span>
                </div>
                <!-- Данные пользователя проверены специалистами WorkBase -->
            </div>
        </template>
    </account-section>
</template>

<script setup>
import AccountSection from "./account-section.vue";
</script>
