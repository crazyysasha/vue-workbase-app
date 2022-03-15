<template>
    <div>
        <div class="relative">
            <button
                @click.prevent.stop="show = !show"
                class="
                    text-center
                    xl:border-0
                    border-b border-gray-50/25
                    w-full
                    xl:px-2 xl:block
                    flex
                    items-center
                    xl:py-2
                    py-3
                "
                :class="{
                    '': headerType == 'secondary',
                    'text-black': headerType == 'primary',
                }"
            >
                <div class="mr-3">
                    <img
                        class="
                            block
                            xl:h-8 xl:w-8
                            w-6
                            h-6
                            mx-auto
                            rounded-full
                            ring-2 ring-white
                        "
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                </div>
                <div class="flex items-center">
                    <span
                        class="
                            mr-1
                            text-lg
                            xl:text-base
                            text-white
                            xl:text-black
                        "
                        >Я исполнитель</span
                    >
                    <svg
                        class="w-4 h-4 text-white xl:text-black"
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
                </div>
            </button>
            <div
                v-show="show"
                class="
                    xl:absolute
                    block
                    right-0
                    left-0
                    xl:mt-5
                    xl:bg-white
                    xl:rounded-md
                    xl:shadow-xl
                    xl:text-center
                    xl:border
                    xl:border-primary
                "
            >
                <router-link
                    to="/"
                    class="
                        xl:flex
                        block
                        xl:justify-center xl:px-4 xl:py-2
                        py-3
                        xl:ml-0
                        ml-9
                        xl:text-base
                        text-lg
                        xl:text-black
                        hover:bg-primary hover:text-white hover:rounded-t-md
                        transition-all
                        duration-300
                        ease-out
                        hover:ease-in
                        text-white
                    "
                >
                    Я заказчик
                </router-link>
                <a
                    @click.prevent.stop="!isLoading ? onLogout() : null"
                    href="javascript:;"
                    class="
                        xl:flex
                        block
                        xl:justify-center xl:px-4 xl:py-2
                        py-3
                        xl:ml-0
                        ml-9
                        xl:text-base
                        text-lg
                        xl:text-black
                        hover:bg-primary hover:text-white hover:rounded-t-md
                        transition-all
                        duration-300
                        ease-out
                        hover:ease-in
                        text-white
                    "
                    :class="{ '!bg-primary !bg-opacity-50': isLoading }"
                >
                    Выход
                </a>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useLogout, useUser } from "@/composables/auth";
import { computed, onMounted, onUnmounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
const show = ref(false);
const route = useRoute();

const { user } = useUser();

const { isLoading, data, error, onLogout } = useLogout();

const headerType = computed(() => route.meta?.header || "secondary");

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
</script>
