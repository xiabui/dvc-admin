<template>
  <div class="divider" :style="{ width: width }" />
</template>
<script setup lang="ts">
defineProps({
  width: {
    type: String,
    default: "100%",
  },
});
</script>
