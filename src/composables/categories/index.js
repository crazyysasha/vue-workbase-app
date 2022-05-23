import { get, getByIdOrSlug } from "@/api/categories";
import { computed, readonly, ref } from "vue";

const categories = ref([]);

const isLoading = ref(false);

const isLoaded = ref(false);

const promise = ref();

export function useCategoriesApi() {

    const exec = async (params = {}) => {
        isLoading.value = true;

        promise.value = get(params);

        const { data } = await promise.value;

        categories.value = data?.data || [];
        isLoading.value = false;
        isLoaded.value = true;

    };

    return {
        categories: readonly(categories),
        isLoaded: readonly(isLoaded),
        isLoading: readonly(isLoading),
        promise: readonly(promise),
        exec,
    };
}
