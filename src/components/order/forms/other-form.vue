<script setup>
import useCategoryApi from "@/composables/categories/instance";
import { useUpdateOrderApi } from "@/composables/orders/instance&storage";
import { reactive, ref, toRefs } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import useVuelidate from "@vuelidate/core";
import { helpers, minLength } from "@vuelidate/validators";
import { useRouter } from "vue-router";
import BaseForm from "./base-form.vue";

const props = defineProps({
  categorySlug: {},
  serviceSlugs: {},
});

const { categorySlug, serviceSlugs } = toRefs(props);

const router = useRouter();

const back = () => {
  router.back();
};
const {
  category,
  onGetWhenNotLoaded: onGetCategoryWhenNotLoaded,
  isLoading: categoryIsLoading,
} = useCategoryApi();

onMounted(async () => {
  await onGetCategoryWhenNotLoaded(categorySlug.value);
});

const {
  currentDraftedOrder,
  onUpdate: onUpdateOrder,
  isUpdating: orderIsUpdating,
} = useUpdateOrderApi(categorySlug.value);

const description = ref(currentDraftedOrder?.value?.description || "");

const $externalResults = reactive({
  description: [],
});

const v = useVuelidate(
  {
    description: {
      minLength: helpers.withMessage(
        "Минимиальное количество символов 5.",
        minLength(5)
      ),
    },
  },
  {
    description,
  },
  { $externalResults }
);
const onSubmit = async (e) => {
  if (!(await v.value.$validate())) {
    return;
  }

  await onUpdateOrder({
    description: description.value,
  }).catch(({ response }) => {
    const { error } = response?.data;
    if (error?.type == "validation") {
      $externalResults.description = error.fields.description || [];
    }

    throw new Error(error);
  });

  router.push({
    name: "order.update",
    params: {
      categorySlug: categorySlug.value,
      serviceSlugs: serviceSlugs.value,
      form: "publish",
    },
  });
};

const isLoading = computed(
  () => orderIsUpdating.value || categoryIsLoading.value
);
</script>
<template>
  <BaseForm @on-submit="onSubmit">
    <template #header>
      <div class="pt-1.5 pb-0.5" v-if="categoryIsLoading">
        <div class="h-6 w-96 bg-primary/10 rounded-lg animate-pulse"></div>
      </div>
      <h1
        class="text-2xl text-primary"
        :class="{ 'animate-pulse': isLoading }"
        v-else
      >
        Пожелания к заказу
      </h1>
      <div v-if="categoryIsLoading" class="pt-1.5 pb-0.5">
        <div class="h-4 w-64 bg-primary/10 rounded-md animate-pulse"></div>
      </div>
      <p class="text-orange-500" :class="{ 'animate-pulse': isLoading }">
        {{ category.name }}
      </p>
    </template>

    <div :class="{ 'animate-pulse': isLoading }">
      <c-textarea
        autofocus
        name="kfjklsdj"
        v-model="description"
        class="w-full max-h-[600px] min-h-[170px]"
        rows="10"
        placeholder="В этом поле Вы можете написать дополнительные условия и уточнения по работе. Данное поле поможет специалисту лучше подготовится к работе и понять специфику задачи.
	Например:
	1. Прошу приобрести розетки и лампочки самостоятельно, дополнительные расходы будут покрыты Заказчиком. 
	2. По мимо уборки квартиры, необходимо постирать и погладить одежду."
      >
        Дополнительные пожелания
      </c-textarea>
      <div
        class="text-red-500 mb-3 mt-1"
        v-for="error in v.description.$errors"
        :key="error.$uid"
      >
        {{ error.$message }}
      </div>
    </div>
    <template #footer>
      <c-button
        scheme="secondary"
        type="button"
        @click="back"
        :loading="isLoading"
        :disabled="isLoading"
      >
        Назад
      </c-button>
      <c-button :loading="isLoading" :disabled="isLoading">
        Продолжить
      </c-button>
    </template>
  </BaseForm>
</template>

