import "./App.css";
import { useState } from "react";

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const calculateBmi = () => {
      const isValidHeight = /^\d+$/.test(height);
      const isValidWeight = /^\d+$/.test(weight);

   if (!isValidHeight || !isValidWeight) {
     setBmi(null);
     setBmiStatus("");
     setErrorMessage("Please enter valid height and weight (numbers only)");
     return;
   }

    if (height && weight) {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      setBmi(bmi.toFixed(2));
      if (bmi < 18.5) {
        setBmiStatus("Underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setBmiStatus("Normal");
      } else if (bmi >= 25 && bmi < 30) {
        setBmiStatus("Overweight");
      } else {
        setBmiStatus("Obese");
      }
      setErrorMessage("");
    } else {
      setBmi(null);
      setBmiStatus("");
      setErrorMessage("Please enter height and weight");
    }
  };

  const clearAll = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("");
    setErrorMessage("");
  };

  return (
    <>
      <div className="bmi-calculator">
        <div className="box">
          <div className="data">
            <h1>BMI Calculator</h1>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <div className="input-container">
              <label htmlFor="height">Height (cm)</label>
              <input
                type="text"
                placeholder="Enter your height"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="weight">Weight (kg)</label>
              <input
                type="text"
                placeholder="Enter your weight"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <button className="btn" onClick={calculateBmi}>
              Calculate BMI
            </button>
            <button className="btn" onClick={clearAll}>
              Clear All
            </button>
            {bmi !== null && (
              <div className="result" onClick={calculateBmi}>
                <p>Your BMI is : {bmi} </p>
                <p>status : {bmiStatus}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
