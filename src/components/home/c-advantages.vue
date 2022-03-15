<script setup>
import { ref } from "vue";

const advantages = ref([
    {
        title: "Мобильность",
        description:
            "Всего За 10 минут Вы можете выбрать подходящего Заказчика и Специалиста",
    },
    {
        title: "Достойная оплата",
        description:
            "Заказчики сами указывают свой бюджет, а Специалисты могут предложить свою цену за услугу",
    },
    {
        title: "Выгода",
        description:
            "Пользователи WorkBase не тратят деньги на рекламу и аренду офиса",
    },
    {
        title: "Надежность",
        description:
            "WorkBase приоритезирует пользователей прошедших верификацию",
    },
    {
        title: "Гибкость",
        description:
            "Вы сами напрямую договариваетесь о времени и деталях работы",
    },

    {
        title: "Безопасная сделка",
        description:
            'В WorkBase возможно использование функции "Безопасный платеж"',
    },
]);
</script>

<template>
    <div class="bg-white">
        <div class="mx-auto container p-4 2xl:px-20 pb-0">
            <h2 class="text-3xl font-medium mb-5 text-center md:text-left">
                Ключевые преимущества <span class="text-primary">WorkBase</span>
            </h2>
        </div>
        <div
            class="
                container
                mx-auto
                grid
                gap-2
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3
                p-4
                2xl:px-20
                pb-10
            "
        >
            <!-- TODO: после подключения API вставить на key -> id приемущества -->
            <div
                v-for="(advantage, index) in advantages"
                :key="index"
                class="
                    flex
                    p-2
                    shadow-primary
                    hover:shadow-lg
                    transition
                    duration-200
                    rounded-xl
                    cursor-pointer
                    group
                "
            >
                <div class="py-1 relative">
                    <!-- <div class="w-20 h-20 flex justify-center items-center rounded-full">
                        <img src="@/assets/logo.svg" alt="" class="" />
                    </div>
                    <div
                        class="
                            absolute
                            inset-0
                            rounded-full
                            bg-orange-400
                            text-4xl
                            w-20
                            h-20
                            flex
                            justify-center
                            items-center
                            text-white
                            opacity-0
                            group-hover:opacity-50
                        "
                    >
                        <div class="align-top">0{{ index + 1 }}</div>
                    </div> -->
                    <div
                        class="
                            rounded-full
                            bg-orange-400
                            text-4xl
                            w-20
                            h-20
                            flex
                            justify-center
                            items-center
                            text-white
                        "
                    >
                        <div class="align-top">0{{ index + 1 }}</div>
                    </div>
                </div>
                <div class="px-4">
                    <h4 class="text-2xl mb-2">
                        {{ advantage.title }}
                    </h4>
                    <div
                        class="text-sm text-gray-500"
                        v-html="advantage.description"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>