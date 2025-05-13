import { Link } from 'react-router-dom';
import { Clock, Map, TrendingUp } from 'lucide-react';
import { Trail } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import DifficultyIndicator from '@/components/ui/difficulty-indicator';

interface TrailCardProps {
  trail: Trail;
}

const TrailCard = ({ trail }: TrailCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={trail.imageUrl} 
          alt={trail.name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-white/90 text-gray-900 font-medium">
            {trail.location}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">{trail.name}</CardTitle>
          <DifficultyIndicator difficulty={trail.difficulty} />
        </div>
        <CardDescription className="line-clamp-2">
          {trail.shortDescription}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-3">
        <div className="flex flex-col space-y-2 text-sm">
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <Map className="h-4 w-4 mr-2 text-emerald-700 dark:text-emerald-500" />
            <span>{trail.length} km trail length</span>
          </div>
          
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <Clock className="h-4 w-4 mr-2 text-emerald-700 dark:text-emerald-500" />
            <span>Approx. {trail.duration} hours</span>
          </div>
          
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <TrendingUp className="h-4 w-4 mr-2 text-emerald-700 dark:text-emerald-500" />
            <span>{trail.elevation}m elevation gain</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Link 
          to={`/trails?id=${trail.id}`}
          className="text-emerald-700 dark:text-emerald-500 hover:text-emerald-800 dark:hover:text-emerald-400 font-medium text-sm"
        >
          View Trail Details →
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TrailCard;