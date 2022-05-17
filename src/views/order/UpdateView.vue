
<script setup>
import useCategoryApi from "@/composables/categories/instance";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const onSubmit = (e) => {
    router.push("");
};

const router = useRouter();

const back = (e) => {
    router.back();
};
const props = defineProps({
    categorySlug: {},
    serviceSlugs: {},
    form: {},
});
const services = ref([]);

const { promise, category, isLoading, isLoaded, onGetWhenNotLoaded } =
    useCategoryApi();

onMounted(async () => {
    console.log(await onGetWhenNotLoaded(categorySlug.value));
});
</script>
<template>
    <form
        class="
            flex flex-col
            relative
            w-full
            min-h-full
            rounded-lg
            bg-white
            shadow shadow-primary/25
            overflow-clip
        "
        @submit.prevent="onSubmit"
    >
        <div class="p-4 mb-auto">
            <h1 class="text-2xl text-primary">Выберите услугу ?</h1>
            <p class="mb-3 text-orange-500">Репетиторы</p>
        </div>
        <div class="p-4">
            <ul class="w-full list-none">
                <li
                    class="w-full list-item"
                    v-for="service in category?.services || []"
                    :key="service.id"
                >
                    <label class="py-2 px-2 w-full">
                        <input
                            type="radio"
                            :value="service.id"
                            v-model="services"
                        />
                        {{ service.name }}
                    </label>
                </li>
            </ul>
        </div>
        <div class="p-4 sticky bottom-0 bg-white flex justify-between">
            <c-button scheme="secondary" type="button" @click="back">
                отмена
            </c-button>
            <c-button>Продолжить</c-button>
        </div>
    </form>
</template>