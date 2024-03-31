<template>
  <div
    class="section"
    :style="{
      color: color,
      fontSize: textSize,
    }"
  >
    {{ text }}
  </div>
</template>
<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
  textSize: {
    type: String,
    default: '16px'
  },
  color: {
    type: String,
    default: "#000000",
  },
});
</script>
