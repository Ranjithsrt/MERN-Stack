import React from "react";

const B = ({ items }) => {
  const male = items.filter((item) => item.gender === "Male").length;
  console.log(male);
  return (
    <div>
      <p>Total Male : {male}</p>
      <p>Total Female : {items.length - male}</p>
    </div>
  );
};

export default B;
