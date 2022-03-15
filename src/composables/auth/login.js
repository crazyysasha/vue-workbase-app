import { login } from "@/api/auth";
import { readonly, ref } from "vue";
import { token } from "./token";
import { useUser } from "./user";


export default function useLogin() {
    const error = ref(null);
    const data = ref(null);
    const isLoading = ref(false);
    const onLogin = async ({ username, password, type }) => {
        isLoading.value = true;
        await login({ username, password, type }).then(response => {
            return response.data?.data;
        }).then(response => {
            if ('token' in response) {
                token.value = response.token;
            }
            if ('user' in response) {
                const { user } = useUser();
                user.value = response.user;
            }
            data.value = response;
            isLoading.value = false;
        }).catch(err => {
            if (err?.response?.status < 500) {
                error.value = err.response.data?.error;
                isLoading.value = false;
            }
        });
    };
    return { onLogin, data, error, isLoading: readonly(isLoading), };
}