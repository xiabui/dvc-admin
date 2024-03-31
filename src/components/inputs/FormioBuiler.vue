<template>
  <div class="formio-container">
    <div id="builder"></div>
  </div>
</template>
<script setup lang="ts">
import { FormBuilder, Formio } from "formiojs";
import { onMounted } from "vue";

const emit = defineEmits<{
  schema: [any];
}>();

onMounted(() => {
  createFormBuiler();
});

function createFormBuiler() {
  var builder = new FormBuilder(
    document.getElementById("builder"),
    {
      display: "form",
      components: [],
      settings: {
        pdf: {
          id: "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
          src: "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
        },
      },
    },
    {
      baseUrl: "https://examples.form.io",
    }
  );

  builder.instance.on("change", function () {
    emit("schema", builder.instance.schema);
  });
}
</script>
