<template>
  <div class="dvc-navbar">
    <div class="prepend">
      <IconButton icon="arrow-left" :size="16" />
      <IconButton icon="arrow-right" :size="16" />
      <IconButton icon="refresh" :size="16" />
      <v-breadcrumbs :items="breadcrumbs"> </v-breadcrumbs>
      <slot name="action"/>
    </div>
    <div class="append">
      <slot name="append"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconButton from "@/components/buttons/IconButton.vue";
import { onMounted, ref } from "vue";

const props = defineProps({
  breadcrumbs: Array<string>,
});

const breadcrumbs = ref<string[]>(["Trang chủ"]);

onMounted(() => {
  if (props.breadcrumbs) {
    breadcrumbs.value.push(...props.breadcrumbs);
  }
});

</script>