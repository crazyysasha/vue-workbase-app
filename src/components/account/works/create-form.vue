<template>
    <c-modal
        v-bind:modelValue="isOpen"
        @update:modelValue="emit('update:modelValue', event)"
    >
        <template #header>
            <h3 class="font-semibold text-xl text-primary">
                Добавить работу в портфолио
            </h3>
        </template>

        <form class="md:w-[30rem] w-auto" @submit="onCreateHandler">
            <div class="flex flex-col">
                <div class="">
                    <div class="flex-1 mb-2">
                        <wb-input
                            label="Название работы"
                            v-model="state.name"
                            placeholder="figma-дизайн"
                            :classes="{ '!border-red-500': v.name.$error }"
                            :saving="isLoading"
                        ></wb-input>
                        <div v-if="v.name.$error" class="text-red-500">
                            {{ v.name.$errors[0].$message }}
                        </div>
                    </div>
                    <div class="flex-1 mb-2">
                        <wb-textarea
                            label="Комментарий к работе"
                            v-model="state.description"
                            placeholder="визитки для компании 'OOO Acme Corparation'"
                            :classes="{
                                '!border-red-500': v.description.$error,
                            }"
                            :saving="isLoading"
                        ></wb-textarea>
                        <div v-if="v.description.$error" class="text-red-500">
                            {{ v.description.$errors[0].$message }}
                        </div>
                    </div>
                    <div class="flex-1 mb-2">
                        <wb-input
                            label="Добавте ссылку на работу"
                            v-model="state.link"
                            placeholder="https://www.figma.com/file/gV7Lo5HB..."
                            :classes="{
                                '!border-red-500': v.link.$error,
                            }"
                            :saving="isLoading"
                        ></wb-input>
                        <div v-if="v.link.$error" class="text-red-500">
                            {{ v.link.$errors[0].$message }}
                        </div>
                    </div>

                    <div class="flex-1 mb-3">
                        <label
                            for="formFile"
                            class="form-label inline-block mb-2 text-gray-700"
                            >... или/и прикрепите файл</label
                        >
                        <input
                            class=""
                            type="file"
                            multiple
                            id="formFile"
                            @change="onSelectFiles"
                        />

                        <div v-if="v.files.$error" class="text-red-500">
                            {{ v.files.$errors[0].$message }}
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <template #footer="{ close }">
            <wb-button
                @click="onCreateHandler"
                :loading="isLoading"
                :disabled="isLoading"
            >
                <h-cloud-upload class="inline -mt-0.5"></h-cloud-upload>
                <span> Сохранить </span>
            </wb-button>
            <wb-button
                type="secondary"
                class="ml-auto"
                @click="close"
                :loading="isLoading"
                :disabled="isLoading"
            >
                <h-x class="inline -mt-0.5"></h-x>
                Отмена
            </wb-button>
        </template>
    </c-modal>
</template>

<script setup>
import { toRefs, ref, reactive, watch } from "vue";
import WbInput from "../wb-input.vue";
import WbTextarea from "../wb-textarea.vue";
import WbButton from "../wb-button.vue";
import useVuelidate from "@vuelidate/core";
import {
    helpers,
    minLength,
    required,
    requiredIf,
    url,
} from "@vuelidate/validators";
import useProfileWorks from "@/composables/profile/works";

const props = defineProps({
    modelValue: {
        type: Boolean,
    },
});
const { modelValue: isOpen } = toRefs(props);

const emit = defineEmits(["update:modelValue"]);

const onSelectFiles = ({ target }) => {
    state.files = target.files;
};

const state = reactive({
    name: "",
    description: "",
    link: "",
    files: [],
});

const rules = {
    name: {
        required: helpers.withMessage(
            "Поле название работы обязательно для заполнения",
            required
        ),
    },
    description: {
        minLength: helpers.withMessage(
            "Минимальное кол - во символов для описания 10",
            minLength(10)
        ),
    },
    link: {
        url: helpers.withMessage("ссылка не корректная", url),
    },
    files: {
        requiredIfLink: helpers.withMessage(
            "требуется загрузка файлов когда ссылка не указана",
            requiredIf(() => !state.link)
        ),
        minLength: helpers.withMessage(
            "Количество файлов",
            !state.link ? minLength(1) : () => {}
        ),
    },
};

const externalResults = reactive({});

const v = useVuelidate(rules, state, { externalResults });

const { onCreate, onGet } = useProfileWorks();

const { isLoading, isCreated, exec } = onCreate();

const onCreateHandler = async (event) => {
    if (!(await v.value.$validate())) return;

    await exec(state);

    if (isCreated.value) {
        const { exec: onGetExec } = onGet();
        onGetExec();
        emit("update:modelValue", false);
        Object.assign(state, {
            name: "",
            description: "",
            link: "",
            files: [],
        });
    }
};
</script>
