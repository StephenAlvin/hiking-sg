import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/sections/HeroSection';
import { packages } from '@/data/packages';
import PackageCard from '@/components/cards/PackageCard';

const PackagesPage = () => {
  useEffect(() => {
    document.title = 'Hiking Packages | SingTrails';
  }, []);

  // Group packages by tier
  const basicPackages = packages.filter(pkg => pkg.tier === 'Basic');
  const standardPackages = packages.filter(pkg => pkg.tier === 'Standard');
  const premiumPackages = packages.filter(pkg => pkg.tier === 'Premium');
  const customPackages = packages.filter(pkg => pkg.tier === 'Custom');

  return (
    <div>
      <HeroSection 
        title="Hiking Tour Packages"
        subtitle="Choose the perfect guided hiking experience for your adventure in Singapore"
        ctaText="View Packages"
        ctaLink="#packages"
        imageSrc="https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg"
      />
      
      {/* Package Tiers Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Hiking Packages</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We offer a range of packages to suit different preferences, fitness levels, and interests.
              From beginner-friendly walks to challenging adventures, find the perfect match for your hiking goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Basic Tier */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transition-transform hover:scale-105">
              <div className="bg-gray-50 dark:bg-gray-700 py-3 text-center">
                <h3 className="font-bold text-gray-900 dark:text-white">Basic</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">$45</span>
                  <span className="text-gray-500 dark:text-gray-400">/person</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                    Professional guide
                  </li>
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                    3-4 hour guided experience
                  </li>
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                    Nature interpretation
                  </li>
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                    Bottled water
                  </li>
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                    Trail snacks
                  </li>
                  <li className="flex items-start text-gray-500 dark:text-gray-400 line-through">
                    <span className="mr-2">✗</span>
                    Transportation
                  </li>
                  <li className="flex items-start text-gray-500 dark:text-gray-400 line-through">
                    <span className="mr-2">✗</span>
                    Meal package
                  </li>
                </ul>
                <Button asChild className="w-full bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700">
                  <Link to="#basic-packages">View Basic Packages</Link>
                </Button>
              </div>
            </div>
            
            {/* Standard Tier */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transition-transform hover:scale-105">
              <div className="bg-emerald-700 py-3 text-center">
                <h3 className="font-bold text-white">Standard</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">$85</span>
                  <span className="text-gray-500 dark:text-gray-400">/person</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                    Professional guide
                  </li>
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                    6-8 hour guided experience
                  </li>
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                    In-depth nature interpretation
                  </li>
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                    Nutritious trail lunch
                  </li>
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                    Snacks and electrolyte drinks
                  </li>
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                    Digital photo package
                  </li>
                  <li className="flex items-start text-gray-500 dark:text-gray-400 line-through">
                    <span className="mr-2">✗</span>
                    Transportation
                  </li>
                </ul>
                <Button asChild className="w-full bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700">
                  <Link to="#standard-packages">View Standard Packages</Link>
                </Button>
              </div>
            </div>
            
            {/* Premium Tier */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transition-transform hover:scale-105">
              <div className="bg-amber-500 py-3 text-center">
                <h3 className="font-bold text-white">Premium</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">$135</span>
                  <span className="text-gray-500 dark:text-gray-400">/person</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                    Expert naturalist guide
                  </li>
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                    8-10 hour luxury experience
                  </li>
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                    Transportation included
                  </li>
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                    Gourmet picnic lunch
                  </li>
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                    Premium trail snacks and drinks
                  </li>
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                    Professional photography
                  </li>
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                    Souvenir gift pack
                  </li>
                </ul>
                <Button asChild className="w-full bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700">
                  <Link to="#premium-packages">View Premium Packages</Link>
                </Button>
              </div>
            </div>
            
            {/* Custom Tier */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transition-transform hover:scale-105">
              <div className="bg-purple-700 py-3 text-center">
                <h3 className="font-bold text-white">Custom</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">$200</span>
                  <span className="text-gray-500 dark:text-gray-400">/person</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                    Fully customized itinerary
                  </li>
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                    Flexible duration
                  </li>
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                    Multiple specialist guides as needed
                  </li>
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                    Transportation options
                  </li>
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                    Customized meal arrangements
                  </li>
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                    Photography/videography services
                  </li>
                  <li className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-emerald-700 dark:text-emerald-500 mr-2">✓</span>
                    Celebration arrangements
                  </li>
                </ul>
                <Button asChild className="w-full bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700">
                  <Link to="#custom-packages">View Custom Packages</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Basic Packages */}
      <section id="basic-packages" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Basic Packages</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
              Perfect for beginners and families, our Basic packages offer accessible adventures 
              with expert guidance at an affordable price point.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {basicPackages.map(pkg => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Standard Packages */}
      <section id="standard-packages" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Standard Packages</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
              Our Standard packages offer a full-day immersive experience with more challenging trails 
              and comprehensive nature interpretation, perfect for active hikers seeking deeper knowledge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {standardPackages.map(pkg => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Premium Packages */}
      <section id="premium-packages" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Premium Packages</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
              Our signature Premium experiences offer the ultimate hiking adventure with personalized guiding, 
              gourmet meals, transportation, and access to less-traveled trails.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumPackages.map(pkg => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Custom Packages */}
      <section id="custom-packages" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Custom Packages</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
              Design your perfect hiking experience with our fully customizable expedition packages, 
              ideal for special occasions, team-building events, or serious nature enthusiasts seeking 
              a tailored adventure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customPackages.map(pkg => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have questions about our hiking packages? Find answers to common inquiries below.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">What's included in all packages?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                All packages include professional guiding, water, trail information, and basic safety equipment. 
                Higher tier packages include additional amenities like meals, transportation, specialized guides, 
                and photography services.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">How large are the hiking groups?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Group sizes vary by package: Basic packages allow up to 15 participants, Standard packages are limited 
                to 12, and Premium Adventures have a maximum of 8 people. Custom Expeditions have flexible group sizes 
                based on your requirements.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Can I customize a standard package?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Yes, we offer add-ons to our standard packages. Common add-ons include transportation, specialized guides, 
                photography services, and upgraded meals. For extensive customization, we recommend our Custom Expedition package.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">What is your cancellation policy?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Cancellations made more than 48 hours before receive a full refund. For cancellations within 24-48 hours, 
                we offer a 50% refund or rescheduling. Cancellations with less than 24 hours notice are not eligible for 
                refunds except in medical emergencies or severe weather conditions.
              </p>
            </div>
            
            <div className="text-center mt-8">
              <Button asChild variant="outline" className="mt-4">
                <Link to="/faq" className="flex items-center gap-1">
                  View All FAQs
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-emerald-700 dark:bg-emerald-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Hiking Adventure?</h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Choose one of our carefully designed packages or create your own custom hiking experience.
          </p>
          <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
            <Link to="/booking">Book Your Adventure Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;