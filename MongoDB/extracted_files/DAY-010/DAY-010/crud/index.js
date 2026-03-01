const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/Students");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/studentDB")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello Welcome to NodeJs");
});

app.get("/about", (req, res) => {
  res.send("About Us");
});

//Create - Insert Student Detail
app.post("/students", async (req, res) => {
  try {
    //console.log(req.body);
    const student = new Student(req.body);
    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Read all Data
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
