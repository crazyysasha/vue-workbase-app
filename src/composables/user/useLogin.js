import { login } from "@/api/user";
import { reactive, ref } from "vue";

const isLoginingProccess = ref(false);

const errors = reactive({});

const onLogin = async (params) => {
    const { data, errors } = await login(params);

    if (errors != null) {
        console.log(errors);
        return errors;
    }
    return data;
};

export function useLogin() {
    return {
        // login,
        isLoginingProccess,
        errors,
        onLogin
    };
}