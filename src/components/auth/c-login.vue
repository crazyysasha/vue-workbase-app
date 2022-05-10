<template>
    <form @submit.prevent="onLoginHandler" class="block w-96">
        <h3 class="block text-xl md:text-xl text-center mb-6">
            Авторизация
        </h3>
        <p v-if="error" class="mb-6 text-red-500 font-thin text-sm">
            {{ error.message }}
        </p>
        <!--<div class="grid grid-cols-2 gap-4 mb-6">
             <c-radio-toggler
                name="type"
                v-model="state.type"
                :value="'executor'"
            >
                Исполнитель
            </c-radio-toggler>
            <c-radio-toggler
                name="type"
                v-model="state.type"
                :value="'customer'"
            >
                Заказчик
            </c-radio-toggler> 

        </div>-->
        <div class="flex flex-col">
            <c-input
                v-model="state.username"
                name="username"
                :classes="{ 'border-red-200': v$.username.$error }"
                :placeholder="'Номер телефона'"
            />
            <div class="mb-3 font-thin text-red-500">
                <div
                    v-for="error in v$.username.$errors"
                    v-bind:key="error.$uid"
                >
                    {{ error.$message }}
                </div>
            </div>
            <c-input
                v-model="state.password"
                name="password"
                :classes="{ 'border-red-200': v$.username.$error }"
                :type="'password'"
                :placeholder="'Пароль'"
            />
            <div class="mb-3 font-thin text-red-500">
                <div
                    v-for="error in v$.password.$errors"
                    v-bind:key="error.$uid"
                >
                    {{ error.$message }}
                </div>
            </div>
        </div>
        <div class="py-4">
            <button 
                type="submit"
                :value="'customer'"
                class="w-full mb-3 2select-none text-white rounded-md px-4 py-2 transition-all duration-200 shadow-lg transform scale-100 bg-primary hover:bg-primary/80 disabled:bg-primary/50 shadow-primary/25 active:scale-95">
                
                Войти как исполнитель
            </button>
            <button 
                type="submit"
                :value="'customer'"
                class="w-full mb-3 2select-none text-white rounded-md px-4 py-2 transition-all duration-200 shadow-lg transform scale-100 bg-orange-400 hover:bg-orange-400/80 disabled:bg-orange-400/50 shadow-orange-400/25 active:scale-95">
                Войти как заказчик
            </button>
            <!-- <button
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
                    disabled:bg-opacity-50
                "
                :disabled="isLoading"
            >
                <span v-if="!isLoading"> Войти </span>
                <svg
                    class="animate-spin h-5 w-5 text-white mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    v-else
                >
                    <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                    ></circle>
                    <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
            </button> -->
        </div>
    </form>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { reactive, watch, ref } from "vue";
import { useLogin } from "@/composables/auth";

const rules = {
    type: {
        required: helpers.withMessage(
            "Вы должны указать кем вы являетесь",
            required
        ),
    },
    username: {
        required: helpers.withMessage("Номер телефона обязателен", required),
    },
    password: {
        required: helpers.withMessage("Пароль обязателен", required),
    },
};

const state = reactive({
    type: "customer",
    username: "",
    password: "",
});

const $externalResults = reactive({});

const v$ = useVuelidate(rules, state, { $externalResults });

const emit = defineEmits(["successful"]);

watch(
    () => state.username,
    () => ($externalResults.username = [])
);
watch(
    () => state.password,
    () => ($externalResults.password = [])
);

const { onLogin, data, error, isLoading } = useLogin();

const onLoginHandler = async () => {
    const isLocalValidateSuccess = await v$.value.$validate();

    if (!isLocalValidateSuccess) return;

    await onLogin(state);

    if (error.value?.type == "validation") {
        Object.assign($externalResults, error.fields);
        return;
    }

    if (error.value?.type == "auth") {
        errorMessage.value = error.message;
        return;
    }

    emit("successful", user);
};
</script>