import type { IApplicationStatus } from "./types";

export enum COLOR {
  PRIMARY = "#00B8E4",
  PRIMARY_DARK = "#002249",
  RED = "#F44336",
  GREEN = "#4CAF50",
  BlUE = "#2196F3",
  ORANGE = "#F57C00",
  YELLOW = "#FFF3E0",
  RED_BG = "#FFEBEE",
  GREEN_BG = "#E8F5E9",
  BLUE_BG = "#E3F2FD",
  ORANGE_BG = "#FFF3E0",
  YELLOW_BG = "#F57F17",
  WHITE = "#FFFFFF",
}

export enum COMPONENT_NAMES {
  dashboard = "dashboard",
  newForm = "new-form",
  form = "form",
  newFlow = "new-flow",
  flow = "flow",
  taskReceived = "received",
  applicationDetail = "application-detail",
  procedure = "procedure",
  newProcedure = "new-procedure",
}

export const APPLICATION_STATUS: { [key: string]: IApplicationStatus } = {
  completed: {
    label: "hoàn thành",
    className: "chip-success",
  },
  denied: {
    label: "từ chối",
    className: "chip-danger",
  },
  in_progress: {
    label: "Đang xử lý",
    className: "chip-warning",
  },
  new: {
    label: "mới tạo",
    className: "chip-info",
  },
  cancel: {
    label: "đã huỷ",
    className: "chip-secondary",
  },
  no_payment: {
    label: "chờ thanh toán",
    className: "chip-warning",
  },
};
