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

    const onLogin = (credentials) => {
        const errors = {};
        if (credentials.phone != '+998903297989') {
            errors.phone = 'Неверный номер телефона!';
            return { errors };
        }
        if (credentials.password != '123123123') {
            errors.password = 'Неверный пароль!';
            return { errors };
        }
        tokenRef.value = 'xzxzxzxzxzxzxzxzxzxzxz';
        userRef.value = {
            id: 1,
            name: 'Sasha',
            surname: 'Raimov',
        };

        return {
            data: { user },
        };
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