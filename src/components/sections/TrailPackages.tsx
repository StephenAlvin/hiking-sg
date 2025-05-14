import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { TRAIL_PACKAGES } from "@/lib/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Check, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { openWhatsAppContact } from "@/lib/utils";

export function TrailPackages() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-600";
      case "Moderate":
        return "bg-yellow-600";
      case "Challenging":
        return "bg-orange-600";
      case "Difficult":
        return "bg-red-600";
      default:
        return "bg-black";
    }
  };

  // Function to handle booking for a specific trail
  const handleBookTrail = (trailTitle: string) => {
    openWhatsAppContact({
      subject: `Booking for ${trailTitle}`,
      message: `I would like to book the ${trailTitle} trail. Please provide me with available dates and additional information.`,
    });
  };

  return (
    <section id="trails" className="py-20">
      <Container>
        <SectionHeading
          title="Hidden Trails in Singapore"
          subtitle="Escape the crowds through Singapore's most serene and untouched trails"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAIL_PACKAGES.map((trail) => (
            <Card
              key={trail.id}
              className="overflow-hidden group hover:shadow-lg transition-all"
            >
              <div className="h-56 overflow-hidden relative">
                <Badge className={`${getDifficultyColor(trail.difficulty)} absolute top-2 right-2 shadow-lg`}>
                  {trail.difficulty}
                </Badge>
                <img
                  src={trail.imageUrl}
                  alt={trail.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <CardHeader>
                <div className="flex flex-col gap-2 items-start">
                  <CardTitle className="text-xl">{trail.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {trail.description}
                </CardDescription>
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
                <Button
                  onClick={() => handleBookTrail(trail.title)}
                  className="w-full"
                >
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
