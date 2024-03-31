<template>
  <div class="card service-card" :style="{ width: width }">
    <div class="card-header">
      <svg-icon :name="icon" :size="iconSize" :color="iconColor" />
      <span class="title">{{ title }}</span>
    </div>
    <VerticalDivider />
    <div class="card-body">
      <div v-for="item in services" class="card-item">
        <svg-icon name="document-bullet-list" size="20" color="#555F6D" />
        <span class="text">{{ item.title }}</span>
      </div>
    </div>
    <VerticalDivider />
    <TextButton
      :label="$t('viewMore')"
      :reverse="true"
      icon="material-arrow-forward"
      color="#4076C3"
      backgroundColor="transparent"
      @action="onMoreServices"
    />
  </div>
</template>
<script setup lang="ts">
import VerticalDivider from "../dividers/VerticalDivider.vue";
import TextButton from "../buttons/TextButton.vue";
import type { PropType } from "vue";
import type { IService } from "@/utils/types";
import router from "@/router";

defineProps({
  icon: {
    type: String,
    default: "",
  },
  iconSize: {
    type: Number,
    default: 32,
  },
  iconColor: {
    type: String,
    default: "#555F6D",
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "100%",
  },
  services: {
    type: Object as PropType<IService[]>,
    required: true,
  },
});

const onMoreServices = () => {
  router.push({
    name: "category"
  })
}
</script>