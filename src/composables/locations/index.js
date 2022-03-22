import { get } from "@/api/locations";
import { readonly, ref } from "vue";

const locations = ref([]);
const isLoading = ref(false);
const isLoaded = ref(false);

export function useLocations() {
    const exec = async () => {
        isLoading.value = true;
        await get().then(response => {
            return response.data?.data;
        }).then(locationsData => {
            locations.value = locationsData;
            isLoading.value = false;
            isLoaded.value = true;
        }).catch(err => {
            console.log(err);
        });
    };
    return {
        locations: readonly(locations),
        isLoading: readonly(isLoading),
        isLoaded: readonly(isLoaded),
        exec,
    };
}