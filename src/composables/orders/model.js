import { create, deleteById, get, getById, reply, update } from "@/api/orders";
import { readonly, ref } from "vue"
import useApi from "../api";

export default function useOrderModel(id) {

    const model = ref();

    const onGet = (params, config) => useApi(
        (maybeId, maybeParams) => getById(maybeId || id, Object.assign({}, params, maybeParams), config),
        (data) => model.value = data.order
    );


    const onUpdate = (orId, data, config) => useApi(
        (maybeId, maybeData, maybeConfig) => update(maybeId || orId || id, Object.assign({}, data, maybeData), Object.assign({}, config, maybeConfig)),
        (data) => model.value = data.order
    );


    const onCreate = (config) => {
        return useApi((data) => create(data, config), (data) => model.value = data.order);
    }

    const onDelete = (orId) => {
        return useApi((maybeId) => deleteById(maybeId || orId || id), (data) => model.value = null);
    }

    const onCreateReply = (orId, orData) => useApi(
        (maybeId, maybeData) => reply(maybeId || orId || id, Object.assign({}, orData, maybeData)),
        (data) => model.value.replies = [data.reply, ...(model.value.replies || [])],
    );

    return {
        model: readonly(model),
        onCreate,
        onUpdate,
        onGet,
        onDelete,
        onCreateReply,
    }
} 