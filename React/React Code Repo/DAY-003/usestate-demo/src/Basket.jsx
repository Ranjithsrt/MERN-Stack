import React, { useState } from "react";

const Basket = () => {
  //items=["Apple", "Orange"] items="Grapes"
  const [items, setItems] = useState(["Apple", "Orange"]);
  const [fruit, setFruit] = useState("");
  const addFruits = () => {
    setItems([...items, fruit]);
    setFruit("");
  };
  return (
    <div style={{ margin: "50px" }}>
      <h3>Shopping Basket</h3>
      {items.length === 0 ? (
        <p>No Items found</p>
      ) : (
        <>
          <form>
            <input type="text" value={fruit} onChange={(e) => setFruit(e.target.value)} placeholder="Enter Fruit" />
            <button type="button" onClick={addFruits}>
              Add to Basket
            </button>
          </form>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Basket;
