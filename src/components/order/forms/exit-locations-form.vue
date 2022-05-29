<script setup>
</script>
<template>
    <BaseForm @on-submit="onSubmit">
        <template #header>
            <div class="pt-1.5 pb-0.5" v-if="categoryIsLoading">
                <div
                    class="h-6 w-96 bg-primary/10 rounded-lg animate-pulse"
                ></div>
            </div>
            <h1 class="text-2xl text-primary" v-else>
                {{
                    category.id == 1
                        ? "Выберите место проведения занятий"
                        : "Выберите место проведения работы"
                }}
            </h1>
            <div v-if="categoryIsLoading" class="pt-1.5 pb-0.5 mb-3">
                <div
                    class="h-4 w-64 bg-primary/10 rounded-md animate-pulse"
                ></div>
            </div>
            <p class="text-orange-500">{{ category.name }}</p>
        </template>
        <ul>
            <li>
                <label class="select-none">
                    <input v-model="state.at_executor" type="checkbox" />
                    у исполнителя
                </label>
            </li>
            <li>
                <label class="select-none">
                    <input v-model="state.at_customer" type="checkbox" />
                    у заказчика
                </label>
            </li>
            <li>
                <label class="select-none">
                    <input v-model="state.is_online" type="checkbox" />
                    дистанционно
                </label>
            </li>
        </ul>
        <div
            class="text-red-500"
            v-for="error in v.at_customer.$errors"
            :key="error.$uid"
        >
            {{ $error.message }}
        </div>
        <div
            class="text-red-500"
            v-for="error in v.is_online.$errors"
            :key="error.$uid"
        >
            {{ $error.message }}
        </div>
        <div
            class="text-red-500"
            v-for="error in v.at_executor.$errors"
            :key="error.$uid"
        >
            {{ $error.message }}
        </div>
        <template #footer>
            <c-button scheme="secondary" type="button" @click="back">
                Назад
            </c-button>
            <c-button> Продолжить </c-button>
        </template>
    </BaseForm>
</template>
