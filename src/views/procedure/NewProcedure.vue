<template>
  <MainLayout :path="COMPONENT_NAMES.applicationDetail">
    <MainNavbar :breadcrumbs="['Thủ tục', 'Tạo mới']" />
    <div class="main-body">
      <div class="dvc-card">
        <div class="dvc-card-header">
          <span class="title">Tạo mới thủ tục</span>
          <div class="d-flex flex-row align-items-center gap-2">
            <OutlinedButton
              label="Hủy thao tác"
              severity="primary"
              @click="onCancel"
            />
            <FlatButton label="Xác nhận" background-color="#3062D4" />
          </div>
        </div>
        <div class="dvc-card-body">
          <div class="dvc-row">
            <TextField
              class="flex-1"
              label="Mã thủ tục"
              placeholder="Nhập mã thủ tục"
              required
            />
            <TextField
              class="flex-1"
              label="Tên thủ tục"
              placeholder="Nhập tên thủ tục"
              required
            />
          </div>
          <div class="dvc-row my-2">
            <TextField
              class="flex-1"
              label="Quy trình"
              placeholder="Chọn quy trình"
              required
            />
            <TextField
              class="flex-1"
              label="Thời hạn xử lý"
              placeholder="1 ngày, 3 ngày, 8 giờ,..."
              required
            />
          </div>
          <div class="dvc-row">
            <TextFieldArea
              class="flex-1"
              label="Trình tự thực hiện"
              placeholder="Nhập trình tự thực hiện"
              :row="4"
            />
            <TextFieldArea
              class="flex-1"
              label="Mô tả"
              placeholder="Nhập mô tả"
              :row="4"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="main-body">
      <div class="dvc-card">
        <div class="dvc-card-header">
          <span class="title">Biểu mẫu</span>
          <div class="d-flex flex-row align-items-center gap-2">
            <FlatButton
              icon="add"
              label="Thêm biểu mẫu"
              background-color="#3062D4"
            />
          </div>
        </div>
        <div class="dvc-card-body"></div>
        <div class="dvc-card-middle">
          <span class="title">Đính kèm</span>
          <div class="d-flex flex-row align-items-center gap-2">
            <FlatButton
              icon="add"
              label="Tải lên tệp"
              background-color="#3062D4"
            />
          </div>
        </div>
        <div>
          <FileUpload
            name="demo[]"
            url="/api/upload"
            :multiple="true"
            accept="image/*"
            :maxFileSize="1000000"
          >
            <template #header><p></p></template>
            <template #empty>
              <p>Drag and drop files to here to upload.</p>
            </template>
          </FileUpload>
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
import TextField from "@/components/inputs/TextField.vue";
import FileUpload from "primevue/fileupload";
import router from "@/router";

import { COMPONENT_NAMES } from "@/utils/const";
import { onMounted, ref } from "vue";
import TextFieldArea from "@/components/inputs/TextFieldArea.vue";

onMounted(() => {});

const onCancel = () => {
  router.back();
};
</script>
