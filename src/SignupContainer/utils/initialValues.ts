import { IInvestmentDetails, IPersonMoney } from "../../data";

export const initialValues: IInvestmentDetails = {
  fullName: "",
  initialInvestment: undefined,
  investmentRisk: [],
  commonAboutInvestmentRisk: "",
  dependents: -1,
  acceptedTermsAndConditions: false,
};

export const multiInitialValues: IPersonMoney = {
  firstName: "",
  lastName: "",
  millionare: false,
  description: "",
  money: 0,
};
