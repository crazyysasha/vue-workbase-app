import { create, deleteByIdOrSlug, get } from "@/api/profile/works";
import { readonly, ref } from "vue";


const collection = ref([]);

export default function useProfileWorks() {

    const onGet = () => {
        const isLoading = ref(false);

        const exec = async () => {
            isLoading.value = true
            await get({ perPage: 9999, with: ['files'] }).then(response => response.data)
                .then(data => {
                    collection.value = data.collection;
                    isLoading.value = false;
                });
        }
        return {
            isLoading: readonly(isLoading),
            collection: readonly(collection),
            exec
        };
    }
    const onCreate = () => {
        const isLoading = ref(false);
        const isCreated = ref(false);
        const exec = async (data) => {
            isLoading.value = true;
            await create(data).then(response => response.data).then(data => {
                isLoading.value = false;
                isCreated.value = true;
                return data.work;
            });
        }

        return {
            isLoading: readonly(isLoading),
            isCreated: readonly(isCreated),
            exec,
        };
    }

    const onDelete = () => {
        const isLoading = ref(false);
        const isDeleted = ref(false);

        const exec = async (idOrSlug) => {
            isLoading.value = true;
            await deleteByIdOrSlug(idOrSlug).then(res => {
                isLoading.value = false;
                isDeleted.value = true;
            });
        };
        return {
            isLoading: readonly(isLoading),
            isDeleted: readonly(isDeleted),
            exec,
        };
    }
    return {
        collection: readonly(collection),
        onGet,
        onCreate,
        onDelete,
    };
}