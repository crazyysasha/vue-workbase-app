import { getByIdOrSlug } from "@/api/categories";
import { isRef, readonly, ref, watch } from "vue";
import useApi from "../api";


export default function useCategoryModel() {
    const model = ref();

    const onGetByIdOrSlug = () => {
        return useApi((idOrSlug, params) => getByIdOrSlug(idOrSlug, params), (data) => model.value = data.category);
    }
    return {
        model: readonly(model),
        onGetByIdOrSlug,
    };
}