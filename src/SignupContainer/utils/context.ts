
import React from "react";

export const SignupContainerContext = React.createContext(null);

export const useSignupContainerContext = () => {
  const context = React.useContext(SignupContainerContext);
  if (!context)
    throw new Error("useSignupContainerContext can not be used outside it's provider");
  return context;
};
