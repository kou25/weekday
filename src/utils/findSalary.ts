import { salaryCurrencyCode } from "./jobType";

export const findSalary = (salary: number, type: salaryCurrencyCode) => {
  if (type === "USD") {
    const convertDollarThousandSalary = Math.round(salary * 1000);
    const convertedAmount = Math.round(convertDollarThousandSalary * 74.85);
    return Math.round(convertedAmount / 100000);
  }
  return salary;
};
