<template>
  <Dialog :visible="show" modal :header="title" style="width: 452px">
    <div class="dialog-content print-content">
      <div class="barcode-container">
        <svg class="barcode" ref="barcodeRef"></svg>
      </div>
      <div class="d-flex flex-column gap-2 pt-2">
        <InformationContainer
          icon="document-bullet-list"
          label="Lĩnh vực"
          value="Đăng ký học phần thay thế"
        />
        <InformationContainer
          icon="person-mail"
          label="Người gửi"
          value="Nguyen Van Minh"
        />
        <InformationContainer
          icon="user-work"
          label="Người xử lý"
          value="Pham Minh An (pman)"
        />
        <InformationContainer
          icon="calendar-arrow-right"
          label="Ngày tiếp nhận"
          value="21/01/2024 09:05:50"
        />
        <InformationContainer
          icon="calendar-reply"
          label="Ngày hẹn trả"
          value="25/01/2024 09:05:50"
        />
        <InformationContainer
          icon="calendar-clock"
          label="Hạn xử lý"
          value="24/01/2024 09:05:00"
        />
        <InformationContainer
          icon="box-complete"
          label="Hình thức nhận kết quả hồ sơ"
          value="Nhận trực tiếp"
        />
      </div>
     
    </div>
    <template #footer>
      <div class="flex justify-space-between">
        <div>
          <OutlinedButton icon="download" label="Tải xuống" color="#1E293B" />
          <OutlinedButton
            icon="document-print"
            label="In"
            color="#1E293B"
            @click="onPrint"
          />
        </div>
        <FlatButton label="Đóng" @click="$emit('close')" />
      </div>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import JsBarcode from "jsbarcode";
import Dialog from "primevue/dialog";
import FlatButton from "@/components/buttons/FlatButton.vue";
import OutlinedButton from "@/components/buttons/OutlinedButton.vue";
import InformationContainer from "@/components/commons/InformationContainer.vue";

import { nextTick, onMounted, ref } from "vue";

defineProps({
  show: Boolean,
  title: String,
});

defineEmits<{
  close: [];
}>();

const barcodeRef = ref<HTMLUnknownElement>();
const code = ref<string>("PTC001.24.03.11.12312");

onMounted(() => {
  nextTick(() => {
    generateBarcode();
  });
});

const generateBarcode = () => {
  try {
    JsBarcode(barcodeRef.value, code.value, {
      format: "CODE128",
      lineColor: "#1E293B",
      width: 1.25,
      height: 35,
      fontSize: 12,
      displayValue: true,
      flat: true,
    });
  } catch (ex) {
    console.error(ex);
  }
};

const onPrint = () => {
  window.print();
};
</script>
