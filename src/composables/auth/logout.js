import { logout } from "@/api/auth";
import { ref } from "vue";
import { token } from "./token";
import { user } from "./user";


const isLoading = ref(false);


export function useLogout() {
    const data = ref();
    const error = ref();
    const onLogout = async () => {
        isLoading.value = true;
        await logout().then(response => {
            return response.data?.data;
        }).then(response => {
            isLoading.value = false;
            data.value = response;
            token.value = null;
            user.value = null;
        }).catch(thrown => {
            isLoading.value = false;
            if (thrown?.response?.error) {
                error.value = thrown.response.error;
            }
            console.log(thrown);
            token.value = null;
            user.value = null;
        });
    };

    return {
        onLogout,
        isLoading,
        data,
        error,
    };
}