import { useState, useEffect } from 'react';
import { quizData } from './data/quizData';
import { ProgressIndicator } from './components/ProgressIndicator';
import { QuestionCard } from './components/QuestionCard';
import { ResultsScreen } from './components/ResultsScreen';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(quizData.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentQuestion, showResults]);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleStartAgain = () => {
    setCurrentQuestion(0);
    setAnswers(new Array(quizData.length).fill(null));
    setShowResults(false);
  };

  const calculateScore = (): number => {
    return answers.reduce((score: number, answer, index) => {
      return answer === quizData[index].correct ? score + 1 : score;
    }, 0);
  };

  if (showResults) {
    const finalScore: number = calculateScore();
    return (
      <ResultsScreen
        score={finalScore}
        totalQuestions={quizData.length}
        onStartAgain={handleStartAgain}
      />
    );
  }

  const question = quizData[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-teal-100 flex flex-col items-center justify-center p-6">
      <ProgressIndicator
        total={quizData.length}
        current={currentQuestion + 1}
      />

      <QuestionCard
        question={question}
        selectedAnswer={answers[currentQuestion]}
        onAnswerSelect={handleAnswerSelect}
        onSubmit={handleSubmit}
        onPrevious={handlePrevious}
        onNext={handleNext}
        canGoPrevious={currentQuestion > 0}
        isLastQuestion={currentQuestion === quizData.length - 1}
      />
    </div>
  );
}

export default App;
