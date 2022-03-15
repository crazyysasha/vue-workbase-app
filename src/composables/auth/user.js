import { getMe, update } from "@/api/auth";
import { ref, watch, computed } from "vue";
const userRef = ref(JSON.parse(localStorage.getItem('user')) || null);

watch(userRef, (userData) => {
    if (!userData)
        localStorage.removeItem('user');
    else
        localStorage.setItem('user', JSON.stringify(userData));
})

export const user = computed({
    get() {

        return userRef.value;

    },
    set(value) {
        userRef.value = value;
    }
});

export function useUser() {

    const onGetMe = () => {
        const isLoading = ref(false);
        const error = ref();
        const exec = async () => {
            isLoading.value = false;
            error.value = null;
            return getMe().then((response) => {
                return response.data?.data;
            }).then(data => {
                isLoading.value = false;
                user.value = data;
            }).catch(error => {
                if (error?.response?.error) {
                    error.value = error.response.error;
                }
                isLoading.value = false;
            });
        }
        return {
            exec,
            isLoading,
            error,
        };
    };

    return {
        user, onGetMe,
    }
}


export function useUpdate() {
    isLoading = ref(false);
    error = ref();
    const onUpdate = async () => {
        error.value = null;
        isLoading.value = true;
        await update().then(response => {
            return response.data?.data;
        }).then(data => {
            user.value = data;
            isLoading.value = false;
        }).catch(thrown => {
            if (thrown?.response?.error) {
                error.value = thrown.response.error;
            }
            isLoading.value = false;
        });
    }

    return {
        isLoading,
        error,
        user,
        onUpdate,
    };
}