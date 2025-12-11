interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  onStartAgain: () => void;
}

export function ResultsScreen({
  score,
  totalQuestions,
  onStartAgain,
}: ResultsScreenProps) {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center animate-fade-in">
      <div className="text-center space-y-8">
        <p className="text-gray-600 font-medium text-lg">Keep Learning!</p>

        <div>
          <h2 className="text-5xl font-bold text-quiz-dark italic mb-4">
            Your Final score is
          </h2>
          <div className="text-9xl font-bold text-quiz-dark mb-4">
            {percentage}
            {percentage > 0 && <span className="text-5xl">%</span>}
          </div>
        </div>

        {percentage > 0 && (
          <button
            onClick={onStartAgain}
            className="inline-block px-8 py-3 rounded-lg bg-quiz-light text-quiz-dark font-semibold hover:bg-opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-quiz-dark focus:ring-offset-2"
            aria-label="Start quiz again"
          >
            Start Again
          </button>
        )}
      </div>
    </div>
  );
}
