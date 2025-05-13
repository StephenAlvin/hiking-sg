import { Star, StarHalf } from "lucide-react";

interface RatingProps {
  value: number;
  max?: number;
  size?: number;
}

export function Rating({ value, max = 5, size = 20 }: RatingProps) {
  return (
    <div className="flex">
      {[...Array(max)].map((_, i) => {
        const starValue = i + 1;
        
        if (starValue <= value) {
          return (
            <Star
              key={i}
              className="text-yellow-500 fill-yellow-500"
              size={size}
            />
          );
        } else if (starValue - 0.5 <= value) {
          return <StarHalf key={i} className="text-yellow-500 fill-yellow-500" size={size} />;
        } else {
          return <Star key={i} className="text-gray-300" size={size} />;
        }
      })}
    </div>
  );
}