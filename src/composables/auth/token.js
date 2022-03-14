import { refresh } from "@/api/auth";
import { computed, ref, watch } from "vue";

const tokenRef = ref(localStorage.getItem('token'));

watch(tokenRef, (token) => {
    if (!token)
        localStorage.removeItem('token');
    else
        localStorage.setItem('token', token);
})

export const token = computed({
    get() {
        return tokenRef.value;

    },
    set(val) {
        tokenRef.value = val;
    }
});


export const isAuthentificated = computed(() => !!token.value);

const promise = ref();
const error = ref();

export function useRefreshToken() {

    const onRefresh = async () => {
        try {
            error.value = null;
            const _refresh = refresh().then(res => {
                token.value = res.data.token;
            });
            promise.value = _refresh;
            await _refresh;
            return true;
        }
        catch (e) {
            error.value = e;
            promise.value = null;
            console.error(e);
            return false;
        }
    };

    return { onRefresh, promise }
}
