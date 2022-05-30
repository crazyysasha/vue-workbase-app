<script setup>
import useCategoryApi from "@/composables/categories/instance";
import {
    useCreateOrderApi,
    useUpdateOrderApi,
} from "@/composables/orders/instance&storage";
import useVuelidate from "@vuelidate/core";
import { helpers, requiredIf, requiredUnless } from "@vuelidate/validators";
import { reactive, ref, onMounted, watch, toRefs } from "vue";

import { useRouter } from "vue-router";
import BaseForm from "./base-form.vue";

const props = defineProps({ categorySlug: {}, serviceSlugs: {} });

const { categorySlug, serviceSlugs } = toRefs(props);
const {
    category,
    isLoading: categoryIsLoading,
    onGetWhenNotLoaded,
} = useCategoryApi();

onMounted(() => {
    onGetWhenNotLoaded(categorySlug.value);
});

const {
    currentDraftedOrder,
    isUpdating: orderIsUpdating,
    onUpdate: onUpdateOrder,
} = useUpdateOrderApi(categorySlug.value);

const { onCreate: onCreateOrder, isCreating: orderIsCreating } =
    useCreateOrderApi(categorySlug.value);

const router = useRouter();

const state = reactive({
    is_online: currentDraftedOrder.value.is_online,
    at_customer: currentDraftedOrder.value.at_customer,
    at_executor: currentDraftedOrder.value.at_executor,
});

const rules = {
    is_online: {
        requiredUnless: helpers.withMessage(
            "Выберите как минимум одно значение",
            requiredUnless(() => !state.at_customer || !state.at_executor)
        ),
    },
    at_executor: {
        requiredUnless: helpers.withMessage(
            "Выберите как минимум одно значение",
            requiredUnless(() => state.at_customer || state.is_online)
        ),
    },
    at_customer: {
        requiredUnless: helpers.withMessage(
            "Выберите как минимум одно значение",
            requiredUnless(() => state.is_online || state.at_executor)
        ),
    },
};
const $externalResults = reactive({
    is_online: null,
    at_customer: null,
    at_executor: null,
});
const v = useVuelidate(rules, state, { $externalResults });

const onSubmit = async () => {
    if (!(await v.value.$validate())) {
        return;
    }
    if (!!!currentDraftedOrder.value)
        await onCreateOrder({
            category: categorySlug.value,
            services: serviceSlugs.value,
            is_online: state.is_online,
            at_customer: state.at_customer,
            at_executor: state.at_executor,
        });
    else
        await onUpdateOrder({
            is_online: state.is_online,
            at_customer: state.at_customer,
            at_executor: state.at_executor,
        });

    if (state.at_customer) {
        router.push({
            name: "order.update",
            params: {
                categorySlug: categorySlug.value,
                serviceSlugs: serviceSlugs.value,
                form: "address",
            },
        });
        return;
    }

    // if (state.at_executor) {
    //     router.push({
    //         name: "order.update",
    //         params: {
    //             categorySlug: categorySlug.value,
    //             serviceSlugs: serviceSlugs.value,
    //             form: "exit_locations",
    //         },
    //     });
    //     return;
    // }
    router.push({
        name: "order.update",
        params: {
            categorySlug: categorySlug.value,
            serviceSlugs: serviceSlugs.value,
            form: "time",
        },
    });
};

const back = () => router.back();
</script>

<template>
    <BaseForm @on-submit="onSubmit">
        <template #header>
            <div class="pt-1.5 pb-0.5" v-if="categoryIsLoading">
                <div
                    class="h-6 w-96 bg-primary/10 rounded-lg animate-pulse"
                ></div>
            </div>
            <h1 class="text-2xl text-primary" v-else>
                {{
                    category.id == 1
                        ? "Выберите место проведения занятий"
                        : "Выберите место проведения работы"
                }}
            </h1>
            <div v-if="categoryIsLoading" class="pt-1.5 pb-0.5">
                <div
                    class="h-4 w-64 bg-primary/10 rounded-md animate-pulse"
                ></div>
            </div>
            <p class="text-orange-500">{{ category.name }}</p>
        </template>
        <ul>
            <li>
                <c-checkbox v-model="state.at_executor">У исполнителя</c-checkbox>
            </li>
            <li>
                <c-checkbox v-model="state.at_customer">У заказчика</c-checkbox>
            </li>
            <li>
                <c-checkbox v-model="state.is_online">Дистанционно</c-checkbox>
            </li>
        </ul>
        <div
            class="text-red-500"
            v-for="error in v.at_customer.$errors"
            :key="error.$uid"
        >
            {{ error.$message }}
        </div>
        <div
            class="text-red-500"
            v-for="error in v.is_online.$errors"
            :key="error.$uid"
        >
            {{ error.$message }}
        </div>
        <div
            class="text-red-500"
            v-for="error in v.at_executor.$errors"
            :key="error.$uid"
        >
            {{ error.$message }}
        </div>
        <template #footer>
            <c-button scheme="secondary" type="button" @click="back">
                Назад
            </c-button>
            <c-button> Продолжить </c-button>
        </template>
    </BaseForm>
</template>
