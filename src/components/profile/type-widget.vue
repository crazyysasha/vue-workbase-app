<script setup>
import useProfileType from "@/composables/auth/type";
import { ProfileType } from "@/utils/enums";

const { profileType, onChange } = useProfileType();
</script>

<template>
    <div class="bg-white p-4 rounded-md my-4 shadow-md shadow-primary/25">
        <p class="font-medium" v-if="profileType == ProfileType.customer">
            В этом разделе показаны те заказы, которые вы разместили, или когда
            то размещали. Что бы увидеть заказы на которые вы
            откликнулись/выполняете/выполнили переключите профиль на
            <a href="javascript:;" @click="onChange(ProfileType.executor)" class="text-primary hover:text-primary/75"> режим специалиста </a>
        </p>
        <p class="font-medium" v-if="profileType == ProfileType.executor">
            В этом разделе показаны те заказы, на которые вы
            откликнулись/выполняете/выполнили. Что бы увидеть заказы размещенные
            вами, переключите профиль на
            <a href="javascript:;" @click="onChange(ProfileType.customer)" class="text-primary hover:text-primary/75"> режим заказчика </a>
        </p>
        <a href="#" class="mt-5 flex items-center text-blue-950">
            <span class="text-sm md:text-md leading-none">Подробнее</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
            </svg>
        </a>
    </div>
</template>