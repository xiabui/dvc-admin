import { IService } from "./types";

const teacherServices: IService[] = [
  {
    icon: 'list-protected',
    title: "Quản lý chế độ và chính sách nhân sự",
  },
  {
    icon: 'user-work',
    title: "Quản lý nhân sự và đào tạo",
  },
  {
    icon: 'certificate',
    title: "Đánh giá và thăng tiến",
  },
];

const studentServices: IService[] = [
  {
    icon: 'hat-graduate',
    title: "Quản lý học phần và thời khóa biểu",
  },
  {
    icon: 'bookmark',
    title: "Quản lý giảng dạy và học tập",
  },
  {
    icon: 'flask',
    title: "Quản lý học tập và nghiên cứu",
  },
];

const formData: {[key: string]: any}[] = [
  {
    "id": 'SH.XX',
    "name": "Biểu mẫu 1",
    "reference": 10,
    "created_date": "01 May 2021, 00:00",
    "updated_date": "01 May 2021, 00:00",
  },
  {
    "id": 'SH.XX',
    "name": "Biểu mẫu 1",
    "reference": 10,
    "created_date": "01 May 2021, 00:00",
    "updated_date": "01 May 2021, 00:00",
  },
  {
    "id": 'SH.XX',
    "name": "Biểu mẫu 1",
    "reference": 10,
    "created_date": "01 May 2021, 00:00",
    "updated_date": "01 May 2021, 00:00",
  },
  {
    "id": 'SH.XX',
    "name": "Biểu mẫu 1",
    "reference": 10,
    "created_date": "01 May 2021, 00:00",
    "updated_date": "01 May 2021, 00:00",
  },
  {
    "id": 'SH.XX',
    "name": "Biểu mẫu 1",
    "reference": 10,
    "created_date": "01 May 2021, 00:00",
    "updated_date": "01 May 2021, 00:00",
  },
  {
    "id": 'SH.XX',
    "name": "Biểu mẫu 1",
    "reference": 10,
    "created_date": "01 May 2021, 00:00",
    "updated_date": "01 May 2021, 00:00",
  },
  {
    "id": 'SH.XX',
    "name": "Biểu mẫu 1",
    "reference": 10,
    "created_date": "01 May 2021, 00:00",
    "updated_date": "01 May 2021, 00:00",
  },{
    "id": 'SH.XX',
    "name": "Biểu mẫu 1",
    "reference": 10,
    "created_date": "01 May 2021, 00:00",
    "updated_date": "01 May 2021, 00:00",
  },
  {
    "id": 'SH.XX',
    "name": "Biểu mẫu 1",
    "reference": 10,
    "created_date": "01 May 2021, 00:00",
    "updated_date": "01 May 2021, 00:00",
  },
  {
    "id": 'SH.XX',
    "name": "Biểu mẫu 1",
    "reference": 10,
    "created_date": "01 May 2021, 00:00",
    "updated_date": "01 May 2021, 00:00",
  },
  {
    "id": 'SH.XX',
    "name": "Biểu mẫu 1",
    "reference": 10,
    "created_date": "01 May 2021, 00:00",
    "updated_date": "01 May 2021, 00:00",
  },
  {
    "id": 'SH.XX',
    "name": "Biểu mẫu 1",
    "reference": 10,
    "created_date": "01 May 2021, 00:00",
    "updated_date": "01 May 2021, 00:00",
  },
  {
    "id": 'SH.XX',
    "name": "Biểu mẫu 1",
    "reference": 10,
    "created_date": "01 May 2021, 00:00",
    "updated_date": "01 May 2021, 00:00",
  },
  {
    "id": 'SH.XX',
    "name": "Biểu mẫu 1",
    "reference": 10,
    "created_date": "01 May 2021, 00:00",
    "updated_date": "01 May 2021, 00:00",
  },
  
]

const receivedApplicationData: {[key: string]: any}[] = [
  {
    "id": 'PTC001.24.03.11.123',
    "name": "Biểu mẫu 1",
    "status": "completed",
    "created_date": "01 May 2021, 00:00",
    "updated_date": "01 May 2021, 00:00",
  },
  {
    "id": 'PTC001.24.03.11.213',
    "name": "Biểu mẫu 2",
    "status": "denied",
    "created_date": "01 May 2021, 00:00",
    "updated_date": "01 May 2021, 00:00",
  },
  {
    "id": 'PTC001.24.03.11.122',
    "name": "Biểu mẫu 3",
    "status": "in_progress",
    "created_date": "01 May 2021, 00:00",
    "updated_date": "01 May 2021, 00:00",
  },
  {
    "id": 'PTC001.24.03.11.122',
    "name": "Biểu mẫu 4",
    "status": "new",
    "created_date": "01 May 2021, 00:00",
    "updated_date": "01 May 2021, 00:00",
  },
  {
    "id": 'PTC001.24.03.11.123',
    "name": "Biểu mẫu 5",
    "status": "cancel",
    "created_date": "01 May 2021, 00:00",
    "updated_date": "01 May 2021, 00:00",
  },
  {
    "id": 'PTC001.24.03.11.123',
    "name": "Biểu mẫu 6",
    "status": "no_payment",
    "reference": 10,
    "created_date": "01 May 2021, 00:00",
    "updated_date": "01 May 2021, 00:00",
  },
]

export { teacherServices, studentServices, formData, receivedApplicationData }
