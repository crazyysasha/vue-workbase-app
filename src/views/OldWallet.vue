<template>
  <section class="container">
    <div class="grid grid-cols-4 gap-4 mt-8 px-10 pb-96">
      <div class="col-span-2">
        <div class="border border-primary p-6">
          <div>
            <h2 class="text-xl font-medium my-3">Select Payment Method</h2>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div class="flex items-center border border-primary p-3">
              <div class="w-14">
                <img
                  src="../assets/images/visa.png"
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
              <h5 class="text-lg font-semibold">Visa card</h5>
            </div>

            <div class="flex items-center border border-primary p-3">
              <div class="w-14">
                <img
                  src="../assets/images/visa.png"
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
              <h5 class="text-lg font-semibold">Visa card</h5>
            </div>

            <div class="flex items-center border border-primary p-3">
              <div class="w-14">
                <img
                  src="../assets/images/visa.png"
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
              <h5 class="text-lg font-semibold">Visa card</h5>
            </div>
          </div>

          <div class="my-4">
            <label for="NameCard"> Name On Card </label>
            <input
              class="
                w-full
                h-10
                px-4
                shadow
                mt-3
                border
                focus:outline-none
                bg-transparent
                focus:shadow-lg focus:border-primary
              "
              type="text"
              id="NameCard"
            />
          </div>

          <div class="my-4">
            <label class="block" for="CardNumber"> Card Number </label>
            <div class="flex shadow border mt-3" :class="{'border-primary shadow': isfocus}">
              <input
                type="text"
                maxlength="19"
                pattern="[0-9]*"
                inputmode="numeric"
                @focus="isfocus = true"
                v-model="creditCardNumber"
                class="w-5/12 h-10 px-4 focus:outline-none bg-transparent"
                id="CardNumber"
                placeholder="0000 - 0000 - 0000 - 0000"
              />
              <div class="w-7/12 h-10 bg-transparent"></div>
            </div>
          </div>

          <div class="my-4">
            <div class="grid grid-cols-3 gap-4">
              <div class="">
                <h5>Month</h5>
                <c-select></c-select>
              </div>

              <div class="">
                <h5>Year</h5>
                <div class="border p-2 mt-3">
                  <h5>Select Year</h5>
                </div>
              </div>

              <div class="">
                <h5>CVV</h5>
                <div class="border p-2 mt-3">SVV</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-1">
        <div class="border border-primary p-6 h-80"></div>

        <button
          class="
            border-2 border-primary
            w-full
            mt-4
            py-3
            text-center text-xl
            font-medium
            text-primary
            transition-all
            duration-500
            hover:text-white
            hover:bg-primary
            hover:shadow-xl
            hover:shadow-blue-400
          "
        >
          PURCHASE NOW
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import CSelect from "@/components/wallet/c-select.vue";
import { ref, watch } from "vue";
const isfocus = ref(false);
const creditCardNumber = ref("");

watch(creditCardNumber, () => {
  let realNumber = creditCardNumber.value.replace(/-/gi, "");

  // Generate dashed number
  let dashedNumber = realNumber.match(/.{1,4}/g);
  creditCardNumber.value = dashedNumber.join("-");
});
</script>

<style>
</style>