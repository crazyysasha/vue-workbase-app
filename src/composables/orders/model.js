import { get, getById, update } from "@/api/orders";
import { readonly, ref } from "vue"
import useApi from "../api";

export default function useOrderModel(id) {

    const model = ref();

    const onGet = (params, config) => {
        return useApi(() => getById(id, params, config), (data) => model.value = data.order);
    };

    const onUpdate = () => {

    }

    const onCreate = () => {

    }

    const onDelete = () => {

    }

    return {
        model: readonly(model),
        onCreate,
        onUpdate,
        onGet,
        onDelete,
    }
} 