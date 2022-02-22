import { login } from "@/api/auth";
import { computed, ref, watch } from "vue";

const tokenRef = ref(localStorage.getItem('token'));

watch(tokenRef, (token) => {
    if (!token)
        localStorage.removeItem('token');
    else
        localStorage.setItem('token', token);
})

const userRef = ref(JSON.parse(localStorage.getItem('user')) || null);

watch(userRef, (userData) => {
    if (!userData)
        localStorage.removeItem('user');
    else
        localStorage.setItem('user', JSON.stringify(userData));
})

const user = computed(() => {
    return userRef.value;
});

const token = computed(() => {
    return tokenRef.value;
});

export default function useAuth() {


    const isAuthentificated = computed(() => !!tokenRef.value);

    const onLogin = async (credentials) => {
        const { data, error } = await login(credentials);

        if (['validation', 'auth'].includes(error?.type)) {
            return { error };
        }

        if ('token' in data) {
            tokenRef.value = data.token;
        }

        if ('user' in data) {
            userRef.value = data.user;
        }

        return { data };
    }
    const onLogout = () => {
        tokenRef.value = null;
        userRef.value = null;
    }
    const onRegister = () => { }
    return {
        isAuthentificated,
        token,
        user,
        onLogin,
        onLogout,
    };
}