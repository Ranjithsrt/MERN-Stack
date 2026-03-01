import React from "react";

// const VoterId = (props) => {
//   // const name = "Rakesh";
//   // const age = 12;
//   // const city = "Salem";
//   return (
//     <div style={{ border: "2px solid #ccc", padding: "20px" }}>
//       <h4>Voter Id</h4>
//       <p>Name : {props.name}</p>
//       <p>Age : {props.age}</p>
//       <p>City : {props.city}</p>
//       <p>{props.age >= 18 ? "You are eligible" : "Not Eligible"}</p>
//     </div>
//   );
// };

const VoterId = ({ name, age, city }) => {
  // const name = "Rakesh";
  // const age = 12;
  // const city = "Salem";
  return (
    <div style={{ border: "2px solid #ccc", padding: "20px" }}>
      <h4>Voter Id</h4>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>City : {city}</p>
      <p>{age >= 18 ? "You are eligible" : "Not Eligible"}</p>
    </div>
  );
};

export default VoterId;
