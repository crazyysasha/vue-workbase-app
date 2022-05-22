import { get } from "@/api/categories";
import { computed, reactive, readonly, ref } from "vue";


// /** @type {{id: Number, name: String}} */

const categories = ref([]);

const isLoading = ref(false);

const promise = ref(null);

export default function useCategoriesApi() {

    const isLoaded = computed(() => categories.value.length > 0);

    const onGet = async (params = { with: [] }) => {
        categories.value = [];
        isLoading.value = true;
        promise.value = get(params)
            .then(response => response.data)
            .then(data => {
                isLoading.value = false;
                categories.value = data?.collection;
                return readonly(categories);
            });

        return await promise.value;
    }

    const onGetWhenNotLoaded = async (params = { with: [] }) => {
        if (isLoaded.value) {
            return readonly(categories);
        }

        if (!!!promise.value) {
            return await onGet(params);
        }

        return await promise.value;
    }

    return {
        categories: readonly(categories),
        isLoading: readonly(isLoading),
        isLoaded: readonly(isLoaded),
        promise: readonly(promise),
        onGetWhenNotLoaded,
        onGet,
    };
}