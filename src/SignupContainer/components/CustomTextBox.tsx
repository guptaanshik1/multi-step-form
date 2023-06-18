import { useField } from "formik";
import React from "react";

interface IProps {
  label?: string;
  value?: string;
  name: string;
  type?: string;
}

const CustomTextBox = (props: IProps) => {
  const [field] = useField({
    name: props.name,
    type: props.type,
    value: props.value,
  });
  return (
    <>
      <label>{props.label}</label>
      <input {...props} {...field} />
    </>
  );
};

export default CustomTextBox;
