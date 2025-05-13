import { Difficulty } from '@/lib/types';
import { cn } from '@/lib/utils';

interface DifficultyIndicatorProps {
  difficulty: Difficulty;
  className?: string;
}

const DifficultyIndicator = ({ difficulty, className }: DifficultyIndicatorProps) => {
  const difficultyConfig = {
    Easy: {
      color: 'bg-green-500',
      level: 1,
      label: 'Easy'
    },
    Moderate: {
      color: 'bg-yellow-500',
      level: 2,
      label: 'Moderate'
    },
    Challenging: {
      color: 'bg-orange-500',
      level: 3,
      label: 'Challenging'
    },
    Difficult: {
      color: 'bg-red-500',
      level: 4,
      label: 'Difficult'
    }
  };

  const config = difficultyConfig[difficulty];
  
  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex space-x-0.5 mr-1.5">
        {[1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className={cn(
              "h-1.5 w-5 rounded-sm",
              level <= config.level ? config.color : "bg-gray-200 dark:bg-gray-700"
            )}
          />
        ))}
      </div>
      <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
        {config.label}
      </span>
    </div>
  );
};

export default DifficultyIndicator;