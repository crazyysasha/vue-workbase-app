import { get } from "@/api/profile";
import { useLocalStorage } from "@vueuse/core";
import { readonly, ref } from "vue";


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
    const onGet = () => {
        const exec = async () => {
            isLoading.value = true;
            await get().then(response => response.data?.profile).then(profile => {
                data.value = profile;
                isLoaded.value = true;
                isLoading.value = false;
            });
        };
        return {
            isLoading,
            isLoaded,
            exec
        };
    };
    return {
        profile: readonly(profile),
        onGet,
    };
}