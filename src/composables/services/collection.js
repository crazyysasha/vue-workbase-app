import { get } from "@/api/services";
import { computed, readonly, ref } from "vue";


export default function useServicesApi() {

    const services = ref([]);

    const isLoading = ref(false);

    const isLoaded = computed(services.value.length > 0);

    const promise = ref(null);

    const onGet = async (params = { page: 1, perPage: 10, parent: null, category: null, with: [] }, config = {}) => {
        isLoading.value = true;
        promise.value = get(params, config)
            .then(response => response.data)
            .then(data => {
                services.value = data.collection;
                return readonly(services);
            }).finally(() => isLoading.value = false);
        return await promise.value;
    };

    return {
        services: readonly(services),
        isLoading: readonly(isLoading),
        isLoaded: readonly(isLoaded),
        promise: readonly(promise),
        onGet,
    };
}