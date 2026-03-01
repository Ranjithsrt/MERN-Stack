import React, { memo, useCallback, useState } from "react";

const UseCallbackDemo = () => {
  const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   console.log("Clicked");
  // };

  const handleClick = useCallback(() => {
    console.log("Child Clicked");
  }, []);

  return (
    <div>
      <h3>UseCallback Hook</h3>
      <h4>Clicked : {count}</h4>
      <button onClick={() => setCount(count + 1)}>Click Me</button>

      <Child click={handleClick} />
    </div>
  );
};

export default UseCallbackDemo;

// function Child({ click }) {
//   console.log("Child Rendered");
//   return <button onClick={click}>Child Button</button>;
// }

const Child = memo(({ click }) => {
  console.log("Child Rendered");
  return <button onClick={click}>Child Button</button>;
});


/*

| Feature  | useMemo           | useCallback    |
| -------- | ----------------- | -------------- |
| Memoizes | Value             | Function       |
| Returns  | Result            | Function       |
| Use case | Heavy computation | Event handlers |

*/