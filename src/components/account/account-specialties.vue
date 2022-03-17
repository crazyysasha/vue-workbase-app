<template>
  <section class="bg-white rounded-md shadow-md shadow-primary/25">
    <div class="p-4">
      <div class="flex flex-col sm:flex-row justify-between sm:items-center">
        <h4 class="font-medium text-2xl text-primary">Специальности</h4>
        <wb-button type="primary" v-if="!isEditing" @click="isEditing = true">
          Добавить новую специальность
        </wb-button>
      </div>
      <div
        class="flex flex-col sm:flex-row justify-between py-4 sm:items-center"
      >
        <div class="flex gap-3 justify-items-center items-center">
          <span
            class="
              rounded-full
              bg-gray-200
              w-9
              h-9
              flex
              justify-items-center
              items-center
            "
          >
            <img
              class="w-6 m-auto"
              src="http://api.workbase.uz/storage/app/uploads/public/622/183/665/622183665e246452328813.svg"
              alt=""
            />
          </span>
          <h4 class="text-gray-500">Мастера по ремонту</h4>
        </div>
        <div class="">
          <input
            @click="isActiveRapair = !isActiveRapair"
            id="checkToggle"
            type="checkbox"
            hidden
          />
          <label for="checkToggle" class="flex items-center">
            <div
              class="
                relative
                w-10
                rounded-full
                h-6
                bg-gray-300
                cursor-pointer
                mr-2
              "
              :class="{
                'bg-primary shadow-md shadow-primary/30': isActiveRapair,
              }"
            >
              <div
                class="absolute inset-y-1 rounded-full h-4 w-4 bg-white"
                :class="{
                  ' left-1': !isActiveRapair,
                  ' right-1': isActiveRapair,
                }"
              ></div>
            </div>
            <span class="text-lg cursor-pointer">Статус</span>
          </label>
        </div>
      </div>
      <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        <div
          class="
            relative
            border border-gray-300 border-b-0
            rounded-md
            shadow-md shadow-primary/25
            overflow-hidden
            p-4
            pb-6
          "
        >
          <div class="flex justify-between items-center text-orange-500">
            <span class="text-lg"> Электрика </span>
            <div>
              <input id="checkToggleChild_2" type="checkbox" hidden />
              <label for="checkToggleChild_2" class="flex items-center">
                <div
                  class="
                    relative
                    w-9
                    rounded-full
                    h-5
                    bg-gray-300
                    cursor-pointer
                  "
                >
                  <div
                    class="
                      absolute
                      rounded-full
                      inset-y-1
                      left-1
                      h-3
                      w-3
                      bg-white
                    "
                  ></div>
                </div>
              </label>
            </div>
          </div>
          <div class="flex justify-between">
            <div class="">
              <p class="text-gray-400">Оказывает</p>
              <span>12 из 18</span>
            </div>
            <div class="">
              <div class="text-right">
                <p class="text-gray-400">Цены указаны</p>
                <span>В 6 услугах</span>
              </div>
            </div>
          </div>
          <div class="absolute -bottom-px left-0 w-full h-2">
            <div class="relative w-full bg-gray-300 h-full">
              <div class="absolute bottom-0 w-2/3 h-full bg-primary"></div>
              <div class="absolute bottom-0 w-1/3 h-full bg-orange-500"></div>
            </div>
          </div>
        </div>
        <div
          class="
            relative
            border border-gray-300 border-b-0
            rounded-md
            shadow-md shadow-primary/25
            overflow-hidden
            p-4
            pb-6
          "
        >
          <div class="flex justify-between items-center text-orange-500">
            <span class="text-lg"> Ремонт под ключ </span>
            <div>
              <input id="checkToggleChild_2" type="checkbox" hidden />
              <label for="checkToggleChild_2" class="flex items-center">
                <div
                  class="
                    relative
                    w-9
                    rounded-full
                    h-5
                    bg-gray-300
                    cursor-pointer
                  "
                >
                  <div
                    class="
                      absolute
                      rounded-full
                      inset-y-1
                      left-1
                      h-3
                      w-3
                      bg-white
                    "
                  ></div>
                </div>
              </label>
            </div>
          </div>
          <div class="flex justify-between">
            <div class="">
              <p class="text-gray-400">Оказывает</p>
              <span>10 из 20</span>
            </div>
            <div class="">
              <div class="text-right">
                <p class="text-gray-400">Цены указаны</p>
                <span>В 5 услугах</span>
              </div>
            </div>
          </div>
          <div class="absolute -bottom-px left-0 w-full h-2">
            <div class="relative w-full bg-gray-300 h-full">
              <div class="absolute bottom-0 w-1/2 h-full bg-primary"></div>
              <div class="absolute bottom-0 w-1/4 h-full bg-orange-500"></div>
            </div>
          </div>
        </div>
        <div
          class="
            border border-gray-300
            rounded-md
            p-4
            text-center
            cursor-pointer
            shadow-md shadow-primary/25
            hover:shadow-primary/30
            flex flex-col justify-center
          "
        >
          <div
            class="
              flex
              justify-center
              items-center
              text-center
              bg-gray-300
              mx-auto
              w-10
              h-10
              text-white
              rounded-full
            "
          >
            <div class="">
              <svg class="w-5 h-5 fill-primary" viewBox="0 0 24 24">
                <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
              </svg>
            </div>
          </div>
          <div class="">
            <p class="text-gray-400 m-auto">Добавить специальность</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Tabs -->

    <div v-show="isAddNew">
      <div class="absolute inset-x-10 bg-gray-300"></div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import AccountSection from "./account-section.vue";
import WbButton from "./wb-button.vue";
import WbSelect from "./wb-select.vue";

const isActiveRapair = ref(false);
const isAddNew = ref(true);
</script>