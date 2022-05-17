<template>
    <c-modal
        v-bind:modelValue="modelValue"
        @update:modelValue="emit('update:modelValue', event)"
    >
        <template #header>
            <h3 class="font-semibold text-xl text-primary">
                Добавить работу в портфолио
            </h3>
        </template>

        <form class="md:w-[30rem] w-auto" @submit="onSubmit">
            <div class="flex flex-col">
                <div class="text-red-500 flex mb-2 px-1" v-if="!is_verified">
                    <span>Находится на рассмотрении</span>
                    <div class="ml-auto p-0.5">
                        <div class="group relative">
                            <!-- <div
                            class="
                                group-hover:block
                                hidden
                                absolute
                                bottom-full
                                -left-full
                                w-auto
                                text-nowrap
                                translate-x-1/2
                                bg-orange-500
                                text-white
                            "
                        >
                            text
                        </div> -->
                            <h-information-circle
                                class="w-5 h-5 text-red-500"
                            ></h-information-circle>
                        </div>
                    </div>
                </div>
                <div class="flex-1 mb-2">
                    <wb-input
                        label="Название работы"
                        v-model="name"
                        placeholder="figma-дизайн"
                        disabled
                    ></wb-input>
                </div>
                <div class="flex-1 mb-2">
                    <wb-textarea
                        label="Комментарий к работе"
                        v-model="description"
                        placeholder="Не заполнено"
                        disabled
                    ></wb-textarea>
                </div>
                <div class="flex-1 mb-2">
                    <wb-input
                        label="Ссылка на работу"
                        v-model="link"
                        placeholder="не указана"
                        disabled
                    ></wb-input>
                </div>

                <div class="flex-1 mb-3">
                    <label
                        for="formFile"
                        class="form-label inline-block mb-2 text-gray-700"
                    >
                        Файлы
                    </label>
                    <div>
                        <ul>
                            <li
                                class="list-decimal ml-6"
                                v-for="(file, index) in files"
                                :href="file.path"
                                :key="file.id"
                            >
                                <a
                                    class="
                                        hover:text-primary/75
                                        text-primary
                                        block
                                        text-ellipsis
                                        w-full
                                        overflow-hidden
                                        whitespace-nowrap
                                    "
                                    download
                                    target="__blank"
                                >
                                    {{ file.file_name
                                    }}{{ index != files.length ? ", " : "" }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </form>
        <template #footer="{ close }">
            <wb-button
                type="error"
                @click="onDeleteHandler"
                :loading="isLoading"
                :disabled="isLoading"
            >
                <h-trash class="inline -mt-0.5"></h-trash>
                <span> Удалить </span>
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
import { toRefs, ref } from "vue";
import WbInput from "../wb-input.vue";
import WbTextarea from "../wb-textarea.vue";
import WbButton from "../wb-button.vue";
import useProfileWorks from "@/composables/profile/works";

const props = defineProps({
    id: {
        type: Number,
    },
    is_verified: {
        type: Boolean,
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    link: {
        type: String,
    },
    files: {
        type: Array,
    },
    modelValue: {
        type: Boolean,
    },
    created_at: {
        type: String,
    },
    updated_at: {
        type: String,
    },
    deleted_at: {
        type: String,
    },
});
const { id, is_verified, name, description, link, files, modelValue } =
    toRefs(props);

const emit = defineEmits(["update:modelValue"]);

const { onDelete, onGet } = useProfileWorks();

const { isLoading, isDeleted, exec } = onDelete();
const onDeleteHandler = async () => {
    await exec(id.value);
    const { exec: onGetExec } = onGet();
    if (isDeleted.value) {
        onGetExec();
        emit("update:modelValue", false);
    }
};
</script>
