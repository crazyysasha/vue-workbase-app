<template>
    <account-section>
        <template #header>
            <h2 class="text-2xl text-primary font-medium">Районы и адреса</h2>
            <p class="text-gray-500">
                Выберите ваши адреса что бы постоянно не вводить в процессе
                размещения заказа
            </p>
        </template>
        <template #default>
            <checkbox-list
                label="Районы на выезд"
                :options="locations"
                option-key="id"
                v-model="selected"
                :disabled="!isEditing"
                :loading="locationsIsLoading"
            >
            </checkbox-list>
        </template>
        <template #footer>
            <div class="flex gap-4">
                <wb-button type="primary" @click="isEditing = !isEditing">
                    <span v-if="!isEditing">
                        <h-pencil class="inline -mt-0.5"></h-pencil>
                        Редактировать
                    </span>
                    <span v-if="isEditing">
                        <h-cloud-upload class="inline -mt-0.5"></h-cloud-upload>
                        Сохранить
                    </span>
                </wb-button>
                <wb-button
                    type="secondary"
                    v-if="isEditing"
                    @click="isEditing = false"
                >
                    <h-x class="inline -mt-0.5"></h-x>
                    Отмена
                </wb-button>
            </div>
        </template>
    </account-section>
</template>

<script setup>
import { effect, onMounted, ref, watch } from "vue";
import AccountSection from "./account-section.vue";
import WbButton from "./wb-button.vue";
import WbSelect from "./wb-select.vue";
import CheckboxList from "./checkbox-list.vue";
import axios from "axios";
import { useLocations } from "@/composables/locations";

const isEditing = ref(false);
const selected = ref([]);
const {
    locations,
    exec: execLocations,
    isLoading: locationsIsLoading,
    isLoaded: locationsIsLoaded,
} = useLocations();

watch(selected, (newVal) => {
    console.log(newVal);
});
onMounted(async () => {
    if (!locationsIsLoaded.value) await execLocations();
});
</script>
