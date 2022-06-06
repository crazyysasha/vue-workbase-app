import { get } from "@/api/profile";
import { useAxios } from "@vue-composable/axios";
import { useLocalStorage } from "@vueuse/core";
import { readonly, ref } from "vue";
import useApi from "../api";


export const profile = useLocalStorage('profile', null, {
    serializer: {
        write(value) {
            return JSON.stringify(value);
        },
        read(value) {
            return JSON.parse(value || {});
        }
    }
});

const isLoading = ref(false);
const isLoaded = ref(false);


export default function useProfile() {
    const onGet = () => useApi((params) => get(params));
    return {
        profile: readonly(profile),
        onGet,
    };
}