<script setup>
import useCategoryApi from "@/composables/categories/instance";
import { useUpdateOrderApi } from "@/composables/orders/instance&storage";
import { reactive, ref, toRefs } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
import useVuelidate from "@vuelidate/core";
import { helpers, minValue, required } from "@vuelidate/validators";
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

const { started_at, ended_at } = currentDraftedOrder?.value || {};
const startedAt = ref(started_at ? new Date(started_at).toISOString().slice(0, -8) : null);
const endedAt = ref(ended_at ? new Date(ended_at).toISOString().slice(0, -8) : null);
const $externalResults = reactive({
    startedAt: [],
    endedAt: [],
});

const v = useVuelidate(
    {
        startedAt: {
            required: helpers.withMessage("Укажите дату", required),
            minValue: helpers.withMessage(
                "Время начала должна быть больше текущей",
                (value) => {
                    return new Date(value) > new Date();
                }
            ),
        },
        endedAt: {
            required: helpers.withMessage("Укажите дату", required),
            minValueRef: helpers.withMessage(
                "Время завершения должна быть больше времени началы",
                (value) => {
                    return new Date(value) > new Date(startedAt.value);
                }
            ),
        },
    },
    {
        startedAt,
        endedAt,
    },
    { $externalResults }
);
const onSubmit = async (e) => {
    if (!(await v.value.$validate())) {
        return;
    }

    await onUpdateOrder({
        started_at: new Date(startedAt.value)
            .toISOString()
            .slice(0, -5)
            .replace("T", " "),
        ended_at: new Date(endedAt.value)
            .toISOString()
            .slice(0, -5)
            .replace("T", " "),
    }).catch(({ response }) => {
        const { error } = response?.data;
        if (error?.type == "validation") {
            $externalResults.startedAt = error.fields.started_at || [];
            $externalResults.endedAt = error.fields.ended_at || [];
        }
    });

    router.push({
        name: "order.update",
        params: {
            categorySlug: categorySlug.value,
            serviceSlugs: serviceSlugs.value,
            form: "price",
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
            <h1 class="text-2xl text-primary" v-else>Укажите время</h1>
            <div v-if="categoryIsLoading" class="pt-1.5 pb-0.5">
                <div
                    class="h-4 w-64 bg-primary/10 rounded-md animate-pulse"
                ></div>
            </div>
            <p class="text-orange-500">{{ category.name }}</p>
        </template>
        <div
            class="
                flex flex-col
                sm:flex-row
                md:flex-col
                lg:flex-row
                gap-4
                min-h-[16rem]
            "
        >
            <div class="flex-initial sm:flex-1 md:flex-initial lg:flex-1">
                <label for="startedAtField" class="mb-2 inline-block">
                    Дата и время начала работы:
                </label>
                <input
                    id="startedAtField"
                    type="datetime-local"
                    v-model="startedAt"
                    :min="new Date().toISOString().slice(0, -8)"
                    class="
                        block
                        w-full
                        px-4
                        py-1.5
                        rounded-md
                        bg-primary/10
                        border border-primary/10
                        hover:border-primary/50
                        focus:border-primary focus:outline-none
                    "
                />
                <div
                    class="text-red-500"
                    v-for="error in v.startedAt.$errors"
                    :key="error.$uid"
                >
                    {{ error.$message }}
                </div>
            </div>
            <div class="flex-0 sm:flex-1 md:flex-0 lg:flex-1">
                <label for="endedAtField" class="mb-2 inline-block">
                    Дата и время завершения работы:
                </label>
                <input
                    id="endedAtField"
                    type="datetime-local"
                    v-model="endedAt"
                    :min="
                        (startedAt ? new Date(startedAt) : new Date())
                            .toISOString()
                            .slice(0, -8)
                    "
                    class="
                        block
                        w-full
                        px-4
                        py-1.5
                        rounded-md
                        bg-primary/10
                        border border-primary/10
                        hover:border-primary/50
                        focus:border-primary focus:outline-none
                    "
                />

                <div
                    class="text-red-500"
                    v-for="error in v.endedAt.$errors"
                    :key="error.$uid"
                >
                    {{ error.$message }}
                </div>
            </div>
        </div>
        <template #footer>
            <c-button scheme="secondary" type="button" @click="back">
                Назад
            </c-button>
            <c-button> Продолжить </c-button>
        </template>
    </BaseForm>
</template>

