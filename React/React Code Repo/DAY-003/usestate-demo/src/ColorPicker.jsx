import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#007c10");
  return (
    <div>
      <h3>Color Picker</h3>
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      <div style={{ height: "200px", width: "200px", background: color }}></div>
    </div>
  );
};

export default ColorPicker;
