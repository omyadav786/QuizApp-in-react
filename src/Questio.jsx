import React from 'react'
import './QuestionStyle.css';
function Questio({ question, options, handleClick, currentAnswer, handleNextQuestion }) {
  return (
    <div className="QuestionStyle">
      <h1>{question}</h1>
      <ul>{options.map((option, index) => (
        <li key={index} onClick={() => handleClick(option)} className={currentAnswer === option ? 'selected' : ''}>
          {option}
        </li>
      ))}
      </ul>
      <button disabled={currentAnswer === null} className={currentAnswer === null ? 'button-disable' : 'button'} onClick={handleNextQuestion}>Next Question</button>
    </div>
  )
}

export default Questio