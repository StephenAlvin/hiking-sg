import { useEffect, useState } from 'react';
import { HelpCircle, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/sections/HeroSection';
import { faqItems } from '@/data/faqs';
import { Link } from 'react-router-dom';

const FAQPage = () => {
  useEffect(() => {
    document.title = 'Frequently Asked Questions | SingTrails';
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = Array.from(new Set(faqItems.map(faq => faq.category)));
  
  const filteredFAQs = faqItems.filter(faq => {
    const matchesSearch = !searchTerm || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = !selectedCategory || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <HeroSection 
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about hiking in Singapore and our guided experiences"
        ctaText="Ask a Question"
        ctaLink="/contact"
        imageSrc="https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg"
      />
      
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  className="pl-10 border-gray-300 dark:border-gray-600 focus:ring-emerald-500 focus:border-emerald-500" 
                  placeholder="Search for answers..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <Button 
                  variant={selectedCategory === null ? "default" : "outline"}
                  className={selectedCategory === null ? "bg-emerald-700 hover:bg-emerald-800" : ""}
                  onClick={() => setSelectedCategory(null)}
                >
                  All Categories
                </Button>
                
                {categories.map(category => (
                  <Button 
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={selectedCategory === category ? "bg-emerald-700 hover:bg-emerald-800" : ""}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            {filteredFAQs.length > 0 ? (
              <Accordion type="single" collapsible className="mb-8">
                {filteredFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 dark:border-gray-700">
                    <AccordionTrigger className="text-left font-medium text-gray-900 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-500">
                      <div className="flex items-start">
                        <span className="mr-2 text-emerald-600 dark:text-emerald-500 mt-0.5">
                          <HelpCircle className="h-5 w-5" />
                        </span>
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="ml-7 text-gray-700 dark:text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-8 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <HelpCircle className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">No Results Found</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We couldn't find any FAQs matching your search criteria.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory(null);
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
            
            {/* Still have questions */}
            <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Can't find what you're looking for? We're happy to help with any additional questions.
              </p>
              <div className="space-y-3">
                <Button asChild className="bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Or call us directly at: <span className="font-medium text-gray-700 dark:text-gray-300">+65 9123 4567</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;