<template>
    <ul class="py-2">
        <checkbox-list-item
            v-for="option in options"
            :key="option[optionKey]"
            :model-value="modelValue"
            :option-key="optionKey"
            :option="option"
            @update:model-value="onUpdate"
        >
        </checkbox-list-item>
        <!-- <li
            v-for="option in options"
            :key="option[optionKey]"
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
                        v-if="modelValue.includes(option[optionKey])"
                    ></h-check>
                </div>
                <input
                    type="checkbox"
                    :value="option[optionKey]"
                    :checked="modelValue.includes(option[optionKey])"
                    @change="onChange"
                    hidden
                />
                {{ modelValue.includes(`${option[optionKey]}`) }}
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
                    0 из {{ option.children.length }}
                </button>
            </label>
            TODO: нужно доделать анимацию открытия  
             <transition
                enter-from-class="max-h-0"
                enter-active-class="transition duration-200  overflow-hidden"
                enter-to-class="max-h-[9999999999999px]"
                leave-from-class="max-h-[9999999999999px]"
                leave-active-class="transition duration-200  overflow-hidden"
                leave-to-class="max-h-0"
            > 
            <checkbox-list
                v-if="option.children?.length > 0 && isNested && isChildrenOpen"
                :options="option.children"
                :modelValue="modelValue"
                collapsed
                is-nested
                :option-key="optionKey"
                @update:modelValue="onUpdate"
                class="px-4"
            >
            </checkbox-list>
        </li> 
         </transition> -->
    </ul>
</template>
<script setup>
import CheckboxListItem from "./checkbox-list-item.vue";
import { computed, effect, ref, watch } from "vue";

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
    disabled: {
        type: Boolean,
        required: false,
        default() {
            return false;
        },
    },
});

const emit = defineEmits(["update:modelValue"]);

const isChildrenOpen = ref(false);

console.log(props.modelValue);

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
