<template>
  <v-btn variant="plain" size="x-small" @click="$emit('action')">
    <svg-icon :name="icon" :size="size" :color="color" />
  </v-btn>
</template>
<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    default: 20,
  },
  icon: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "#111827",
  },
});

defineEmits<{
  action: []
}>()
</script>
