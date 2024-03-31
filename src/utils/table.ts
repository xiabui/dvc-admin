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
