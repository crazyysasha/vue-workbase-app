<template>
  <form @submit.prevent.stop="onSubmit">
    <c-input
      type="number"
      name="price-min"
      class="w-full"
      v-model="state.price_min"
      :valid="!validator.price_min.$error"
      :loading="isLoading"
      :disabled="isLoading"
    >
      Укажите минимальную стоимость услуги
      <template #prefix>От:</template>
    </c-input>
    <div class="mt-1 mb-4">
      <div
        class="text-red-500"
        v-for="error in validator.price_min.$errors"
        :key="error.$uid"
      >
        {{ error.$message }}
      </div>
    </div>
    <c-input
      type="number"
      name="price-max"
      class="w-full"
      v-model="state.price_max"
      :valid="!validator.price_max.$error"
      :loading="isLoading"
      :disabled="isLoading"
    >
      Укажите максимальную стоимость услуги
      <template #prefix>До:</template>
    </c-input>
    <div class="mt-1 mb-4">
      <div
        class="text-red-500"
        v-for="error in validator.price_max.$errors"
        :key="error.$uid"
      >
        {{ error.$message }}
      </div>
    </div>
    <div class="flex justify-between">
      <c-button
        type="button"
        scheme="secondary"
        @click="onCancel"
        :loading="isLoading"
        :disabled="isLoading"
      >
        отмена
      </c-button>
      <c-button :loading="isLoading" :disabled="isLoading">
        сохранить
      </c-button>
    </div>
  </form>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import {
  helpers,
  minLength,
  required,
  requiredIf,
} from "@vuelidate/validators";
import { reactive, toRefs, unref, watch, watchEffect } from "vue";
const props = defineProps({
  defaultState: {
    type: Object,
  },
  updateHandlers: {
    type: Object,
    required: true,
  },
});
const { defaultState, updateHandlers } = toRefs(props);
const { execute, isLoading, isLoaded, promise } = unref(updateHandlers);

const emit = defineEmits(["cancel", "success"]);

watch(defaultState, () => setStateWithDefaults());

const state = reactive({ price_min: "", price_max: "" });

const setStateWithDefaults = () => {
  Object.assign(state, {
    price_min: defaultState.value?.price_min || "",
    price_max: defaultState.value?.price_max || "",
  });
};
setStateWithDefaults();

const rules = {
  price_min: {
    requiredIf: helpers.withMessage("", requiredIf(false)),
  },
  price_max: {
    required: helpers.withMessage("Укажите максимальную цену", required),
  },
};

const $externalResults = reactive({ price_min: [], price_max: [] });

watch(
  () => state.price_min,
  () => {
    Object.assign($externalResults, { price_min: [] });
  }
);
watch(
  () => state.price_max,
  () => {
    Object.assign($externalResults, { price_max: [] });
  }
);

const validator = useVuelidate(rules, state, { $externalResults });

const onSubmit = async () => {
  if (!(await validator.value.$validate())) return;

  await execute({
    price_min: state.price_min || 0,
    price_max: state.price_max || 0,
  })
    .then((order) => emit("success", order))
    .catch(({ type, fields, message }) => {
      if (type == "validation") Object.assign($externalResults, fields);
      else alert(message);
      throw { error, fields, message };
    });
};

const onCancel = () => {
  setStateWithDefaults();
  emit("cancel");
};
</script>
