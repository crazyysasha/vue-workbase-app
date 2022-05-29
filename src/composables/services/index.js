import { get } from "@/api/services";
import { computed, readonly, ref } from "vue";


const services = ref([]);
const isLoading = ref(false);
const promise = ref(null);
const isLoaded = ref(false);

const cancelController = ref(null);

export default function useServicesApi(params = { page: 1, perPage: 10, search: null, category: null, parent: null, nested: null, }) {

    const onGet = async (extraParams = { page: 1, perPage: 10, search: null, category: null, parent: null, nested: null, }) => {

        isLoading.value = true;
        const mergedParams = {};
        Object.assign(mergedParams, params, extraParams);
        cancelController.value = new AbortController();
        await new Promise((resolve) => setTimeout(resolve, 2000));
        promise.value = get(mergedParams, { signal: cancelController.value.signal })
            .then(response => response.data)
            .then(data => {
                services.value = data.collection;
                isLoaded.value = true;
                return readonly(services);
            }).finally(() => { isLoading.value = false; });

        return await promise.value;
    };

    const cancel = () => {
        if (cancelController.value) {
            cancelController.value.abort();
        }
    }
    const clear = () => {
        services.value = [];
        isLoaded.value = false;
    }
    return {
        isLoading: readonly(isLoading),
        isLoaded: readonly(isLoaded),
        services: readonly(services),
        promise: readonly(promise),
        onGet,
        cancel,
        clear,
    };
}