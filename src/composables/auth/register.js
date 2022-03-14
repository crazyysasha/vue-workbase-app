import { register } from "@/api/auth";
import { ref } from "vue";
import { token } from "./token";
import { useUser } from "./user";

export default function useRegister() {
    const error = ref(null);
    const data = ref(null);
    const isLoading = ref(false);
    const onRegister = async (credentials = { name, surname, username, email, type, password, passwordConfirmation }) => {
        isLoading.value = true;
        await register(credentials).then(response => {
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
            if (err?.response.status < 500) {
                error.value = err.response.data?.error;
                isLoading.value = false;
            }
        });
    };
    return { onRegister, data, error, isLoading };
}