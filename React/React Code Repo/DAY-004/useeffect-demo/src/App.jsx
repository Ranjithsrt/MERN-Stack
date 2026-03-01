import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    console.log("Run only on mount (empty dependency array)");
  });
  return (
    <div>
      <h3>useEffect Demo</h3>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
      <button onClick={() => setTimer(timer + 1)}>Timer {timer}</button>
    </div>
  );
};

export default App;
/*
1. call on Page load
2. Run on every render (no dependency array)
  useEffect(() => {
    console.log("Run on mount and every update");
  });
3.Run only on mount (empty dependency array)
  useEffect(() => {
      console.log("Run only on mount (empty dependency array)");
  }, []);

4.Run on mount + when dependencies change
  useEffect(() => {
    console.log("Run only on mount (empty dependency array)");
  }, [count]);
*/
