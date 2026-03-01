import { useContext } from "react";
import { BankContext } from "./BankContext";

export const useBank = () => {
  return useContext(BankContext);
};
