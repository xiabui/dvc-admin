<template>
  <a
    :class="['btn-link', { 'btn-link-active': isActive }]"
    :style="{ color: color }"
  >
    {{ label }}
  </a>
</template>
<script setup lang="ts">
defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "",
  },
});
</script>
