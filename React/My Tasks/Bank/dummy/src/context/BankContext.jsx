import { createContext, useReducer } from "react";

export const BankContext = createContext();

const initialState = {
  balance: 1000,
};

const bankReducer = (state, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return { balance: state.balance + parseInt(action.payload) };

    case "WITHDRAW":
      return { balance: state.balance - parseInt(action.payload) };

    default:
      return state;
  }
};

//  context provider func
// call main.jsx component
export const BankProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bankReducer, initialState);

  return (
    <BankContext.Provider value={{ state, dispatch }}>
      {children}
    </BankContext.Provider>
  );
};
