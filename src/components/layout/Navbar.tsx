import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when navigating
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Trails', path: '/trails' },
    { name: 'Packages', path: '/packages' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 font-semibold text-2xl"
            >
              <MapPin
                className={cn(
                  'h-6 w-6 transition-colors',
                  isScrolled || location.pathname !== '/'
                    ? 'text-emerald-700 dark:text-emerald-500'
                    : 'text-white'
                )}
              />
              <span
                className={cn(
                  'transition-colors',
                  isScrolled || location.pathname !== '/'
                    ? 'text-gray-900 dark:text-white'
                    : 'text-white'
                )}
              >
                SingTrails
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  isScrolled || location.pathname !== '/'
                    ? 'text-gray-700 hover:text-emerald-700 dark:text-gray-200 dark:hover:text-emerald-500'
                    : 'text-white/90 hover:text-white hover:bg-white/10',
                  location.pathname === link.path &&
                    (isScrolled || location.pathname !== '/'
                      ? 'text-emerald-700 dark:text-emerald-500'
                      : 'text-white bg-white/10')
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Button
              asChild
              className="bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700"
            >
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              className={cn(
                'p-2',
                isScrolled || location.pathname !== '/'
                  ? 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
                  : 'text-white hover:bg-white/10'
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden bg-white dark:bg-gray-900 shadow-lg overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-[500px]' : 'max-h-0'
        )}
      >
        <div className="container mx-auto px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'block px-3 py-2 rounded-md text-base font-medium',
                location.pathname === link.path
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-400'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Button
              asChild
              className="w-full bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700"
            >
              <Link to="/booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;