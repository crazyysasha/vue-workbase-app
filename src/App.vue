<template>
    <div class="min-h-screen bg-gray-100">
        <site-header></site-header>
        <router-view></router-view>
    </div>
</template>
<script setup>
import SiteHeader from "@/components/headers/SiteHeader.vue";
</script>