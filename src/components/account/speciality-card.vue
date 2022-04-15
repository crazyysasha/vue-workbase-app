<template>
    <div
        class="
            relative
            border border-gray-300 border-b-0
            rounded-md
            shadow-md shadow-primary/25
            overflow-hidden
            p-4
            pb-6
            mb-3
        "
    >
        <div class="flex justify-between items-center text-orange-500">
            <span class="text-lg"> Электрика </span>
            <div>
                <wb-switch
                    v-model="isActive"
                    :label="false"
                    class="scale-80"
                ></wb-switch>
            </div>
        </div>
        <div class="flex justify-between">
            <div class="">
                <p class="text-gray-400">Оказывает</p>
                <span class="text-primary">12 из 18</span>
            </div>
            <div class="">
                <div class="text-right">
                    <p class="text-gray-400">Цены указаны</p>
                    <span class="text-orange-500">В 6 услугах</span>
                </div>
            </div>
        </div>
        <div class="absolute -bottom-px left-0 w-full h-2">
            <div class="relative w-full bg-gray-300 h-full">
                <div class="absolute bottom-0 w-2/3 h-full bg-primary"></div>
                <div class="absolute bottom-0 w-1/3 h-full bg-orange-500"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import WbSwitch from "./wb-switch.vue";
const props = defineProps({
    service: {},
});

const isActive = ref(false);
</script>