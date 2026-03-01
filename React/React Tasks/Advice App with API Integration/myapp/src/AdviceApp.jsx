import "./App.css";
import { useState, useEffect } from "react";

const AdviceApp = () => {
  const [advice, setAdvice] = useState("Press the button to get advice");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setCount((count) => count + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <p>you have read {count} pieces of advice</p>
    </div>
  );
};

export default AdviceApp;
