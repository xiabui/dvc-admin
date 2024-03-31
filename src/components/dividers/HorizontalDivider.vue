<template>
  <div class="horizontal-divider" :style="{ height: height }" />
</template>
<script setup lang="ts">
defineProps({
  height: {
    type: String,
    default: "32px",
  },
});
</script>
