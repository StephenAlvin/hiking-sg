import { useEffect } from 'react';
import { MapPin, Award, Users, Heart, Shield, MessageSquare } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import { testimonials } from '@/data/testimonials';
import TestimonialCard from '@/components/cards/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us | SingTrails - Singapore Hiking Guide';
  }, []);

  return (
    <div>
      <HeroSection 
        title="About SingTrails"
        subtitle="Meet the expert guides behind Singapore's premier hiking experience"
        ctaText="Meet Our Team"
        ctaLink="#team"
        imageSrc="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg"
      />

      {/* Mission Statement */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              At SingTrails, our mission is to connect people with Singapore's natural heritage through 
              immersive, educational, and sustainable hiking experiences. We strive to foster appreciation 
              for our urban island's surprisingly diverse ecosystems while promoting conservation and 
              environmental stewardship.
            </p>
            <div className="flex justify-center">
              <MapPin className="h-24 w-24 text-emerald-600 dark:text-emerald-500 opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-neutral-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/1252399/pexels-photo-1252399.jpeg" 
                alt="Guide pointing out nature features to hikers" 
                className="rounded-lg shadow-lg w-full h-auto object-cover aspect-video"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Story</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                SingTrails began in 2018 when a small group of passionate naturalists and hiking enthusiasts 
                recognized the need for more meaningful connections to Singapore's green spaces. With backgrounds 
                in ecology, environmental education, and outdoor leadership, our founding team developed 
                curated hiking experiences that go beyond basic trails.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                What started as weekend excursions for friends has grown into Singapore's most respected hiking 
                guide service, with a team of certified guides sharing their expertise with locals and visitors alike.
                Today, we proudly maintain our commitment to small groups, personalized experiences, and 
                environmental sustainability.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="mt-1 bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-full mr-4">
                    <Award className="h-5 w-5 text-emerald-700 dark:text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Certified Expertise</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">All guides hold Wilderness First Aid and Singapore Guide certifications</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-full mr-4">
                    <Heart className="h-5 w-5 text-emerald-700 dark:text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Passionate Conservation</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">5% of profits support local conservation initiatives</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-full mr-4">
                    <Users className="h-5 w-5 text-emerald-700 dark:text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Community Focus</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Regular free community hikes for local residents</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Meet Our Expert Guides</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our team combines extensive outdoor experience with deep knowledge of Singapore's natural and cultural heritage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="relative h-80">
                <img 
                  src="https://images.pexels.com/photos/937483/pexels-photo-937483.jpeg" 
                  alt="Michael Chang" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Michael Chang</h3>
                <p className="text-emerald-700 dark:text-emerald-500 font-medium mb-2">Lead Guide & Naturalist</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  With a background in tropical ecology and 12 years of guiding experience, Michael's passion for Singapore's natural heritage is contagious.
                </p>
                <div className="flex space-x-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    Bird Specialist
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                    Photography
                  </span>
                </div>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="relative h-80">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" 
                  alt="Sarah Tan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Sarah Tan</h3>
                <p className="text-emerald-700 dark:text-emerald-500 font-medium mb-2">Senior Guide & Conservation Lead</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  With a Masters in Environmental Management, Sarah specializes in Singapore's unique ecosystems and leads our conservation initiatives.
                </p>
                <div className="flex space-x-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    Flora Expert
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                    Conservation
                  </span>
                </div>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="relative h-80">
                <img 
                  src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg" 
                  alt="Rajesh Singh" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Rajesh Singh</h3>
                <p className="text-emerald-700 dark:text-emerald-500 font-medium mb-2">Adventure Guide & Safety Lead</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Former army officer with extensive wilderness training, Rajesh ensures our adventures are both exciting and safe for all participants.
                </p>
                <div className="flex space-x-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                    First Aid Trainer
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                    Trail Running
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-emerald-700 dark:bg-emerald-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-emerald-100 max-w-2xl mx-auto">
              These principles guide every aspect of our operations and interactions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-emerald-600 dark:bg-emerald-800 p-8 rounded-lg text-center transition-transform duration-300 hover:scale-105">
              <div className="bg-white/10 p-4 rounded-full inline-flex mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Safety First</h3>
              <p className="text-emerald-100">
                We prioritize the wellbeing of our guests through meticulous planning, 
                proper equipment, and professionally trained guides.
              </p>
            </div>
            
            <div className="bg-emerald-600 dark:bg-emerald-800 p-8 rounded-lg text-center transition-transform duration-300 hover:scale-105">
              <div className="bg-white/10 p-4 rounded-full inline-flex mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Environmental Stewardship</h3>
              <p className="text-emerald-100">
                We practice and promote responsible interaction with nature, leaving no 
                trace and supporting conservation efforts.
              </p>
            </div>
            
            <div className="bg-emerald-600 dark:bg-emerald-800 p-8 rounded-lg text-center transition-transform duration-300 hover:scale-105">
              <div className="bg-white/10 p-4 rounded-full inline-flex mb-4">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Educational Excellence</h3>
              <p className="text-emerald-100">
                We believe in enriching experiences that combine adventure with 
                learning about ecology, history, and culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">What Our Hikers Say</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Read what our customers have to say about their SingTrails experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Experience Singapore's Trails?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable adventure guided by our expert team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700">
              <Link to="/booking">Book Your Adventure</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;