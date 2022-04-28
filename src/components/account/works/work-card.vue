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
            max-w-xs
            p-1
            text-left
        "
        @click="initUpdateForm(id)"
    >
        <div class="p-2 flex">
            <div class="relative w-16 h-16 text-primary my-auto">
                <div class="absolute" :class="{ '-top-1 -left-1': link }">
                    <h-folder
                        v-if="files.length > 0"
                        :class="{ 'w-16 h-16': !link, 'w-12 h-12': link }"
                        :stroke-width="link ? 2 : 1.5"
                    ></h-folder>
                </div>
                <div
                    class="absolute"
                    :class="{ '-bottom-1 -right-1': files.length > 0 }"
                >
                    <h-link
                        v-if="link"
                        :class="{
                            'w-16 h-16': !files.length,
                            'w-12 h-12': files.length > 0,
                        }"
                        :stroke-width="files.length > 0 ? 2 : 1.5"
                    ></h-link>
                </div>
            </div>
        </div>
        <div class="p-2 flex-1 block overflow-hidden">
            <div class="flex">
                <div
                    class="
                        text-lg
                        leading-[1.125rem]
                        font-medium
                        text-ellipsis
                        truncate
                    "
                >
                    {{ name }}
                </div>
                <div class="ml-auto p-0.5" v-if="!is_verified">
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
            <div class="text-primary/75 line-clamp-2 leading-5">
                {{ description }}
                {{ description }}
            </div>
        </div>
    </button>
</template>

<script setup>
const props = defineProps({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: () => "",
    },
    link: {
        type: String,
        default: () => null,
    },
    files: {
        type: Array,
        required: true,
        default: () => [],
    },
    is_verified: {
        type: Boolean,
        required: true,
        default: () => false,
    },
});

const emit = defineEmits(["selectWork"]);
const initUpdateForm = () => {
    emit("selectWork");
};
</script>
