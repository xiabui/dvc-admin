<template>
  <div class="dvc-column">
    <div class="dvc-tab-content-header">
      <span class="title">Thông tin người nộp</span>
      <FlatButton
        v-if="!editable"
        icon="edit"
        label="Cập nhật thông tin"
        background-color="#3062D4"
        @click="changeEditableStatus"
      />
      <div v-else class="d-flex flex-row align-items-center gap-2">
        <OutlinedButton
          label="Hủy thao tác"
          severity="secondary"
          @click="changeEditableStatus"
        />
        <FlatButton
          label="Lưu thông tin"
          background-color="#3062D4"
          @click="changeEditableStatus"
        />
      </div>
    </div>
    <div class="dvc-row dvc-md-column dvc-padding">
      <div class="dvc-column">
        <TextField
          label="Họ và tên"
          value="Nguyen Van A"
          :disabled="!editable"
          required
        />
        <TextField
          label="Ngày sinh"
          value="20/11/2006"
          :disabled="!editable"
          required
        />
        <DropdownInput
          label="Giới tính"
          :value="selectedGender"
          :options="genders"
          @onChange="onGenderChange"
          :disabled="!editable"
        />
        <DropdownInput
          label="Tỉnh/TP"
          :value="selectedProvince"
          :options="provinces"
          @onChange="onProvinceChange"
          :disabled="!editable"
        />
        <TextField
          label="Địa chỉ liên hệ"
          value="Số 1 đường A xóm B"
          :disabled="!editable"
        />
      </div>
      <div class="dvc-column">
        <TextField
          label="Khoa/Viện/Đơn vị"
          value="Viện Kĩ thuật Công nghệ"
          :disabled="!editable"
          required
        />
        <TextField
          label="Mã số sinh viên/Mã CBGV"
          value="1824801030095"
          :disabled="!editable"
        />
        <TextField
          label="Mã CBGV"
          value="1824801030095"
          :disabled="!editable"
        />
        <TextField
          label="Email"
          value="1824801030095@student.tdmu.edu.vn"
          :disabled="!editable"
          required
        />
        <TextField
          label="Số điện thoại"
          value="0333 333 333"
          :disabled="!editable"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import OutlinedButton from "@/components/buttons/OutlinedButton.vue";
import FlatButton from "@/components/buttons/FlatButton.vue";
import DropdownInput from "@/components/inputs/DropdownInput.vue";
import TextField from "@/components/inputs/TextField.vue";

import { provinces, genders } from "@/utils/mockData";
import { ref } from "vue";

const editable = ref<boolean>(false);
const selectedProvince = ref<string>("1");
const selectedGender = ref<string>("1");

const changeEditableStatus = () => {
  editable.value = !editable.value;
};

const onProvinceChange = (value: string) => {
  selectedProvince.value = value;
};

const onGenderChange = (value: string) => {
  selectedGender.value = value;
};
</script>
