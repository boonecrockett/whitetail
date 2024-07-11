import React, { useState } from 'react';
import { AlertCircle, CheckCircle, ChevronRight, RotateCcw } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './components/ui/alert';

const questions = [
  // Your questions array here
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswer = (choiceIndex) => {
    setSelectedAnswer(choiceIndex);
    setShowExplanation(true);
    if (choiceIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    setSelectedAnswer(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowExplanation(false);
    setSelectedAnswer(null);
    setQuizComplete(false);
  };

  if (quizComplete) {
    return (
      <div className="App">
        <h1>Quiz Complete!</h1>
        <p className="score">Your final score: {score} out of {questions.length}</p>
        <button
          onClick={resetQuiz}
          className="button"
        >
          <RotateCcw className="mr-2" />
          Restart Quiz
        </button>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="App">
      <h1>Whitetail Scoring Quiz</h1>
      <p>Question {currentQuestion + 1} of {questions.length}</p>
      <p className="question">{currentQ.question}</p>
      <div className="choices">
        {currentQ.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className={`
              ${showExplanation ? (index === currentQ.correctAnswer ? 'correct' : (selectedAnswer === index ? 'incorrect' : '')) : ''}
            `}
            disabled={showExplanation}
          >
            {choice}
          </button>
        ))}
      </div>
      {showExplanation && (
        <Alert className="mt-4">
          <AlertCircle className="h-4 w-4" /> 
          <AlertTitle>Explanation</AlertTitle>
          <AlertDescription>
            {currentQ.explanation}
          </AlertDescription>
        </Alert>
      )}
      {showExplanation && (
        <button
          onClick={nextQuestion}
          className="button"
        >
          {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          <ChevronRight className="ml-2" />
        </button>
      )}
      <p className="score">Current Score: {score} / {currentQuestion + 1}</p>
    </div>
  );
};

export default QuizApp;
