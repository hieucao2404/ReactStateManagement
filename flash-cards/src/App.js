import { useState } from "react";
import "./style.css";

const questions = [
  {
    id: 3456,
    question: "What language is React based on",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps",
    answer: "Components",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "props",
  },
   {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
  },
  {
    id: 9103,
    question: "How to give components memmory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);
  //3 steps of using state
  //1.import
  //2 set the state
  //3 use it
  function handleClick(id) {
    setSelectedId(selectedId === id ? null : id);
  }
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div key={question.id} onClick ={() => handleClick(question.id)} className={question.id === selectedId ? 'selected' : ''}>
          <p>{question.id === selectedId ? question.answer : question.question}</p>
        </div>
      ))}
    </div>
  );
}
