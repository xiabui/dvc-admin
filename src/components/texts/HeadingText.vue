<template>
  <div
    class="header"
    :style="{
      color: color,
      textTransform: uppercase ? 'uppercase' : 'none',
      fontSize: `${textSize}px`,
      fontWeight: 500,
      borderBottom: borderHighlight ? `4px solid ${color}` : 'none',
      padding: borderHighlight ? '16px 0' : 0,
      textAlign: textAlign as any
    }"
  >
    {{ text }}
  </div>
</template>
<script setup lang="ts">
defineProps({
  borderHighlight: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    required: true,
  },
  textSize: {
    type: Number,
    default: 28
  },
  color: {
    type: String,
    default: "#000000",
  },
  uppercase: {
    type: Boolean,
    default: false
  },
  textAlign: {
    type: String,
    default: "center",
  }
});
</script>
