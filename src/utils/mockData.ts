import { IDropdownItem, IService } from "./types";

const provinces: IDropdownItem[] = [
  {
    label: "Tỉnh Bình Dương",
    value: "1",
  },
  {
    label: "Tỉnh Bình Phước",
    value: "2",
  },
  {
    label: "Tỉnh Vĩnh Long",
    value: "3",
  },
  {
    label: "Thành phố Hồ Chí Minh",
    value: "4",
  },
];

const genders: IDropdownItem[] = [
  {
    label: "Nam",
    value: "1",
  },
  {
    label: "Nữ",
    value: "2",
  },
  {
    label: "Khác",
    value: "3",
  },
];

const formData: { [key: string]: any }[] = [
  {
    id: "SH.XX",
    name: "Biểu mẫu 1",
    reference: 10,
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    id: "SH.XX",
    name: "Biểu mẫu 1",
    reference: 10,
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    id: "SH.XX",
    name: "Biểu mẫu 1",
    reference: 10,
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    id: "SH.XX",
    name: "Biểu mẫu 1",
    reference: 10,
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    id: "SH.XX",
    name: "Biểu mẫu 1",
    reference: 10,
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    id: "SH.XX",
    name: "Biểu mẫu 1",
    reference: 10,
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    id: "SH.XX",
    name: "Biểu mẫu 1",
    reference: 10,
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    id: "SH.XX",
    name: "Biểu mẫu 1",
    reference: 10,
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    id: "SH.XX",
    name: "Biểu mẫu 1",
    reference: 10,
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    id: "SH.XX",
    name: "Biểu mẫu 1",
    reference: 10,
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    id: "SH.XX",
    name: "Biểu mẫu 1",
    reference: 10,
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    id: "SH.XX",
    name: "Biểu mẫu 1",
    reference: 10,
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    id: "SH.XX",
    name: "Biểu mẫu 1",
    reference: 10,
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    id: "SH.XX",
    name: "Biểu mẫu 1",
    reference: 10,
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
];

const receivedApplicationData: { [key: string]: any }[] = [
  {
    id: "PTC001.24.03.11.123",
    name: "Biểu mẫu 1",
    status: "completed",
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    id: "PTC001.24.03.11.213",
    name: "Biểu mẫu 2",
    status: "denied",
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    id: "PTC001.24.03.11.122",
    name: "Biểu mẫu 3",
    status: "in_progress",
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    id: "PTC001.24.03.11.122",
    name: "Biểu mẫu 4",
    status: "new",
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    id: "PTC001.24.03.11.123",
    name: "Biểu mẫu 5",
    status: "cancel",
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    id: "PTC001.24.03.11.123",
    name: "Biểu mẫu 6",
    status: "no_payment",
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
];

const flowData: { [key: string]: any }[] = [
  {
    id: "MQT.XX",
    name: "Tên quy trình 1",
    process_time: "3 ngày",
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    id: "MQT.XX",
    name: "Tên quy trình 2",
    process_time: "6 ngày",
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    id: "MQT.XX",
    name: "Tên quy trình 3",
    process_time: "9 ngày",
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    id: "MQT.XX",
    name: "Tên quy trình 4",
    process_time: "12 ngày",
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
];

const procedureData: { [key: string]: any }[] = [
  {
    id: "MTT.XX",
    name: "Tên thủ tục XX",
    process_name: "Tên quy trình XX",
    number_attachment: "3",
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    id: "MTT.XX",
    name: "Tên thủ tục XX",
    process_name: "Tên quy trình XX",
    number_attachment: "3",
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    id: "MTT.XX",
    name: "Tên thủ tục XX",
    process_name: "Tên quy trình XX",
    number_attachment: "3",
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    id: "MTT.XX",
    name: "Tên thủ tục XX",
    process_name: "Tên quy trình XX",
    number_attachment: "3",
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    id: "MTT.XX",
    name: "Tên thủ tục XX",
    process_name: "Tên quy trình XX",
    number_attachment: "3",
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
];

const applicationData: { [key: string]: any }[] = [
  {
    stt: "1",
    name: "PTC01-Xin nghỉ phép",
    target: "Người nộp hồ sơ",
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    stt: "2",
    name: "PTC02-Xác nhận nghỉ phép của đơn vi",
    target: "Người xử lý hồ sơ",
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
  {
    stt: "3",
    name: "PTC01-Xin nghỉ phép",
    target: "Người nộp hồ sơ",
    created_date: "01 May 2021, 00:00",
    updated_date: "01 May 2021, 00:00",
  },
];

const actionHistoryData: { [key: string]: any }[] = [
  {
    date: "21/01/2024, 00:00",
    target: "Người nộp hồ sơ",
    action: "Chỉnh sửa hồ sơ",
  },
  {
    date: "21/01/2024, 00:00",
    target: "Người nộp hồ sơ",
    action: "Chỉnh sửa hồ sơ",
  },
  {
    date: "21/01/2024, 00:00",
    target: "Người nộp hồ sơ",
    action: "Chỉnh sửa hồ sơ",
  },
  {
    date: "21/01/2024, 00:00",
    target: "Người nộp hồ sơ",
    action: "Chỉnh sửa hồ sơ",
  },
  {
    date: "21/01/2024, 00:00",
    target: "Người nộp hồ sơ",
    action: "Chỉnh sửa hồ sơ",
  },
  {
    date: "21/01/2024, 00:00",
    target: "Người nộp hồ sơ",
    action: "Chỉnh sửa hồ sơ",
  },
  {
    date: "21/01/2024, 00:00",
    target: "Người nộp hồ sơ",
    action: "Chỉnh sửa hồ sơ",
  },
  {
    date: "21/01/2024, 00:00",
    target: "Người nộp hồ sơ",
    action: "Chỉnh sửa hồ sơ",
  },
  {
    date: "21/01/2024, 00:00",
    target: "Người nộp hồ sơ",
    action: "Chỉnh sửa hồ sơ",
  },
  {
    date: "21/01/2024, 00:00",
    target: "Người nộp hồ sơ",
    action: "Chỉnh sửa hồ sơ",
  },
  {
    date: "21/01/2024, 00:00",
    target: "Người nộp hồ sơ",
    action: "Chỉnh sửa hồ sơ",
  },
  {
    date: "21/01/2024, 00:00",
    target: "Người nộp hồ sơ",
    action: "Chỉnh sửa hồ sơ",
  },
  {
    date: "21/01/2024, 00:00",
    target: "Người nộp hồ sơ",
    action: "Chỉnh sửa hồ sơ",
  },
  {
    date: "21/01/2024, 00:00",
    target: "Người nộp hồ sơ",
    action: "Chỉnh sửa hồ sơ",
  },
  {
    date: "21/01/2024, 00:00",
    target: "Người nộp hồ sơ",
    action: "Chỉnh sửa hồ sơ",
  },
  {
    date: "21/01/2024, 00:00",
    target: "Người nộp hồ sơ",
    action: "Chỉnh sửa hồ sơ",
  },
  {
    date: "21/01/2024, 00:00",
    target: "Người nộp hồ sơ",
    action: "Chỉnh sửa hồ sơ",
  },
  {
    date: "21/01/2024, 00:00",
    target: "Người nộp hồ sơ",
    action: "Chỉnh sửa hồ sơ",
  },
  {
    date: "21/01/2024, 00:00",
    target: "Người nộp hồ sơ",
    action: "Chỉnh sửa hồ sơ",
  },
  {
    date: "21/01/2024, 00:00",
    target: "Người nộp hồ sơ",
    action: "Chỉnh sửa hồ sơ",
  },
  {
    date: "21/01/2024, 00:00",
    target: "Người nộp hồ sơ",
    action: "Chỉnh sửa hồ sơ",
  },
  
  
];

export {
  genders,
  provinces,
  formData,
  receivedApplicationData,
  flowData,
  procedureData,
  applicationData,
  actionHistoryData
};
