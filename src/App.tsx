import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { TrailPackages } from '@/components/sections/TrailPackages';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { useEffect } from 'react';

function App() {
  // Implement smooth scrolling
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#')) {
        e.preventDefault();
        const targetId = link.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <TrailPackages />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;