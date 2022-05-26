<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
    modelValue: {
        type: String,
        required: false,
        default: "",
    },
    placeholder: {
        type: [String, Number],
        required: false,
    },
    items: {
        type: [Array],
        default() {
            return [];
        },
    },
    loading: {
        type: Boolean,
        default: false,
    },
    itemKey: {
        type: String,
        default: "id",
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});

const input = ref();
const inputContainer = ref();

const inputContainerHeight = computed(
    () => inputContainer.value?.clientHeight ?? 0
);
const isResultOpen = ref(
    !props.disabled && !props.loading && props.items.length > 0
);

const emit = defineEmits(["update:modelValue", "onSelectItem"]);

const onInput = ({ target }) => {
    isResultOpen.value = true;
    return emit("update:modelValue", target.value);
};

const escapeHandler = (event) => {
    if (event.keyCode != 27) {
        return;
    }
    isResultOpen.value = false;
};

const clickHandler = () => {
    isResultOpen.value = false;
};
const onSelectItem = (item) => {
    isResultOpen.value = false;
    emit("onSelectItem", item);
};

const openHandler = (e) => {
    if (e.type == "focus" && props.items.length > 0) {
        isResultOpen.value = true;
    }
    if (e.type == "click" && props.items.length > 0) {
        isResultOpen.value = true;
    }
};
onMounted(() => {
    document.addEventListener("keyup", escapeHandler);
    document.addEventListener("click", clickHandler);
});

onUnmounted(() => {
    document.removeEventListener("keyup", escapeHandler);
    document.removeEventListener("click", clickHandler);
});
</script>

<template>
    <div
        class="relative"
        :style="{ minHeight: `${inputContainerHeight}px` }"
        @click.stop
    >
        <ul
            class="
                absolute
                border border-primary/10
                hover:border-primary/50
                focus-within:!border-primary
                w-full
                bg-white
                rounded-lg
                z-10
                shadow-md shadow-primary/10
                max-h-72
                overflow-auto
                scroll-primary
                transition
                duration-200
            "
            v-show="isResultOpen"
        >
            <li :style="{ minHeight: `${inputContainerHeight}px` }"></li>
            <li v-if="loading && isResultOpen" class="px-3 py-2">
                <svg
                    class="animate-spin h-5 w-5 text-primary mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                    ></circle>
                    <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
            </li>
            <li
                v-for="(item, index) in items"
                :key="index"
                v-else-if="items.length > 0"
            >
                <slot name="list-item-container" :item="item" :index="index">
                    <div
                        class="px-3 py-2 cursor-pointer hover:bg-primary/10"
                        @click="onSelectItem(item)"
                    >
                        <slot name="list-item" :item="item" :index="index">
                            {{ item.name }}
                        </slot>
                    </div>
                </slot>
            </li>
            <li class="px-3 py-2" v-else-if="$slots['no-items']">
                <slot name="no-items"></slot>
            </li>
        </ul>
        <div class="bg-white absolute rounded-lg w-full z-20">
            <div
                class="
                    bg-primary/10
                    rounded-lg
                    border border-primary/10
                    hover:border-primary/50
                    focus-within:!border-primary
                    transition
                    duration-200
                    shadow-md shadow-primary/10
                    w-full
                "
                ref="inputContainer"
            >
                <input
                    type="text"
                    class="bg-transparent focus:outline-none w-full px-4 py-2"
                    :placeholder="placeholder"
                    :disabled="disabled"
                    @input="onInput"
                    :value="modelValue"
                    ref="input"
                    @focus="openHandler"
                    @click="openHandler"
                />
            </div>
        </div>
    </div>
</template>

<style>
.scroll-primary::-webkit-scrollbar {
    @apply w-2;
}
.scroll-primary::-webkit-scrollbar-track {
    @apply bg-transparent p-1;
}
.scroll-primary::-webkit-scrollbar-thumb {
    @apply bg-primary/50 rounded-full;
}
.scroll-primary:hover::-webkit-scrollbar-thumb {
    @apply bg-primary/100;
}
</style>