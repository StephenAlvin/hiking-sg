import { useState, useEffect } from 'react';
import { Container } from '@/components/layout/Container';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Menu, X, Compass } from 'lucide-react';
import { cn } from '@/lib/utils';
import { openWhatsAppContact } from '@/utilities';

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
          ? 'bg-white/95 backdrop-blur-xs shadow-sm dark:bg-background/95'
          : 'bg-black/30 backdrop-blur-xs'
      )}
    >
      <Container>
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Compass className={cn("h-8 w-8", isScrolled ? "text-primary" : "text-white")} />
            <span className={cn("font-bold text-xl md:text-2xl", isScrolled ? "" : "text-white")}>HikeWithStephen</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={cn(
                  "transition-colors font-medium",
                  isScrolled 
                    ? "text-foreground/80 hover:text-primary" 
                    : "text-white hover:text-primary-foreground"
                )}
              >
                {link.title}
              </a>
            ))}
            <Button onClick={openWhatsAppContact} className={isScrolled ? "" : "bg-primary text-primary-foreground hover:bg-primary/90"}>Book Your Trail</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={cn("md:hidden p-2", isScrolled ? "text-foreground" : "text-white")}
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
              <Button onClick={openWhatsAppContact} className="mt-2">Book Your Trail</Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}