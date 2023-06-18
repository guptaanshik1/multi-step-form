import { Form, Formik, FormikConfig, FormikProps, FormikValues } from "formik";
import React, { ReactNode } from "react";
import { isLastStep } from "../utils/formUtils";
import { FormikStepProps } from "./FormikStep";

interface FormikStepperProps extends FormikConfig<FormikValues> {
  children: ReactNode | ((props: FormikProps<FormikValues>) => ReactNode);
}

const FormikStepper = ({ children, ...props }: FormikStepperProps) => {
  // passing children that are being received to array
  const childrenArray = React.Children.toArray(
    typeof children != "function" ? children : null
  ) as React.ReactElement<FormikStepProps>[];

  // showing children from a specific step
  const [step, setStep] = React.useState(0);
  const currentChild = childrenArray[step];

  return (
    <Formik
      {...props}
      validationSchema={currentChild?.props?.validationSchema}
      onSubmit={async (values, formikHelpers) => {
        if (isLastStep(step, childrenArray)) {
          await props.onSubmit(values, formikHelpers);
          console.log(values);
        } else {
          setStep((prev) => prev + 1);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          {currentChild}

          {step > 0 && (
            <button onClick={() => setStep((prev) => prev - 1)}>Back</button>
          )}
          <button type="submit" disabled={isSubmitting}>
            {isLastStep(step, childrenArray) ? "Submit" : "Next"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikStepper;
