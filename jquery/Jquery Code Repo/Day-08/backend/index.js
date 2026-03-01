// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/persondb")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

const PersonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      min: 1,
      max: 120,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Person = mongoose.model("Person", PersonSchema);

// Routes

// CREATE - POST /api/people
app.post("/api/people", async (req, res) => {
  console.log(req.body);
  try {
    const person = new Person(req.body);
    await person.save();
    res.status(201).json(person);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL - GET /api/people
app.get("/api/people", async (req, res) => {
  try {
    const people = await Person.find().sort({ createdAt: -1 });
    res.json(people);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ ONE - GET /api/people/:id
app.get("/api/people/:id", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) return res.status(404).json({ error: "Not found" });
    res.json(person);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE - PUT /api/people/:id
app.put("/api/people/:id", async (req, res) => {
  try {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!person) return res.status(404).json({ error: "Not found" });
    res.json(person);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE - DELETE /api/people/:id
app.delete("/api/people/:id", async (req, res) => {
  try {
    const person = await Person.findByIdAndDelete(req.params.id);
    if (!person) return res.status(404).json({ error: "Not found" });
    res.json({ success: true, deleted: person });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Use with jQuery AJAX - CORS is enabled!`);
});
