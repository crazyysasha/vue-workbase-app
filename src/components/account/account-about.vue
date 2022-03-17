<template>
    <account-section class="mb-3">
        <template #header>
            <h2 class="text-2xl text-primary font-medium">О себе</h2>
            <p class="text-gray-500">Расскажите немного о себе</p>
        </template>
        <template #default>
            <wb-textarea
                v-model="state.excerpt"
                :disabled="!isEditing"
                label="Коротко о себе"
            ></wb-textarea>
            <wb-textarea
                v-model="state.description"
                :disabled="!isEditing"
                label="Подробно о себе"
            ></wb-textarea>
            <wb-textarea
                v-model="state.education"
                :disabled="!isEditing"
                label="Образование и опыт работы"
            ></wb-textarea>
        </template>
        <template #footer>
            <div class="flex gap-4">
                <wb-button
                    type="primary"
                    v-if="!isEditing"
                    @click="isEditing = true"
                >
                    <svg
                        class="w-5 h-5 inline -mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                    </svg>
                    Редактировать
                </wb-button>

                <wb-button
                    type="primary"
                    v-if="isEditing"
                    @click="isEditing = false"
                >
                    <svg
                        class="w-5 h-5 inline -mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                    </svg>
                    Сохранить
                </wb-button>
                <wb-button
                    type="secondary"
                    v-if="isEditing"
                    @click="isEditing = false"
                >
                    <svg
                        class="w-5 h-5 inline -mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                    Отмена
                </wb-button>
            </div>
        </template>
    </account-section>
</template>

<script setup>
import { reactive, ref } from "vue";
import AccountSection from "./account-section.vue";
import WbTextarea from "./wb-textarea.vue";
import WbButton from "./wb-button.vue";
const isEditing = ref(false);

const state = reactive({
    education:
        'Ташкентский государственный технический унивеситет, работал в компании "Электромонтаж Сервис" с 2010 по 2019 год, на данный момент работаю со своей командой.',
    excerpt:
        "Техник-электрик, большой опыт в решении ваших электромонтажных задач. Выбрав меня вы облегчите себе текущий или наступаюшую стадию электрофикации. Обещаю,результатом останетесь довольны! Работу сделаю быстро и качественно.",
    description:
        "Техник-электрик, большой опыт в решении ваших электромонтажных задач. Выбрав меня вы облегчите себе текущий или наступаюшую стадию электрофикации. Обещаю,результатом останетесь довольны! Работу сделаю быстро и качественно.",
});
</script>
