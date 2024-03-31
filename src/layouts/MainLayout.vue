<template>
  <div class="main-layout">
    <MainDrawer :path="path"></MainDrawer>
    <div class="dvc-body">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import MainDrawer from "./components/MainDrawer.vue";

defineProps({
  path: {
    type: String,
    required: true,
  },
});
</script>
