import { Star } from 'lucide-react';
import { Testimonial } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={cn(
                "h-4 w-4 mr-0.5", 
                i < testimonial.rating 
                  ? "text-yellow-500 fill-yellow-500" 
                  : "text-gray-300 fill-gray-300"
              )}
            />
          ))}
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
          "{testimonial.text}"
        </p>
        
        <div className="flex items-center">
          {testimonial.imageUrl ? (
            <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
              <img 
                src={testimonial.imageUrl} 
                alt={testimonial.name}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mr-4">
              <span className="text-emerald-700 dark:text-emerald-300 font-medium text-lg">
                {testimonial.name.charAt(0)}
              </span>
            </div>
          )}
          
          <div>
            <h4 className="font-medium text-gray-900 dark:text-gray-100">
              {testimonial.name}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {testimonial.package}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;