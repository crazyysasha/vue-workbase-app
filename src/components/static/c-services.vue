<script setup>
import useCategoriesApi from "@/composables/categories/collection";
import { onMounted } from "vue";
const { isLoaded, isLoading, onGetWhenNotLoaded, categories, promise } =
    useCategoriesApi();
onMounted(async () => {
    await onGetWhenNotLoaded({ with: ["priority_services"] });
});
</script>
<template>
    <section class="py-16">
        <div class="container mx-auto gap-4 py-4 grid md:grid-cols-7">
            <div class="md:col-span-2">
                <div
                    class="
                        rounded-lg
                        bg-white
                        shadow shadow-primary/25
                        p-7
                        mb-10
                    "
                >
                    <!-- <a href="#"
                    v-for="category in categories" 
                    :key="category.id"
                    :name="category.name"
                    :slug="category.slug"
                    :services="category.priority_services"
                    :iconPath="category.image?.path">
                        <router-link :to="`/${props.slug}`">
                            {{ props.name }}
                        </router-link>
                    </a> -->
                    <a
                        class="
                            text-lg
                            mb-3
                            font-medium
                            flex
                            items-center
                            justify-between
                        "
                        href="#"
                        >Репетиторы
                        <span class="font-normal text-base text-gray-400"
                            >169422</span
                        ></a
                    >
                    <a
                        class="
                            text-lg
                            mb-3
                            font-medium
                            flex
                            items-center
                            justify-between
                        "
                        href="#"
                        >Мастера по ремонту
                        <span class="font-normal text-base text-gray-400"
                            >106205</span
                        ></a
                    >
                    <a
                        class="
                            text-lg
                            mb-3
                            font-medium
                            flex
                            items-center
                            justify-between
                        "
                        href="#"
                        >Мастера красоты
                        <span class="font-normal text-base text-gray-400"
                            >67075</span
                        ></a
                    >
                    <a
                        class="
                            text-lg
                            mb-3
                            font-medium
                            flex
                            items-center
                            justify-between
                        "
                        href="#"
                        >Бухгалтеры и юристы
                        <span class="font-normal text-base text-gray-400"
                            >19421</span
                        ></a
                    >
                    <a
                        class="
                            text-lg
                            mb-3
                            font-medium
                            flex
                            items-center
                            justify-between
                        "
                        href="#"
                        >Спортивные тренеры
                        <span class="font-normal text-base text-gray-400"
                            >12475</span
                        ></a
                    >
                    <a
                        class="
                            text-lg
                            mb-3
                            font-medium
                            flex
                            items-center
                            justify-between
                        "
                        href="#"
                        >Артисты
                        <span class="font-normal text-base text-gray-400"
                            >11987</span
                        ></a
                    >
                </div>
                <div class="rounded-lg bg-white shadow shadow-primary/25 p-7">
                    <h4 class="text-xl text-center font-medium mb-10">
                        Заработайте на том, что делаете лучше всех
                    </h4>
                    <router-link
                        to="/signup"
                        class="
                            text-white
                            w-full
                            bg-gradient-to-r
                            from-blue-500
                            via-blue-600
                            to-blue-700
                            hover:bg-gradient-to-br
                            focus:ring-4 focus:outline-none focus:ring-blue-300
                            shadow-lg
                            font-medium
                            rounded-lg
                            text-md
                            block
                            px-5
                            py-2.5
                            text-center
                            mr-2
                            mb-2
                        "
                    >
                        Стать специалистом
                    </router-link>
                </div>
            </div>
            <div class="md:col-span-5 pl-10">
                <h1 class="font-bold text-3xl mb-5">Услуга</h1>
                <a class="text-xl font-semibold mb-5 block" href="#"
                    >Актёрское мастерство
                    <span class="text-sm font-semibold text-gray-400"
                        >(1561)</span
                    ></a
                >
                <div class="flex justify-between mb-10">
                    <div class="basis-3/6">
                        <a href="#" class="block mb-2"
                            >ДВИ творческий конкурс (актёрское мастерство)</a
                        >
                        <a href="#" class="block mb-2"
                            >Подготовка в театральные вузы</a
                        >
                        <a href="#" class="block mb-2">Продюсирование</a>
                        <a href="#" class="block mb-2">Риторика</a>
                        <a href="#" class="block mb-2">Сценическое движение</a>
                        <a href="#" class="block mb-2">Техника речи</a>
                    </div>
                    <div class="basis-3/6">
                        <a href="#" class="block mb-2">Драматургия</a>
                        <a href="#" class="block mb-2"
                            >Подготовка в театральные училища</a
                        >
                        <a href="#" class="block mb-2">Режиссура</a>
                        <a href="#" class="block mb-2">Сценическая речь</a>
                        <a href="#" class="block mb-2">Театральные экзамены</a>
                        <a href="#" class="block mb-2">Художественное чтение</a>
                    </div>
                </div>
                <a class="text-xl font-semibold mb-5 block" href="#"
                    >Актёрское мастерство
                    <span class="text-sm font-semibold text-gray-400"
                        >(1561)</span
                    ></a
                >
                <div class="flex justify-between mb-10">
                    <div class="basis-3/6">
                        <a href="#" class="block mb-2"
                            >ДВИ творческий конкурс (актёрское мастерство)</a
                        >
                        <a href="#" class="block mb-2"
                            >Подготовка в театральные вузы</a
                        >
                        <a href="#" class="block mb-2">Продюсирование</a>
                        <a href="#" class="block mb-2">Риторика</a>
                        <a href="#" class="block mb-2">Сценическое движение</a>
                        <a href="#" class="block mb-2">Техника речи</a>
                    </div>
                    <div class="basis-3/6">
                        <a href="#" class="block mb-2">Драматургия</a>
                        <a href="#" class="block mb-2"
                            >Подготовка в театральные училища</a
                        >
                        <a href="#" class="block mb-2">Режиссура</a>
                        <a href="#" class="block mb-2">Сценическая речь</a>
                        <a href="#" class="block mb-2">Театральные экзамены</a>
                        <a href="#" class="block mb-2">Художественное чтение</a>
                    </div>
                </div>
                <a class="text-xl font-semibold mb-5 block" href="#"
                    >Актёрское мастерство
                    <span class="text-sm font-semibold text-gray-400"
                        >(1561)</span
                    ></a
                >
                <div class="flex justify-between mb-10">
                    <div class="basis-3/6">
                        <a href="#" class="block mb-2"
                            >ДВИ творческий конкурс (актёрское мастерство)</a
                        >
                        <a href="#" class="block mb-2"
                            >Подготовка в театральные вузы</a
                        >
                        <a href="#" class="block mb-2">Продюсирование</a>
                        <a href="#" class="block mb-2">Риторика</a>
                        <a href="#" class="block mb-2">Сценическое движение</a>
                        <a href="#" class="block mb-2">Техника речи</a>
                    </div>
                    <div class="basis-3/6">
                        <a href="#" class="block mb-2">Драматургия</a>
                        <a href="#" class="block mb-2"
                            >Подготовка в театральные училища</a
                        >
                        <a href="#" class="block mb-2">Режиссура</a>
                        <a href="#" class="block mb-2">Сценическая речь</a>
                        <a href="#" class="block mb-2">Театральные экзамены</a>
                        <a href="#" class="block mb-2">Художественное чтение</a>
                    </div>
                </div>
                <a class="text-xl font-semibold mb-5 block" href="#"
                    >Актёрское мастерство
                    <span class="text-sm font-semibold text-gray-400"
                        >(1561)</span
                    ></a
                >
                <div class="flex justify-between mb-10">
                    <div class="basis-3/6">
                        <a href="#" class="block mb-2"
                            >ДВИ творческий конкурс (актёрское мастерство)</a
                        >
                        <a href="#" class="block mb-2"
                            >Подготовка в театральные вузы</a
                        >
                        <a href="#" class="block mb-2">Продюсирование</a>
                        <a href="#" class="block mb-2">Риторика</a>
                        <a href="#" class="block mb-2">Сценическое движение</a>
                        <a href="#" class="block mb-2">Техника речи</a>
                    </div>
                    <div class="basis-3/6">
                        <a href="#" class="block mb-2">Драматургия</a>
                        <a href="#" class="block mb-2"
                            >Подготовка в театральные училища</a
                        >
                        <a href="#" class="block mb-2">Режиссура</a>
                        <a href="#" class="block mb-2">Сценическая речь</a>
                        <a href="#" class="block mb-2">Театральные экзамены</a>
                        <a href="#" class="block mb-2">Художественное чтение</a>
                    </div>
                </div>
                <a class="text-xl font-semibold mb-5 block" href="#"
                    >Актёрское мастерство
                    <span class="text-sm font-semibold text-gray-400"
                        >(1561)</span
                    ></a
                >
                <div class="flex justify-between mb-10">
                    <div class="basis-3/6">
                        <a href="#" class="block mb-2"
                            >ДВИ творческий конкурс (актёрское мастерство)</a
                        >
                        <a href="#" class="block mb-2"
                            >Подготовка в театральные вузы</a
                        >
                        <a href="#" class="block mb-2">Продюсирование</a>
                        <a href="#" class="block mb-2">Риторика</a>
                        <a href="#" class="block mb-2">Сценическое движение</a>
                        <a href="#" class="block mb-2">Техника речи</a>
                    </div>
                    <div class="basis-3/6">
                        <a href="#" class="block mb-2">Драматургия</a>
                        <a href="#" class="block mb-2"
                            >Подготовка в театральные училища</a
                        >
                        <a href="#" class="block mb-2">Режиссура</a>
                        <a href="#" class="block mb-2">Сценическая речь</a>
                        <a href="#" class="block mb-2">Театральные экзамены</a>
                        <a href="#" class="block mb-2">Художественное чтение</a>
                    </div>
                </div>
                <a class="text-xl font-semibold mb-5 block" href="#"
                    >Актёрское мастерство
                    <span class="text-sm font-semibold text-gray-400"
                        >(1561)</span
                    ></a
                >
                <div class="flex justify-between mb-10">
                    <div class="basis-3/6">
                        <a href="#" class="block mb-2"
                            >ДВИ творческий конкурс (актёрское мастерство)</a
                        >
                        <a href="#" class="block mb-2"
                            >Подготовка в театральные вузы</a
                        >
                        <a href="#" class="block mb-2">Продюсирование</a>
                        <a href="#" class="block mb-2">Риторика</a>
                        <a href="#" class="block mb-2">Сценическое движение</a>
                        <a href="#" class="block mb-2">Техника речи</a>
                    </div>
                    <div class="basis-3/6">
                        <a href="#" class="block mb-2">Драматургия</a>
                        <a href="#" class="block mb-2"
                            >Подготовка в театральные училища</a
                        >
                        <a href="#" class="block mb-2">Режиссура</a>
                        <a href="#" class="block mb-2">Сценическая речь</a>
                        <a href="#" class="block mb-2">Театральные экзамены</a>
                        <a href="#" class="block mb-2">Художественное чтение</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>