<template>
    <account-section>
        <template #header>
            <h2 class="text-2xl text-primary font-medium">Личные данные</h2>
            <p class="text-gray-500">Убедитесь в правильности заполнения</p>
        </template>
        <template #default>
            <div class="grid grid-cols-3 gap-4 -mx-1">
                <wb-input
                    label="Имя"
                    :disabled="!isEditing"
                    :loading="isLoading"
                    v-model="state.name"
                >
                </wb-input>
                <wb-input
                    label="Фамилия"
                    :disabled="!isEditing"
                    :loading="isLoading"
                    v-model="state.surname"
                >
                </wb-input>
                <wb-input
                    label="Отчество"
                    :disabled="!isEditing"
                    :loading="isLoading"
                    v-model="state.patronymic"
                >
                </wb-input>
                <wb-input
                    label="День рождения"
                    :disabled="!isEditing"
                    :loading="isLoading"
                    v-model="state.birthday"
                    placeholder="Не указан"
                    type="date"
                ></wb-input>
                <wb-select
                    v-model="state.gender"
                    label="Пол"
                    :disabled="!isEditing"
                >
                    <option disabled :selected="!state.gender">
                        Не указан
                    </option>
                    <option value="man">Мужской</option>
                    <option value="woman">Женский</option>
                </wb-select>
                <wb-input
                    label="Адрес"
                    :disabled="!isEditing"
                    :loading="isLoading"
                    v-model="state.address"
                    placeholder="Не указан"
                    type="text"
                ></wb-input>
            </div>
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
import WbInput from "./wb-input";
import WbSelect from "./wb-select";
import WbButton from "./wb-button";
import AccountSection from "./account-section";
import useProfile from "@/composables/profile";

const isEditing = ref(false);
const { onGet, profile } = useProfile();

const { isLoading, isLoaded } = onGet();

watch(isLoaded, () => {
    if (isLoaded.value) Object.assign(state, profile.value);
});

const state = reactive({
    name: "",
    surname: "",
    patronymic: "",
    birthday: "",
    gender: null,
    address: "",
});
</script>
