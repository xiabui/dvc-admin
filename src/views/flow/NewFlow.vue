<template>
  <MainLayout :path="COMPONENT_NAMES.newFlow">
    <MainNavbar :breadcrumbs="['Tạo quy trình mới']" />
    <Dialog
      v-model:visible="isPreviewDialogShow"
      modal
      header="Preview XML Content"
      style="max-width: 70vw"
    >
      <div class="code-content">
        <pre>{{ xmlContent }}</pre>
      </div>
      <template #footer>
        <div class="flex justify-content-end gap-2">
          <OutlinedButton label="Copy" severity="primary" @click="onCopy" />
          <FlatButton label="Close" @click="isPreviewDialogShow = false" />
        </div>
      </template>
    </Dialog>
    <div class="main-body">
      <div class="dvc-card">
        <div class="dvc-card-header">
          <span class="h5">Tạo mới quy trình</span>
          <div class="d-flex flex-row align-items-center gap-2">
            <OutlinedButton label="Hủy thao tác" severity="primary" />
            <FlatButton label="Xác nhận" background-color="#3062D4" />
            <FlatButton
              label="Preview XML (developer)"
              severity="secondary"
              @click="onPreview"
            />
          </div>
        </div>
        <div class="bio-modeler p-2">
          <div class="bio-properties" ref="properties"></div>
          <div class="bio-canvas" ref="canvas"></div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import MainNavbar from "@/layouts/components/MainNavbar.vue";
import FlatButton from "@/components/buttons/FlatButton.vue";
import Dialog from "primevue/dialog";
import OutlinedButton from "@/components/buttons/OutlinedButton.vue";
import { COMPONENT_NAMES } from "@/utils/const";
import { onBeforeUnmount, onMounted, ref } from "vue";
import BpmnModeler from "bpmn-js/lib/Modeler";
import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule,
  CamundaPlatformPropertiesProviderModule,
  // @ts-ignore
} from "bpmn-js-properties-panel";
import CamundaBpmnModdle from "camunda-bpmn-moddle/resources/camunda.json";
// @ts-ignore
import TokenSimulationModule from "bpmn-js-token-simulation";
import bpmnXML from "@/assets/samples/sample_diagram.bpmn?raw";
import xmlFormat from "xml-formatter";

const canvas = ref<HTMLDivElement>();
const properties = ref<HTMLDivElement>();

let modeler: BpmnModeler;
const isPreviewDialogShow = ref(false);
const xmlContent = ref<string>("");

onMounted(async () => {
  modeler = new BpmnModeler({
    container: canvas.value,
    propertiesPanel: {
      parent: properties.value,
    },
    additionalModules: [
      //
      BpmnPropertiesPanelModule,
      BpmnPropertiesProviderModule,
      CamundaPlatformPropertiesProviderModule,
      //
      TokenSimulationModule,
    ],
    moddleExtensions: {
      camunda: CamundaBpmnModdle,
    },
  });

  try {
    await modeler.importXML(bpmnXML as string);
  } catch (err) {
    console.error("error loading BPMN 2.0 XML", err);
  }
});

onBeforeUnmount(() => {
  if (modeler) {
    modeler.destroy();
  }
});

const onCopy = async () => {
  await navigator.clipboard.writeText(xmlContent.value);
  alert("Copied");
};

const onPreview = async () => {
  const xml = await modeler.saveXML();

  if (!xml.xml) {
    return;
  }

  xmlContent.value = xmlFormat(xml.xml, {
    indentation: "  ",
    collapseContent: true,
    lineSeparator: "\n",
  });

  isPreviewDialogShow.value = true;
};
</script>
