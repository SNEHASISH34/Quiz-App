interface ProgressIndicatorProps {
  total: number;
  current: number;
}

export function ProgressIndicator({ total, current }: ProgressIndicatorProps) {
  return (
    <div className="flex gap-3 justify-center mb-8">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`h-1 transition-all duration-300 ${
            index < current
              ? 'w-16 bg-quiz-dark'
              : 'w-12 bg-gray-300'
          }`}
          role="progressbar"
          aria-valuenow={index < current ? 100 : 0}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Question ${index + 1} ${index < current ? 'completed' : 'pending'}`}
        />
      ))}
    </div>
  );
}
