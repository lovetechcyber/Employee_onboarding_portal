import React from "react";

interface FormFieldProps {
  type?: string;
  onChange?: (e: any) => void;
  onKeyDown?: (e: any) => void;
  className?: string;
  id?: string;
  inputRef?: any;
  maxLength?: number;
  value?: string | any;
  required?: boolean;
  name?: string;
  accept?: string;
  checked?: boolean;
  disabled?: boolean;
  placeholder?: string;
  cols?: number;
  rows?: number;
  children?: any;
  options?: any[];
  optionValue?: string;
  defaultValue?: string;
  max?: string;
  readOnly?: boolean;
  title?: string;
}

export const InputField: React.FC<FormFieldProps> = ({
  type,
  onChange,
  onKeyDown,
  className,
  id,
  inputRef,
  maxLength,
  value,
  required,
  name,
  accept,
  checked,
  disabled,
  placeholder,
  max,
  readOnly,
  title,
}) => {
  return (
    <input
      type={type}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={className}
      id={id}
      value={value}
      ref={inputRef}
      maxLength={maxLength}
      required={required}
      name={name}
      accept={accept}
      checked={checked}
      disabled={disabled}
      placeholder={placeholder}
      max={max}
      readOnly={readOnly}
      title={title}
    />
  );
};

export const TextArea: React.FC<FormFieldProps> = ({
  name,
  id,
  cols,
  rows,
  onChange,
  value,
  placeholder,
  required,
  disabled,
  className,
  title,
}) => {
  return (
    <textarea
      name={name}
      id={id}
      cols={cols}
      rows={rows}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      className={className}
      title={title}
    ></textarea>
  );
};

export const Select: React.FC<FormFieldProps> = ({
  name,
  id,
  options,
  value,
  optionValue,
  className,
  onChange,
  defaultValue,
  required,
  title,
}) => {
  return (
    <select
      name={name}
      value={value}
      className={className}
      id={id}
      onChange={onChange}
      required={required}
      title={title}
    >
      <option value="">{defaultValue}</option>
      {options?.map((option, index) => (
        <option key={index} value={optionValue ? option.optionValue : option}>
          {optionValue ? option.optionValue : option}
        </option>
      ))}
    </select>
  );
};
