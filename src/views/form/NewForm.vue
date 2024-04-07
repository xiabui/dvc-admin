<template>
  <MainLayout :path="COMPONENT_NAMES.newForm">
    <MainNavbar :breadcrumbs="['Biểu mẫu', 'Tạo mới biểu mẫu']" />
    <div class="main-body">
      <div class="dvc-card">
        <div class="dvc-card-header">
          <span class="h5"> Tạo mới biểu mẫu </span>
          <div class="d-flex flex-row gap-1">
            <OutlinedButton
              label="Hủy thao tác"
              color="#3062D4"
              @click="onCancel"
            />
            <FlatButton label="Xác nhận" background-color="#3062D4" />
          </div>
        </div>
        <div class="dvc-card-body gap-1">
          <div class="dvc-row">
            <TextField
              class="flex-1"
              label="Số hiệu"
              placeholder="Nhập số hiệu"
              required
            />
            <TextField
              class="flex-1"
              label="Tiêu đề"
              placeholder="Nhập tiêu đề biểu mẫu"
              required
            />
            <TextField
              class="flex-1"
              label="Tên biểu mẫu"
              placeholder="Nhập tên biểu mẫu"
              required
            />
          </div>
          <div class="dvc-row my-2">
            <DropdownInput
              class="flex-1"
              label="Hiển thị thư"
              placeholder="Chọn biểu mẫu"
            />
            <TextField
              class="flex-1"
              label="Loại"
              placeholder="Chọn loại biểu mẫu"
              required
            />
            <TextField
              class="flex-1"
              label="Đường dẫn"
              placeholder="Đường dẫn"
              required
            />
          </div>

          <div class="flex-1">
            <FormioBuiler />
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
<script setup lang="ts">
import FlatButton from "@/components/buttons/FlatButton.vue";
import OutlinedButton from "@/components/buttons/OutlinedButton.vue";
import DropdownInput from "@/components/inputs/DropdownInput.vue";
import FormioBuiler from "@/components/inputs/FormioBuiler.vue";
import TextField from "@/components/inputs/TextField.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import MainNavbar from "@/layouts/components/MainNavbar.vue";
import router from "@/router";

import { COMPONENT_NAMES } from "@/utils/const";

const onCancel = () => {
  router.back();
};
</script>
