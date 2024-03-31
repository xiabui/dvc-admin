<template>
  <div class="d-flex flex-column">
    <label v-if="label" class="mb-1">
      {{ label }}
      <span v-if="required" class="text-required">*</span>
    </label>
    <Dropdown
      v-model="value"
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
import type { IDropdownItem } from "@/utils/types";
import { ref } from "vue";

defineProps({
  label: String,
  placeholder: String,
  required: Boolean,
  disabled: Boolean,
  items: Array<IDropdownItem>,
});

const emit = defineEmits<{
  value: [any];
}>();

const validateMessage = ref<string>("");
const value = ref();

const onValueChange = (data: IDropdownItem) => {
  emit("value", data.value);
};
</script>
