<template>
    <div>
        <button @click="logining">login</button>
        <button @click="registering">register</button>
    </div>
</template>

<script setup>
import {
    useRegister,
    useLogin,
    useUser,
    token,
    isAuthentificated,
    useRefreshToken,
    useLogout,
} from "@/composables/auth";
import { watch } from "vue";

const { onRegister, ...register } = useRegister();

const { onLogin, ...login } = useLogin();

watch(register.isLoading, (newValue, oldValue) => {
    console.log(
        `register isLoading changed. old value: '${oldValue}'. new value ${newValue}`
    );
});

watch(register.data, (newValue, oldValue) => {
    console.log(
        `register data changed. old value: '${oldValue}'. new value ${newValue}`
    );
});

watch(register.error, (newValue, oldValue) => {
    console.log(
        `register error changed. old value: '${oldValue}'. new value ${newValue}`
    );
    console.log(newValue);
});

const registering = async () => {
    console.log("registering method with fake data");
    await onRegister({
        name: "Test",
        surname: "T",
        patronymic: "a",
        username: "+998903297989",
        email: "crazyysasha@gmail.com",
        password: "asd",
        passwordConfirmation: "asdd",
    });
    console.log("registering method with real data");
    await onRegister({
        name: "Test",
        surname: "Testov",
        patronymic: "Testovich",
        username: "+998903297900",
        email: "crazyysasha@gmail.com",
        password: "asdASD123",
        passwordConfirmation: "asdASD123",
    });
};

watch(login.isLoading, (newValue, oldValue) => {
    console.log(
        `login isLoading changed. old value: '${oldValue}'. new value ${newValue}`
    );
});

watch(login.data, (newValue, oldValue) => {
    console.log(
        `login data changed. old value: '${oldValue}'. new value ${newValue}`
    );
});

watch(login.error, (newValue, oldValue) => {
    console.log(
        `login error changed. old value: '${oldValue}'. new value ${newValue}`
    );
    console.log(newValue);
});

const logining = async () => {
    console.log("logining method with fake data");
    await onLogin({
        username: "+998900000000",
        password: "asdASD123",
        type: "type",
    });

    console.log("logining method with real data");
    await onLogin({
        username: "+998903297989",
        password: "asdASD123",
        type: "executor",
    });
};


</script>

