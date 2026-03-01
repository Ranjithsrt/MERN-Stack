const express = require("express");
const mongoose = require("mongoose");
const Student = require("./model/Students");
const cors = require("cors");

// create express app
const app = express();

// middleware - convert form data to json
app.use(express.json());

// middleware - allow cross-origin requests
app.use(cors());

// connect node js to mongodb
// studentsDB is the database name
mongoose
  .connect("mongodb://127.0.0.1:27017/studentsDB")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB error:", err));

const PORT = 5080;

// http://localhost:5080/
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// http://localhost:5080/about
app.get("/about", (req, res) => {
  res.send("About Page");
});

//  create - insert student data (from data - server - database)

// (from data - server - database) - form data - node js - mongodb

// form  - post request

// http://localhost:5080/students

// form data - req.body

// post request to server

app.post("/students", async (req, res) => {
  try {
    // console.log(req.body); // log form data
    // create a new student
    //               model schema   data
    const student = new Student(req.body);
    // save student to database
    const savedStudent = await student.save();
    // send response
    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read - get all students data

// http://localhost:5080/students

// server -  get data from database

app.get("/students", async (req, res) => {
  try {
    // get all students       model
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read - get a single student by ID

// http://localhost:5080/student/:id

app.get("/student/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Student.findById(id);
    if (!student)
      return res.status(404).json({ error: "Student record not found" });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Edit a record
app.put("/student/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedStudent = await Student.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedStudent)
      return res.status(404).json({ error: "Student record not found" });
    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Delete Record
app.delete("/student/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedStudent = await Student.findByIdAndDelete(id);
    if (!deletedStudent)
      return res.status(404).json({ error: "Student record not found" });
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
