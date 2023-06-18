import { useField } from "formik";

export interface IProps {
  name: string;
  label?: string;
  value?: string | number;
}

const CustomCheckbox = (props: IProps) => {
  const [field] = useField({
    name: props.name,
    type: "checkbox",
    value: props.value,
  });
  return (
    <>
      <label>{props.label}</label>
      <input type="checkbox" {...field} {...props} />
    </>
  );
};

export default CustomCheckbox;
