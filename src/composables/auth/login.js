import { login } from "@/api/auth";
import { readonly, ref } from "vue";
import { profile as profileRef } from "../profile";
import { token as tokenRef } from "./token";

const isLogining = ref(false);
const isLogined = ref(false);
export default function useLogin() {


    const onLogin = async ({ username, password, type }) => {
        isLogining.value = true;
        await login({ username, password, type })
            .then(response => response?.data)
            .then(data => {
                const { token, profile } = data;
                tokenRef.value = token.value;
                profileRef.value = profile;
                isLogined.value = true;
                return readonly(profileRef);
            }).finally(() => isLogining.value = false);
    };

    return {
        onLogin,
        isLogining: readonly(isLogining),
        profile: readonly(profileRef),
        isLogined: readonly(isLogined),
    };
}