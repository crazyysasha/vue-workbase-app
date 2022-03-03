<template>
    <teleport to="body">
        <transition
            enter-from-class="backdrop backdrop-blur-0"
            enter-active-class="transition-all ease-in duration-200"
            enter-to-class="backdrop-blur-sm"
            leave-from-class="backdrop-blur-sm"
            leave-active-class="transition-all ease-out duration-200"
            leave-to-class="backdrop-blur-0"
            @after-enter="showModal()"
        >
            <div v-if="isShownWrapper" class="absolute inset-0 z-50">
                <div
                    class="
                        backdrop-blur-sm
                        h-full
                        w-full
                        flex
                        justify-center
                        items-center
                    "
                >
                    <transition
                        enter-from-class="scale-95 -translate-y-20"
                        enter-active-class="transition-all ease-out duration-200 transform transform-gpu"
                        enter-to-class="scale-100 translate-y-0"
                        leave-from-class="scale-100 translate-y-0"
                        leave-active-class="transition-all ease-in duration-200 transform transform-gpu"
                        leave-to-class="scale-95 -translate-y-20"
                        @before-leave="closeWrapper()"
                    >
                        <div
                            v-if="isShownModal"
                            class="bg-white shadow-lg p-10 rounded-sm absolute"
                        >
                            <slot :close="closeModal"></slot>
                        </div>
                    </transition>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script setup>
import { onBeforeUnmount, ref, toRefs, watch } from "vue";

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
});

const { modelValue: isShownWrapper } = toRefs(props);

const emit = defineEmits(["update:modelValue"]);

const isShownModal = ref(false);

const closeWrapper = () => {
    emit("update:modelValue", false);
};
const closeModal = () => {
    isShownModal.value = false;
};
const showModal = () => {
    isShownModal.value = true;
};

const onEscape = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.keyCode != 27) {
        return;
    }
    closeModal();
};
watch(isShownWrapper, (val) => {
    if (val) {
        document.addEventListener("keyup", onEscape);
    } else {
        document.removeEventListener("keyup", onEscape);
    }
});
</script>