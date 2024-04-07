<template>
  <MainLayout :path="COMPONENT_NAMES.newFlow">
    <MainNavbar :breadcrumbs="['Tạo quy trình mới']" />
    <div class="main-body">
      <div class="dvc-card">
        <div class="bio-modeler">
          <div class="bio-canvas" ref="canvas"></div>
          <div class="bio-properties" ref="properties"></div>
        </div>
        <button @click="onSaveXML">Save</button>
      </div>
    </div>
  </MainLayout>
</template>
<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import MainNavbar from "@/layouts/components/MainNavbar.vue";

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

const canvas = ref<HTMLDivElement>();
const properties = ref<HTMLDivElement>();

let modeler: BpmnModeler;

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

const onSaveXML = async () => {
  const xml = await modeler.saveXML();

  if (!xml.xml) {
    return;
  }

  navigator.clipboard.writeText(xml.xml);
  alert("Copied!");
};
</script>
