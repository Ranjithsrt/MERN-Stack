import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Todo from "./models/Todo.js";

const app = express();
app.use(express.json());
app.use(cors());

//Connect Database
mongoose
  .connect("mongodb://localhost:27017/todoDb")
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => console.log(err));

//Create Todo
app.post("/todos", async (req, res) => {
  try {
    const todo = new Todo(req.body);
    const insertedTodo = await todo.save();
    res.status(201).json(insertedTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Todos

app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update Todo
app.put("/todos/:id", async (req, res) => {
  try {
    const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete Todo

app.delete("/todos/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//To test your server
app.get("/", (req, res) => {
  res.send("<h2>Todo API Running...</h2>");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
