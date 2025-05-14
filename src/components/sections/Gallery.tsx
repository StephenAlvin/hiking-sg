import { useState, useEffect } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from '@/lib/constants';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

  const filteredImages = filter === 'all' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
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

        {/* Filter Controls */}
        {/* <div className="mb-8 flex justify-center">
          <RadioGroup
            defaultValue="all"
            className="flex flex-wrap gap-2 justify-center"
            onValueChange={setFilter}
          >
            {GALLERY_CATEGORIES.map((category) => (
              <div key={category.value} className="flex items-center space-x-2">
                <RadioGroupItem 
                  value={category.value} 
                  id={category.value} 
                  className="peer sr-only" 
                />
                <Label
                  htmlFor={category.value}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm cursor-pointer transition-all",
                    "border hover:border-primary",
                    filter === category.value
                      ? "bg-primary text-white border-primary"
                      : "bg-background border-muted"
                  )}
                >
                  {category.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div> */}

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
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
                src={filteredImages[currentImage]?.imageUrl}
                alt={filteredImages[currentImage]?.caption}
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
                {filteredImages[currentImage]?.caption}
              </p>
              <p className="text-sm text-muted-foreground">
                {currentImage + 1} of {filteredImages.length}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </Container>
    </section>
  );
}