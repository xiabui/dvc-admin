<template>
  <v-menu :width="width">
    <template v-slot:activator="{ props }">
      <slot v-bind="props" />
    </template>
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index">
        <template #title>
          {{ item.title }}
        </template>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script setup lang="ts">
import { IMenuItem } from '@/utils/types';

defineProps({
  width: {
    type: Number,
    default: 300,
  },
  items: {
    type: Array<IMenuItem>,
    required: true
  }
})
</script>