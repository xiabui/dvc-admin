<template>
  <Dialog :visible="true" modal header="Print Preview" style="width: 700px">
    <div ref="printableContent" class="print-paper">

      <div class="content">
        <slot />
      </div>
      <div class="code-container">
        <span>{{ code }}</span>
        <span>{{ code }}</span>
      </div>
    </div>
  </Dialog>
</template>
<script setup lang="ts">
import Dialog from "primevue/dialog";

defineProps({
  show: Boolean,
  code: String,
});

defineEmits<{
  close: [];
}>();
</script>
