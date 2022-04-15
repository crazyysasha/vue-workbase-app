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
                <wb-button type="primary" @click="isEditing = !isEditing">
                    <span v-if="!isEditing">
                        <h-pencil class="inline -mt-0.5"></h-pencil>
                        Редактировать
                    </span>
                    <span v-if="isEditing">
                        <h-cloud-upload class="inline -mt-0.5"></h-cloud-upload>
                        Сохранить
                    </span>
                </wb-button>
                <wb-button
                    type="secondary"
                    v-if="isEditing"
                    @click="isEditing = false"
                >
                    <h-x class="inline -mt-0.5"></h-x>
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
