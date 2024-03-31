<template>
  <Button :color="backgroundColor" :label="label" severity="info">
    <template #icon>
      <svg-icon v-if="icon" :name="icon" :size="iconSize" :color="color" />
    </template>
  </Button>
</template>
<script setup lang="ts">
import Button from "primevue/button";

defineProps({
  icon: {
    type: String,
    default: "",
  },
  reverse: {
    type: Boolean,
    default: false,
  },
  backgroundColor: {
    type: String,
    default: "#3062D4",
  },
  label: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "#ffffff",
  },
  iconSize: {
    type: Number,
    default: 20,
  },
});
</script>
