import React from "react";

export function ResultsDisplay({ score, totalQuestions, onRestart }) {
  const percentage = Math.round((score / totalQuestions) * 100);

  let message;

  if (percentage === 100) {
    message = "Perfect score! Congratulations!";
  } else if (percentage >= 75) {
    message = "Great job! You really know your stuff!";
  } else if (percentage >= 50) {
    message = "Not bad! You have some room for improvement though.";
  } else {
    message = "Better luck next time!";
  }

  return (
    <div className="results-display">
      <h1>Results</h1>
      <p>
        Your score: {score} / {totalQuestions} ({percentage}%)
      </p>
      <p>{message}</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}
