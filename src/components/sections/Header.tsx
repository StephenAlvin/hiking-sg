import { useState, useEffect } from 'react';
import { Container } from '@/components/layout/Container';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Menu, X, Compass } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm dark:bg-background/95'
          : 'bg-transparent'
      )}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Compass className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl md:text-2xl">TrailsWithStephen</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.title}
              </a>
            ))}
            <Button>Book Your Trail</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 pb-6 bg-background">
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </a>
              ))}
              <Button className="mt-2">Book Your Trail</Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}