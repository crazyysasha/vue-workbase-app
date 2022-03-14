import { get, getCategories } from "@/api/categories";
import { computed, ref } from "vue";

const categoriesRef = ref([]);

const isLoadingRef = ref(false);

function useCategories() {

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

function useCategory() {
    const category = ref();
    const isLoading = ref(false);
    const getByIdOrSlug = (idOrSlug) => {
        isLoading.value = true;
        getByIdOrSlug(idOrSlug).then(res => {
            category = res.data;
        }).catch();
    }
}