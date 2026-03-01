const express = require("express");
const app = express();

app.use(express.json());

// Dummy user data
let users = [
  { id: 1, name: "Joes", age: 30, email: "joes@gmail.com" },
  { id: 2, name: "Stanley", age: 28, email: "stanley@gmail.com" },
];

//BASIC ROUTE
app.get("/", (req, res) => {
  res.send("Express CRUD App Running ");
});

// READ - Get All Users
app.get("/users", (req, res) => {
  res.json(users);
});

// READ - Get Single User
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id == id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
});

//CREATE - Add User
app.post("/users", (req, res) => {
  // console.log(req.body);
  const { name, age, email } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    age,
    email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

//UPDATE - Edit User
app.put("/users/:id", (req, res) => {
  const { name, age, email } = req.body;
  const id = req.params.id;
  const user = users.find((u) => u.id == id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  user.name = name || user.name;
  user.age = age || user.age;
  user.email = email || user.email;
  res.json(user);
});

//   DELETE - Remove User
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const index = users.findIndex((u) => u.id == id);
  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }
  const deletedUser = users.splice(index, 1);
  res.json({ message: "Deleted", data: deletedUser[0] });
});

app.listen(3000, () => {
  console.log(`Server Start @ http://localhost:3000`);
});
