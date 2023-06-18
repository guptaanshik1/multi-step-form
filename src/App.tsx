import { Route, Routes } from "react-router-dom";
import { SignupContainer } from "./SignupContainer";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignupContainer />} />
    </Routes>
  );
}

export default App;

{
  /* <Formik
        validationSchema={object({
          fullName: string().required().min(2).max(100),
          initialInvestment: number().required().min(100),
          dependents: number().required().min(0).max(5),
          investmentRisk: array(string().oneOf(["High", "Medium", "Low"])).min(
            1
          ),
          // commonAboutInvestmentRisk: mixed().when("investmentRisk", {
          //   is: (investmentRisk: string[]) =>
          //     investmentRisk.find((ir) => ir === "High"),
          //   then: string().required().min(10).max(100),
          //   otherwise: string().min(10).max(100),
          // }),
          acceptedTermsAndConditions: boolean().oneOf([true]),
        })}
        initialValues={initialValues}
        onSubmit={(values, formikHelpers) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              console.log(values);
              console.log(formikHelpers);
              // @ts-ignore
              resolve();
            }, 5000);
          });
        }}
      >
        {({ values, errors, isSubmitting, isValidating }) => {
          return (
            <Form>
              <Field name="fullName" />
              <ErrorMessage name="fullName" />
              {/* {touched.fullName && errors.fullName ? errors.fullName : null} */
}
//       <Field name="initialInvestment" type="number" />
//       <ErrorMessage name="initialInvestment" />

//       <CustomCheckbox
//         label="High"
//         name="investmentRisk"
//         value={"High"}
//       />
//       <CustomCheckbox
//         label="Medium"
//         name="investmentRisk"
//         value={"Medium"}
//       />
//       <CustomCheckbox label="Low" name="investmentRisk" value={"Low"} />
//       <ErrorMessage name="investmentRisk" />

//       <Field name="commonAboutInvestmentRisk" as="textarea" />
//       <ErrorMessage name="commonAboutInvestmentRisk" />

//       <Field name="dependents" as="select">
//         <option value={-1}>Select....</option>
//         <option value={0}>0</option>
//         <option value={1}>1</option>
//         <option value={2}>2</option>
//         <option value={3}>3</option>
//         <option value={4}>4</option>
//         <option value={5}>5</option>
//       </Field>
//       <ErrorMessage name="dependents" />

//       <CustomCheckbox
//         name="acceptedTermsAndConditions"
//         label="Accept terms and conditions"
//       />

//       <pre>{JSON.stringify(errors, null, 4)}</pre>
//       <pre>{JSON.stringify(values, null, 4)}</pre>

//       <button type="submit" disabled={isSubmitting || isValidating}>
//         Submit
//       </button>
//     </Form>
//   );
// }}
// </Formik> */}
