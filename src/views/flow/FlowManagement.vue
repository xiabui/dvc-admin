<template>
  <MainLayout :path="COMPONENT_NAMES.flow">
    <Toast />
    <ConfirmDialog></ConfirmDialog>
    <MainNavbar :breadcrumbs="['Quy trình']">
      <template #action>
        <FlatButton
          label="Tạo mới"
          background-color="#3062D4"
          icon="add"
          :icon-size="16"
          @click="navigate(COMPONENT_NAMES.newFlow)"
        />
      </template>
    </MainNavbar>
    <div class="main-body">
      <div class="dvc-card">
        <TableHeader title="Quy trình" :total-item="200">
          <template #action>
            <v-menu :width="300">
              <template v-slot:activator="{ props }">
                <OutlinedButton v-bind="props" label="Bộ lọc" icon="filter" />
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in filterItems" :key="index">
                  <template #title>
                    {{ item.title }}
                  </template>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-menu :width="300">
              <template v-slot:activator="{ props }">
                <OutlinedButton v-bind="props" label="Thao tác" icon="action" />
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in actionItems" :key="index">
                  <template #title>
                    {{ item.title }}
                  </template>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </TableHeader>
        <TableContainer
          :columns="FLOW_MANAGEMENT_COLUMNS"
          :data="flowData"
          :multipleSelect="true"
          :moreActions="moreActions"
        >
        </TableContainer>
      </div>
    </div>
  </MainLayout>
</template>
<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import MainNavbar from "@/layouts/components/MainNavbar.vue";
import TableHeader from "@/components/table/TableHeader.vue";
import OutlinedButton from "@/components/buttons/OutlinedButton.vue";
import TableContainer from "@/components/table/TableContainer.vue";
import Toast from "primevue/toast";
import ConfirmDialog from "primevue/confirmdialog";
import FlatButton from "@/components/buttons/FlatButton.vue";
import router from "@/router";

import { COMPONENT_NAMES } from "@/utils/const";
import { FLOW_MANAGEMENT_COLUMNS } from "@/utils/table";
import { flowData } from "@/utils/mockData";
import { useToast } from "primevue/usetoast";
import { useConfirm } from "primevue/useconfirm";
import type { IMenuItem, ITableAction } from "@/utils/types";

const toast = useToast();
const confirm = useConfirm();

const filterItems: IMenuItem[] = [
  { title: "Option 1" },
  { title: "Option 2" },
  { title: "Option 3" },
  { title: "Option 4" },
];

const actionItems: IMenuItem[] = [
  { title: "Option 1" },
  { title: "Option 2" },
  { title: "Option 3" },
  { title: "Option 4" },
];

const moreActions: ITableAction[] = [
  {
    icon: "view-detail",
    action: () => navigate(COMPONENT_NAMES.applicationDetail),
  },
  { icon: "delete", action: () => confirmDeleteForm() },
];

const showSuccess = (title: string, message: string) => {
  toast.add({
    severity: "success",
    summary: title,
    detail: message,
    life: 3000,
  });
};

const confirmDeleteForm = () => {
  confirm.require({
    message: "Bạn có chắc chắn muốn xóa biểu mẫu: “DDT1A - Biểu mẫu 1”?",
    header: "Xóa biểu mẫu",
    rejectLabel: "Hủy",
    acceptLabel: "Xác nhận",
    rejectClass: "p-button-secondary p-button-outlined",
    acceptClass: "p-button-danger",
    accept: () => {
      toast.add({
        severity: "info",
        summary: "Confirmed",
        detail: "Record deleted",
        life: 3000,
      });
    },
    reject: () => {
      toast.add({
        severity: "error",
        summary: "Rejected",
        detail: "You have rejected",
        life: 3000,
      });
    },
  });
};

const navigate = (pathName: string) => {
  router.push({ name: pathName });
};
</script>
