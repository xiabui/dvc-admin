<template>
  <div class="dvc-column">
    <div class="dvc-tab-content-header">
      <span class="title">Biểu mẫu</span>
      <FlatButton
        icon="text-bullet-list-square-search"
        label="Tiếp nhận"
        background-color="#3062D4"
      />
    </div>
    <div class="dvc-padding">
      <TableContainer
        :columns="APPLICATION_COLUMNS"
        :data="applicationData"
        :moreActions="moreActions"
        :footer="false"
      />
    </div>
    <div class="dvc-card-middle">
      <span class="title">Đính kèm</span>
      <FlatButton
        icon="upload"
        label="Tải tệp lên"
        background-color="#3062D4"
      />
    </div>
    <div class="dvc-padding">
      <UploadFile />
    </div>
  </div>
</template>
<script setup lang="ts">
import TableContainer from "@/components/table/TableContainer.vue";
import UploadFile from "@/components/inputs/UploadFile.vue";
import FlatButton from "@/components/buttons/FlatButton.vue";

import { APPLICATION_COLUMNS } from "@/utils/table";
import { applicationData } from "@/utils/mockData";
import type { ITableAction } from "@/utils/types";

const moreActions: ITableAction[] = [
  {
    icon: "edit",
    action: () => {},
  },
  { icon: "delete", action: () => {} },
];
</script>