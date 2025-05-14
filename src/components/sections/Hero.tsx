import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { ArrowRight } from 'lucide-react';
import HeroImage from '@/assets/hero-image.jpg';
import { openWhatsAppContact } from '@/lib/utils';

export function Hero() {
  const handleAdventureClick = () => {
    openWhatsAppContact({
      subject: "General Adventure Inquiry",
      message: "Hi Stephen, I'm interested in your hiking adventures. Can you tell me more about the available trails and options?"
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HeroImage}
          alt="Singapore hiking trail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <Container className="relative z-10 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
            Discover Singapore's 
            <span className="text-yellow-300"> Hidden Trails</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-up animation-delay-100">
            Experience the unexplored side of Singapore with expert-guided hiking adventures. 
            From lush rainforests to urban nature walks, explore the Lion City's natural wonders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-200">
            <Button onClick={handleAdventureClick} size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Start Your Adventure
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-primary hover:bg-white/20 hover:text-white"
              asChild
            >
              <a href="#trails">Explore Trails</a>
            </Button>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scrollDown"></div>
        </div>
      </div>
    </section>
  );
}