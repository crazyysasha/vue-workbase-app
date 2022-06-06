import useOrderModel from "@/composables/orders/model";


const { model, onGet, onUpdate, onDelete, onCreate, onCreateReply } = useOrderModel();

const {
    execute: onGetOrderExecute,
    promise: onGetOrderPromise,
    isLoading: onGetOrderIsLoading,
    isLoaded: onGetOrderIsLoaded,
} = onGet();

const {
    execute: onUpdateOrderExecute,
    promise: onUpdateOrderPromise,
    isLoading: onUpdateOrderIsLoading,
    isLoaded: onUpdateOrderIsLoaded,
} = onUpdate();

const {
    execute: onDeleteOrderExecute,
    promise: onDeleteOrderPromise,
    isLoading: onDeleteOrderIsLoading,
    isLoaded: onDeleteOrderIsLoaded,
} = onDelete();

const {
    execute: onCreateReplyToOrderExecute,
    promise: onCreateReplyToOrderPromise,
    isLoading: onCreateReplyToOrderIsLoading,
    isLoaded: onCreateReplyToOrderIsLoaded,
} = onCreateReply();

export default function useOrderModelInstance(id) {
    return {
        model,
        onGet: () => ({
            onGetOrderIsLoading,
            onGetOrderIsLoaded,
            onGetOrderPromise,
            onGetOrderExecute,
        }),
        onCreate: () => ({}),

        onUpdate: () => ({
            onUpdateOrderIsLoading,
            onUpdateOrderIsLoaded,
            onUpdateOrderPromise,
            onUpdateOrderExecute,
        }),
        onDelete: () => ({
            onDeleteOrderIsLoading,
            onDeleteOrderIsLoaded,
            onDeleteOrderPromise,
            onDeleteOrderExecute,
        }),
        onCreateReply: () => ({
            onCreateReplyToOrderIsLoading,
            onCreateReplyToOrderIsLoaded,
            onCreateReplyToOrderPromise,
            onCreateReplyToOrderExecute,
        }),
    };

}