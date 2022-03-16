

<script setup>
import CCategories from "@/components/home/c-categories";
import HomeHeader from "@/components/home/home-header.vue";
import CQuestions from "@/components/home/c-advantages.vue";
import CAdvantages from "@/components/home/c-questions.vue";
import CApplication from "@/components/home/c-application.vue";
import HomeFooter from "@/components/home/home-footer.vue";

const click = ({ target, preventDefault }) => {
    console.log(target);
};
</script>

<template>
    <home-header></home-header>
    <c-categories></c-categories>
    <c-advantages></c-advantages>
    <c-questions></c-questions>
    <c-application></c-application>
    <home-footer></home-footer>
</template>


<style>
.section-banner {
    height: calc(85vh - 76px);
}

@media only screen and (max-width: 600px) {
    .section-banner {
        height: calc(70vh - 76px);
    }
}
</style>
