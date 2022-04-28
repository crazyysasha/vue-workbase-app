<script setup>
</script>
<template>
    <section class=" py-12">
        <div class="mx-auto container px-4">
            <div class="flex flex-wrap justify-center sm:justify-start">
                <div class="w-64 sm:w-80 md:w-96">
                    <div class="flex justify-between bg-white rounded-md m-2 py-2 sm:py-3 md:py-5 px-2 sm:px-4 md:px-7 max-h-28">
                        <div class="flex flex-col content-between">
                            <h4 class="font-medium text-xs sm:text-sm md:text-md lg:text-lg">Чат с поддержкой</h4>
                            <a class="text-xs sm:text-sm md:text-md lg:text-base text-primary flex items-center mt-auto" href="javascript:jivo_api.open()">
                                <span>Написать в чат</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                        <div class="">
                            <img src="http://api.workbase.uz/storage/app/media/help1.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="w-64 sm:w-80 md:w-96">
                    <div class="flex justify-between bg-white rounded-md m-2 py-2 sm:py-3 md:py-5 px-2 sm:px-4 md:px-7 max-h-28">
                        <div class="flex flex-col content-between">
                            <h4 class="font-medium text-xs sm:text-sm md:text-md lg:text-lg">Справка</h4>
                            <router-link
                                to="/legal"
                                class="text-xs sm:text-sm md:text-md lg:text-base text-primary flex items-center mt-auto">
                                <span>Открыть справку</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </router-link>
                        </div>
                        <div class="">
                            <img src="http://api.workbase.uz/storage/app/media/help2.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="w-64 sm:w-80 md:w-96">
                    <div class="flex justify-between bg-white rounded-md m-2 py-2 sm:py-3 md:py-5 px-2 sm:px-4 md:px-7 max-h-28">
                        <div class="flex flex-col content-between">
                            <h4 class="font-medium text-xs sm:text-sm md:text-md lg:text-lg">Блог</h4>
                            <router-link
                                to="/blog"
                                class="text-xs sm:text-sm md:text-md lg:text-base text-primary flex items-center mt-auto">
                                <span>Перейти</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </router-link>
                        </div>
                        <div class="">
                            <img src="http://api.workbase.uz/storage/app/media/help3.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="w-64 sm:w-80 md:w-96">
                    <div class="flex justify-between bg-white rounded-md m-2 py-2 sm:py-3 md:py-5 px-2 sm:px-4 md:px-7 max-h-28">
                        <div class="flex flex-col content-between">
                            <h4 class="font-medium text-xs sm:text-sm md:text-md lg:text-lg">Популярные вопросы</h4>
                            <router-link
                                to="/faq"
                                class="text-xs sm:text-sm md:text-md lg:text-base text-primary flex items-center mt-auto">
                                <span>Посмотреть</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </router-link>
                        </div>
                        <div class="">
                            <img src="http://api.workbase.uz/storage/app/media/help4.png" alt="">
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    </section>
</template>