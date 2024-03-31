export interface ISelectOption {
  label: string;
  value: string;
}

export interface IShortNews {
  title: string;
  date: string;
}

export interface IService {
  icon: string;
  title: string;
}

export interface IMenuItem {
  title: string;
}

export interface ITableAction {
  icon: string;
  action?: any;
  color?: string;
  disabled?: boolean;
}

export interface IDropdownItem {
  name: string;
  value: string | number;
}

export interface ITableProps {
  field: string;
  title: string;
  sortable?: boolean;
  customSlot?: boolean;
}

export interface IApplicationStatus {
  label: string;
  className: string;
}
