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
                :loading="isLoading"
            ></wb-textarea>
            <wb-textarea
                v-model="state.description"
                :disabled="!isEditing"
                label="Подробно о себе"
                :loading="isLoading"
            ></wb-textarea>
            <wb-textarea
                v-model="state.education"
                :disabled="!isEditing"
                label="Образование и опыт работы"
                :loading="isLoading"
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
import { onMounted, reactive, ref, watch } from "vue";
import AccountSection from "./account-section.vue";
import WbTextarea from "./wb-textarea.vue";
import WbButton from "./wb-button.vue";
import useProfile from "@/composables/profile";
const isEditing = ref(false);
const { profile, onGet } = useProfile();

const { isLoaded, isLoading } = onGet();
watch(isLoaded, () => {
    if (isLoaded.value) Object.assign(state, profile.value);
});

const state = reactive({
    education: "",
    excerpt: "",
    description: "",
});
</script>
