<template>
    <div class="w-full" id="formAccountEditor">
        <div class="p-5 md:p-6 lg:p-10 mt-4 bg-white rounded-md w-full">
            <div class="flex mb-5 justify-between items-center">
                <span
                    class="text-xs sm:text-sm md:text-md lg:text-lg font-medium"
                    >Описание профиля:</span
                >
                <a
                    class="
                        rounded-md
                        text-white
                        bg-blue-950
                        flex
                        items-center
                        text-center
                        border border-white
                        w-8
                        h-8
                        cursor-pointer
                        hover:border-blue-700
                        bg-blue-700
                        transition-all
                        duration-500
                    "
                    href="javascript:;"
                    type="submit"
                    @click="activeEditor = 'false'"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 m-auto w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                    </svg>
                </a>
            </div>
            <div class="lg:flex flex-col flex-wrap md:max-h-64">
                <div class="mb-3">
                    <div
                        class="
                            mb-1
                            text-gray-400 text-xs
                            sm:text-sm
                            md:text-md
                            lg:text-lg
                            font-medium
                        "
                    >
                        <span>Ф.И.О:</span>
                    </div>
                    <div
                        class="
                            mb-1
                            flex
                            text-xs
                            sm:text-sm
                            md:text-md
                            lg:text-lg
                        "
                    >
                        <span
                            class="mr-2 bg-gray-200"
                            :class="{ 'animate-pulse': isLoadingProfile }"
                            >{{ getFullName }}</span
                        >
                    </div>
                    <!-- <div
                        class="
                            mb-1
                            flex
                            text-xs
                            sm:text-sm
                            md:text-md
                            lg:text-lg
                        "
                    >
                        <input
                            type="text"
                            class="border border-gray-400 px-2 w-1/2 rounded"
                        />
                    </div> -->
                </div>
                <div class="mb-3">
                    <div
                        class="
                            mb-1
                            text-gray-400 text-xs
                            sm:text-sm
                            md:text-md
                            lg:text-lg
                            font-medium
                        "
                    >
                        <span>Дата рождения:</span>
                    </div>
                    <div
                        class="
                            mb-1
                            flex
                            text-xs
                            sm:text-sm
                            md:text-md
                            lg:text-lg
                        "
                    >
                        <span>Не указано</span>
                    </div>
                    <!-- <div
                        class="
                            mb-1
                            flex
                            text-xs
                            sm:text-sm
                            md:text-md
                            lg:text-lg
                        "
                    >
                        <input
                            type="date"
                            class="border border-gray-400 px-2 w-1/2 rounded"
                        />
                    </div> -->
                </div>
                <div class="mb-3">
                    <div
                        class="
                            mb-1
                            text-gray-400 text-xs
                            sm:text-sm
                            md:text-md
                            lg:text-lg
                            font-medium
                        "
                    >
                        <span>Место Проживания:</span>
                    </div>
                    <div
                        class="
                            mb-1
                            flex
                            text-xs
                            sm:text-sm
                            md:text-md
                            lg:text-lg
                        "
                    >
                        <span>г.Ташкент</span>
                    </div>
                    <!-- <div
                       
                        class="
                            mb-1
                            flex
                            text-xs
                            sm:text-sm
                            md:text-md
                            lg:text-lg
                        "
                    >
                        <select
                            class="border border-gray-400 px-2 w-1/2 rounded"
                            name="country"
                            id="country"
                        >
                            <option value="Выбрать">Выбрать</option>
                            <option value="Выбрать">Выбрать</option>
                            <option value="Выбрать">Выбрать</option>
                            <option value="Выбрать">Выбрать</option>
                        </select>
                    </div> -->
                </div>
                <div class="mb-3">
                    <div
                        class="
                            mb-1
                            text-gray-400 text-xs
                            sm:text-sm
                            md:text-md
                            lg:text-lg
                            font-medium
                        "
                    >
                        <span>Номер телефона:</span>
                    </div>
                    <div
                        class="
                            mb-1
                            flex
                            text-xs
                            sm:text-sm
                            md:text-md
                            lg:text-lg
                        "
                    >
                        <span class="mr-2">+998 99 999 99 99</span>
                        <span class="cursor-help" title="Подтверждено">
                            <svg
                                class="w-5 h-5 fill-current text-green-600"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                viewBox="0 0 405.272 405.272"
                            >
                                <g>
                                    <path
                                        d="M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836
                                                        c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064
                                                        c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"
                                    />
                                </g>
                            </svg>
                        </span>
                    </div>
                    <!-- <div
                        class="
                            mb-1
                            flex
                            text-xs
                            sm:text-sm
                            md:text-md
                            lg:text-lg
                        "
                    >
                        <input
                            type="text"
                            class="border border-gray-400 px-2 w-1/2 rounded"
                        />
                    </div> -->
                </div>
                <div class="mb-3">
                    <div
                        class="
                            mb-1
                            text-gray-400 text-xs
                            sm:text-sm
                            md:text-md
                            lg:text-lg
                            font-medium
                        "
                    >
                        <span>Электронная почта:</span>
                    </div>
                    <div
                        class="
                            mb-1
                            flex
                            text-xs
                            sm:text-sm
                            md:text-md
                            lg:text-lg
                        "
                    >
                        <span>developer@bigsoft.uz</span>
                        <span class="cursor-help" title="Не подтверждено">
                            <svg
                                class="w-5 h-5 fill-current text-red-600"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.002 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm.195-12.01a1.81 1.81 0 1 1 3.602 0l-.701 7.015a1.105 1.105 0 0 1-2.2 0l-.7-7.015z"
                                />
                            </svg>
                        </span>
                    </div>
                    <!-- <div
                        class="
                            mb-1
                            flex
                            text-xs
                            sm:text-sm
                            md:text-md
                            lg:text-lg
                        "
                    >
                        <input
                            type="text"
                            class="border border-gray-400 px-2 w-1/2 rounded"
                        />
                    </div> -->
                </div>
                <div class="mb-3">
                    <div
                        class="
                            mb-1
                            text-gray-400 text-xs
                            sm:text-sm
                            md:text-md
                            lg:text-lg
                            font-medium
                        "
                    >
                        <span>Пол:</span>
                    </div>
                    <div
                        class="
                            mb-1
                            flex
                            text-xs
                            sm:text-sm
                            md:text-md
                            lg:text-lg
                        "
                    >
                        <span>Мужской</span>
                    </div>
                    <!-- <div
                        v-else
                        class="
                            mb-1
                            flex
                            text-xs
                            sm:text-sm
                            md:text-md
                            lg:text-lg
                        "
                    >
                        <select
                            class="border border-gray-400 px-2 w-1/2 rounded"
                            name="gender"
                            id="gender"
                        >
                            <option value="Мужской">Мужской</option>
                            <option value="Женский">Женский</option>
                        </select>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { user, useUser } from "@/composables/auth/user";
import { computed, onMounted, watch } from "vue";

const { onGetMe } = useUser();
const {
    isLoading: isLoadingProfile,
    exec: execProifle,
    error: errorLoadingProfile,
} = onGetMe();

watch(isLoadingProfile, (value) => {
    console.log(value);
});

onMounted(() => {
    execProifle();
});

const getFullName = computed({
    get() {
        return `${user.value.surname} ${user.value.name} ${user.value.patronymic}`;
    },
    set(val) {},
});
</script>

<style lang="scss" scoped>
</style>