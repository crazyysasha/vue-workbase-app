<template>
    <div class="flex flex-col group transition-all duration-200 mb-2 text-base">
        <label
            class="text-primary inline-block bg-transparent align-middle px-1"
        >
            {{ label }}
        </label>
        <textarea
            :type="type"
            class="
                p-1
                rounded-md
                border border-orange-500 border-opacity-25
                group-hover:border-opacity-70
                focus:!border-opacity-100 focus:outline-none
                disabled:bg-transparent
                h-24
                disabled:resize-none
            "
            :class="{
                '!border-opacity-0 ': disabled,
                'text-primary/0': loading,
                '!bg-primary/10': loading,
                'animate-pulse': loading,
                '!bg-primary/10': saving,
                'animate-pulse': saving,
                ...classes,
            }"
            :disabled="disabled || saving"
            :value="modelValue"
            @input="onInput"
            :placeholder="placeholder"
        ></textarea>
    </div>
</template>

<script setup>
const props = defineProps({
    type: {
        type: String,
        required: false,
        default() {
            return "text";
        },
        validator(value) {
            return ["text", "number", "date"].includes(value);
        },
    },
    modelValue: {
        type: [String, Number],
        required: true,
    },
    disabled: {
        type: Boolean,
        required: false,
        default() {
            return false;
        },
    },
    loading: {
        type: Boolean,
        required: false,
        default() {
            return false;
        },
    },
    label: {
        type: String,
        required: false,
    },
    placeholder: {
        type: [String, Number],
    },
    saving: {
        type: Boolean,
        default() {
            return false;
        },
    },
    classes: {
        type: Object,
        default: function () {
            return {};
        },
    },
    classes: {
        type: Object,
        default: function () {
            return {};
        },
    },
});

const emit = defineEmits(["update:modelValue"]);

const onInput = ({ target: { value } }) => {
    emit("update:modelValue", value);
};
</script>

<style scoped>
input[type="date" i]::-webkit-calendar-picker-indicator {
    background-image: url("@/assets/icons/calendar.svg");
}
</style>