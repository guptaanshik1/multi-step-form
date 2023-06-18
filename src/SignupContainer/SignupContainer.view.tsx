import { initialValues, multiInitialValues } from "./utils/initialValues";
import CustomCheckbox from "./components/CustomCheckbox";
import { boolean, number, object, string } from "yup";
import CustomTextBox from "./components/CustomTextBox";
import FormikStepper from "./components/FormikStepper";
import FormikStep from "./components/FormikStep";
import { ErrorMessage } from "formik";

export default function SignupContainerView() {
  return (
    <div>
      <FormikStepper initialValues={multiInitialValues} onSubmit={() => {}}>
        <FormikStep
          validationSchema={object({
            firstName: string().required().min(2).max(50),
            lastName: string().required().min(2).max(50),
          })}
        >
          <CustomTextBox name="firstName" label="First Name" />
          <ErrorMessage name="firstName" />
          <CustomTextBox name="lastName" label="Last Name" />
          <ErrorMessage name="lastName" />
          <CustomCheckbox name="millionare" label="Are you a millionare" />
        </FormikStep>
        <FormikStep
          validationSchema={object({
            money: number().test(
              "money",
              "As a millionaire, you should have at least 1 million.",
              function (value) {
                const isMillionare = this.parent.millionare;
                if (isMillionare) {
                  return number().required().min(1_000_000).isValidSync(value);
                }
                return true;
              }
            ),
          })}
        >
          <CustomTextBox
            name="money"
            type="number"
            label="All the money I have"
          />
          <ErrorMessage name="money" />
        </FormikStep>
        <FormikStep
          validationSchema={object({
            description: string().required().min(10).max(200),
          })}
        >
          <CustomTextBox name="description" label="Description" />
          <ErrorMessage name="description" />
        </FormikStep>
        {/* <pre>{JSON.stringify(errors, null, 4)}</pre>
              <pre>{JSON.stringify(values, null, 4)}</pre> */}
      </FormikStepper>
    </div>
  );
}
