import { isReactive, isRef, reactive, readonly } from "vue";

/**
 * 
 * @param {{id: Number}} maybeConversation 
 */
export default function useConversation(maybeConversation = null) {
    /**
     * @param {{id: Number}} model
     */
    const model = reactive({});

    if (isRef(maybeConversation)) {
        Object.assign(model, maybeConversation.value);
    } else {
        Object.assign(model, maybeConversation);
    }

    return { model: readonly(model) };
}