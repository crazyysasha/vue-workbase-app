<template>
    <div>form</div>
    <form class="h-full flex flex-col relative">
        <!-- <h5
            :class="{
                'animate-pulse bg-blue-950 text-transparent rounded-md opacity-5':
                    !category,
            }"
            class="text-lg 2xl:text-xl select-none"
            v-bind:style="[
                !category ? { width: Math.random() * 100 + 100 + 'px' } : {},
            ]"
        >
            {{ category?.name ?? "loading..." }}
        </h5>

        <h4
            :class="{
                'animate-pulse bg-blue-950 text-transparent rounded-md opacity-5':
                    !category,
            }"
            class="text-xl md:text-2xl mt-2 select-none"
            :style="[
                !category ? { width: Math.random() * 100 + 400 + 'px' } : {},
            ]"
        >
            {{ category?.search_title ?? "Услуга или специалист" }}
        </h4>

        <div class="py-3 h-16 relative">
            <transition
                name="searchResultsContainer"
                enter-from-class="opacity-0 scale-y-1/2 translate-y-1/2"
                enter-active-class="transition ease-in duration-200"
                enter-to-class="opacity-100 scale-y-0 translate-y-0"
                leave-from-class="opacity-100 scale-y-0 translate-y-0"
                leave-active-class="transition ease-out duration-200"
                leave-to-class="opacity-0 scale-y-1/2 translate-y-1/2"
            >
                <div
                    v-if="open && (search != '' || results?.length > 0)"
                    class="
                        absolute
                        border border-blue-950
                        w-full
                        rounded-xl
                        bg-white
                        overflow-y-hidden
                        shadow-lg
                    "
                >
                    <div class="h-9"></div>
                    <ul
                        class="overflow-y-auto py-1"
                        :style="{ maxHeight: windowHeight * 0.5 + 'px' }"
                    >
                        <div v-if="results == null && search != ''" class="p-2">
                            <svg
                                class="
                                    animate-spin
                                    h-5
                                    w-5
                                    mx-auto
                                    text-blue-950
                                "
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
                        </div>
                        <li
                            v-else-if="results != null && results.length > 0"
                            v-for="service in results"
                            class="p-2 px-4 cursor-pointer"
                            @click.prevent="
                                setService(service);
                                open = false;
                            "
                        >
                            {service.name}
                        </li>
                        <li
                            class="p-2 px-4"
                            v-else-if="results != null && results.length == 0"
                        >
                            По вашему запросу ничего не найдено: {search}
                        </li>
                    </ul>
                </div>
            </transition>
            <input
                type="text"
                @input="
                    open = true;
                    searchHandler($event);
                "
                v-model="search"
                @focus="open = true"
                placeholder="Услуга или специалист"
                class="
                    focus:outline-none
                    rounded-xl
                    border border-blue-950
                    focus:border-blue-975
                    text-base
                    px-3
                    py-2
                    w-full
                    absolute
                    shadow-lg
                "
            />
        </div>
        <div>
            <h5>Например:</h5>
            <div>
                <button
                    v-for="service in serviceList"
                    class="
                        border border-blue-950
                        hover:shadow-md hover:border-blue-975
                        transition-all
                        duration-300
                        hover:text-blue-950
                        focus:outline-none focus:border-blue-975
                        rounded-xl
                        px-3
                        py-1
                        text-md
                        md:text-base
                        mr-2
                        mb-3
                    "
                    @click.prevent="setService(service)"
                >
                    {service.name}
                </button>
            </div>
        </div>
        <div class="sticky w-full bg-white bottom-0 pb-4 pt-2 mt-auto">
            <div class="flex justify-end">
                <button
                    @click.prevent="submit()"
                    class="
                        sm:font-medium
                        text-2xs
                        sm:text-sm
                        md:text-md
                        lg:text-base
                        2xl:text-lg
                        py-2
                        px-6
                        bg-blue-950
                        hover:bg-blue-975
                        text-white
                        rounded-lg
                        focus:outline-none focus:bg-gray-200 focus:text-blue-950
                        ml-auto
                        transition-all
                        duration-300
                    "
                    :class="{
                        'hover:bg-blue-975': !loading,
                        'animate-pulse': loading,
                    }"
                    :disabled="loading"
                >
                    <span>Продолжить</span>
                </button>
            </div>
        </div> -->
    </form>
</template>
<script setup>
import { onMounted } from "vue";

onMounted(() => console.log("asd"));
</script>