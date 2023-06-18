import { ReactNode } from "react";

export const isLastStep = (step: number, steps: Array<ReactNode>): boolean => {
  return step === steps.length - 1;
};
