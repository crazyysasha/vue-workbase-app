import { get } from "@/api/settings";
import { useStorage } from "@vueuse/core";
import { reactive, readonly, ref } from "vue";

const settings = useStorage(
    'settings',
    undefined,
    undefined,
    {
        serializer: {
            read: (data) => {
                const { value, expired } = JSON.parse(data);
               
                console.log(data);
                if (expired > Date.now()) {
                    return value;
                }
                return {
                    advantages: [],
                };
            },
            write: (value) => {
                return JSON.stringify({ value, expired: Date.now() + 3600000 })
            },
        }
    },
);

const error = ref(null);
const isLoading = ref(false);
console.log(settings.value?.advantages);
const isLoaded = ref(settings.value?.advantages.length > 0 || settings.value?.questions.length > 0);


export default function useSettings() {

    const exec = async () => {
        isLoading.value = true;
        await get().then(response => response.data?.data).then(data => {
            settings.value = data;
            isLoading.value = false;
            isLoaded.value = true;
        }).catch(errorObj => {
            error.value = errorObj?.response?.data;
        });
    }

    return {
        settings: readonly(settings),
        isLoaded: readonly(isLoaded),
        isLoading: readonly(isLoading),
        error: readonly(error),
        exec,
    };
}
