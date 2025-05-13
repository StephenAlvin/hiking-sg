import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-6 w-6 text-emerald-500" />
              <span className="font-semibold text-xl text-white">SingTrails</span>
            </div>
            <p className="text-gray-400 mb-4">
              Expert hiking guides for Singapore's most beautiful trails. 
              Discover nature's hidden gems with us.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Trails', 'Packages', 'About', 'Blog', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-emerald-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 flex-shrink-0 text-emerald-500" />
                <span>123 Nature Way, Singapore 123456</span>
              </p>
              <p className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5 flex-shrink-0 text-emerald-500" />
                <span>+65 9123 4567</span>
              </p>
              <p className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5 flex-shrink-0 text-emerald-500" />
                <span>info@singtrails.com</span>
              </p>
            </div>
            <div className="mt-4">
              <Button 
                asChild
                className="bg-emerald-700 hover:bg-emerald-800"
              >
                <Link to="/booking">Book Now</Link>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on new trails and special offers.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border-gray-700 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <Button className="bg-emerald-700 hover:bg-emerald-800">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} SingTrails. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;