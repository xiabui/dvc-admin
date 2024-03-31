<template>
  <div class="table-footer">
    <div class="d-flex flex-row align-center">
      <span class="text-xsm">Số lượng hiển thị</span>
      <Dropdown
        v-model="itemPerPage"
        :options="itemPerPageList"
        optionLabel="name"
        class="paginate"
        variant="outlined"
        @update:modelValue="onItemPerPageUpdate"
      />
    </div>
    <div>
      <Paginator
        :rows="(itemPerPage.value as number)"
        :totalRecords="120"
        :pageLinkSize="4"
        template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink JumpToPageInput"
        @page="onPageUpdate"
      ></Paginator>
    </div>
  </div>
</template>
<script setup lang="ts">
import Dropdown from "primevue/dropdown";
import Paginator, { type PageState } from "primevue/paginator";
import { ref } from "vue";
import type { IDropdownItem } from "@/utils/types";

const emit = defineEmits<{
  page: [number];
  itemPerPage: [number];
}>();

const itemPerPageList: IDropdownItem[] = [
  { name: "5", value: 5 },
  { name: "10", value: 10 },
  { name: "20", value: 20 },
  { name: "50", value: 50 },
  { name: "100", value: 100 },
];
const itemPerPage = ref(itemPerPageList[0]);

const onPageUpdate = (event: PageState) => {
  emit("page", event.page + 1);
};

const onItemPerPageUpdate = (value: IDropdownItem) => {
  emit("itemPerPage", value.value as number);
};
</script>
