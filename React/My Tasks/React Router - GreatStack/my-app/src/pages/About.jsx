/*

import { useReducer } from "react";


// initial state
const initialState = 1000;

// action types
const Actions = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
  RESET: "reset",
};

// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case Actions.DEPOSIT:
      return state + action.payload;
    case Actions.WITHDRAW:
      return state - action.payload;
    case Actions.RESET:
      return initialState;
    default:
      return state;
  }
};

*/

const About = () => {
 // const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>About</h1>
{/*       
      <p>Bank Account </p>
      <p style={{ margin: "5px", fontWeight: "bold" }}>Balance: ${state}</p>
      <button
        style={{ padding: "5px", margin: "5px" }}
        onClick={() => dispatch({ type: Actions.DEPOSIT, payload: 500 })}
      >
        Deposit $500
      </button>
      <button
        style={{ padding: "5px", margin: "5px" }}
        onClick={() => dispatch({ type: Actions.WITHDRAW, payload: 200 })}
      >
        Withdraw $200
      </button>
      <button
        style={{ padding: "5px", margin: "5px" }}
        onClick={() => dispatch({ type: Actions.RESET })}
      >
        Reset Account
      </button> */}
    </div>
  );
};

export default About;
