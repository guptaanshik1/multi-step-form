export interface IInvestmentDetails {
  fullName: string;
  initialInvestment: undefined;
  investmentRisk: Array<"High" | "Medium" | "Low">;
  commonAboutInvestmentRisk: string;
  dependents: number;
  acceptedTermsAndConditions: boolean;
}

export interface IPersonMoney {
  firstName: string;
  lastName: string;
  millionare: boolean;
  money: number;
  description: string;
}
