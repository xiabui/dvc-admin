<template>
  <Button :color="color" :label="label" :severity="severity" outlined>
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
  label: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "#1E293B",
  },
  severity: {
    type: String,
    default: "secondary",
  },
  iconSize: {
    type: Number,
    default: 20,
  },
});
</script>
