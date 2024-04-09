<template>
  <div
    class="d-flex flex-wrap align-items-center justify-content-start gap-2 py-1"
  >
    <svg-icon v-if="icon" :name="icon" :size="20" :color="iconColor"></svg-icon>
    <span class="h5-text">{{ label }}:</span>
    <span v-if="value" class="h5-text-bold">{{ value }}</span>
    <slot />
  </div>
</template>
<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: false,
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
