import React from "react";
import Welcome from "./Components/Wrlcome";
import VoterId from "./Components/VoterId";
import Students from "./Components/Students";

const Box = () => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "5px" }}>
      <h5>Sample Title</h5>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo totam voluptatum similique aut, incidunt nihil molestias libero quia asperiores quam assumenda impedit doloremque, deserunt, neque iure at placeat fugiat.</p>
    </div>
  );
};

const App = () => {
  const name = "Ram Kumar";
  return (
    <div style={{ border: "2px solid #ccc", padding: "10px" }}>
      <h1 className="box">First React App</h1>
      <hr />
      <p>Welcome {name} !</p>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        {/* This is JSX Class */}
        <p>{25 + 25}</p>
      </div>

      <Box />
      <Welcome />

      <VoterId name="Rakesh" age={25} city="Salem" />
      <VoterId name="Suresh" age={12} city="chennai" />

      <Students />
    </div>
  );
};

export default App;

// React.createElement("h1",null,"First React App");
/*

1. A component must return a single root element
2. All tags must be closed (including Standalone tags <br/> <hr/> <img /> ) 
3. use className intstead of class attribute
4. use htmlFor intstead of for attribute
5. JavaScript expression in {}
6. Style takes an object*/
// 7. Comment must be inside of {/* --- */}

/*
  1. Component Creation  inside and seperate file
  2. props, props destructure
  3. Contional Operator
  4. List & keys with map  
  
*/
