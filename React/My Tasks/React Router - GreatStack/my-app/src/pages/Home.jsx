import React from "react";
// import reducer hook from react library 
import { useState, useReducer } from "react";

// initial state = 5
const initialState = 5;

// action types
const Actions = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
};
// reducer function
const reducer = (state, action) => {
  // switch case for action types
  switch (action.type) {
   // case "increment":
   case Actions.INCREMENT:
      return state + 5;
  //  case "decrement":
    case Actions.DECREMENT:
      return state - 1;
   // case "reset":
    case Actions.RESET:
      return initialState;
    default:
      return state;
  }
};

const Home = () => {
  //const[count,setCount]=useState(0)
  // useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);
  /*
   state => current state value
   dispatch => function to dispatch actions

   useReducer hook takes two arguments
   1. reducer function
   2. initial state

   reducer function takes two arguments
   1. current state value
   2. action object
    action object has a type property to identify the action to be performed on the state value and a payload property to hold the data to be used in the action 

    action object has a type property to identify the action to be performed on the state value and a payload property to hold the data to be used in the action
  */

  const handleIncree = () => {
    //  setCount((prevCount)=>prevCount+3)
    // dispatch({ type: "increment" });
    // using Actions constant
    dispatch({ type: Actions.INCREMENT });
    /*
      dispatch function is used to dispatch actions to the reducer function and update the state value 
    */
  };
  const handleDecre = () => {
    // setCount((prevCount)=>prevCount-1)
    // dispatch({ type: "decrement" });
    dispatch({ type: Actions.DECREMENT });
  };

  const handleReset = () => {
    // setCount(0)
    // dispatch({ type: "reset" });
    dispatch({ type: Actions.RESET });
  };
  return (
    <div>
      <h1>Home</h1>

      {/*
      <p style={{margin:"5px",fontWeight:"bold",}}>Count: {state}</p>
      
      <button style={{padding:"5px" , margin:"5px"}} onClick={handleIncree}>Increment</button>
      <button style={{padding:"5px", margin:"5px"}} onClick={handleDecre}>Decrement</button>
      <button  style={{padding:"5px", margin:"5px"}} onClick={handleReset}>Reset</button> */}
    </div>
  );
};

export default Home;
