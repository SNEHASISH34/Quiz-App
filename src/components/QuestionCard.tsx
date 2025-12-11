import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Question } from '../data/quizData';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswerSelect: (index: number) => void;
  onSubmit: () => void;
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  isLastQuestion: boolean;
}

export function QuestionCard({
  question,
  selectedAnswer,
  onAnswerSelect,
  onSubmit,
  onPrevious,
  onNext,
  canGoPrevious,
  isLastQuestion,
}: QuestionCardProps) {
  return (
    <div className="w-full max-w-2xl animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl p-12">
        <h1 className="text-4xl font-bold text-quiz-dark text-center mb-2 italic">
          Test Your Knowledge
        </h1>
        <p className="text-center text-gray-600 text-sm mb-8">
          Answer all questions to see your results
        </p>

        <div className="mb-8 space-y-6">
          <div
            className="bg-quiz-light bg-opacity-40 rounded-2xl p-4 text-center"
            role="heading"
            aria-level={2}
          >
            <p className="text-quiz-dark font-semibold">
              {question.id}. {question.text}
            </p>
          </div>

          <div className="space-y-3">
            {question.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => onAnswerSelect(index)}
                className={`w-full py-4 px-6 rounded-2xl font-medium transition-all duration-200 ${
                  selectedAnswer === index
                    ? 'bg-quiz-light text-quiz-dark ring-2 ring-quiz-dark'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                } focus:outline-none focus:ring-2 focus:ring-quiz-dark focus:ring-offset-2`}
                aria-pressed={selectedAnswer === index}
                aria-label={`Answer option: ${answer}`}
              >
                {answer}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={onPrevious}
            disabled={!canGoPrevious}
            className="p-2 rounded-lg bg-quiz-light bg-opacity-50 text-quiz-dark hover:bg-opacity-70 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-quiz-dark"
            aria-label="Previous question"
          >
            <ChevronLeft size={20} />
          </button>

          {isLastQuestion ? (
            <button
              onClick={onSubmit}
              disabled={selectedAnswer === null}
              className="px-8 py-3 rounded-lg bg-quiz-light text-quiz-dark font-semibold hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-quiz-dark focus:ring-offset-2"
              aria-label="Submit quiz"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={onNext}
              disabled={selectedAnswer === null}
              className="p-2 rounded-lg bg-quiz-light bg-opacity-50 text-quiz-dark hover:bg-opacity-70 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-quiz-dark"
              aria-label="Next question"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
