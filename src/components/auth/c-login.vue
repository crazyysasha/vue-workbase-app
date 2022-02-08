<template>
    <form @submit.prevent="onLoginHandler">
        <h3 class="font-semibold block text-xl md:text-xl text-center mb-6">
            Авторизация
        </h3>
        <div class="grid grid-cols-2 gap-4 mb-6">
            <c-radio-toggler
                name="type"
                v-model="state.type"
                :value="'customer'"
            >
                Заказчик
            </c-radio-toggler>
            <c-radio-toggler
                name="type"
                v-model="state.type"
                :value="'executor'"
            >
                Исполнитель
            </c-radio-toggler>
        </div>
        <div class="flex flex-col">
            <c-input
                v-model="state.phone"
                name="phone"
                class="mb-3"
                :placeholder="'Номер телефона'"
            />
            <c-input
                v-model="state.password"
                name="password"
                class="mb-3"
                :type="'password'"
                :placeholder="'Пароль'"
            />
        </div>
        <div class="py-4">
            <button
                type="submit"
                class="
                    w-full
                    rounded-full
                    border border-primary
                    p-2
                    focus:outline-none
                    bg-primary bg-opacity-75
                    hover:bg-opacity-100
                    text-white
                    font-medium
                    transition
                    duration-200
                    text-center
                "
            >
                Войти
            </button>
        </div>
    </form>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { reactive } from "vue";
import { useLogin } from "@/composables/user/useLogin";

const state = reactive({
    type: "customer",
    phone: "",
    password: "",
});

const rules = {
    type: { required },
    phone: { required },
    password: { required },
};

const v$ = useVuelidate(rules, state);
const { onLogin } = useLogin();
const onLoginHandler = async () => {
    const isSuccess = await v$.value.$validate();

    if (!isSuccess) return;
    const { errors, data } = await onLogin(state);
    console.log(errors, data);
};
</script>

<style>
</style>