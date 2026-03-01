import React, { useReducer, useState } from "react";

/*

const [state,setState]=useState(initialArg);
const [state, dispatch] = useReducer(reducer, initialArg, init?);

state: The current state.
dispatch: A function used to "dispatch" actions to the reducer to update the state.
reducer: A function that specifies how the state updates. It takes (state, action) and returns a new state.

initialArg: The initial state value.

init (Optional): An initializer function used for "lazy initialization."
*/

const initialState = { count: 10 };
function reducer(state, action) {
  //Cashier
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}
const UseReducerDemo = () => {
  //const [count, setCount] = useState(10);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>useReducer Hook</h3>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>0</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
};

export default UseReducerDemo;
