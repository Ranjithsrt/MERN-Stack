import "./App.css";
import { useState } from "react";

const Faqitem = ({question, answer}) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className={`Faq-item ${show ? "active" : ""}`}>
      <div className="Faq-item-header" onClick={handleClick}>
        <h3>{question}</h3>
      </div>
      <div className="Faq-item-body">
        <div className="Faq-item-body-content">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

 
const FaqAccordion = ({data, question, answer}) => {
  return (
    <div className="faq-accordion">
      <h1>Frequently Asked Questions</h1>
      {data.map((item) => (
        <Faqitem key={item.id}  question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

const data =[
  {
    id: 1,
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    id: 2,
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: 3,
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    id: 4,
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    id: 5,
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
]

const App = () => {
  return (
    <div className="App">
      <FaqAccordion  data={data} question={data.question} answer={data.answer} />
      
    </div>
  );
};

export default App;
