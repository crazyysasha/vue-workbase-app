import { getByIdOrSlug } from "@/api/categories";
import { computed, reactive, readonly, ref } from "vue";


// /** @type {{id: Number, name: String}} */

const category = reactive({
    id: null,
    name: null,
    slug: null,
    excerpt: null,
    description: null,
    priority_services: [],
    services: [],
    image: null,
});
const isLoading = ref(false);

const promise = ref(null);

export default function useCategoryApi() {

    const isLoaded = computed(() => !!category.slug);

    const onGet = async (idOrSlug, params = { with: [] }) => {

        Object.assign(category, {
            id: null,
            name: null,
            slug: null,
            excerpt: null,
            description: null,
            priority_services: [],
            services: [],
            image: null,
        });

        isLoading.value = true;
        promise.value = getByIdOrSlug(idOrSlug, params)
            .then(response => response.data)
            .then(data => {
                Object.assign(category, data?.category);
                return readonly(category);
            }).finally(() => isLoading.value = false);
        return await promise.value;
    }

    const onGetWhenNotLoaded = async (idOrSlug, params = { with: [] }) => {

        if (!(category.slug == idOrSlug || category.id == idOrSlug)) {
            return await onGet(idOrSlug, params);
        }
        if (isLoaded.value) {
            return readonly(category);
        }

        if (!!!promise.value) {
            return await onGet(idOrSlug, params);
        }

        return await promise.value;
    }

    return {
        category: readonly(category),
        isLoading: readonly(isLoading),
        isLoaded: readonly(isLoaded),
        promise: readonly(promise),
        onGetWhenNotLoaded,
        onGet,
    };
}