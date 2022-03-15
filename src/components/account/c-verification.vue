<template>
    <form @submit.prevent="onRegisterHandler" class="md:w-[40rem] w-auto">
        <h3 class="font-semibold block text-xl md:text-xl text-center mb-6">
            Выберите тип загружаемого документа
        </h3>
        <hr class="mb-4 mt-1" />
        <div class="flex items-end w-full">
            <a class="text-center px-5" href="#">
                <img src="@/assets/images/passport.png" alt="">
                <span>Паспорт</span>
            </a>
            <a class="text-center px-5" href="#">
                <img src="@/assets/images/id.png" alt="">
                <span>ID - карта</span>
            </a>
            <a class="text-center px-5" href="#">
                <img src="@/assets/images/car.png" alt="">
                <span>Водительское удостоверение</span>
            </a>
        </div>
    </form>
</template>

<script setup>
import useAuth from "@/composables/auth";
import useVuelidate from "@vuelidate/core";
import { email, helpers, required, sameAs } from "@vuelidate/validators";
import { reactive, ref, watch } from "vue";

</script>
