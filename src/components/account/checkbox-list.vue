<template>
    <ul class="p-4">
        <li v-for="option in options" :key="option[optionKey]">
            <label>
                {{ option.id }}
                <input
                    type="checkbox"
                    :value="option.name"
                    :checked="modelValue.includes(option.name)"
                    @change="onChange"
                />
                <slot>
                    {{ option.name }}
                </slot>
            </label>
            <checkbox-list
                v-if="option.children?.length > 0"
                :options="option.children"
                :modelValue="modelValue"
                @update:modelValue="onUpdate"
            >
            </checkbox-list>
        </li>
    </ul>
</template>
<script setup>
import { computed, watch } from "vue";

const props = defineProps({
    label: {
        type: String,
    },
    options: {
        type: Array,
    },
    optionKey: {
        type: String,
        default() {
            return "key";
        },
    },
    isNested: {
        type: Boolean,
        default() {
            return false;
        },
    },
    modelValue: {
        type: Array,
        default() {
            return [];
        },
    },
});

const emit = defineEmits(["update:modelValue"]);

const onChange = (event) => {
    const checked = [...(props.modelValue || [])];
    if (event.target.checked) checked.push(event.target.value);
    else checked.splice(checked.indexOf(event.target.value), 1);
    onUpdate(checked);
};
const onUpdate = (value) => {
    emit("update:modelValue", value);
};
</script>
