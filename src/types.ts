export type SelectOption = {
  value: string;
  label: string;
  src?: string;
};

export type SelectBoxProps = {
  options: SelectOption[];
  value: SelectOption;
  onChange: (value: SelectOption) => void;
  label?: string;
};
