<template>
  <div>
    <slot name="links"> </slot>
  </div>
</template>

<script setup>
import { toRefs } from "vue";

toRefs(
  defineProps({
    activeTab: String,
  })
);
</script>
