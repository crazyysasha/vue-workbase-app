import { create, deleteById, get, getById, update } from "@/api/orders";
import { readonly, ref } from "vue"
import useApi from "../api";

export default function useOrderModel(id) {

    const model = ref();

    const onGet = (params, config) => {
        return useApi(() => getById(id, params, config), (data) => model.value = data.order);
    };

    const onUpdate = (config) => {
        return useApi((data) => update(id, data, config), (data) => model.value = data.order);
    }

    const onCreate = (config) => {
        return useApi((data) => create(data, config), (data) => model.value = data.order);
    }

    const onDelete = () => {
        return useApi(() => deleteById(id), (data) => model.value = null);
    }

    return {
        model: readonly(model),
        onCreate,
        onUpdate,
        onGet,
        onDelete,
    }
} 