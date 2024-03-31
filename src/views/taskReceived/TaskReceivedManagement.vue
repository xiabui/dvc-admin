<template>
  <MainLayout :path="COMPONENT_NAMES.taskReceived">
    <Toast />
    <ConfirmDialog></ConfirmDialog>
    <MainNavbar :breadcrumbs="['Tiếp nhận']"> </MainNavbar>
    <div class="main-body">
      <div class="dvc-card">
        <TableHeader title="Biểu mẫu" :total-item="200">
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
          :columns="RECEIVED_APPLICATION_COLUMNS"
          :data="receivedApplicationData"
          :multipleSelect="true"
          :moreActions="moreActions"
        >
          <template #customSlot="column">
            <div
              v-if="column.rowData.field === 'status'"
              :class="APPLICATION_STATUS[column.rowData.data.status].className"
            >
              <Chip
                :label="APPLICATION_STATUS[column.rowData.data.status].label"
              />
            </div>
          </template>
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
import Chip from "primevue/chip";
import ConfirmDialog from "primevue/confirmdialog";
import router from "@/router";

import { COMPONENT_NAMES, APPLICATION_STATUS } from "@/utils/const";
import { RECEIVED_APPLICATION_COLUMNS } from "@/utils/table";
import { receivedApplicationData } from "@/utils/mockData";
import { useToast } from "primevue/usetoast";
import { useConfirm } from "primevue/useconfirm";
import type { ITableAction, IMenuItem } from "@/utils/types";

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
