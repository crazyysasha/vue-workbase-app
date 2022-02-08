<template>
    <div class="relative">
        <div
            class="border rounded-lg px-2 py-1 focus:outline-blue-900"
            tabindex="0"
            v-on="openHandlers"
        >
            {{
                modelValue
                    ? items.filter((e) => e.value == modelValue)[0].label
                    : "Не выран"
            }}
        </div>
        <ul class=""></ul>
    </div>
</template>

<script>
import { toRefs } from "vue";
export default {
    props: { modelValue: [String, Boolean, Number], items: [Object, Array] },
    emits: ["update:modelValue"],
    setup(props, { emit }) {
        const { modelValue, items } = toRefs(props);
        console.log(modelValue.value);
        if (modelValue.value == null) {
            emit("update:modelValue", items.value[0].value);
        }
        const openHandlers = {
            ["click"](e) {
                console.log(e);
            },
        };
        return {
            openHandlers,
        };
    },
};
</script>
