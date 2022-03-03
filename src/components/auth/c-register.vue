<template>
    <form @submit.prevent="onRegisterHandler" class="w-[30rem]">
        <h3 class="font-semibold block text-xl md:text-xl text-center mb-6">
            Регистрация
        </h3>
        <div class="grid grid-cols-2 gap-4">
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
        <hr class="mb-4 mt-1" />
        <div class="flex flex-col">
            <div class="flex gap-4">
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
                <div class="flex-1">
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
                </div>
                <div class="flex-1">
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
                </div>
            </div>
            <div class="flex gap-4">
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
            <div class="flex gap-4">
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
                Зарегистрироваться
            </button>
        </div>
    </form>
</template>

<script setup>
import useAuth from "@/composables/auth";
import useVuelidate from "@vuelidate/core";
import { email, helpers, required, sameAs } from "@vuelidate/validators";
import { reactive, ref, watch } from "vue";

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
    password_confirmation: {
        sameAsPassword: helpers.withMessage(
            "Пароль не совпадает с подтверждением",
            sameAs(state.password)
        ),
    },
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

watch(
    () => state.password,
    () => ($externalResults.password = [])
);
watch(
    () => state.password_confirmation,
    () => ($externalResults.password_confirmation = [])
);

const { onRegister } = useAuth();

const isLoading = ref(false);

const onRegisterHandler = async () => {
    const isLocalValidateSuccess = await v$.value.$validate();

    if (!isLocalValidateSuccess) return;

    isLoading.value = true;

    const { error, user } = await onRegister(state);

    isLoading.value = false;

    if (error?.type == "validation") {
        Object.assign($externalResults, error.fields);
        return;
    }
    if (error?.type == "auth") {
        errorMessage.value = error.message;
        return;
    }

    emit("successful", user);
};
</script>
