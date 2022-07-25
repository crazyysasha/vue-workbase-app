import { readonly, ref, warn } from "vue";

/**
 * @callback onSerialize
 * @param {Object} data
 */

/**
 * 
 * @param {Promise} promise 
 * @param {onSerialize} onSerialize 
 * @returns 
 */
export default function useApi(promise, onSerialize = (data) => data) {

    const isLoading = ref(false);
    const isLoaded = ref(false);
    const promiseRef = ref();
    
    const execute = (...args) => {
        isLoading.value = true;
        return promiseRef.value = promise(...args)
            .then(response => response.data)
            .then(data => {
                isLoaded.value = true;
                return onSerialize(data);
            }).catch((error) => {
                try {
                    const { response } = error;
                    if ([404, 400].includes(response.status)) {
                        const { error } = response.data;
                        throw error;
                    }

                } catch (e) {
                    console.log(e);
                    throw e;
                }
            }).finally(() => isLoading.value = false);
    }

    return { isLoading: readonly(isLoading), isLoaded: readonly(isLoaded), execute, promise: promiseRef };
}