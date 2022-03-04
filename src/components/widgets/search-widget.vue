<template>
    <div class="relative">
        <div
            class="
                top-0
                absolute
                w-full
                bg-white
                rounded-3xl
                -z-10
                shadow-[0_0_10px_10px_rgb(249,115,22,.25)]
            "
            :style="{
                paddingTop: `${searchContainer?.offsetHeight}px`,
            }"
        >
            <ul class>
                <li class="px-4 py-2">sdf</li>
                <li class="px-4 py-2">sdf</li>
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
            >
                Заказать услугу
            </button>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import debounce from "lodash.debounce";
const searchContainer = ref(null);
const search = ref("");
watch(
    search,
    debounce(() => {}, 200)
);
</script>
