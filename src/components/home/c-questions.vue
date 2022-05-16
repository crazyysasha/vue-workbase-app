<script setup>
import useSettings from "@/composables/settings";
import { ref } from "vue";
const { settings } = useSettings();
</script>

<template>
    <section class="py-12 bg-white">
        <div class="container m-auto px-3">
            <div v-for="(question, index) in settings?.questions"
                :key="index"
                class="
                    md:flex
                    justify-between
                    2xl:px-20
                    pb-12
                    xl:grid xl:grid-cols-2
                    gap-4
                "
            >
                <div class="w-full"                 
                    :class="{' order-2':  index % 2 === 1}"
                >
                    <h2
                        class="
                            text-2xl text-center
                            md:text-left md:text-3xl
                            font-medium
                            pb-4
                            md:pb-8
                        "
                        v-html="question.title"
                    >
                    </h2>
                    <div
                        class="text-base md:text-md text-gray-700"
                        v-html="question.description"
                    ></div>
                    <!-- <ul>
                        <li class="flex mb-8">
                            <div
                                class="
                                    w-6
                                    h-6
                                    rounded-full
                                    justify-center
                                    flex
                                    items-center
                                "
                            >
                                <div
                                    class="bg-orange-400 w-3 h-3 rounded-full"
                                ></div>
                            </div>
                            <div class="ml-5">
                                <p class="text-base md:text-md text-gray-700">
                                    Используя подсказки, опишите работу которую
                                    необходимо выполнить для подбора подходящего
                                    специалиста. Процесс заполнения деталей по
                                    работе займет не более 10 минут.
                                </p>
                            </div>
                        </li>
                        <li class="flex mb-8">
                            <div
                                class="
                                    w-6
                                    h-6
                                    rounded-full
                                    justify-center
                                    flex
                                    items-center
                                "
                            >
                                <div
                                    class="bg-orange-400 w-3 h-3 rounded-full"
                                ></div>
                            </div>
                            <div class="ml-5">
                                <p class="text-base md:text-md text-gray-700">
                                    Специалисты напишут Вам сами, а Вам только
                                    необходимо выбрать того, кто Вам лучше всего
                                    подходит и договориться о цене.
                                </p>
                            </div>
                        </li>
                        <li class="flex mb-8">
                            <div
                                class="
                                    w-6
                                    h-6
                                    rounded-full
                                    justify-center
                                    flex
                                    items-center
                                "
                            >
                                <div
                                    class="bg-orange-400 w-3 h-3 rounded-full"
                                ></div>
                            </div>
                            <div class="ml-5">
                                <p class="text-base md:text-md text-gray-700">
                                    После выполнения работы, не забудьте
                                    оставить честный отзыв и оценку выбранному
                                    специалисту.
                                </p>
                            </div>
                        </li>
                    </ul> -->
                </div>
                <div class="w-full pt-4 md:pt-0">
                    <div class="relative md:w-10/12 w-full "
                        :class="{' md:ml-auto ml-0':  index % 2 === 0}">
                        <img
                            :src="question.image"
                            :alt="question.title"
                            class="w-full rounded-tl-2xl rounded-br-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>