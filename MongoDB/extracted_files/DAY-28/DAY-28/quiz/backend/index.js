const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/quiz-db")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error in Connection : ", err));

const questionSchema = new mongoose.Schema({
  text: String,
  options: [String],
  correctAnswer: String,
});

const Question = mongoose.model("Question", questionSchema);

app.get("/api/questions", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
