 import { useState, useEffect } from "react";
 import "./App.css";
 import questionsData from "./questions.json";

 const App = () => {
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const [score, setScore] = useState(0);
   const [showScore, setShowScore] = useState(false);
   const [timer, setTimer] = useState(30);

   useEffect(() => {
     if (timer > 0) {
       const timeout = setTimeout(() => {
         setTimer((prev) => prev - 1);
       }, 1000);

       return () => clearTimeout(timeout);
     } else {
       setShowScore(true);
     }
   }, [timer]);

   return (
     <div className="quiz-app">
       {showScore ? (
         <div className="score-section">
           <h2>
             your score : {score}/{questionsData.length}
           </h2>
           <button
             type="button"
             onClick={() => {
               setCurrentQuestion(0);
               setShowScore(false);
               setScore(0);
               setTimer(30);
             }}
           >
             restart
           </button>
         </div>
       ) : (
         <div className="question-section">
           <h2>question {currentQuestion + 1}</h2>
           <h3>{questionsData[currentQuestion].question}</h3>

           <div className="options">
             {questionsData[currentQuestion].options.map((option, index) => (
               <button
                 type="button"
                 key={index}
                 onClick={() => {
                   if (
                     option === questionsData[currentQuestion].correctOption
                   ) {
                     setScore(score + 1);
                   }

                   const next = currentQuestion + 1;
                   if (next < questionsData.length) {
                     setCurrentQuestion(next);
                   } else {
                     setShowScore(true);
                   }
                 }}
               >
                 {option}
               </button>
             ))}
           </div>

           <div className="timer">
             <h3>time left : {timer}</h3>
           </div>
         </div>
       )}
     </div>
   );
 };

 export default App;
