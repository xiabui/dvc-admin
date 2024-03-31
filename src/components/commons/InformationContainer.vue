<template>
  <div
    class="d-flex flex-wrap align-items-center justify-content-start gap-2 py-2"
  >
    <svg-icon v-if="icon" :name="icon" :size="20" :color="iconColor"></svg-icon>
    <span class="h5-text">{{ label }}:</span>
    <slot />
  </div>
</template>
<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: false,
  },
  iconColor: {
    type: String,
    default: "#1E293B",
  },
});
</script>
