<template>
    <li
        class="
            group
            hover:shadow hover:shadow-primary
            rounded-md
            my-1
            -mx-2
            transition
            duration-200
        "
    >
        <label
            class="flex cursor-pointer p-2 transition duration-200"
            :class="{
                'border-b': isChildrenOpen,
                'border-transparent': isChildrenOpen,
                'group-hover:border-primary/50': isChildrenOpen,
            }"
        >
            <div
                class="
                    flex
                    items-center
                    justify-center
                    my-auto
                    mr-2
                    rounded-md
                    aspect-square
                    h-5
                    w-5
                    border border-primary
                "
            >
                <h-check
                    class="h-4 w-4 text-primary"
                    v-if="isChecked()"
                ></h-check>
            </div>
            <input
                type="checkbox"
                :value="option[optionKey]"
                :checked="modelValue.includes(option[optionKey])"
                @change="onChange"
                hidden
            />
            <slot> {{ option.name }} </slot>
            <button
                class="ml-auto flex items-center"
                v-if="option.children?.length"
                @click="isChildrenOpen = !isChildrenOpen"
            >
                <h-chevron-right
                    class="h-4 w-4 transition duration-200"
                    :class="{ 'rotate-90': isChildrenOpen }"
                ></h-chevron-right>
                {{ option.children.length }} из {{ option.children.length }}
            </button>
        </label>

        <checkbox-list
            v-if="option.children?.length > 0 && isChildrenOpen"
            :options="option.children"
            :model-value="modelValue"
            :option-key="optionKey"
            @update:model-value="onUpdate"
            class="px-4"
        >
        </checkbox-list>
    </li>
</template>

<script setup>
import { ref } from "vue";
import CheckboxList from "./checkbox-list.vue";
const props = defineProps({
    modelValue: {
        type: Array,
        required: true,
    },
    option: {
        type: [Object, String],
    },
    optionKey: {
        type: [String, Number],
        default() {
            return "key";
        },
    },
    collapsed: {},
});
const emit = defineEmits(["update:modelValue"]);
const isChecked = () => {
    return props.modelValue.includes(`${props.option[props.optionKey]}`);
};

const onChange = ({ target: { value, checked } }) => {
    const selected = [...props.modelValue];

    if (!isChecked()) {
        getNestedKeys(props.option);
        selected.push(value);
    } else {
        selected.splice(selected.indexOf(value), 1);
    }
    onUpdate(selected);
};

const onUpdate = (value) => {
    emit("update:modelValue", value);
};
const isChildrenOpen = ref(false);

const getNestedKeys = (item, childreKey = "children") => {
    if (typeof item == "array") {
        console.log("array");
    }
    if (typeof item == "object") {
        console.log(typeof item);
        return [
            item[props.optionKey],
            ...getNestedKeys(item[childreKey] || []),
        ];
    }

    // const elements = [];
    // for (const element of items) {
    //     elements.push(element[props.optionKey]);
    // }
    // items.map((i) => i[props.optionKey]).concat();
};
</script>
