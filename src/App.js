import React, { useState } from "react";
import { CategorySelection } from "./CategorySelection";
import { QuestionDisplay } from "./QuestionDisplay";
import { ResultsDisplay } from "./ResultsDisplay";
import { erenQuestions } from "./questions/eren";
import { mikasaQuestions } from "./questions/mikasa";
import { leviQuestions } from "./questions/levi";
import { arminQuestions } from "./questions/armin";
import { reinerQuestions } from "./questions/reiner";

function App() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleCategorySelect(category) {
    setSelectedCategory(category);
    setCurrentQuestion(0);
    setScore(0);
  }

  function handleAnswerSelect(answer) {
    if (answer === selectedCategory[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  }

  function handleRestart() {
    setSelectedCategory(null);
    setCurrentQuestion(0);
    setScore(0);
  }

  // Render the appropriate component based on the user's progress
  if (!selectedCategory) {
    return (
      <CategorySelection
        categories={[
          erenQuestions,
          mikasaQuestions,
          leviQuestions,
          arminQuestions,
          reinerQuestions,
        ]}
        onSelect={handleCategorySelect}
      />
    );
  } else if (currentQuestion < selectedCategory.length) {
    return (
      <QuestionDisplay
        category={selectedCategory}
        currentQuestion={currentQuestion}
        onSelect={handleAnswerSelect}
      />
    );
  } else {
    return (
      <ResultsDisplay
        score={score}
        totalQuestions={selectedCategory.length}
        onRestart={handleRestart}
      />
    );
  }
}

export default App;
