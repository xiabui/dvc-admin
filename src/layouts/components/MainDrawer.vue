<template>
  <div class="drawer">
    <div class="header">
      <img class="logo" src="@/assets/images/mini-logo.svg" alt="logo.png" />
      <div
        v-for="item in drawers"
        class="item"
        :class="item.name === path ? 'item-active' : ''"
        @click="navigate(item)"
      >
        <svg-icon
          :name="item.icon"
          :size="25"
          :color="item.name === path ? '#3062D4' : '#334155'"
        />
        <span>{{ item.title }}</span>
      </div>
    </div>
    <div class="item">
      <img class="avatar" src="@/assets/images/demo-user.png" alt="logo.png" />
      <span>v0.0.2</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import VerticalDivider from "@/components/dividers/VerticalDivider.vue";
import router from "@/router";
import { COMPONENT_NAMES } from "@/utils/const";

defineProps({
  path: {
    type: String,
    default: COMPONENT_NAMES.dashboard,
  },
});

interface IDrawer {
  name: string;
  title: string;
  icon: string;
}

const drawers: IDrawer[] = [
  {
    name: COMPONENT_NAMES.dashboard,
    icon: "chart-multiple",
    title: "Tổng quan",
  },
  {
    name: COMPONENT_NAMES.form,
    icon: "form",
    title: "Biểu mẫu",
  },
  {
    name: COMPONENT_NAMES.flow,
    icon: "desktop-flow",
    title: "Quy trình",
  },
  {
    name: COMPONENT_NAMES.taskReceived,
    icon: "text-bullet-list-square-search",
    title: "Tiếp nhận",
  },
  {
    name: COMPONENT_NAMES.procedure,
    icon: "document-queue-add",
    title: "Thủ tục",
  },
];

const navigate = (item: IDrawer) => {
  router.push({ name: item.name });
};
</script>
