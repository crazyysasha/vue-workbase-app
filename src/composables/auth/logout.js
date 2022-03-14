import { logout } from "@/api/auth";
import { ref } from "vue";


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
        }).catch(thrown => {
            isLoading.value = false;
            if (thrown?.response?.error) {
                error.value = thrown.response.error;
            }
        });
    };

    return {
        onLogout,
        isLoading,
    };
}