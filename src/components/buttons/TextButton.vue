<template>
  <v-btn variant="text" @click="$emit('action')">
    <template v-if="!reverse" v-slot:prepend>
      <svg-icon v-if="icon" :name="icon" :size="18" :color="color" />
    </template>
    <span :style="{ color: color }"> {{ label }}</span>
    <template v-if="reverse" v-slot:append>
      <svg-icon v-if="icon" :name="icon" :size="18" :color="color" />
    </template>
  </v-btn>
</template>
<script setup lang="ts">
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
    default: "",
  },
  reverse: {
    type: Boolean,
    default: false,
  },
});

defineEmits<{
  action: []
}>()
</script>
