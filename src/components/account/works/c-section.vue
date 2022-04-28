<template>
    <section class="bg-white rounded-md shadow-md shadow-primary/25">
        <div class="p-4">
            <div class="">
                <h2 class="font-medium text-2xl text-primary">Портфолио</h2>
                <p class="text-gray-500">Загрузите ваши работы для портфолио</p>
            </div>
            <div class="flex flex-wrap gap-4 mt-5">
                <card-skeleton
                    v-for="i in isLoading ? 4 : 0"
                    :key="i"
                ></card-skeleton>
                <work-card
                    v-for="work in isLoading ? [] : collection"
                    :key="work.id"
                    :="work"
                    @select-work="selectWork(work)"
                >
                </work-card>
                <add-card
                    @init-create-form="initCreateForm"
                    v-if="!isLoading"
                ></add-card>
            </div>
        </div>
        <create-form v-model="openCreateForm"></create-form>
        <update-form :="updateFormData" v-model="updateModal"></update-form>
    </section>
</template>

<script setup>
import { onMounted, ref, shallowRef, watch } from "vue";
import AccountSection from "../account-section.vue";
import WbButton from "../wb-button.vue";
import WbSelect from "../wb-select.vue";
import WorkCard from "./work-card.vue";
import CardSkeleton from "./card-skeleton.vue";
import useProfileWorks from "@/composables/profile/works";
import AddCard from "./add-card.vue";
import CreateForm from "./create-form.vue";
import UpdateForm from "./update-form.vue";

const { onGet, collection } = useProfileWorks();

const { exec, isLoading } = onGet();
onMounted(async () => {
    await exec();
    console.log(collection);
});

const openCreateForm = ref(false);
const updateFormData = ref();

const selectWork = (work) => {
    updateFormData.value = work;
    updateModal.value = true;
};
const initCreateForm = (event) => {
    openCreateForm.value = true;
};

const updateModal = ref(false);

watch(updateModal, (val) => {
    if (!val) updateFormData.value = null;
});
</script>