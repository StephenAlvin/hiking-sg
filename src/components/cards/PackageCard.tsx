import { Link } from 'react-router-dom';
import { Users, Clock, MapPin, Check } from 'lucide-react';
import { HikingPackage } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface PackageCardProps {
  package: HikingPackage;
}

const PackageCard = ({ package: pkg }: PackageCardProps) => {
  return (
    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={pkg.imageUrl} 
          alt={pkg.name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute top-2 right-2">
          <Badge 
            variant={pkg.tier === 'Premium' ? 'default' : 'secondary'} 
            className={pkg.tier === 'Premium' 
              ? 'bg-amber-500 hover:bg-amber-600 text-white font-medium'
              : pkg.tier === 'Custom' 
                ? 'bg-purple-600 hover:bg-purple-700 text-white font-medium'
                : pkg.tier === 'Standard'
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white font-medium'
                  : 'bg-white/90 text-gray-900 font-medium'
            }
          >
            {pkg.tier}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">{pkg.name}</CardTitle>
        <div className="flex items-center space-x-1">
          <span className="text-2xl font-bold text-emerald-700 dark:text-emerald-500">${pkg.price}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">per person</span>
        </div>
        <CardDescription className="line-clamp-2 mt-1">
          {pkg.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-2 flex-grow">
        <div className="flex flex-col space-y-3 text-sm">
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <Clock className="h-4 w-4 mr-2 text-emerald-700 dark:text-emerald-500" />
            <span>{pkg.duration}</span>
          </div>
          
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <Users className="h-4 w-4 mr-2 text-emerald-700 dark:text-emerald-500" />
            <span>Max {pkg.maxGroupSize} people</span>
          </div>
          
          <div className="flex items-start text-gray-700 dark:text-gray-300">
            <MapPin className="h-4 w-4 mr-2 mt-0.5 text-emerald-700 dark:text-emerald-500 flex-shrink-0" />
            <span className="line-clamp-1">
              {pkg.trailOptions.length > 1 
                ? `${pkg.trailOptions.length} trail options available` 
                : '1 trail option available'}
            </span>
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Package includes:</h4>
          <ul className="space-y-1">
            {pkg.includes.slice(0, 3).map((item, index) => (
              <li key={index} className="flex items-start text-sm">
                <Check className="h-4 w-4 mr-2 mt-0.5 text-emerald-700 dark:text-emerald-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </li>
            ))}
            {pkg.includes.length > 3 && (
              <li className="text-sm italic text-gray-500 dark:text-gray-400 ml-6">
                +{pkg.includes.length - 3} more inclusions
              </li>
            )}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2">
        <div className="w-full flex flex-col sm:flex-row gap-2">
          <Button 
            asChild
            variant="outline" 
            className="w-full sm:w-auto flex-1"
          >
            <Link to={`/packages?id=${pkg.id}`}>View Details</Link>
          </Button>
          <Button 
            asChild
            className="w-full sm:w-auto flex-1 bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700"
          >
            <Link to={`/booking?package=${pkg.id}`}>Book Now</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;