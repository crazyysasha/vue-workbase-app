import { create } from "@/api/services";
import { reactive, readonly, ref } from "vue";


const service = reactive({

})
const isCreating = ref(false);
const isCreated = ref(false);
const promise = ref(null);


export default function useCreateServiceApi() {

    const onCreate = (data = { name: '', parent: null, category: null, }) => {
        isCreating.value = true;
        isCreated.value = false;
        promise.value = create(data)
            .then(response => response.data)
            .then(data => {
                Object.assign(service, data.service);
                isCreated.value = true;
                return readonly(service);
            }).finally(() => isCreating.value = false);
        return promise.value;
    }

    return {
        isCreating: readonly(isCreating),
        isCreated: readonly(isCreated),
        promise: readonly(promise),
        onCreate,
    };
}