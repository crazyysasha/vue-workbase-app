<script setup>
import { toRefs } from "vue";
import { useRoute } from "vue-router";

const { params } = useRoute();

const { services } = params;
</script>

<template>
    <div>select view</div>
    <div>
        <pre>{{ services }}</pre>
    </div>
</template>

