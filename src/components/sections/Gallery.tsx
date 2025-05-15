import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GALLERY_IMAGES } from '@/lib/constants';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  const handleImageLoad = (imageId: string) => {
    setLoadedImages(prev => ({
      ...prev,
      [imageId]: true
    }));
  };

  return (
    <section id="gallery" className="py-20 bg-secondary/30">
      <Container>
        <SectionHeading
          title="Trail Gallery"
          subtitle="Explore moments captured on our hiking adventures through Singapore's natural wonders"
        />

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((image, index) => (
            <div 
              key={image.id} 
              className="aspect-square overflow-hidden rounded-lg cursor-pointer group relative"
              onClick={() => openLightbox(index)}
            >
              <div 
                className={cn(
                  "absolute inset-0 bg-gray-200",
                  loadedImages[image.id] ? "opacity-0" : "opacity-100"
                )}
              />
              <img
                src={image.imageUrl}
                alt={image.caption}
                className={cn(
                  "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110",
                  loadedImages[image.id] ? "opacity-100" : "opacity-0"
                )}
                loading="lazy"
                onLoad={() => handleImageLoad(image.id)}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <p className="text-white p-4 font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-4xl p-0 bg-black border-none overflow-hidden">
            <div className="relative aspect-video">
              <img
                src={GALLERY_IMAGES[currentImage]?.imageUrl}
                alt={GALLERY_IMAGES[currentImage]?.caption}
                className="w-full h-full object-contain"
              />
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 flex items-center justify-center text-white"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 flex items-center justify-center text-white"
              >
                <ChevronRight size={24} />
              </button>
              
              <button 
                onClick={() => setLightboxOpen(false)}
                className="absolute right-2 top-2 w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-white"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-4 bg-background">
              <p className="text-lg font-medium">
                {GALLERY_IMAGES[currentImage]?.caption}
              </p>
              <p className="text-sm text-muted-foreground">
                {currentImage + 1} of {GALLERY_IMAGES.length}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </Container>
    </section>
  );
}