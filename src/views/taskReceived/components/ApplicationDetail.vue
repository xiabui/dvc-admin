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
              icon="text-bullet-list-square-search"
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
        <div class="dvc-card-body dvc-row dvc-md-column">
          <div class="dvc-column">
            <div class="summary-container">
              <span class="summary-text"> Thông tin quy trình </span>
            </div>
            <InformationContainer
              icon="document-bullet-list"
              label="Lĩnh vực"
              value="Đăng ký học phần thay thế"
            />
            <InformationContainer icon="tag" label="Mức độ" value="3" />
            <InformationContainer icon="in-progress" label="Trạng thái hồ sơ">
              <div :class="APPLICATION_STATUS['completed'].className">
                <Chip :label="APPLICATION_STATUS['completed'].label" />
              </div>
            </InformationContainer>
            <InformationContainer
              icon="person-mail"
              label="Người gửi"
              value="Nguyen Van Minh"
            />
          </div>
          <div class="dvc-column">
            <div class="summary-container">
              <span class="summary-text"> Thông tin người thực hiện </span>
            </div>
            <InformationContainer
              icon="paper-toolbox"
              label="Tên công việc"
              value="Tiếp nhận"
            />
            <InformationContainer
              icon="user-work"
              label="Người xử lý"
              value="Pham Minh An (pman)"
            />
            <InformationContainer
              icon="person-follow"
              label="Người theo dõi"
              value="Nguyen Van Minh, Pham Minh An và 3 người khác"
            />
          </div>
          <div class="dvc-column">
            <div class="summary-container">
              <span class="summary-text"> Thời gian xử lý hồ sơ </span>
            </div>
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
              icon="calendar-arrow-counter-clockwise"
              label="Hạn xử lý toàn quy trình"
              value="29/01/2024 09:05:00 - 4 ngày"
            >
              <span class="text-danger">
                (Đã quá hạn 4 ngày 2 giờ 13 phút 54 giây)
              </span>
            </InformationContainer>
            <InformationContainer
              icon="calendar-clock"
              label="Hạn xử lý"
              value="24/01/2024 09:05:00"
            />
            <InformationContainer
              icon="calendar-assistant"
              label="Thời gian còn lại"
              value="Đã quá hạn 4 ngày 14 giờ 13 phút"
            />
            <InformationContainer
              icon="box-complete"
              label="Hình thức nhận kết quả hồ sơ"
              value="Nhận trực tiếp"
            />
          </div>
        </div>
        <div class="dvc-card-footer">
          <span class="footer-label"
            >Ngày khởi tạo: <span class="date">21/01/2024, 00:00</span></span
          >
          <span class="footer-label"
            >Ngày cập nhật: <span class="date">21/01/2024, 00:00</span></span
          >
        </div>
      </div>
      <div class="dvc-card">
        <TabView>
          <TabPanel header="Thông tin chung">
            <GeneralInformation />
          </TabPanel>
          <TabPanel header="Thành phần hồ sơ">
            <ProfileComponent />
          </TabPanel>
          <TabPanel header="Quy trình">
            <ApplicationFlow />
          </TabPanel>
        </TabView>
      </div>
    </div>
  </MainLayout>
</template>
<script setup lang="ts">
import FlatButton from "@/components/buttons/FlatButton.vue";
import OutlinedButton from "@/components/buttons/OutlinedButton.vue";
import InformationContainer from "@/components/commons/InformationContainer.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import MainNavbar from "@/layouts/components/MainNavbar.vue";
import GeneralInformation from "./GeneralInformation.vue";
import ProfileComponent from "./ProfileComponent.vue";
import ApplicationFlow from "./ApplicationFlow.vue";
import Chip from "primevue/chip";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import JsBarcode from "jsbarcode";
import router from "@/router";

import { COMPONENT_NAMES, APPLICATION_STATUS } from "@/utils/const";

import { onMounted, ref } from "vue";

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
