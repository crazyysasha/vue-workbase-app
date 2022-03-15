<script setup>
import { ref } from "vue";

</script>

<template>
    <section class="py-12 bg-white">
        <div class="container m-auto px-3">
            <div
                class="
                    md:flex
                    justify-between
                    2xl:px-20
                    pb-12
                    xl:grid xl:grid-cols-2
                    gap-4
                "
            >
                <div class="w-full">
                    <h2
                        class="
                            text-2xl text-center
                            md:text-left md:text-3xl
                            font-medium
                            pb-4
                            md:pb-8
                        "
                    >
                        Как нанять
                        <span class="text-blue-800">специалиста?</span>
                    </h2>
                    <ul>
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
                    </ul>
                </div>
                <div class="w-full pt-4 md:pt-0">
                    <div class="relative md:w-10/12 w-full md:ml-auto ml-0">
                        <img
                            src="@/assets/temp/MaskGroup.png"
                            alt=""
                            class="w-full"
                        />
                    </div>
                </div>
            </div>
            <div
                class="
                    md:flex
                    justify-between
                    2xl:px-20
                    xl:grid xl:grid-cols-2
                    gap-4
                "
            >
                <div class="w-full xl:order-2">
                    <h2
                        class="
                            text-2xl text-center
                            md:text-left md:text-3xl
                            font-medium
                            pb-4
                            md:pb-8
                        "
                    >
                        Как стать
                        <span class="text-blue-800">исполнителем?</span>
                    </h2>
                    <ul>
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
                                    Заполните профиль так, чтобы Вам самому
                                    захотелось себя нанять. Чем больше
                                    информации Вы заполните о себе, тем больше
                                    Вам смогут довериться Заказчики.
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
                                    Выберите задание, которое Вы могли и хотели
                                    бы выполнить. Договоритесь с Заказчиком об
                                    устраивающей вас цене и условиях выполнения
                                    заказа.
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
                                    оставить отзыв и оценку выбранному
                                    Заказчику.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="md:w-10/12 w-full xl:order-1 pt-4 md:pt-0">
                    <div class="relative">
                        <img
                            src="@/assets/temp/MaskGroup2.png"
                            alt=""
                            class="w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>