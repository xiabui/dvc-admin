<template>
  <div class="news-card" :style="{ width: width }">
    <span class="title"> {{ title || "title" }} </span>
    <span class="subtitle"> {{ date || "date" }} </span>
  </div>
</template>
<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "",
  },
  date: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "100%",
  },
});
</script>
