<template>
    <button
        class="
            shadow-md shadow-primary/25
            hover:shadow-primary/50
            transition
            duration-200
            rounded-md
            flex
            items-stretch
            max-w-sm
            p-1
        "
        @click="initCreateForm"
    >
        <div class="p-2 pr-1">
            <div class="rounded-md w-16 h-16 text-primary">
                <h-plus-circle stroke-width="1.5"></h-plus-circle>
            </div>
        </div>
        <div class="p-2 pl-1 font-medium flex">
            <div class="my-auto">Добавить новую работу</div>
        </div>
    </button>
</template>
<script setup>
const emit = defineEmits(["initCreateForm"]);

const initCreateForm = (e) => {
    emit("initCreateForm", e);
};
</script>
