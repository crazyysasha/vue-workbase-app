<template>
  <section class="bg-white rounded-md shadow-md shadow-primary/25">
    <div class="p-4">
        <div class="grid grid-cols-3 gap-4">
            <div class="bg-white rounded-md shadow-md shadow-primary/25" >
                <h3 class="font-medium text-2xl text-primary text-center">Фото работ</h3>
                <div class="flex flex-col">
                    <div class="flex items-center justify-center w-full h-20">

                        <!-- For image -->

                        <span class="text-gray-400 font-medium">
                            Нет фото
                        </span>
                    </div>
                    <div class="mx-auto">
                        <wb-button type="primary"> 
                            Добавить
                        </wb-button>
                    </div>
                </div>

                <div class="my-5 text-center">
                    <a class="border border-primary text-primary px-4 py-2 my-2 rounded-md transition-all duration-300 hover:bg-primary hover:text-white text-sm md:text-md lg:text-base 2xl:text-lg" href="#">
                        <span>Пройти сертификацию</span>
                    </a>
                </div>
                
            </div>

            <div class="bg-white rounded-md shadow-md shadow-primary/25" >
                <h3 class="font-medium text-2xl text-primary text-center">Фото работ</h3>
                <div class="flex flex-col">
                    <div class="flex items-center justify-center w-full h-20">

                        <!-- For image -->

                        <span class="text-gray-400 font-medium">
                            Нет фото
                        </span>
                    </div>
                    <div class="mx-auto">
                        <wb-button type="primary"> 
                            Добавить
                        </wb-button>
                    </div>
                </div>

                <div class="my-5 text-center">
                    <a class="border border-primary text-primary px-4 py-2 my-2 rounded-md transition-all duration-300 hover:bg-primary hover:text-white text-sm md:text-md lg:text-base 2xl:text-lg" href="#">
                        <span>Пройти сертификацию</span>
                    </a>
                </div>
                
            </div>

            <div class="bg-white rounded-md shadow-md shadow-primary/25" >
                <h3 class="font-medium text-2xl text-primary text-center">Фото работ</h3>
                <div class="flex flex-col">
                    <div class="flex items-center justify-center w-full h-20">

                        <!-- For image -->

                        <span class="text-gray-400 font-medium">
                            Нет фото
                        </span>
                    </div>
                    <div class="mx-auto">
                        <wb-button type="primary"> 
                            Добавить
                        </wb-button>
                    </div>
                </div>

                <div class="my-5 text-center">
                    <a class="border border-primary text-primary px-4 py-2 my-2 rounded-md transition-all duration-300 hover:bg-primary hover:text-white text-sm md:text-md lg:text-base 2xl:text-lg" href="#">
                        <span>Пройти сертификацию</span>
                    </a>
                </div>
                
            </div>
           
        </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import AccountSection from "./account-section.vue";
import WbButton from "./wb-button.vue";
import WbSelect from "./wb-select.vue";
</script>