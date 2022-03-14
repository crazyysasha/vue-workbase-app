<template>
    <div class="min-h-screen bg-gray-100">
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>
<script setup>
import AppHeader from "@/components/headers/AppHeader.vue";
</script>