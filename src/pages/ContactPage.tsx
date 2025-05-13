import { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Send, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Us | SingTrails';
  }, []);

  const { toast } = useToast();
  const [formSubmitting, setFormSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitting(false);
      
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon!",
        variant: "default",
      });
      
      // Reset form here if needed
    }, 1500);
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have questions about our hiking tours or need custom arrangements? 
              We're here to help make your Singapore hiking experience perfect.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-emerald-700 dark:text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Office Location</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        123 Nature Way<br />
                        Singapore 123456
                      </p>
                      <p className="text-sm text-emerald-700 dark:text-emerald-500 mt-1">
                        (Near Botanic Gardens MRT Exit A)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-emerald-700 dark:text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-400">+65 9123 4567</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Mon-Fri 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-emerald-700 dark:text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Email</h4>
                      <p className="text-gray-600 dark:text-gray-400">info@singtrails.com</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full text-emerald-700 dark:text-emerald-500 hover:bg-emerald-200 dark:hover:bg-emerald-900 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full text-emerald-700 dark:text-emerald-500 hover:bg-emerald-200 dark:hover:bg-emerald-900 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://telegram.me/username" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-full text-emerald-700 dark:text-emerald-500 hover:bg-emerald-200 dark:hover:bg-emerald-900 transition-colors"
                      aria-label="Telegram"
                    >
                      <MessageSquare className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Enter your name" 
                        required 
                        className="border-gray-300 dark:border-gray-600 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        required 
                        className="border-gray-300 dark:border-gray-600 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select defaultValue="general">
                      <SelectTrigger className="border-gray-300 dark:border-gray-600 focus:ring-emerald-500 focus:border-emerald-500">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="booking">Booking Question</SelectItem>
                        <SelectItem value="custom">Custom Tour Request</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="How can we help you?" 
                      rows={6} 
                      required 
                      className="border-gray-300 dark:border-gray-600 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  
                  <div>
                    <Button 
                      type="submit" 
                      className="w-full bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700"
                      disabled={formSubmitting}
                    >
                      {formSubmitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
              
              <div className="mt-8 rounded-lg overflow-hidden shadow-md">
                <iframe 
                  title="Office Location" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.304681872547!2d103.80631083319292!3d1.3139513864522707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a1c57d3c153%3A0x7ae44204385d38dd!2sSingapore%20Botanic%20Gardens!5e0!3m2!1sen!2ssg!4v1619521315354!5m2!1sen!2ssg" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Emergency Contact */}
      <div className="bg-red-50 dark:bg-red-900/20 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start sm:items-center flex-col sm:flex-row">
              <div className="bg-red-100 dark:bg-red-900/50 p-3 rounded-full mr-4 mb-4 sm:mb-0">
                <Phone className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Emergency Contact During Hikes</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  If you need urgent assistance during a SingTrails guided hike, call our emergency hotline at <span className="font-semibold">+65 8888 9999</span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  For police or ambulance emergencies, call 999 or 995. Signal coverage varies on trails - guides carry satellite communication devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;