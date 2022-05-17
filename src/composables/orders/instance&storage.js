import { create } from "@/api/orders";
import { useLocalStorage } from "@vueuse/core";
import { readonly, ref } from "vue";

const draftedOrders = useLocalStorage('drafted', {});


const isCreating = ref(false);
const isCreated = ref(false);

const createPromise = ref(null);

export function useCreateOrderApi(categorySlug) {
    const onCreate = async (data = { services: [] }) => {
        isCreating.value = true;
        createPromise.value = create(params, data, { validateStatus: (status) => status < 500, })
            .then(response => response.data)
            .then(data => {
                draftedOrders.value[categorySlug] = data.order;
                isCreated.value = true;
            }).finally(() => isCreating.value = false);
        return await createPromise.value;
    }

    return {
        onCreate,
        isCreated: readonly(isCreated),
        isCreating: readonly(isCreating),
        promise: readonly(createPromise),
        draftedOrders: readonly(draftedOrders),
        currentDraftedOrder: readonly(draftedOrders.value[categorySlug]),
    };
}

export function useUpdateOrderApi() {
    return {

    };
}