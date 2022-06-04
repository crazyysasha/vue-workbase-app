<script setup>
import { useCategoriesCollection } from "@/composables/categories/collection";
import useCategoryModel from "@/composables/categories/model";
import { useServicesCollection } from "@/composables/services/collection";
import { onMounted, toRefs, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  slug: { type: String, required: true },
});
const { slug } = toRefs(props);

const router = useRouter();
const route = useRoute();

const { collection: categoriesCollection, onGet: onGetCategories } =
  useCategoriesCollection();

const {
  execute: executeOnGetCategories,
  isLoading: onGetCategoriesIsLoading,
  isLoaded: onGetCategoriesIsLoaded,
  promise: onGetCategoriesPromise,
} = onGetCategories({
  count: ["services"],
});

onMounted(async () => {
  await executeOnGetCategories();
});

const { model: categoryModel, onGetByIdOrSlug: onGetCategoryByIdOrSlug } =
  useCategoryModel();

const {
  execute: executeOnGetCategoryByIdOrSlug,
  isLoading: onGetCategoryByIdOrSlugIsLoading,
  isLoaded: onGetCategoryByIdOrSlugIsLoaded,
  promise: onGetCategoryByIdOrSlugPromise,
} = onGetCategoryByIdOrSlug();

onMounted(async () => {
  await executeOnGetCategoryByIdOrSlug(slug.value, { with: ["services"] });
});

watch(slug, async () => {
  await executeOnGetCategoryByIdOrSlug(slug.value, { with: ["services"] });
});
</script>
<template>
  <section class="py-16">
    <div class="container mx-auto gap-4 py-4 grid md:grid-cols-7">
      <div class="md:col-span-3 lg:col-span-2">
        <div class="rounded-lg bg-white shadow shadow-primary/25 p-7 mb-10">
          <div v-if="onGetCategoriesIsLoading">
            <div
              v-for="index in 8"
              :key="`category-skeleton-${index}`"
              class="pt-1.5 pb-3.5 flex justify-between"
            >
              <div
                class="
                  h-4
                  rounded-full
                  bg-primary/10
                  animate-pulse
                  flex-[0_0_75%]
                "
              ></div>
              <div
                class="
                  h-4
                  rounded-full
                  bg-primary/10
                  animate-pulse
                  flex-[0_0_15%]
                "
              ></div>
            </div>
          </div>
          <div v-else>
            <router-link
              class="
                mb-3
                font-medium
                flex
                items-center
                justify-between
                hover:text-primary
                transition
                duration-200
              "
              href="#"
              v-for="category in categoriesCollection"
              :key="category.id"
              :to="{
                name: 'services',
                params: { slug: category.slug },
              }"
            >
              {{ category.name }}
              <span
                class="font-normal text-base text-gray-400"
                v-if="category.services_count > 1"
              >
                {{ category.services_count }}
              </span>
            </router-link>
          </div>
        </div>
        <div class="rounded-lg bg-white shadow shadow-primary/25 p-7">
          <h4 class="text-xl text-center font-medium mb-10">
            Заработайте на том, что делаете лучше всех
          </h4>
          <router-link
            to="/signup"
            class="
              text-white
              w-full
              bg-gradient-to-r
              from-blue-500
              via-blue-600
              to-blue-700
              hover:bg-gradient-to-br
              focus:ring-4 focus:outline-none focus:ring-blue-300
              shadow-lg
              font-medium
              rounded-full
              text-md
              block
              px-5
              py-2.5
              text-center
              mr-2
              mb-2
            "
          >
            Стать специалистом
          </router-link>
        </div>
      </div>
      <div
        v-if="onGetCategoriesIsLoading"
        class="md:col-span-4 lg:col-span-5 pl-10"
      >
        <div
          class="max-w-xs h-9 mb-8 rounded-full bg-primary/10 animate-pulse"
        ></div>
        <div
          class="mb-8 last:mb-0"
          v-for="index in 3"
          :key="`category-skeleton-${index}`"
        >
          <div
            class="max-w-xs mb-4 h-7 rounded-full bg-primary/10 animate-pulse"
            href="#"
          ></div>
          <div class="basis-3/6 grid grid-cols-1 lg:grid-cols-2 gap-x-4">
            <div
              href="#"
              class="h-4 mb-4 rounded-full bg-primary/10 animate-pulse"
              v-for="index in 9"
              :key="`category-skeleton-${index}`"
            ></div>
          </div>
          <!-- <div
				class="basis-3/6"
				v-for="child in categoryModel?.services.slice(2) || []"
				:key="child.id"
			>
				<a href="#" class="block mb-2 hover:text-primary transition duration-200">
					{{ child.name }}
				</a>
				<div class="basis-3/6">
					<a
						href="#"
						class="block mb-2 hover:text-primary transition duration-200"
						v-for="ch in categoryModel?.services.slice(2) || []"
						:key="ch.id"
					>
						{{ ch.name }}
					</a>
				</div>
			</div> -->
        </div>
      </div>
      <div v-else class="md:col-span-4 lg:col-span-5 pl-10">
        <h1 class="font-bold text-3xl mb-8 text-primary">
          {{ categoryModel?.name }}
        </h1>
        <div
          class="mb-8 last:mb-0"
          v-for="index in 3"
          :key="`category-skeleton-${index}`"
        >
          <a
            class="
              text-xl
              font-semibold
              mb-4
              block
              hover:text-primary
              transition
              duration-200
            "
            href="#"
          >
            Заголовок
            <span class="font-normal text-base text-gray-400"
              >({{ index }})</span
            >
          </a>
          <div class="basis-3/6 grid grid-cols-1 lg:grid-cols-2 gap-x-4">
            <a
              href="#"
              class="
                inline-block
                mb-2
                hover:text-primary
                transition
                duration-200
              "
              v-for="index in 9"
              :key="`category-skeleton-${index}`"
            >
              Далеко-далеко за словесными горами. {{ index }}
            </a>
          </div>
          <!-- <div
				class="basis-3/6"
				v-for="child in categoryModel?.services.slice(2) || []"
				:key="child.id"
			>
				<a href="#" class="block mb-2 hover:text-primary transition duration-200">
					{{ child.name }}
				</a>
				<div class="basis-3/6">
					<a
						href="#"
						class="block mb-2 hover:text-primary transition duration-200"
						v-for="ch in categoryModel?.services.slice(2) || []"
						:key="ch.id"
					>
						{{ ch.name }}
					</a>
				</div>
			</div> -->
        </div>
      </div>
    </div>
  </section>
</template>