import { logout } from "@/api/auth";
import { ref } from "vue";
import { profile } from "../profile";
import { token } from "./token";


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
            profile.value = null;
        }).catch(thrown => {
            isLoading.value = false;
            if (thrown?.response?.error) {
                error.value = thrown.response.error;
            }
            console.log(thrown);
            token.value = null;
            profile.value = null;
        });
    };

    return {
        onLogout,
        isLoading,
        data,
        error,
    };
}