import React from "react";
import Questio from "./Questio";
import { useState } from "react";

function Quiz() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);
  // const questions = [
  //   {
  //     question: "Which method is used to remove the last element from a JavaScript array?",
  //     options: ["push()", "pop()", "shift()", "unshift()"],
  //     answer: "pop()",
  //   },
  //   {
  //     question: "Which data structure is used in recursion?",
  //     options: ["Queue", "Stack", "Array", "Graph"],
  //     answer: "Stack",
  //   },
  // ];
  const questions = [
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["var", "let", "const", "static"],
    answer: "const",
  },
  {
    question: "Which method adds an element to the end of an array?",
    options: ["pop()", "push()", "shift()", "slice()"],
    answer: "push()",
  },
  {
    question: "Which method removes the first element from an array?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    answer: "shift()",
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: "<a>",
  },
  {
    question: "Which CSS property is used to change text color?",
    options: ["background-color", "font-style", "color", "text-style"],
    answer: "color",
  },
  {
    question: "Which hook is used to manage state in React?",
    options: ["useEffect", "useState", "useRef", "useContext"],
    answer: "useState",
  },
  {
    question: "Which data structure follows FIFO?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue",
  },
  {
    question: "Which data structure follows LIFO?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    answer: "Stack",
  },
  {
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
    answer: "O(log n)",
  },
  {
    question: "Which operator is used for strict equality in JavaScript?",
    options: ["=", "==", "===", "!="],
    answer: "===",
  },
];
  const handleClick = (option) => {
    setCurrentAnswer(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  }
  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setCurrentAnswer(null);
  }
  return (
    <>
      {currentQuestion < questions.length ?
        (<Questio question={questions[currentQuestion].question} options={questions[currentQuestion].options} handleClick={handleClick} currentAnswer={currentAnswer} handleNextQuestion={handleNextQuestion} />)
        :
        <h2>your score is {score}</h2>
      }
    </>
  )
}

export default Quiz;
