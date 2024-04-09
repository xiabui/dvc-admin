<template>
  <v-form ref="form" class="input-upload-file" :style="{ height: height }">
    <v-file-input
      v-model="chosenFile"
      class="file-input"
      :accept="acceptType"
      :rules="rules"
      :multiple="multiple"
      chips
      :clearable="false"
      :disabled="disabled"
      bgColor="#F5F5F5"
      @update:model-value="validateData"
      :key="fileInputKey"
      variant="plain"
    >
      <template #prepend-inner>
        <svg-icon name="upload" :size="40" color="#1E293B" class="pointer" />
        <p>Kéo thả vào đây hoặc tải tệp lên</p>
      </template>
    </v-file-input>
  </v-form>
</template>
<script setup lang="ts">
import { computed, ref, watch } from "vue";

const props = defineProps({
  files: Array<File>,
  hasUpdateFile: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "Select a file to import",
  },
  desciption: String,
  acceptType: String,
  rules: Array<string | boolean> || undefined,
  multiple: Boolean,
  loadingValidation: Boolean,
  message: String,
  height: {
    type: String,
    default: "100px",
  },
  disabled: Boolean,
  hideFileName: Boolean,
  showError: {
    type: Boolean,
    default: true,
  },
  maxFiles: {
    type: Number,
    default: 2,
  },
});
const emits = defineEmits<{
  readFile: [files: File[]];
  updateChoosenFile: [files: File[]];
}>();

const chosenFile = ref<File[]>(props.files ? props.files : []);
const error = ref<string>(props.message as string);

const fileInputKey = ref<number>(0);
watch(
  () => props.hasUpdateFile,
  (newVal) => {
    if (newVal && props.files) {
      chosenFile.value = props.files;
      fileInputKey.value++;
    }
  },
  { deep: true },
);

watch(
  () => props.message,
  (newVal) => {
    error.value = newVal as string;
  },
);

// const removeFile = async (index: number) => {
//   if (chosenFile.value.length > 0) {
//     chosenFile.value.splice(index, 1)
//     emits('updateChoosenFile', chosenFile.value)
//     await validateData()
//   }
// }

const form = ref();
const validateData = async () => {
  error.value = "";
  const valid = await form.value.validate();

  if (valid.valid) {
    emits("readFile", chosenFile.value);
  } else {
    error.value = "Error";
  }
};

const inputHeight = computed(() => props.height);

const root = document.documentElement;
root.style.setProperty("--input-height", inputHeight.value);
</script>
