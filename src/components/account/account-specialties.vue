<template>
    <account-section>
        <template #header>
            <h4
                class="
                    font-medium
                    text-2xl text-primary
                    flex
                    justify-between
                    items-end
                "
            >
                <span> Специальности </span>
                <wb-switch
                    v-model="isActive"
                    :label="{
                        checked: '&nbsp;&nbsp;&nbsp;&nbsp;Работаю',
                        unchecked: 'Не работаю',
                    }"
                    disabled
                >
                    <template #label="{ label }"> {{ label }} </template>
                </wb-switch>
            </h4>
        </template>
        <template #default>
            <div
                v-for="speciality in specialties"
                :key="speciality"
                class="my-2"
            >
                <div class="flex justify-between items-center">
                    <div class="flex gap-2 justify-items-center items-center">
                        <span
                            class="
                                rounded-full
                                bg-gray-200
                                w-9
                                h-9
                                flex
                                justify-items-center
                                items-center
                            "
                        >
                            <img
                                class="w-6 m-auto"
                                :src="speciality.service.category.image.path"
                                alt=""
                            />
                        </span>
                        <h4 class="text-gray-500 truncate flex-1">
                            Мастера по ремонту asd asd asd
                        </h4>
                    </div>
                    <wb-switch v-model="isActive" label="Активность" name="a">
                        <template #label="{ label }"> {{ label }} </template>
                    </wb-switch>
                </div>
                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    <speciality-card></speciality-card>
                    <speciality-button></speciality-button>
                </div>
            </div>
        </template>
        <template #footer>
            <div class="flex">
                <wb-button type="primary">
                    Добавить новую специальность
                </wb-button>
            </div>
        </template>
    </account-section>
</template>

<script setup>
import { ref, watch } from "vue";
import AccountSection from "./account-section.vue";
import WbButton from "./wb-button.vue";
import WbSelect from "./wb-select.vue";
import WbSwitch from "./wb-switch.vue";
import SpecialityCard from "./speciality-card.vue";
import SpecialityButton from "./speciality-button.vue";
const isActiveRapair = ref(false);

const isActive = ref(true);
const specialties = ref([
    {
        service: {
            id: 1,
            name: "Электрика",
            description: "asd",
            category: {
                id: 1,
                name: "Мастера по ремонту",
                image: {
                    path: "http://api.workbase.uz/storage/app/uploads/public/622/183/665/622183665e246452328813.svg",
                },
            },
        },
        price: 10000,
    },
    {
        service: {
            id: 1,
            name: "Электрика",
            description: "asd",
            category: {
                id: 1,
                name: "Мастера по ремонту",
                image: {
                    path: "http://api.workbase.uz/storage/app/uploads/public/622/183/665/622183665e246452328813.svg",
                },
            },
        },
        price: 10000,
    },
]);
</script>