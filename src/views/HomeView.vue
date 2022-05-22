<script setup>
import CCategories from "@/components/home/c-categories";
import HomeHeader from "@/components/home/home-header.vue";
import CAdvantages from "@/components/home/c-advantages.vue";
import CQuestions from "@/components/home/c-questions.vue";
import CApplication from "@/components/home/c-application.vue";
</script>
<template>
    <div>
        <home-header></home-header>
        <c-categories></c-categories>
        <c-advantages></c-advantages>
        <c-questions></c-questions>
        <c-application></c-application>
    </div>
</template>