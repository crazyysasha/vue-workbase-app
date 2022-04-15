<template>
    <!-- TODO: в дальнейшем для темной темы будем использовать этот цвет "dark:bg-slate-900" -->
    <div class="min-h-screen bg-gray-100">
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>
<script setup>
import AppHeader from "@/components/headers/AppHeader.vue";
import AppFooter from "@/components/footer/AppFooter.vue";
import useSetttings from "@/composables/settings.js";
import { onMounted } from "vue";
const { exec, isLoaded } = useSetttings();

onMounted(async () => {
    if (!isLoaded.value) await exec();
});
</script>