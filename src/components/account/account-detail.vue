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
                    :loading="isLoadingProfile"
                    v-model="state.name"
                >
                </wb-input>
                <wb-input
                    label="Фамилия"
                    :disabled="!isEditing"
                    :loading="isLoadingProfile"
                    v-model="state.surname"
                >
                </wb-input>
                <wb-input
                    label="Отчество"
                    :disabled="!isEditing"
                    :loading="isLoadingProfile"
                    v-model="state.patronymic"
                >
                </wb-input>
            </div>
            <div class="grid grid-cols-3 gap-4">
                <wb-input
                    label="День рождения"
                    :disabled="!isEditing"
                    :loading="isLoadingProfile"
                    v-model="state.birthday"
                    placeholer="Не указан"
                    type="date"
                >
                </wb-input>
                <div class="flex flex-col">
                    <label for="nameField" class="text-primary"> Пол </label>
                    <input
                        type="text"
                        class="
                            px-2
                            py-1
                            rounded-md
                            border border-orange-500 border-opacity-25
                            group-hover:border-opacity-70
                            focus:!border-opacity-100 focus:outline-none
                            disabled:bg-transparent disabled:text-right
                        "
                        value="Raimov"
                    />
                </div>
                <div class="flex flex-col">
                    <label for="nameField" class="text-primary">
                        Отчество
                    </label>
                    <input
                        type="text"
                        class="
                            px-2
                            py-1
                            rounded-md
                            border border-orange-500 border-opacity-25
                            group-hover:border-opacity-70
                            focus:!border-opacity-100 focus:outline-none
                            disabled:bg-transparent disabled:text-right
                            mb-2
                        "
                        value="Doniyorovich"
                    />
                </div>
            </div>
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
import { onMounted, reactive, ref } from "vue";
import WbInput from "./wb-input";
import WbButton from "./wb-button";
import AccountSection from "./account-section";
import { user, useUser } from "@/composables/auth/user";

const isEditing = ref(false);

const { onGetMe } = useUser();

const {
    exec: execProfile,
    isLoading: isLoadingProfile,
    error: errorInLoadingProfile,
} = onGetMe();

const state = reactive({
    name: "",
    surname: "",
    patronimyc: "",
    birthday: "",
    gender: "",
    address: "",
});
onMounted(async () => {
    await execProfile();
    console.log(state, user);
    Object.assign(state, user.value);
    console.log(state, user);
});
</script>
