<template>
  <div class="dvc-card-header">
    <span class="h5">{{ title }} ({{ totalItem }})</span>

    <span class=""></span>
    <div class="d-flex flex-row align-center gap-1">
      <InputText placeholder="Tìm kiếm" size="small" />
      <slot name="action" />
    </div>
  </div>
</template>
<script setup lang="ts">
import InputText from "primevue/inputtext";

defineProps({
  title: {
    type: String,
    required: true,
  },
  totalItem: {
    type: Number,
    required: false,
  },
});
</script>
