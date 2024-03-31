<template>
  <div class="d-flex flex-column">
    <label v-if="label" class="mb-1 text-normal">
      {{ label }}
      <span v-if="required" class="text-required">*</span>
    </label>
    <InputText
      v-model="value"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :invalid="validateMessage"
      @update:model-value="onValueChange"
      size="small"
    />
    <small v-if="validateMessage" class="text-normal">{{
      validateMessage
    }}</small>
  </div>
</template>
<script setup lang="ts">
import InputText from "primevue/inputtext";
import { ref } from "vue";

defineProps({
  label: String,
  placeholder: String,
  required: Boolean,
  disabled: Boolean,
  validateMessage: String,
});

const emit = defineEmits<{
  value: [string];
}>();

const value = ref();

const onValueChange = (data: string | undefined) => {
  emit("value", data ?? "");
};
</script>
