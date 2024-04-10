<template>
  <div class="dvc-column">
    <div class="dvc-padding dvc-row dvc-md-column">
      <div class="dvc-column">
        <span class="h4-text-bold mb-3">Quy trình hồ sơ</span>
        <div class="bio-viewer">
          <div class="bio-canvas" ref="canvasRef"></div>
        </div>
      </div>
      <div class="dvc-column">
        <span class="h4-text-bold mb-3">Nhật ký tác động</span>
        <TableContainer
          :columns="ACTION_HISTORY_COLUMN"
          :data="actionHistoryData"
          :moreActions="moreActions"
          :footer="false"
        />
      </div>
    </div>
  </div>

  <Dialog
    v-model:visible="isShowLogContent"
    modal
    header="Nhật ký tác động"
    style="width: 70vw;"
  >
    <div class="code-content">
      <pre>{{ logContent }}</pre>
    </div>
    <template #footer>
      <div class="flex justify-space-between">
        <OutlinedButton icon="download" label="Tải xuống" color="#1E293B" />
        <FlatButton label="Đóng" @click="isShowLogContent = false" />
      </div>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import OutlinedButton from "@/components/buttons/OutlinedButton.vue";
import FlatButton from "@/components/buttons/FlatButton.vue";
import TableContainer from "@/components/table/TableContainer.vue";
import Viewer from "bpmn-js/lib/Viewer";
import Dialog from "primevue/dialog";
import bpmnXML from "@/assets/samples/sample_diagram.bpmn?raw";
import logTxt from "@/assets/samples/sample_log.txt?raw";

import { onMounted, ref } from "vue";
import { ACTION_HISTORY_COLUMN } from "@/utils/table";
import { actionHistoryData } from "@/utils/mockData";
import type { ITableAction } from "@/utils/types";

const canvasRef = ref<HTMLDivElement>();
const isShowLogContent = ref<boolean>(false);
const logContent = logTxt as string

const moreActions: ITableAction[] = [
  {
    icon: "console",
    action: () => showLogContentDialog(),
  },
];

let viewer: Viewer;

onMounted(async () => {
  await loadBpmnDiagram();
});

const loadBpmnDiagram = async () => {
  viewer = new Viewer({
    container: canvasRef.value,
  });

  try {
    await viewer.importXML(bpmnXML as string);
    const fitCanvas = viewer.get("canvas") as any;
    fitCanvas.zoom("fit-viewport");
  } catch (err) {
    console.error("error loading BPMN 2.0 XML", err);
  }
};

const showLogContentDialog = () => {
  isShowLogContent.value = true
}
</script>
