<template>
  <div class="relative">
    <div
      class="flex justify-between items-center border p-2 mt-3 cursor-pointer"
      @click="isOpen = !isOpen"
    >
      <h5 v-text="text"></h5>
      <svg
        v-show="isOpen"
        class="w-4"
        viewBox="0 0 330 330"
        style="enable-background: new 0 0 330 330"
        xml:space="preserve"
      >
        <path
          id="XMLID_224_"
          d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
                l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
                C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
        />
      </svg>
      <svg
        v-show="!isOpen"
        class="w-4"
        viewBox="0 0 330 330"
        style="enable-background: new 0 0 330 330"
        xml:space="preserve"
      >
        <path
          id="XMLID_225_"
          d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
        />
      </svg>
    </div>

    <div
      v-show="isOpen"
      class="absolute bg-primary text-white top-12 border py-2 px-4"
    >
      <ul>
        <li
          v-for="item in items"
          @click="text = item"
          :key="item"
          class="cursor-pointer rounded-md px-2 py-1 hover:bg-blue-500"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const { ref } = require("@vue/reactivity");

const isOpen = ref(false);
const text = ref("Select Month");
const items = ref([
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]);
</script>
