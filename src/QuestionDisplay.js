import React from "react";

export function QuestionDisplay({ category, currentQuestion, onSelect }) {
  const question = category[currentQuestion];

  return (
    <div className="question-display">
      <h1>{question.question}</h1>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <button onClick={() => onSelect(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
