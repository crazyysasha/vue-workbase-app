import { register } from "@/api/auth";
import { readonly, ref } from "vue";
import { profile as profileRef } from "../profile";
import { token as tokenRef } from "./token";

const isRegistering = ref(false);
const isRegistered = ref(false);

export default function useRegister() {

    const onRegister = async ({ name, surname, patronymic, username, email, type, password, passwordConfirmation, password_confirmation }) => {
        isRegistering.value = true;
        await register({ name, surname, patronymic, username, email, type, password, password_confirmation: password_confirmation || passwordConfirmation })
            .then(response => response?.data)
            .then(data => {
                const { token, profile } = data;
                tokenRef.value = token.value;
                profileRef.value = profile;
                return readonly(profileRef);
            })
            .finally(() => isRegistering.value = false);
    };

    return {
        onRegister,
        isRegistering: readonly(isRegistering),
        profile: readonly(profileRef),
        isRegistered: readonly(isRegistered),
    };
}