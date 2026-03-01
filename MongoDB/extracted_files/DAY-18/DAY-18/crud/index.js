import express from "express";
import mongoose from "mongoose";
const app = express();
app.use(express.json());

//Database Connection
mongoose
  .connect("mongodb://localhost:27017/sample")
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Error in connecting DB " + err);
  });

//User Schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
const User = mongoose.model("User", userSchema);

//update User Details

app.put("/users/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;
    console.log(id);
    console.log(req.body);
    const updatedUser = await User.findOneAndUpdate({ _id: id }, { $set: { name, age } }, { new: true });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.Message });
  }
});
//Replace User Details
app.put("/users/replace/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const replacement = req.body;
    const replacedUser = await User.findOneAndReplace({ _id: id }, replacement, { new: true });
    res.json(replacedUser);
  } catch (err) {
    res.status(500).json({ error: err.Message });
  }
});

//Delete USer Details
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.findOneAndDelete({ _id: id });
    res.json(deleteUser);
  } catch (err) {
    res.status(500).json({ error: err.Message });
  }
});

//all users
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

//Seed some user details
app.post("/users/seed", async (req, res) => {
  await User.insertMany([
    { name: "Tiya", age: 6 },
    { name: "Tivin", age: 12 },
    { name: "Sam", age: 35 },
    { name: "Raja", age: 45 },
    { name: "Sara", age: 13 },
  ]);
  res.json({ Message: "Sample users inserted" });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
