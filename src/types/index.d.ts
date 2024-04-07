import type { ModuleDeclaration } from 'bpmn-js'

declare module 'bpmn-js-properties-panel' {
  export class BpmnPropertiesPanelModule extends ModuleDeclaration {}
  export class BpmnPropertiesProviderModule extends ModuleDeclaration {}
}
