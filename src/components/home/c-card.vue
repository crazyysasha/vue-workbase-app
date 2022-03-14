<template>
    <div class="bg-white rounded-xl px-5 py-5 flex flex-col">
        <div class="flex items-center mb-5">
            <div class="p-3 rounded-full bg-gray-100">
                <img :src="props.iconPath" class="h-9 w-9" alt="" />
            </div>

            <div class="ml-2">
                <h3 class="md:text-xl font-medium text-xl">
                    <router-link :to="`/${props.slug}`">
                        {{ props.name }}
                    </router-link>
                    <span class="text-base text-gray-300"> (2)</span>
                </h3>
            </div>
        </div>
        <div class="mt-2">
            <ul class="mb-5">
                <li
                    class="mb-2"
                    v-for="service in props.services"
                    :key="service.id"
                >
                    <router-link
                        class="flex items-center"
                        :to="`/${props.slug}/${service.slug}`"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-gray-400 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        {{ service.name }}
                    </router-link>
                </li>
            </ul>
        </div>

        <div class="border-t border-dashed pt-3 border-gray-400 mt-auto">
            <router-link
                :to="`category/${props.slug}`"
                class="text-blue-900 flex items-center"
            >
                Посмотреть все услуги
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-blue-900 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                </svg>
            </router-link>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    iconPath: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    services: {
        type: Array,
        default() {
            return [];
        },
    },
});
</script>

<style>
</style>