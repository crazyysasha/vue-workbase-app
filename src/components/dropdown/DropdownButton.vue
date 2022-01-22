<template>
    <a
        href="javascript:;"
        @click="isOpen = !isOpen"
        class="flex flex-col font-medium justify-center p-2 text-lg relative"
    >
        <div class="flex items-center">
            <slot></slot>
        </div>
        <transition
            enter-from-class="opacity-90 scale-90 -translate-y-2"
            enter-active-class="duration-100 ease"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="duration-100 ease-in"
            leave-to-class="opacity-90 scale-90 -translate-y-2"
        >
            <ul
                v-if="isOpen"
                class="
                    absolute
                    top-full
                    mt-1
                    left-1/2
                    transform
                    -translate-x-1/2
                    bg-blue-900
                    rounded-lg
                    p-1
                    trasition-all
                "
            >
                <li
                    class="
                        px-2
                        py-1
                        whitespace-nowrap
                        text-center
                        hover:bg-white hover:text-blue-800
                        rounded-lg
                    "
                    v-for="item in items"
                    :key="item.value"
                >
                    <button @click.prevent="clickHandler(item)">
                        {{ item.label }}
                    </button>
                </li>
            </ul>
        </transition>
    </a>
</template>

<script>
import { ref, defineProps, defineEmits } from "vue";
export default {
    setup() {
        const isOpen = ref(false);
        const props = defineProps({ items: { type: Array, default: [] } });
        const emit = defineEmits("handler");

        const clickHandler = (item) => {
            emit("handler", item);
        };

        return { isOpen, props, clickHandler };
    },
};
</script>