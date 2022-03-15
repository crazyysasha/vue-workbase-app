<template>
    <div>
        <div id="language" class="relative">
            <button
                @click.prevent.stop="show = !show"
                class="
                    xl:flex
                    my-2
                    hidden
                    border
                    transition-all
                    duration-300
                    ease-out
                    hover:ease-in
                    rounded-full
                    items-center
                    px-3
                    py-2
                "
                :class="{
                    'border-white hover:bg-white hover:text-primary':
                        headerType == 'secondary',
                    'border-primary hover:bg-primary hover:text-white text-black':
                        headerType == 'primary',
                }"
            >
                <span class="mr-1">RU</span>
                <svg
                    class="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
            </button>
            <div
                v-show="show"
                class="
                    absolute
                    right-0
                    left-0
                    z-50
                    mt-5
                    bg-white
                    rounded-md
                    shadow-xl
                    text-center
                    border border-primary
                "
            >
                <router-link
                    to="/"
                    class="
                        flex
                        justify-center
                        px-4
                        py-2
                        text-base text-black
                        hover:bg-primary hover:text-white hover:rounded-t-md
                        transition-all
                        duration-300
                        ease-out
                        hover:ease-in
                    "
                >
                    UZ
                </router-link>
                <router-link
                    to="/"
                    class="
                        flex
                        justify-center
                        px-4
                        py-2
                        text-base text-black
                        hover:bg-primary hover:text-white hover:rounded-b-md
                        transition-all
                        duration-300
                        ease-out
                        hover:ease-in
                    "
                >
                    EN
                </router-link>
            </div>
            <div
                class="
                    xl:hidden
                    flex
                    items-center
                    w-full
                    justify-center
                    py-3
                    mb-10
                "
            >
                <button class="px-2 py-1 rounded-md m-2">OZ</button>
                <button class="px-2 py-1 rounded-md m-2">УЗ</button>
                <button class="border px-2 py-1 rounded-md m-2">РУ</button>
                <button class="px-2 py-1 rounded-md m-2">EN</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, onUnmounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
const show = ref(false);

const route = useRoute();

const escapePressedListener = (e) => {
    if (e.keyCode == 27) show.value = false;
};
const outsideClickListener = (e) => {
    show.value = false;
};
onMounted(() => {
    document.addEventListener("keyup", escapePressedListener);
    document.addEventListener("click", outsideClickListener);
});
onUnmounted(() => {
    document.removeEventListener("keyup", escapePressedListener);
    document.removeEventListener("click", outsideClickListener);
});

const headerType = computed(() => route.meta?.header || "secondary");
</script>
