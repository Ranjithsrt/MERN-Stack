import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/questions")
      .then((response) => {
        setQuestions(response.data);
        console.log(questions);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setShowScore(true);
    }
  };

  if (questions.length === 0) {
    return <div>Loading Questions....</div>;
  }
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          Your scored {score} out of {questions.length}
        </div>
      ) : (
        <div className="question-section">
          <div className="question-text">{questions[currentQuestionIndex].text}</div>
          <div className="answer-section">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
