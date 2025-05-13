import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Compass, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trails } from '@/data/trails';
import { packages } from '@/data/packages';
import { testimonials } from '@/data/testimonials';
import HeroSection from '@/components/sections/HeroSection';
import TrailCard from '@/components/cards/TrailCard';
import PackageCard from '@/components/cards/PackageCard';
import TestimonialCard from '@/components/cards/TestimonialCard';
import WeatherWidget from '@/components/widgets/WeatherWidget';

const HomePage = () => {
  useEffect(() => {
    document.title = 'SingTrails - Discover Singapore\'s Best Hiking Trails';
  }, []);
  
  const featuredTrails = trails.filter(trail => trail.featured).slice(0, 3);
  const featuredPackages = packages.filter(pkg => pkg.featured).slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <HeroSection 
        title="Discover Singapore's Hidden Natural Beauty"
        subtitle="Expert-guided hiking adventures through Singapore's most breathtaking trails"
        ctaText="Book Your Adventure"
        ctaLink="/booking"
        secondaryCtaText="Explore Trails"
        secondaryCtaLink="/trails"
        imageSrc="https://images.pexels.com/photos/2919720/pexels-photo-2919720.jpeg"
      />
      
      {/* Weather and Intro Section */}
      <section className="py-12 bg-neutral-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Welcome to SingTrails</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                At SingTrails, we're passionate about connecting people with Singapore's remarkable natural landscapes. From the lush rainforests of the Central Catchment to the coastal wetlands of Sungei Buloh, our experienced guides will take you on unforgettable journeys through Singapore's most beautiful hiking trails.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Whether you're a seasoned hiker seeking challenging terrain or a family looking for a gentle nature walk, our diverse range of guided tours offers something for everyone. Join us to discover the hidden natural wonders of the Garden City.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="outline" className="flex items-center gap-2">
                  <Link to="/about">
                    <Compass className="h-4 w-4" />
                    About Our Guides
                  </Link>
                </Button>
                <Button asChild className="bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 flex items-center gap-2">
                  <Link to="/booking">
                    <Calendar className="h-4 w-4" />
                    Book a Tour
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:col-span-1">
              <WeatherWidget />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Trails Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Trails</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Explore Singapore's most popular hiking destinations</p>
            </div>
            <Button asChild variant="ghost" className="flex items-center gap-1">
              <Link to="/trails">
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTrails.map(trail => (
              <TrailCard key={trail.id} trail={trail} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Hiking Packages Section */}
      <section className="py-16 bg-neutral-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Hiking Packages</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Choose the perfect guided experience for your adventure</p>
            </div>
            <Button asChild variant="ghost" className="flex items-center gap-1">
              <Link to="/packages">
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map(pkg => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700">
              <Link to="/booking">Book Your Adventure Now</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url(https://images.pexels.com/photos/15286/pexels-photo.jpg)] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
              <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
              <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
              <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
              <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What Our Hikers Say</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">Discover why nature enthusiasts choose SingTrails for their Singapore hiking adventures</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/about#testimonials">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-emerald-700 dark:bg-emerald-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Explore Singapore's Trails?</h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable hiking experience guided by local experts who know Singapore's natural landscapes intimately.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
              <Link to="/booking">Book a Tour</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-emerald-600">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;