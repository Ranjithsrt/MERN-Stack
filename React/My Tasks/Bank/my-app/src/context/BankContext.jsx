import React, { createContext, useContext, useReducer, useEffect } from "react";

const BankContext = createContext();

const initialState = {
  account: JSON.parse(localStorage.getItem("bank_account")) || null,
  transactions: JSON.parse(localStorage.getItem("bank_transactions")) || [],
};

const bankReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_ACCOUNT":
      return {
        ...state,
        account: {
          name: action.payload.name,
          accountNumber: action.payload.accountNumber,
          balance: Number(action.payload.initialBalance) || 0,
          createdAt: new Date().toISOString(),
        },
        transactions: [
          {
            id: Date.now(),
            type: "INITIAL_DEPOSIT",
            amount: Number(action.payload.initialBalance) || 0,
            date: new Date().toISOString(),
            description: "Account Created",
          },
        ],
      };

    case "DEPOSIT":
      if (!state.account) return state;

      const depositAmt = Number(action.payload.amount) || 0;
      return {
        ...state,
        account: {
          ...state.account,
          balance: Number(state.account.balance || 0) + depositAmt,
        },
        transactions: [
          {
            id: Date.now(),
            type: "DEPOSIT",
            amount: depositAmt,
            date: new Date().toISOString(),
            description: action.payload.description || "Cash Deposit",
          },
          ...state.transactions,
        ],
      };

    case "WITHDRAW":
      if (!state.account) return state;

      const withdrawAmt = Number(action.payload.amount) || 0;
      if (Number(state.account.balance || 0) < withdrawAmt) {
        return state; // Should be handled in UI validation
      }

      return {
        ...state,
        account: {
          ...state.account,
          balance: Number(state.account.balance || 0) - withdrawAmt,
        },
        transactions: [
          {
            id: Date.now(),
            type: "WITHDRAW",
            amount: withdrawAmt,
            date: new Date().toISOString(),
            description: action.payload.description || "Cash Withdrawal",
          },
          ...state.transactions,
        ],
      };

    case "RESET":
      localStorage.removeItem("bank_account");
      localStorage.removeItem("bank_transactions");
      return { account: null, transactions: [] };

    default:
      return state;
  }
};

export const BankProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bankReducer, initialState);

  useEffect(() => {
    if (state.account) {
      localStorage.setItem("bank_account", JSON.stringify(state.account));
      localStorage.setItem(
        "bank_transactions",
        JSON.stringify(state.transactions)
      );
    }
  }, [state]);

  return (
    <BankContext.Provider value={{ state, dispatch }}>
      {children}
    </BankContext.Provider>
  );
};

export const useBank = () => {
  const context = useContext(BankContext);
  if (!context) {
    throw new Error("useBank must be used within a BankProvider");
  }
  return context;
};
