import React from "react";
import SignupContainerView from "./SignupContainer.view";
import { SignupContainerContext } from "./utils/context";
import * as Yup from "yup";

export default function SignupContainerContainer() {
  const signupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Fisrt name is required"),
    lastName: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Last name is required"),
    email: Yup.string().required("Email is required")
  });
  const [count, setCount] = React.useState(1);
  return (
    <SignupContainerContext.Provider
      // @ts-ignore
      value={{
        count: count,
      }}
    >
      <SignupContainerView />
    </SignupContainerContext.Provider>
  );
}
