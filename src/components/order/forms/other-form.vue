<script setup>
import useCategoryApi from "@/composables/categories/instance";
import { useUpdateOrderApi } from "@/composables/orders/instance&storage";
import { reactive, ref, toRefs } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import useVuelidate from "@vuelidate/core";
import { helpers, minLength } from "@vuelidate/validators";
import { useRouter } from "vue-router";
import BaseForm from "./base-form.vue";

const props = defineProps({
    categorySlug: {},
    serviceSlugs: {},
});

const { categorySlug, serviceSlugs } = toRefs(props);

const router = useRouter();

const back = () => {
    router.back();
};
const {
    category,
    onGetWhenNotLoaded: onGetCategoryWhenNotLoaded,
    isLoading: categoryIsLoading,
} = useCategoryApi();

onMounted(async () => {
    await onGetCategoryWhenNotLoaded(categorySlug.value);
});

const { currentDraftedOrder, onUpdate: onUpdateOrder } = useUpdateOrderApi(
    categorySlug.value
);

const description = ref("");

const $externalResults = reactive({
    description: [],
});

const v = useVuelidate(
    {
        description: {
            minLength: helpers.withMessage(
                "Минимиальное количество символов 5.",
                minLength(5)
            ),
        },
    },
    {
        description,
    },
    { $externalResults }
);
const onSubmit = async (e) => {
    if (!(await v.value.$validate())) {
        return;
    }

    await onUpdateOrder({
        description: description.value,
    }).catch(({ response }) => {
        const { error } = response?.data;
        if (error?.type == "validation") {
            $externalResults.description = error.fields.description || [];
        }
    });

    router.push({
        name: "order.update",
        params: {
            categorySlug: categorySlug.value,
            serviceSlugs: serviceSlugs.value,
            form: "publish",
        },
    });
};
</script>
<template>
    <BaseForm @on-submit="onSubmit">
        <template #header>
            <div class="pt-1.5 pb-0.5" v-if="categoryIsLoading">
                <div
                    class="h-6 w-96 bg-primary/10 rounded-lg animate-pulse"
                ></div>
            </div>
            <h1 class="text-2xl text-primary" v-else>Пожелания к заказу</h1>
            <div v-if="categoryIsLoading" class="pt-1.5 pb-0.5">
                <div
                    class="h-4 w-64 bg-primary/10 rounded-md animate-pulse"
                ></div>
            </div>
            <p class="text-orange-500">{{ category.name }}</p>
        </template>
        <div>
            <label for="" class="mb-3 inline-block">
                Дополнительные пожелания
            </label>
            <textarea
                class="
                    block
                    w-full
                    focus:outline-none
                    border border-primary/10
                    hover:border-primary/50
                    focus:border-primary
                    bg-primary/10
                    rounded-md
                    py-1.5
                    px-2
                "
                placeholder="В этом поле Вы можете написать дополнительные условия и уточняющте детали по работе. 
Например:
1. Прошу приобрести розетки и лампочки самостоятельно, дополнительные расходы будут покрыты Заказчиком. 
2. По мимо уборки квартиры, необходимо постирать и погладить одежду."
                v-model="description"
                rows="10"
            ></textarea>
        </div>
        <template #footer>
            <c-button scheme="secondary" type="button" @click="back">
                Назад
            </c-button>
            <c-button> Продолжить </c-button>
        </template>
    </BaseForm>
</template>

