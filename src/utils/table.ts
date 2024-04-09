import { ITableProps } from "./types";

export const FORM_COLUMNS: ITableProps[] = [
  {
    field: "id",
    title: "Số hiệu",
    sortable: true,
  },
  {
    field: "name",
    title: "Tên biểu mẫu",
    sortable: true,
  },
  {
    field: "reference",
    title: "Số thủ tục liên quan",
    sortable: true,
  },
  {
    field: "created_date",
    title: "Ngày khởi tạo",
  },
  {
    field: "updated_date",
    title: "Ngày cập nhật",
  },
];

export const RECEIVED_APPLICATION_COLUMNS: ITableProps[] = [
  {
    field: "id",
    title: "Mã hồ sơ",
    sortable: true,
  },
  {
    field: "name",
    title: "Tên biểu mẫu",
    sortable: true,
  },
  {
    field: "status",
    title: "Trạng thái tiếp nhận",
    sortable: true,
    customSlot: true,
  },
  {
    field: "created_date",
    title: "Ngày khởi tạo",
  },
  {
    field: "updated_date",
    title: "Ngày cập nhật",
  },
];

export const APPLICATION_COLUMNS: ITableProps[] = [
  {
    field: "stt",
    title: "STT",
    sortable: true,
  },
  {
    field: "name",
    title: "Tên biểu mẫu",
    sortable: true,
  },
  {
    field: "target",
    title: "Đối tượng nộp",
    sortable: true,
  },
  {
    field: "created_date",
    title: "Ngày khởi tạo",
  },
  {
    field: "updated_date",
    title: "Ngày cập nhật",
  },
];

export const FLOW_MANAGEMENT_COLUMNS: ITableProps[] = [
  {
    field: "id",
    title: "Mã quy trình",
    sortable: true,
  },
  {
    field: "name",
    title: "Tên quy trình",
    sortable: true,
  },
  {
    field: "process_time",
    title: "Thời hạn xử lý",
    sortable: true,
  },
  {
    field: "created_date",
    title: "Ngày khởi tạo",
  },
  {
    field: "updated_date",
    title: "Ngày cập nhật",
  },
];

export const PROCUDURE_MANAGEMENT_COLUMNS: ITableProps[] = [
  {
    field: "id",
    title: "Mã thủ tục",
    sortable: true,
  },
  {
    field: "name",
    title: "Tên thủ tục",
    sortable: true,
  },
  {
    field: "process_name",
    title: "Quy trình",
    sortable: true,
  },
  {
    field: "number_attachment",
    title: "Số lượng đính kèm",
    sortable: true,
  },
  {
    field: "created_date",
    title: "Ngày khởi tạo",
  },
  {
    field: "updated_date",
    title: "Ngày cập nhật",
  },
];
