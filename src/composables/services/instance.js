
import { getByIdOrSlug } from "@/api/services";
import { readonly, ref } from "vue";


export default function useServiceApi() {

    const service = ref();

    const isLoading = ref(false);

    const isLoaded = ref(false);

    const promise = ref(null);

    const onGet = async (idOrSlug, params = { with: [], count: [] }, config = {}) => {
        isLoading.value = true;
        promise.value = getByIdOrSlug(idOrSlug, params, config)
            .then(response => response.data)
            .then(data => {
                service.value = data.service;
                isLoaded.value = true;
                return readonly(service);
            }).finally(() => isLoading.value = false);
        return await promise.value;
    };

    return {
        service: readonly(service),
        isLoading: readonly(isLoading),
        isLoaded: readonly(isLoaded),
        promise: readonly(promise),
        onGet,
    };
}