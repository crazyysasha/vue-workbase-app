import { getProfile, update } from "@/api/auth";
import { ref, watch, computed, readonly } from "vue";
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
const getProfilePromise = ref(null);
const getProfileIsLoading = ref(false);
export function useUser() {

    const onGetMe = () => {
        const error = ref();
        const exec = async () => {
            getProfileIsLoading.value = true;
            error.value = null;
            const _promise = getProfile().then(async (response) => {
                return response.data?.data;
            }).then(data => {
                getProfileIsLoading.value = false;
                user.value = data;
                getProfilePromise.value = null;
            }).catch(error => {
                if (error?.response?.error) {
                    error.value = error.response.error;
                }
                getProfileIsLoading.value = false;
                getProfilePromise.value = null;
            });
            getProfilePromise.value = _promise;
            return _promise;
        }
        return {
            exec,
            isLoading: readonly(getProfileIsLoading),
            error: readonly(error),
            promise: getProfilePromise,
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
