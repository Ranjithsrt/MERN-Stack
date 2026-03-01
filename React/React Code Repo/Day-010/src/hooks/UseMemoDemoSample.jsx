import React, { useMemo, useState } from "react";

function heavyCalculation(num) {
  console.log("Calculating...");
  // eslint-disable-next-line no-empty
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

const UseMemoDemoSample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  //const result = heavyCalculation(count);
  const result = useMemo(() => {
    return heavyCalculation(count);
  }, [count]);
  return (
    <div>
      <h3>UseMemo Hook</h3>
      <p>Result : {result}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <br />
      <br />
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>Typing Text : {text}</p>
    </div>
  );
};

export default UseMemoDemoSample;
