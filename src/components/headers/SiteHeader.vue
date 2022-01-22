<template>
    <header class="sticky top-0 z-50 bg-blue-900 text-white">
        <div class="container mx-auto flex items-center">
            <router-link to="/">
                <img src="@/assets/logo-white.svg" alt="" class="w-40" />
            </router-link>
            <nav
                class="flex flex-1 items-center"
                :class="{ hidden: isLeftSideMenu }"
            >
                <router-link
                    v-for="link in links"
                    :key="link.to"
                    :to="link.to"
                    class="
                        py-2
                        px-4
                        mx-3
                        flex flex-col
                        justify-center
                        font-medium
                        hover:bg-blue-800
                    "
                    active-class="bg-blue-800"
                >
                    <img :src="link.icon" alt="" class="h-8" />
                    {{ link.label }}
                </router-link>
                <dropdown-button class="ml-auto" :items="[]">
                    <img
                        src="@/assets/icons/profile.png"
                        alt=""
                        class="h-8 mx-auto"
                    />
                    <span> Я заказчик </span>
                    <svg
                        class="
                            h-6
                            w-6
                            text-current
                            -mb-1
                            transform
                            transition-transform
                        "
                        :class="{ 'rotate-y-180': isOpen }"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        style=""
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </dropdown-button>
                <dropdown-button
                    class="ml-auto"
                    :items="[]"
                    @handler="dropdownClick"
                >
                    <img
                        src="@/assets/icons/profile.png"
                        alt=""
                        class="h-8 mx-auto"
                    />
                    <span> Я заказчик </span>
                    <svg
                        class="
                            h-6
                            w-6
                            text-current
                            -mb-1
                            transform
                            transition-transform
                        "
                        :class="{ 'rotate-y-180': isOpen }"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        style=""
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </dropdown-button>
            </nav>
        </div>
    </header>
</template>
<script>
import { useWindowSize } from "@vueuse/core";
import { computed } from "vue";
import DropdownButton from "@/components/dropdown/DropdownButton.vue";
import menuData from "@/data/menu.json";

export default {
    components: { DropdownButton },
    setup() {
        const { width } = useWindowSize();

        const isLeftSideMenu = computed(() => {
            return width.value < 1000;
        });

        const links = computed(() => menuData.map((item) => {item.icon = require(`@${item.icon}`)}));
        
        const dropdownClick = (item) => {
            console.log(item);
        };

        return { links, isLeftSideMenu, dropdownClick };
    },
};
</script>