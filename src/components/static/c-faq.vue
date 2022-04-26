<style scoped>


</style>
<script setup>
import { ref } from "vue";

const activeAccordion = ref("open");
</script>

<template>
    <section class="bg-white py-12 md:min-h-[500px] min-h-[auto]">
        <div class="mx-auto container px-4">
            <h1 class="text-3xl font-semibold mb-3">Часто задаваемые вопросы</h1>
                <!-- <button @click="activeAccoirdion = 'open'" class="cursor-pointer p-5 w-full text-left bg-gray-200 hover:bg-gray-300 hover:bg-gray-300">Как зарегистрироваться на сайте?</button>
                <Transition>
                    <div v-show="activeAccoirdion == 'open'" class="p-5">
                    <p>

                        Чтобы зарегистрировать аккаунт на WorkBase.uz, нажмите «Регистрация» в правом верхнем углу главной страницы сайта. Откроется окно. <br><br>

                        Далее вы можете выбрать: пройти быструю регистрацию, используя свою страницу ВКонтакте, на Фейсбуке, в Google+, Mail.ru, или зарегистрироваться с помощью электронного адреса.<br><br>

                        Нажмите на кнопку нужной социальной сети или введите адрес электронной почты  и нажмите «Зарегистрироваться».<br><br>

                        Через несколько минут после регистрации вы получите письмо на почту. Пройдите по ссылке в письме и подтвердите почтовый адрес.<br>
                    </p>
                    </div>
                </Transition>

                <button @click="activeAccoirdion = 'open2'" class="cursor-pointer p-5 w-full text-left bg-gray-200 hover:bg-gray-300 hover:bg-gray-300">Section 2</button>
                <Transition>
                    <div v-show="activeAccoirdion == 'open2'" class="p-5">
                        <p>Lorem ipsum...</p>
                    </div>
                </Transition>
                <button @click="activeAccoirdion = 'open3'" class="cursor-pointer p-5 w-full text-left bg-gray-200 hover:bg-gray-300 hover:bg-gray-300">Section 3</button>
                <Transition>
                    <div v-show="activeAccoirdion == 'open3'" class="p-5">
                        <p>Lorem ipsum...</p>
                    </div>
                </Transition> -->


                <div class="max-w-4xl">
                <ul>
                    <li class="mb-4 px-4 lg:px-12 py-8 bg-gray-200 hover:bg-gray-300 rounded-2xl">
                        <button class="flex w-full text-left cursor-pointer" @click="activeAccordion = 'open'">
                            <div class="w-auto mr-8">
                            <span class="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">1</span>
                            </div>
                            <div class="w-full mt-3">
                                <div class="flex items-center justify-between">
                                    <h3 class="text-xl font-bold">How should I develop my workflow over time?</h3>
                                    <span class="ml-4">
                                    <svg class="w-4 h-4" width="18" height="10" viewbox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.18267 9.00018C0.910673 9.26818 0.473672 9.26818 0.203672 9.00018C-0.0663284 8.73218 -0.0673279 8.29918 0.203672 8.03118L8.11167 0.201183C8.38167 -0.0668173 8.81867 -0.0668173 9.09067 0.201183L16.9987 8.03118C17.2687 8.29918 17.2687 8.73218 16.9987 9.00018C16.7277 9.26818 16.2897 9.26818 16.0197 9.00018L8.60067 1.85918L1.18267 9.00018Z" fill="#1F40FF"></path>
                                    </svg>
                                    </span>
                                </div>
                                <div v-show="activeAccordion == 'open'" class="mt-6 border-l-2 border-gray-50 pl-10">
                                    <p class="mb-5 text-xl">The point of using Lorem Ipsum is that it has a more-or-less normal:</p>
                                    <p class="mb-2 text-lg">
                                    <span class="inline-block mr-6 h-2 w-2 rounded-full bg-blue-500"></span>
                                    <span>Distribution of letters</span>
                                    </p>
                                    <p class="text-lg">
                                    <span class="inline-block mr-6 h-2 w-2 rounded-full bg-blue-500"></span>
                                    <span>Content here</span>
                                    </p>
                                </div>
                            </div>
                        </button>
                    </li>
                    <li class="mb-4 px-4 lg:px-12 py-8 bg-gray-200 hover:bg-gray-300 rounded-2xl">
                        <button class="flex w-full text-left cursor-pointer" @click="activeAccordion = 'open2'">
                            <div class="w-auto mr-8">
                            <span class="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">2</span>
                            </div>
                            <div class="w-full mt-3">
                                <div class="flex items-center justify-between">
                                    <h3 class="text-xl font-bold">Can I pay by card?</h3>
                                    <span class="ml-4">
                                    <svg class="w-4 h-4" width="18" height="10" viewbox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z" fill="#1F40FF"></path>
                                    </svg>
                                    </span>
                                </div>
                                <div v-show="activeAccordion == 'open2'" class=" mt-6 border-l-2 border-gray-50 pl-10">
                                    <p class="text-xl">The point of using Lorem Ipsum is that it has a more-or-less normal:</p>
                                </div>
                            </div>
                        </button>
                    </li>
                    <li class="mb-4 px-4 lg:px-12 py-8 bg-gray-200 hover:bg-gray-300 rounded-2xl">
                        <button class="flex w-full text-left cursor-pointer" @click="activeAccordion = 'open3'">
                            <div class="w-auto mr-8">
                            <span class="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">3</span>
                            </div>
                            <div class="w-full mt-3">
                            <div class="flex items-center justify-between">
                                <h3 class="text-xl font-bold">How often should the app be updated?</h3>
                                <span class="ml-4">
                                <svg class="w-4 h-4" width="18" height="10" viewbox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z" fill="#1F40FF"></path>
                                </svg>
                                </span>
                            </div>
                            <div v-show="activeAccordion == 'open3'" class=" mt-6 border-l-2 border-gray-50 pl-10">
                                <p class="text-xl">The point of using Lorem Ipsum is that it has a more-or-less normal:</p>
                            </div>
                            </div>
                        </button>
                    </li>
                    <li class="mb-4 px-4 lg:px-12 py-8 bg-gray-200 hover:bg-gray-300 rounded-2xl">
                        <button class="flex w-full text-left cursor-pointer" @click="activeAccordion = 'open4'">
                            <div class="w-auto mr-8">
                            <span class="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">4</span>
                            </div>
                            <div class="w-full mt-3">
                            <div class="flex items-center justify-between">
                                <h3 class="text-xl font-bold">Are Zospace apps free?</h3>
                                <span class="ml-4">
                                <svg class="w-4 h-4" width="18" height="10" viewbox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z" fill="#1F40FF"></path>
                                </svg>
                                </span>
                            </div>
                            <div v-show="activeAccordion == 'open4'" class=" mt-6 border-l-2 border-gray-50 pl-10">
                                <p class="text-xl">The point of using Lorem Ipsum is that it has a more-or-less normal:</p>
                            </div>
                            </div>
                        </button>
                    </li>
                </ul>
                </div>
            </div>
    </section>
</template>

