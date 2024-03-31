<template>
  <MainLayout :path="COMPONENT_NAMES.applicationDetail">
    <MainNavbar :breadcrumbs="['Tiếp nhận', applicationId]" />
    <div class="main-body">
      <div class="dvc-card">
        <div class="dvc-card-header">
          <span class="h5">{{ applicationId }}</span>
          <div class="d-flex flex-row align-items-center gap-2">
            <div class="barcode-container">
              <svg id="barcode"></svg>
            </div>
            <FlatButton
              icon="procedure"
              label="Tiếp nhận"
              background-color="#3062D4"
            />
            <OutlinedButton
              icon="mark-as-complete"
              label="Đánh dấu hoàn thành"
              color="#ED662B"
              severity="warning"
              @click="onCancel"
            />
          </div>
        </div>
        <div class="dvc-card-body p-3">
          <div class="d-flex flex-row align-items-start gap-1">
            <div class="flex-1 d-flex flex-column align-items-start">
              <span class="summary-text"> Thông tin quy trình </span>
              <Divider />
              <InformationContainer icon="list" label="Lĩnh vực">
                <span class="h5-text-bold">Đăng ký học phần thay thế</span>
              </InformationContainer>
              <InformationContainer icon="tag" label="Mức độ">
                <span class="h5-text-bold">3</span>
              </InformationContainer>
              <InformationContainer
                icon="application-status"
                label="Trạng thái hồ sơ"
              >
                <div :class="APPLICATION_STATUS['completed'].className">
                  <Chip :label="APPLICATION_STATUS['completed'].label" />
                </div>
              </InformationContainer>
              <InformationContainer icon="person-mail" label="Người gửi">
                <span class="h5-text-bold">Nguyen Van Minh</span>
              </InformationContainer>
            </div>
            <div class="flex-1 d-flex flex-column align-items-start">
              <span class="summary-text"> Thông tin người xử lý </span>
              <Divider />
              <InformationContainer icon="paper-toolbox" label="Tên công việc">
                <span class="h5-text-bold">Tiếp nhận</span>
              </InformationContainer>
              <InformationContainer icon="user-work" label="Người xử lý">
                <span class="h5-text-bold">Pham Minh An (pman)</span>
              </InformationContainer>
              <InformationContainer icon="person-follow" label="Người theo dõi">
                <span class="h5-text-bold"
                  >Nguyen Van Minh, Pham Minh An và 3 người khác</span
                >
              </InformationContainer>
            </div>
            <div class="flex-1 d-flex flex-column align-items-start">
              <span class="summary-text"> Thời gian xử lý hồ sơ </span>
              <Divider />
              <InformationContainer icon="date-received" label="Ngày tiếp nhận">
                <span class="h5-text-bold">21/01/2024 09:05:50</span>
              </InformationContainer>
              <InformationContainer icon="date-answer" label="Ngày hẹn trả">
                <span class="h5-text-bold">25/01/2024 09:05:50</span>
              </InformationContainer>
              <InformationContainer
                icon="date-complete"
                label="Hạn xử lý toàn quy trình"
              >
                <span class="h5-text-bold">
                  29/01/2024 09:05:00 - 4 ngày (Đã quá hạn 4 ngày 2 giờ 13 phút
                  54 giây)
                </span>
              </InformationContainer>
              <InformationContainer icon="date-deadline" label="Hạn xử lý">
                <span class="h5-text-bold">24/01/2024 09:05:00</span>
              </InformationContainer>
              <InformationContainer
                icon="date-remainning"
                label="Thời gian còn lại"
              >
                <span class="h5-text-bold"
                  >Đã quá hạn 4 ngày 14 giờ 13 phút</span
                >
              </InformationContainer>
              <InformationContainer icon="box" label="Hình thức tiếp nhận">
                <span class="h5-text-bold">Trực tiếp</span>
              </InformationContainer>
              <InformationContainer
                icon="box-complete"
                label="Hình thức nhận kết quả hồ sơ"
              >
                <span class="h5-text-bold">Nhận trực tiếp</span>
              </InformationContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
<script setup lang="ts">
import FlatButton from "@/components/buttons/FlatButton.vue";
import OutlinedButton from "@/components/buttons/OutlinedButton.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import MainNavbar from "@/layouts/components/MainNavbar.vue";
import Divider from "primevue/divider";
import Chip from "primevue/chip";
import JsBarcode from "jsbarcode";
import router from "@/router";

import { COMPONENT_NAMES, APPLICATION_STATUS } from "@/utils/const";
import { onMounted, ref } from "vue";
import InformationContainer from "@/components/commons/InformationContainer.vue";

const applicationId = ref<string>("PTC001.24.03.11.12312");

onMounted(() => {
  generateBarcode();
});

const onCancel = () => {
  router.back();
};

const generateBarcode = () => {
  JsBarcode("#barcode", applicationId.value, {
    format: "CODE128",
    lineColor: "#1E293B",
    width: 1,
    height: 12,
    fontSize: 9,
    displayValue: true,
  });
};
</script>
