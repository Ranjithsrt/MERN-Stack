import React from "react";
import UseMemoDemoSample from "./hooks/UseMemoDemoSample";
import UseCallbackDemo from "./hooks/UseCallbackDemo";
import Todo from "./examples/Todo";
import RegistrationForm from "./examples/RegistrationForm";
import UseReducerDemo from "./hooks/UseReducerDemo";

const App = () => {
  return (
    <div>
      {/* 
        <UseMemoDemoSample />
        <hr />
        <UseCallbackDemo />
        <Todo />
      <img src="/img.png" alt="Butterfly" style={{ width: "150px" }} />
      <img src="/logo/vite.svg" alt="Butterfly" style={{ width: "150px" }} />
      */}

      <UseReducerDemo />
      <hr />
      <RegistrationForm />
    </div>
  );
};

export default App;
