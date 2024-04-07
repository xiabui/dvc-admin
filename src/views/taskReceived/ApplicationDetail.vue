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
        <div class="dvc-card-body dvc-row">
          <div class="dvc-column">
            <span class="summary-text"> Thông tin quy trình </span>
            <Divider />
            <div class="dvc-column-body">
              <InformationContainer
                icon="document-bullet-list"
                label="Lĩnh vực"
              >
                <span class="h5-text-bold">Đăng ký học phần thay thế</span>
              </InformationContainer>
              <InformationContainer icon="tag" label="Mức độ">
                <span class="h5-text-bold">3</span>
              </InformationContainer>
              <InformationContainer icon="in-progress" label="Trạng thái hồ sơ">
                <div :class="APPLICATION_STATUS['completed'].className">
                  <Chip :label="APPLICATION_STATUS['completed'].label" />
                </div>
              </InformationContainer>
              <InformationContainer icon="person-mail" label="Người gửi">
                <span class="h5-text-bold">Nguyen Van Minh</span>
              </InformationContainer>
            </div>
          </div>
          <div class="dvc-column">
            <span class="summary-text"> Thông tin người xử lý </span>
            <Divider />
            <div class="dvc-column-body">
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
          </div>
          <div class="dvc-column">
            <span class="summary-text"> Thời gian xử lý hồ sơ </span>
            <Divider />
            <div class="dvc-column-body">
              <InformationContainer
                icon="calendar-arrow-right"
                label="Ngày tiếp nhận"
              >
                <span class="h5-text-bold">21/01/2024 09:05:50</span>
              </InformationContainer>
              <InformationContainer icon="calendar-reply" label="Ngày hẹn trả">
                <span class="h5-text-bold">25/01/2024 09:05:50</span>
              </InformationContainer>
              <InformationContainer
                icon="calendar-arrow-counter-clockwise"
                label="Hạn xử lý toàn quy trình"
              >
                <span class="h5-text-bold">
                  29/01/2024 09:05:00 - 4 ngày (Đã quá hạn 4 ngày 2 giờ 13 phút
                  54 giây)
                </span>
              </InformationContainer>
              <InformationContainer icon="calendar-clock" label="Hạn xử lý">
                <span class="h5-text-bold">24/01/2024 09:05:00</span>
              </InformationContainer>
              <InformationContainer
                icon="calendar-assistant"
                label="Thời gian còn lại"
              >
                <span class="h5-text-bold"
                  >Đã quá hạn 4 ngày 14 giờ 13 phút</span
                >
                <span class="h5-text-bold">
                  29/01/2024 09:05:00 - 4 ngày (Đã quá hạn 4 ngày 2 giờ 13 phút
                  54 giây)
                </span>
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
        <div class="dvc-card-footer">
          <span class="footer-label"
            >Ngày khởi tạo: <span class="date">21/01/2024, 00:00</span></span
          >
          <span class="footer-label"
            >Ngày cập nhật: <span class="date">21/01/2024, 00:00</span></span
          >
        </div>
      </div>
    </div>
    <div class="main-body">
      <div class="dvc-card">
        <TabView>
          <TabPanel header="Thông tin chung">
            <div class="dvc-body">

            </div>
          </TabPanel>
          <TabPanel header="Thành phần hồ sơ">
            <p class="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
              velit, sed quia non numquam eius modi.
            </p>
          </TabPanel>
          <TabPanel header="Quy trình">
            <p class="m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
          </TabPanel>
        </TabView>
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
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import JsBarcode from "jsbarcode";
import InformationContainer from "@/components/commons/InformationContainer.vue";
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
