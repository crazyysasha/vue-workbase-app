<template>
    <div class="min-h-screen bg-gray-100">
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>
<script setup>
import AppHeader from "@/components/headers/AppHeader.vue";
import AppFooter from "@/components/footer/AppFooter.vue";
</script>