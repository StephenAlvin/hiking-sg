import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/button';
import { TRAIL_PACKAGES } from '@/lib/constants';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Clock, Check, X, ChevronDown } from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { openWhatsAppContact } from '@/lib/utils';

export function TrailPackages() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-500';
      case 'Moderate':
        return 'bg-yellow-500';
      case 'Challenging':
        return 'bg-orange-500';
      case 'Difficult':
        return 'bg-red-500';
      default:
        return 'bg-blue-500';
    }
  };

  // Function to handle booking for a specific trail
  const handleBookTrail = (trailTitle: string) => {
    openWhatsAppContact({
      subject: `Booking for ${trailTitle}`,
      message: `I would like to book the ${trailTitle} trail. Please provide me with available dates and additional information.`
    });
  };

  return (
    <section id="trails" className="py-20">
      <Container>
        <SectionHeading
          title="Trail Packages"
          subtitle="Join me on carefully curated hiking experiences through Singapore's most beautiful natural spaces"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAIL_PACKAGES.map((trail) => (
            <Card key={trail.id} className="overflow-hidden group hover:shadow-lg transition-all">
              <div className="h-56 overflow-hidden">
                <img
                  src={trail.imageUrl}
                  alt={trail.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{trail.title}</CardTitle>
                  <Badge className={`${getDifficultyColor(trail.difficulty)}`}>
                    {trail.difficulty}
                  </Badge>
                </div>
                <CardDescription className="text-base">{trail.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {trail.duration}
                  </div>
                  <p className="font-bold text-lg">${trail.price}</p>
                </div>

                <Accordion type="single" collapsible>
                  <AccordionItem value="included">
                    <AccordionTrigger className="text-sm font-medium">
                      What's Included
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-1">
                        {trail.included.map((item, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <Check className="h-4 w-4 mr-2 text-green-500 mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="excluded">
                    <AccordionTrigger className="text-sm font-medium">
                      What's Not Included
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-1">
                        {trail.excluded.map((item, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <X className="h-4 w-4 mr-2 text-red-500 mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
              
              <CardFooter>
                <Button onClick={() => handleBookTrail(trail.title)} className="w-full">Book Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}