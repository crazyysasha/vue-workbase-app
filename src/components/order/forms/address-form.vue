<script setup>
import BaseForm from "@/components/order/forms/base-form.vue";
import useCategoryApi from "@/composables/categories/instance";
import { useUpdateOrderApi } from "@/composables/orders/instance&storage";
import useVuelidate from "@vuelidate/core";
import { helpers, required, requiredIf } from "@vuelidate/validators";
import debounce from "lodash.debounce";
import { onMounted, reactive, ref, toRefs, watch } from "vue";
import { useRouter } from "vue-router";
import { yandexMap, ymapMarker, loadYmap } from "vue-yandex-maps";
const props = defineProps({
    categorySlug: {},
    serviceSlugs: {},
});

const { categorySlug, serviceSlugs } = toRefs(props);

const router = useRouter();

const {
    category,
    onGetWhenNotLoaded,
    isLoading: categoryIsLoading,
} = useCategoryApi();

onMounted(async () => {
    await onGetWhenNotLoaded(categorySlug.value);
});
const {
    currentDraftedOrder,
    isUpdating: orderIsUpdating,
    onUpdate: onUpdateOrder,
} = useUpdateOrderApi(categorySlug.value);

const mapSettings = {
    apiKey: "12a2dc9a-cec9-4cd8-a653-cb852b6dec85",
    lang: "ru_RU",
    coordorder: "latlong",
    enterprise: false,
    version: "2.1",
};
const back = () => {
    router.back();
};
onMounted(async () => {
    await loadYmap();
});

const onClickInMap = (e) => {
    if (e.get == null) {
        return;
    }
    placemark.value = e.get("coords");
};
const address = ref(currentDraftedOrder.value.address);
const searchedItems = ref([]);
const placemark = ref(
    currentDraftedOrder.value.lat && currentDraftedOrder.value.lng
        ? [currentDraftedOrder.value.lat, currentDraftedOrder.value.lng]
        : []
);
const map = ref();
const onSelectItem = (item) => {
    placemark.value = item.geometry.getCoordinates();
    address.value = item.getAddressLine();
    console.log(Array.from(placemark.value));
    map.value.setCenter(Array.from(placemark.value), 16, { duration: 200 });
};
watch(
    placemark,
    debounce(
        async () =>
            (address.value = (
                await ymaps.geocode(Array.from(placemark.value))
            ).geoObjects
                .get(0)
                .getAddressLine()),
        100
    )
);
watch(address, async () => {
    searchedItems.value = ( //Ташкент  ... Узбекистан, Ташкент
        await ymaps.geocode(address.value)
    ).geoObjects.toArray();
});

const $externalResults = reactive({});

const v = useVuelidate(
    {
        address: {
            required: helpers.withMessage("Введите свой адрес", required),
        },
        placemark: {
            // custom: (value) => console.log(value?.length == 2),
        },
    },
    { address, placemark },
    { $externalResults }
);

const onSubmit = async (e) => {
    if (!(await v.value.$validate())) {
        return;
    }

    await onUpdateOrder({
        address: address.value,
        lat: placemark.value[0],
        lng: placemark.value[1],
    }).catch(({ response }) => {
        if (response.status == 400) {
            const { error } = response.data;
            if (error.type == "validation") {
                $externalResults.address = error.fields.address || [];
                $externalResults.placemark =
                    error.fields.lat || error.fields.lng || [];
            }
        }
    });

    router.push({
        name: "order.update",
        params: {
            categorySlug: categorySlug.value,
            serviceSlugs: serviceSlugs.value,
            form: "time",
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
            <h1 class="text-2xl text-primary" v-else>Укажите ваш адрес</h1>
            <div v-if="categoryIsLoading" class="pt-1.5 pb-0.5">
                <div
                    class="h-4 w-64 bg-primary/10 rounded-md animate-pulse"
                ></div>
            </div>
            <p class="text-orange-500">{{ category.name }}</p>
        </template>
        <c-search
            v-model="address"
            :items="searchedItems"
            @on-select-item="onSelectItem"
            placeholder="Город, район, улица, дом"
        >
            <template #list-item="{ item }">
                {{ item.getAddressLine() }}
            </template>
        </c-search>
        <div
            class="text-red-500 py-2"
            v-for="error in v.address.$errors || v.placemark.$errors"
            :key="error.$uid"
        >
            {{ error.$message }}
        </div>
        <yandex-map
            :settings="mapSettings"
            :coords="
                placemark?.length
                    ? placemark
                    : [41.31377189085043, 69.25741676336806]
            "
            :zoom="10"
            init-without-markers
            class="h-96 rounded-md overflow-clip"
            @click="onClickInMap"
            @map-was-initialized="map = $event"
        >
            <div></div>
            <ymap-marker
                markerId="address"
                :coords="placemark"
                v-if="placemark?.length == 2"
            ></ymap-marker>
            <!-- @dragend="onDragEnd"
                :options="{ draggable: true }" -->
        </yandex-map>

        <template #footer>
            <c-button scheme="secondary" type="button" @click="back">
                Назад
            </c-button>
            <c-button> Продолжить </c-button>
        </template>
    </BaseForm>
</template>