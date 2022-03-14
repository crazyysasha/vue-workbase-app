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
    return {
        user
    }
}