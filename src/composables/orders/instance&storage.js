import { create, publish, update } from "@/api/orders";
import { useLocalStorage } from "@vueuse/core";
import { computed, readonly, ref } from "vue";

const draftedOrders = useLocalStorage('drafted', {});


const isCreating = ref(false);

const createPromise = ref(null);

export function useCreateOrderApi(categorySlug) {
    const isCreated = ref(!!draftedOrders.value[categorySlug]);

    const onCreate = (data = { services: [], category: null }, config = {}) => {
        isCreating.value = true;
        createPromise.value = create(data)
            .then(response => response.data)
            .then(data => {
                isCreated.value = true;
                draftedOrders.value[categorySlug] = data.order;
                return readonly(computed(() => draftedOrders.value[categorySlug]));
            }).finally(() => isCreating.value = false);
        return createPromise.value;
    }

    return {
        onCreate,
        isCreated: readonly(isCreated),
        isCreating: readonly(isCreating),
        promise: readonly(createPromise),
        draftedOrders: readonly(draftedOrders),
        currentDraftedOrder: readonly(computed(() => draftedOrders.value[categorySlug])),
    };
}


const isUpdating = ref(false);

const isUpdated = ref(false);

const updatePromise = ref(null);

export function useUpdateOrderApi(categorySlug) {

    const onUpdate = (data = {
        services: [],
        name: null,
        description: null,
        price: null,
        price_unit: null,
        price_from: null,
        price_up_to: null,
        is_ranged_price: null,
        started_at: null,
        ended_at: null,
        is_online: null,
        at_executor: null,
        at_customer: null,
        exit_locations: null,
        address: null,
        lat: null,
        lng: null,
    }) => {
        isUpdating.value = true;
        isUpdated.value = false;
        updatePromise.value = update(draftedOrders.value[categorySlug]?.id, data)
            .then((response) => response.data)
            .then((data) => {
                draftedOrders.value[categorySlug] = data.order;
                isUpdated.value = true;
            })
            .finally(() => isUpdating.value = false);

        return updatePromise.value;
    }

    return {
        isUpdated: readonly(isUpdated),
        isUpdating: readonly(isUpdating),
        promise: readonly(updatePromise),
        onUpdate,
        draftedOrders: readonly(draftedOrders),
        currentDraftedOrder: readonly(computed(() => draftedOrders.value[categorySlug])),
    };
}


const isPublishing = ref(false);

const publishPromise = ref(null);

export function usePublishOrderApi(categorySlug) {
    const isPublished = ref(false);

    const onPublish = () => {
        isPublishing.value = true;
        return publishPromise.value = publish(draftedOrders.value[categorySlug]?.id)
            .then(response => response.data)
            .then(data => data?.order)
            .then(order => {
                isPublished.value = true;
                delete draftedOrders.value[categorySlug];
                return order;
            }).finally(() => isPublishing.value = false);
    }
    return {
        isPublishing: readonly(isPublishing),
        isPublished: readonly(isPublished),
        promise: readonly(publishPromise),
        onPublish,
        draftedOrders: readonly(draftedOrders),
        currentDraftedOrder: readonly(computed(() => draftedOrders.value[categorySlug])),
    };
}