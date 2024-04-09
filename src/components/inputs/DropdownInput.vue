<template>
  <div class="d-flex flex-column">
    <label v-if="label" class="mb-1 text-normal">
      {{ label }}
      <span v-if="required" class="text-required">*</span>
    </label>
    <Dropdown
      optionLabel="label"
      optionValue="value"
      :options="options"
      :modelValue="value"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :invalid="validateMessage"
      @update:modelValue="onValueChange"
      size="small"
    />
    <small v-if="validateMessage">{{ validateMessage }}</small>
  </div>
</template>
<script setup lang="ts">
import Dropdown from "primevue/dropdown";
import { ref } from "vue";
import type { IDropdownItem } from "@/utils/types";

defineProps({
  label: String,
  value: String,
  placeholder: String,
  required: Boolean,
  disabled: Boolean,
  options: Array<IDropdownItem>,
});

const emit = defineEmits<{
  onChange: [string];
}>();

const validateMessage = ref<string>("");

const onValueChange = (data: string) => {
  emit("onChange", data);
};
</script>
