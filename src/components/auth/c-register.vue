<template>
    <form @submit.prevent="onRegisterHandler" class="block w-96">
        <h3 class="block text-xl md:text-xl text-center mb-6">
            Регистрация
        </h3>
        <!-- <div class="grid grid-cols-2 gap-4">
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
        </div> -->
        <div class="flex flex-col">
            <div class="">
                <div class="flex-1">
                    <c-input
                        v-model="state.name"
                        name="name"
                        class="mb-3"
                        :classes="{ 'border-red-200': v$.name.$error }"
                        :placeholder="'Имя'"
                    />
                    <div class="mb-3 font-thin text-red-500">
                        <div
                            v-for="error in v$.name.$errors"
                            v-bind:key="error.$uid"
                        >
                            {{ error.$message }}
                        </div>
                    </div>
                </div>
                <!-- <div class="flex-1">
                    <c-input
                        v-model="state.surname"
                        name="surname"
                        class="mb-3"
                        :classes="{ 'border-red-200': v$.surname.$error }"
                        :placeholder="'Фамилия'"
                    />
                    <div class="mb-3 font-thin text-red-500">
                        <div
                            v-for="error in v$.surname.$errors"
                            v-bind:key="error.$uid"
                        >
                            {{ error.$message }}
                        </div>
                    </div>
                </div> -->
                <!-- <div class="flex-1">
                    <c-input
                        v-model="state.patronymic"
                        name="patronymic"
                        class="mb-3"
                        :classes="{ 'border-red-200': v$.patronymic.$error }"
                        :placeholder="'Отчество'"
                    />
                    <div class="mb-3 font-thin text-red-500">
                        <div
                            v-for="error in v$.patronymic.$errors"
                            v-bind:key="error.$uid"
                        >
                            {{ error.$message }}
                        </div>
                    </div>
                </div> -->
            </div>
            <div class="">
                <div class="flex-1">
                    <c-input
                        v-model="state.username"
                        name="username"
                        class="mb-3"
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
                </div>
                <div class="flex-1">
                    <c-input
                        v-model="state.email"
                        name="email"
                        class="mb-3"
                        :classes="{ 'border-red-200': v$.email.$error }"
                        :placeholder="'Email'"
                    />
                    <div class="mb-3 font-thin text-red-500">
                        <div
                            v-for="error in v$.email.$errors"
                            v-bind:key="error.$uid"
                        >
                            {{ error.$message }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="flex-1">
                    <c-input
                        v-model="state.password"
                        name="password"
                        class="mb-3"
                        :classes="{ 'border-red-200': v$.password.$error }"
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
                <div class="flex-1">
                    <c-input
                        v-model="state.password_confirmation"
                        name="password_confirmation"
                        class="mb-3"
                        :classes="{
                            'border-red-200': v$.password_confirmation.$error,
                        }"
                        :type="'password'"
                        :placeholder="'Подтверждение пароля'"
                    />
                    <div class="mb-3 font-thin text-red-500">
                        <div
                            v-for="error in v$.password_confirmation.$errors"
                            v-bind:key="error.$uid"
                        >
                            {{ error.$message }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-4">
            <button 
                type="submit"
                :value="'customer'"
                class="w-full mb-3 2select-none text-white rounded-md px-4 py-2 transition-all duration-200 shadow-lg transform scale-100 bg-primary hover:bg-primary/80 disabled:bg-primary/50 shadow-primary/25 active:scale-95">
                
                Зарегистрироваться как исполнитель
            </button>
            <button 
                type="submit"
                :value="'customer'"
                class="w-full mb-3 2select-none text-white rounded-md px-4 py-2 transition-all duration-200 shadow-lg transform scale-100 bg-orange-400 hover:bg-orange-400/80 disabled:bg-orange-400/50 shadow-orange-400/25 active:scale-95">
                Зарегистрироваться как заказчик
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
                "
                :disabled="isLoading"
            >
                <span v-if="!isLoading"> Зарегистрироваться </span>
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
import { useRegister, user } from "@/composables/auth";
import useVuelidate from "@vuelidate/core";
import { email, helpers, required, sameAs } from "@vuelidate/validators";
import { reactive, watch } from "vue";

const state = reactive({
    type: "customer",
    name: "",
    surname: "",
    patronymic: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
});

const rules = {
    type: {
        required: helpers.withMessage(
            "Вы должны указать кем вы являетесь",
            required
        ),
    },
    name: {
        required: helpers.withMessage(
            "Поле имя обязательно для заполнения",
            required
        ),
    },
    surname: {
        required: helpers.withMessage(
            "Поле имя обязательно для заполнения",
            required
        ),
    },
    patronymic: {},

    username: {
        required: helpers.withMessage("Номер телефона обязателен", required),
    },
    email: {
        email: helpers.withMessage("Неверный формат почты", email),
    },
    password: {
        required: helpers.withMessage("Пароль обязателен", required),
    },
    password_confirmation: {},
};

const $externalResults = reactive({});

const v$ = useVuelidate(rules, state, { $externalResults });

const emit = defineEmits(["successful"]);

watch(
    () => state.name,
    () => ($externalResults.name = [])
);

watch(
    () => state.surname,
    () => ($externalResults.surname = [])
);

watch(
    () => state.patronymic,
    () => ($externalResults.patronymic = [])
);

watch(
    () => state.username,
    () => ($externalResults.username = [])
);

watch(
    () => state.email,
    () => ($externalResults.email = [])
);

watch([() => state.password, () => state.password_confirmation], () => {
    $externalResults.password = [];
    $externalResults.password_confirmation = [];
});

const { onRegister, isLoading, data, error } = useRegister();

const onRegisterHandler = async () => {
    const isLocalValidateSuccess = await v$.value.$validate();

    if (!isLocalValidateSuccess) return;

    await onRegister(state);
    console.log(error);
    if (error.value?.type == "validation") {
        Object.assign($externalResults, error.value?.fields);
        return;
    }
    if (error.value?.type == "auth") {
        errorMessage.value = error.value?.message;
        return;
    }

    emit("successful", user);
};
</script>
