<script setup>
import BaseForm from "@/components/order/forms/base-form.vue";
import useCategoryApi from "@/composables/categories/instance";
import useServicesApi from "@/composables/services";
import {
    computed,
    onMounted,
    reactive,
    ref,
    toRefs,
    watch,
} from "@vue/runtime-core";
import useVuelidate from "@vuelidate/core";
import { helpers, requiredIf, requiredUnless } from "@vuelidate/validators";
import { useRouter } from "vue-router";
import useCreateServiceApi from "@/composables/services/create";
import {
    useCreateOrderApi,
    useUpdateOrderApi,
} from "@/composables/orders/instance&storage";
import useServiceApi from "@/composables/services/instance";

const props = defineProps({ categorySlug: {}, serviceSlugs: {} });
const { categorySlug, serviceSlugs } = toRefs(props);
const router = useRouter();

const {
    onGetWhenNotLoaded,
    category,
    isLoading: categoryIsLoading,
    isLoaded: categoryIsLoaded,
} = useCategoryApi();

onMounted(async () => {
    await onGetWhenNotLoaded(categorySlug.value);
});

const {
    services,
    isLoading: servicesIsLoading,
    isLoaded: servicesIsLoaded,
    onGet: onGetServices,
} = useServicesApi({
    perPage: 1000,
    category: categorySlug.value,
    parent: serviceSlugs.value?.[serviceSlugs.value?.length - 1],
});

onMounted(async () => {
    await onGetServices({});
    if (!!!currentDraftedOrder.value) return;
    const s = currentDraftedOrder.value.services.find((ss) =>
        services.value.find((sss) => sss.slug == ss.slug)
    );
    service.value = s?.slug;

    // const serv = currentDraftedOrder?.value?.services.find(
    //     (s) =>
    //         !s.is_active &&
    //         s.parent?.slug ==
    //             serviceSlugs.value?.[serviceSlugs.value?.length - 1]
    // );
    // console.log(serv);
});

const back = () => {
    router.back();
};

const isLoading = computed(
    () => categoryIsLoading.value || servicesIsLoading.value
);

const service = ref();
const newEntry = ref(false);
const newEntryField = ref("");
watch(service, (value) => {
    if (value != null) newEntry.value = false;
    $externalResults.service = null;
});
watch(newEntry, (value) => {
    if (!!value) service.value = null;
    $externalResults.newEntryField = null;
});

watch(newEntryField, () => {
    $externalResults.newEntryField = null;
});

const $externalResults = reactive({});
const rules = {
    service: {
        requiredUnless: helpers.withMessage(
            "Выберите услугу",
            requiredUnless(newEntry)
        ),
    },
    newEntry: {},
    newEntryField: {
        requiredif: helpers.withMessage(
            "Заполните данное поле",
            requiredIf(newEntry)
        ),
    },
};

const v = useVuelidate(
    rules,
    { service, newEntry, newEntryField },
    { $externalResults }
);

const { onCreate: onCreateService, isCreating: serviceIsCreating } =
    useCreateServiceApi();

const {
    onUpdate: onUpdateOrder,
    isUpdating: orderIsUpdating,
    currentDraftedOrder,
} = useUpdateOrderApi(categorySlug.value);

const { onCreate: onCreateOrder, isCreating: orderIsCreating } =
    useCreateOrderApi(categorySlug.value);

const {
    service: fetchedService,
    onGet: onGetService,
    isLoading: serviceIsLoading,
} = useServiceApi();

const onSubmit = async (e) => {
    if (!(await v.value.$validate())) {
        return;
    }
    let newService;
    if (newEntry.value) {
        newService = await onCreateService({
            name: newEntryField.value,
            parent: serviceSlugs.value?.[serviceSlugs.value?.length - 1],
            category: categorySlug.value,
        }).catch(({ response }) => {
            if (response.status != 400) {
                return;
            }

            const { type, fields } = response.data?.error;

            if (type == "validation") {
                $externalResults.newEntryField = fields.name;
            }
        });
        if (!!!newService?.id) return;
        console.log(newService);
    } else {
        await onGetService(service.value, { count: ["children"] });
    }

    const servicesList = serviceSlugs.value || [];
    if (service.value) {
        servicesList.push(service.value);
    } else {
        servicesList.push(newService.slug);
    }

    if (!!!currentDraftedOrder.value)
        await onCreateOrder({
            category: categorySlug.value,
            services: servicesList,
        });
    else
        await onUpdateOrder({
            services: servicesList,
        });

    if (fetchedService?.value?.children_count > 0) {
        location.href =
            "/" +
            Object.values({
                categorySlug: categorySlug.value,
                serviceSlugs: servicesList,
                form: "select",
            })
                .map((element) =>
                    Array.isArray(element) ? element.join("/") : element
                )
                .join("/");
    } else {
        router.push({
            name: "order.update",
            params: {
                categorySlug: categorySlug.value,
                serviceSlugs: servicesList,
                form: "work-place",
            },
        });
    }
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
            <h1 class="text-2xl text-primary" v-else>Выберите услугу</h1>
            <div v-if="categoryIsLoading" class="pt-1.5 pb-0.5">
                <div
                    class="h-4 w-64 bg-primary/10 rounded-md animate-pulse"
                ></div>
            </div>
            <p class="text-orange-500">{{ category.name }}</p>
        </template>
        <ul>
            <li v-for="s in services" :key="s.id">
                <label
                    class="
                        select-none
                        py-0.5
                        flex
                        gap-2
                        items-center
                        cursor-pointer
                        mt-1
                        first:mt-0
                    "
                >
                    <input
                        type="radio"
                        class="
                            appearance-none
                            rounded-full
                            h-4
                            w-4
                            border border-primary/50
                            hover:border-primary/75
                            checked:!border-[5px] checked:!border-primary/100
                            focus:ring-2
                            focus:ring-primary/50
                            focus:outline-none
                            disabled:ring-0
                            disabled:border-8
                            disabled:bg-white
                            disabled:!border-primary/20
                            transition-all
                            duration-200
                        "
                        v-model="service"
                        :value="s.slug"
                    />
                    <span class="peer-checked:text-primary">
                        {{ s.name }}
                    </span>
                </label>
            </li>
            <li>
                <label
                    class="
                        select-none
                        py-0.5
                        flex
                        gap-2
                        items-center
                        cursor-pointer
                    "
                    @click="newEntry = true"
                >
                    <input
                        type="radio"
                        class="
                            appearance-none
                            rounded-full
                            h-4
                            w-4
                            border border-primary/50
                            hover:border-primary/75
                            checked:!border-[5px] checked:!border-primary/100
                            focus:ring-2
                            focus:ring-primary/50
                            focus:outline-none
                            disabled:ring-0
                            disabled:border-8
                            disabled:bg-white
                            disabled:!border-primary/20
                            transition-all
                            duration-200
                        "
                        v-model="newEntry"
                        :value="true"
                        id="radioNewEntry"
                    />
                    <input
                        type="text"
                        class="
                            focus:outline-none
                            bg-primary/10
                            px-2
                            py-1
                            rounded-md
                            border border-primary/10
                            focus:border-primary
                            disabled:cursor-pointer
                        "
                        v-model="newEntryField"
                        @click="newEntry = true"
                        placeholder="Другое"
                    />
                    <div
                        v-for="error in v.newEntryField.$errors"
                        :key="error.$uid"
                        class="text-red-500"
                    >
                        {{ error.$message }}
                    </div>
                </label>
            </li>
        </ul>
        <div
            v-for="error in v.service.$errors"
            :key="error.$uid"
            class="text-red-500"
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

