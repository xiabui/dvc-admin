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
          :columns="APPLICATION_COLUMNS"
          :data="applicationData"
          :moreActions="moreActions"
          :footer="false"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import TableContainer from "@/components/table/TableContainer.vue";
import UploadFile from "@/components/inputs/UploadFile.vue";
import FlatButton from "@/components/buttons/FlatButton.vue";
import Viewer from "bpmn-js/lib/Viewer";
import bpmnXML from "@/assets/samples/sample_diagram.bpmn?raw";

import { onMounted, ref } from "vue";
import { APPLICATION_COLUMNS } from "@/utils/table";
import { applicationData } from "@/utils/mockData";
import type { ITableAction } from "@/utils/types";

const canvasRef = ref<HTMLDivElement>();

const moreActions: ITableAction[] = [
  {
    icon: "edit",
    action: () => {},
  },
  { icon: "delete", action: () => {} },
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
  } catch (err) {
    console.error("error loading BPMN 2.0 XML", err);
  }
};
</script>
