import { create, get } from "@/api/chat/conversations";
import { _ } from "core-js";
import { readonly, ref } from "vue";
import useApi from "../../api";
import useConversation from "./model";

/**
 * @param {String} conversiable 
 */
export default function useConversations(conversiable = null) {
    /**
     * 
     */
    const conversations = ref([]);

    const onCreate = (maybeData = {}) => useApi(
        (data = {}, config) => create(Object.assign({ for: conversiable }, maybeData, data), config),
        /**
         * 
         * @param {{conversation: Object}} data 
         * @returns 
         */
        (data) => {
            const model = useConversation(data.conversation);
            conversations.value.push(model);
            return model;
        },
    );
    const onGet = (maybeParams = {}, maybeConfig) => useApi(
        (params = {}, config = {}) => get(Object.assign({}, maybeParams, params), Object.assign({}, maybeConfig, config)),
        /**
         * 
         * @param {{conversations: Array<Object>}} data 
         * @returns 
         */
        (data) => {
            conversations.value = data.conversations.map(useConversation);
            console.log(conversations.value);
            return conversations.value;
        },
    );

    return {
        conversations: readonly(conversations),
        onCreate,
        onGet,
    };
}