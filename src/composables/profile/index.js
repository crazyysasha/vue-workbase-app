import { get } from "@/api/profile";
import { readonly, ref } from "vue";


const data = ref(null);
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
        profile: readonly(data),
        onGet,
    };
}