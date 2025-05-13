import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { TESTIMONIALS } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Rating } from '@/components/shared/Rating';
import { Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20">
      <Container>
        <SectionHeading
          title="Hiker Testimonials"
          subtitle="Hear what past adventurers have to say about their experiences"
        />

        <div className="max-w-4xl mx-auto">
          {/* Desktop Testimonials */}
          <div className="hidden md:grid grid-cols-2 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <Card key={testimonial.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={testimonial.imageUrl}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground mb-1">{testimonial.trail}</p>
                      <Rating value={testimonial.rating} />
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-6 w-6 text-muted-foreground opacity-20" />
                    <p className="pl-4">{testimonial.comment}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile Testimonials (Carousel) */}
          <div className="md:hidden">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {TESTIMONIALS.map((testimonial) => (
                  <Card key={testimonial.id} className="w-full flex-shrink-0">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                          <img
                            src={testimonial.imageUrl}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground mb-1">{testimonial.trail}</p>
                          <Rating value={testimonial.rating} />
                        </div>
                      </div>
                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 h-6 w-6 text-muted-foreground opacity-20" />
                        <p className="pl-4">{testimonial.comment}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index ? 'w-6 bg-primary' : 'w-2 bg-muted'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}