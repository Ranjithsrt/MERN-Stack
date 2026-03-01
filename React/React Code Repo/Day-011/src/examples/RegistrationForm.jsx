import React, { useReducer } from "react";
import "./RegistrationForm.css";

const initialState = {
  username: "",
  email: "",
  password: "",
  termsAccepted: false,
};

function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case "TOGGLE_CHECKBOX":
      return {
        ...state,
        termsAccepted: !state.termsAccepted,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const RegistrationForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };
  return (
    <div>
      <h3>Registration</h3>
      <form autoComplete="off">
        <input type="text" name="username" placeholder="Username" value={state.username} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={state.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={state.password} onChange={handleChange} />
        <p>
          <input id="accept" type="checkbox" checked={state.termsAccepted} onChange={() => dispatch({ type: "TOGGLE_CHECKBOX" })} />
          <label htmlFor="accept">I Accecpt Terms &amp; Conditions</label>
        </p>

        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </form>

      {JSON.stringify(state)}
    </div>
  );
};

export default RegistrationForm;
