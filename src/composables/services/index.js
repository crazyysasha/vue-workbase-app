import { get } from "@/api/services";
import { Axios } from "axios";
import { readonly, ref } from "vue";


const services = ref([]);
const isLoading = ref(false);
const isLoaded = ref(false);
const promise = ref(null);

const cancelController = ref(null);

export default function useServicesApi(params = { page: 1, perPage: 10, search: null, category: null, parent: null, nested: null, }) {
    const onGet = async (extraParams = { page: 1, perPage: 10, search: null, category: null, parent: null, nested: null, }) => {
        isLoading.value = true;
        const mergedParams = {};
        Object.assign(mergedParams, params, extraParams);
        cancelController.value = new AbortController();
        promise.value = get(mergedParams, { signal: cancelController.value.signal })
            .then(response => response.data)
            .then(data => {
                services.value = data.collection;
                isLoaded.value = true;
                return readonly(services);
            }).finally(() => isLoading.value = false);

        return await promise.value;
    };

    const cancel = () => {
        if (cancelController.value) {
            cancelController.value.abort();
        }
    }
    return {
        isLoading: readonly(isLoading),
        isLoaded: readonly(isLoaded),
        services: readonly(services),
        promise: readonly(promise),
        onGet,
        cancel,
    };
}