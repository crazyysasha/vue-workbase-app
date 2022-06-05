import { get } from "@/api/services";
import { computed, reactive, readonly, ref } from "vue";
import useApi from "@/composables/api";

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

export function useServicesCollection() {
    const collection = ref([]);

    const pagination = reactive({
        currentPage: 0,
        lastPage: 0,
        perPage: 0,
        total: 0,
        path: null,
    });

    const onGet = () => {
        return useApi(
            (params) => get(params),
            (data) => {
                collection.value = data.collection;
                Object.assign(pagination, data.pagination);
            });
    }

    return {
        collection: readonly(collection),
        pagination: readonly(pagination),
        onGet,
    };
}