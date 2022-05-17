import { getByIdOrSlug } from "@/api/categories";
import { reactive, readonly, ref } from "vue";


// /** @type {{id: Number, name: String}} */

const category = reactive({
    id: null,
    name: null,
});

const isLoading = ref(false);
const isLoaded = ref(false);
const promise = ref(null);

export default function useCategoryApi() {

    const onGet = async (idOrSlug) => {
        isLoading.value = true;
        promise.value = getByIdOrSlug(idOrSlug)
            .then(response => response.data)
            .then(data => {
                Object.assign(category, data?.category);
                isLoading.value = false;
                isLoaded.value = true;
                return readonly(category);
            });
        return await promise.value;
    }

    const onGetWhenNotLoaded = async (idOrSlug) => {
        if (isLoaded.value) {
            return readonly(category);
        }

        if (!!!promise.value) {
            return await onGet(idOrSlug);
        }
        
        return await promise.value;
    }

    return {
        category: readonly(category),
        isLoading: readonly(isLoading),
        isLoaded: readonly(isLoaded),
        promise: readonly(promise),
        onGetWhenNotLoaded,
        onGet,
    };
}