<template>
    <label
        class="
            text-base text-orange-500
            flex
            items-center
            cursor-pointer
            group
            relative
        "
        :class="{ 'opacity-50': disabled }"
        :for="getId"
    >
        <input
            type="checkbox"
            hidden
            @change="onChange"
            :checked="props.modelValue"
            :id="getId"
            ref="input"
        />
        <span
            class="
                w-12
                h-6
                mr-2
                flex
                rounded-full
                shadow
                transition
                duration-200
                relative
            "
            :class="{
                'bg-primary shadow-primary': modelValue,
                'bg-gray-300 shadow-gray-300': !modelValue,
                'group-hover:opacity-80': !disabled,
            }"
        >
            <span
                class="
                    inline-block
                    h-4
                    w-4
                    rounded-full
                    bg-white
                    transition-all
                    duration-200
                    absolute
                    inset-y-1
                    left-1
                "
                :class="{ 'left-7': modelValue }"
            ></span>
        </span>
        <span>
            <slot name="label" :label="getLabel" :switched="modelValue">
                <transition
                    enter-from-class="opacity-0 w-none"
                    enter-active-class="transition-all duration-200"
                    enter-to-class="opacity-100 !w-full"
                    leave-from-class="opacity-100"
                    leave-active-class="transition duration-1000 absolute right-0"
                    leave-to-class="opacity-0"
                >
                    <span :key="getLabel">{{ getLabel }}</span>
                </transition>
            </slot>
        </span>
    </label>
</template>

<script setup>
import { toRef, ref, onMounted, computed } from "vue";

const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true,
        default() {
            return false;
        },
    },
    debug: Boolean,
    name: {
        type: String,
        default() {
            return "model";
        },
    },
    label: {
        type: [String, Array, Object, Boolean],
        default() {
            return ["Checked", "Unchecked"];
        },
        validator(value) {
            if (Array.isArray(value) && value.length > 1) return true;

            if (
                value instanceof Object &&
                "checked" in value &&
                "unchecked" in value
            )
                return true;

            if (typeof value === "string") return true;

            if (value instanceof Boolean) return true;

            return false;
        },
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["update:modelValue"]);

const onChange = (event) => {
    if (props.debug) console.log(event);
    if (!props.disabled) emit("update:modelValue", event.target.checked);
};

const getId = computed(() => `switch-field-${props.name}`);

const getLabel = computed(() => {
    if (typeof props.label === "string") {
        return props.label;
    }
    if (Array.isArray(props.label)) {
        return props.label[props.modelValue ? 0 : 1];
    }

    if (props.label === true) {
        return props.modelValue;
    }
    if (props.label === false) {
        return "";
    }
    if (props.label instanceof Object) {
        return props.label[props.modelValue ? "checked" : "unchecked"];
    }
    return props.modelValue;
});
const input = ref(null);

onMounted(() => {
    input.value.checked = props.modelValue;
});
</script>
