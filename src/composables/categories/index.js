import { getCategories } from "@/api/categories";
import { computed, ref } from "vue";

const categoriesRef = ref([]);

const isLoadingRef = ref(false);

export default function useCategories() {

    const categories = computed(() => categoriesRef.value);

    const isLoading = computed(() => isLoadingRef.value);

    const getAll = async (params = {}) => {
        isLoadingRef.value = true;

        const { data } = await getCategories(params);

        categoriesRef.value = data;

        isLoadingRef.value = false;

    };

    return {
        categories,
        isLoading,
        getAll,
        //  getByIdOrSlug,
    };
}