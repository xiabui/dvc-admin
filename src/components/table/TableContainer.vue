<template>
  <div class="table-container">
    <DataTable
      :value="data"
      class="table-content"
      selectionMode="multiple"
      size="small"
      scrollHeight="70vh"
      scrollable
      resizableColumns
      removableSort
    >
      <Column
        v-if="multipleSelect"
        :selectionMode="multipleSelect ? 'multiple' : 'single'"
        headerStyle="width: 3rem"
        frozen
      />
      <Column
        v-for="column in columns"
        :field="column.field"
        :header="column.title"
        :sortable="column.sortable"
      >
        <template #body="rowData">
          <div v-if="isLoading">
            <Skeleton width="3rem"></Skeleton>
          </div>
          <div v-else>
            <div v-if="column.customSlot">
              <slot name="customSlot" :rowData="rowData" />
            </div>
            <div
              v-else
              v-html="rowData.data[column.field]"
              class="text-overflow-x-hidden"
            ></div>
          </div>
        </template>
      </Column>
      <Column
        v-if="moreActions && moreActions.length > 0"
        style="width: 20px"
        frozen
        alignFrozen="right"
      >
        <template #body="rowData">
          <div v-if="isLoading" class="more-action-loading"></div>
          <div v-else>
            <IconButton
              v-for="(item, index) in moreActions"
              :key="index"
              :icon="item.icon"
              :size="16"
              color="#334155"
              @action="item.action"
            />
          </div>
        </template>
      </Column>
      <template #empty>
        <div class="empty-data">
          <img height="70" width="70" src="@/assets/icons/empty-data.svg" />
          <div class="empty-data-label">Không có dữ liệu</div>
        </div>
      </template>
    </DataTable>
    <TableFooter v-if="footer" />
  </div>
</template>
<script setup lang="ts">
import { ITableProps, ITableAction } from "@/utils/types";
import TableFooter from "./TableFooter.vue";
import DataTable from "primevue/datatable";
import Skeleton from "primevue/skeleton";
import Column from "primevue/column";
import IconButton from "../buttons/IconButton.vue";

defineProps({
  multipleSelect: Boolean,
  isLoading: Boolean,
  moreActions: Array<ITableAction>,
  footer: {
    type: Boolean,
    default: true,
  },
  columns: {
    type: Array<ITableProps>,
    required: true,
  },
  data: {
    type: Array<{ [key: string]: any }>,
    required: true,
  },
});
</script>
