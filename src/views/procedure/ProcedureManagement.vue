<template>
  <MainLayout :breadcrumbs="['Thủ tục']" :path="COMPONENT_NAMES.procedure"> </MainLayout>
</template>
<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import { COMPONENT_NAMES } from "@/utils/const";
</script>
