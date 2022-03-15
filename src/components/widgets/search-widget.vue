<template>
    <div class="relative">
        <div
            class="
                top-0
                absolute
                w-full
                bg-white
                rounded-3xl
                overflow-hidden
                -z-10
            "
            :style="{
                paddingTop: `${searchContainer?.offsetHeight}px`,
            }"
        >
            <ul :class="{ hidden: !isOpen }">
                <li v-if="loader" class="px-4 py-4 text-center">
                    <svg
                        class="animate-spin h-5 w-5 text-primary mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                        ></circle>
                        <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                </li>
                <li
                    v-else-if="data?.data.length > 0"
                    v-for="service in data?.data"
                    :key="service.id"
                    class="
                        px-4
                        py-2
                        cursor-pointer
                        hover:bg-primary hover:bg-opacity-10
                        focus:bg-primary focus:bg-opacity-20 focus:animate-pulse
                    "
                    tabindex="0"
                    @click="navigateTo(service)"
                >
                    {{ service.name }}
                </li>
                <li class="py-3 px-4" v-else>
                    По вашему запросу ничего не найдено
                </li>
            </ul>
        </div>
        <div class="group z-30" ref="searchContainer">
            <input
                v-model="search"
                type="text"
                class="
                    w-full
                    p-3
                    px-5
                    rounded-full
                    focus:outline-none
                    group-hover:shadow-[0_0_10px_10px_rgb(249,115,22,.25)]
                    focus:!shadow-[0_0_10px_10px_rgb(249,115,22,.5)]
                "
                @keypress.enter="
                    data?.data.length > 0 ? navigateTo(data.data[0]) : ''
                "
                @click.prevent.stop="search.length > 0 ? (isOpen = true) : ''"
                :class="{
                    'shadow-[0_0_10px_10px_rgb(249,115,22,.25)]': isOpen,
                }"
                ref="searchField"
            />
            <button
                type="button"
                class="
                    p-2
                    px-4
                    absolute
                    inset-y-1
                    right-1
                    bg-orange-400
                    rounded-full
                    text-white
                "
                @click="data?.data.length > 0 ? navigateTo(data.data[0]) : ''"
            >
                <span class="md:block hidden"> Заказать услугу</span>
                <span class="md:hidden block">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import debounce from "lodash.debounce";
import { useAxios } from "@vue-composable/axios";
import { useRouter } from "vue-router";
import Typed from "typed.js";

const searchContainer = ref(null);
const search = ref("");
const { loading, data, exec } = useAxios();

const isOpen = ref(false);
const loader = ref(true);

watch(data, () => {
    loader.value = false;
});

watch(search, () => {
    if (search.value.length) isOpen.value = true;
    else isOpen.value = false;
});

watch(
    search,
    debounce(
        () =>
            exec({
                url: "http://api.workbase.uz/api/crazy/freelancer/v1.0.1/services",
                params: { search: search.value, with: ["category"] },
            }),
        200
    )
);
const router = useRouter();
const navigateTo = (service) => {
    router.push(`/${service.category.slug}/${service.slug}`);
};
const escapePressedListener = (e) => {
    if (e.keyCode == 27) isOpen.value = false;
};
const outsideClickListener = (e) => {
    isOpen.value = false;
};
onMounted(() => {
    document.addEventListener("keyup", escapePressedListener);
    document.addEventListener("click", outsideClickListener);
});
onUnmounted(() => {
    document.removeEventListener("keyup", escapePressedListener);
    document.removeEventListener("click", outsideClickListener);
});

const searchField = ref(null);
onMounted(() => {
    const typed = new Typed(searchField.value, {
        attr: "placeholder",
        strings: [
            "Например: SMM",
            "Например: Детский врач",
            "Например: Уборка квартиры",
            "Например: Маникюр",
            "Например: Ремонт телефонов",
            "Например: Медсестра",
            "Например: Бухгалтеры",
            "Например: Химчистка",
            "Например: Создание сайтов",
            "Например: SMM",
            "Например: Детский врач",
            "Например: Уборка квартиры",
            "Например: Маникюр",
            "Например: Ремонт телефонов",
            "Например: Медсестра",
            "Например: Бухгалтеры",
            "Например: Химчистка",
            "Например: Создание сайтов",
            "Например: SMM",
            "Например: Детский врач",
            "Например: Уборка квартиры",
            "Например: Маникюр",
            "Например: Ремонт телефонов",
            "Например: Медсестра",
            "Например: Бухгалтеры",
            "Например: Химчистка",
            "Например: Создание сайтов",
            "Например: SMM",
            "Например: Детский врач",
            "Например: Уборка квартиры",
            "Например: Маникюр",
            "Например: Ремонт телефонов",
            "Например: Медсестра",
            "Например: Бухгалтеры",
            "Например: Химчистка",
            "Например: Создание сайтов",
        ],
        smartBackspace: true,

        cursorChar: "|",
        typeSpeed: 60,
        loop: true,
        backSpeed: 40,
    });
});
</script>
