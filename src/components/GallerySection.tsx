"use client"

import { useState } from "react";
import * as React from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

// Desktop Modal Component
function DesktopModal({ 
  selectedImageIndex, 
  galleryImages, 
  handleModalPrevious, 
  handleModalNext, 
  handleImageSelect 
}: {
  selectedImageIndex: number;
  galleryImages: GalleryImage[];
  handleModalPrevious: () => void;
  handleModalNext: () => void;
  handleImageSelect: (index: number) => void;
}) {
  const thumbnailContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (thumbnailContainerRef.current) {
      const container = thumbnailContainerRef.current;
      const selectedThumbnail = container.children[selectedImageIndex] as HTMLElement;
      if (selectedThumbnail) {
        const containerWidth = container.offsetWidth;
        const thumbnailWidth = selectedThumbnail.offsetWidth;
        const thumbnailLeft = selectedThumbnail.offsetLeft;
        const scrollLeft = thumbnailLeft - (containerWidth / 2) + (thumbnailWidth / 2);
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [selectedImageIndex]);

  return (
    <DialogContent className="max-w-6xl w-full p-8 gap-0 max-h-[95vh] overflow-hidden">
      <DialogTitle className="text-xl font-semibold text-center mb-6">Gallery</DialogTitle>
      
      <div className="relative mb-8">
        <Image
          src={galleryImages[selectedImageIndex].src}
          alt={galleryImages[selectedImageIndex].alt}
          width={1200}
          height={800}
          className="w-full h-auto max-h-[65vh] object-contain bg-black rounded-lg"
        />
      </div>
      
      <div className="px-4">
        <p className="text-base text-slate-700 mb-6 text-center">
          {galleryImages[selectedImageIndex].caption}
        </p>
        
        {/* Thumbnail navigation */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handleModalPrevious}
            className="p-2 rounded-full border border-slate-300 hover:bg-slate-50 transition-colors shrink-0"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          
          <div 
            ref={thumbnailContainerRef}
            className="flex gap-3 overflow-x-auto max-w-lg px-2 py-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => handleImageSelect(index)}
                className={`relative shrink-0 rounded-lg transition-all ${
                  index === selectedImageIndex 
                    ? 'ring-2 ring-indigo-600' 
                    : ''
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={80}
                  height={60}
                  className="rounded-lg object-cover"
                />
              </button>
            ))}
          </div>
          
          <button
            onClick={handleModalNext}
            className="p-2 rounded-full border border-slate-300 hover:bg-slate-50 transition-colors shrink-0"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>
    </DialogContent>
  );
}

// Mobile Modal Component
function MobileModal({ 
  selectedImageIndex, 
  galleryImages, 
  handleModalPrevious, 
  handleModalNext, 
  handleImageSelect 
}: {
  selectedImageIndex: number;
  galleryImages: GalleryImage[];
  handleModalPrevious: () => void;
  handleModalNext: () => void;
  handleImageSelect: (index: number) => void;
}) {
  const thumbnailContainerRef = React.useRef<HTMLDivElement>(null);
  const imageRef = React.useRef<HTMLDivElement>(null);
  const touchStartX = React.useRef<number | null>(null);
  const touchEndX = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (thumbnailContainerRef.current) {
      const container = thumbnailContainerRef.current;
      const selectedThumbnail = container.children[selectedImageIndex] as HTMLElement;
      if (selectedThumbnail) {
        const containerWidth = container.offsetWidth;
        const thumbnailWidth = selectedThumbnail.offsetWidth;
        const thumbnailLeft = selectedThumbnail.offsetLeft;
        const scrollLeft = thumbnailLeft - (containerWidth / 2) + (thumbnailWidth / 2);
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [selectedImageIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleModalNext();
    } else if (isRightSwipe) {
      handleModalPrevious();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <DialogContent className="max-w-full w-full h-full p-4 gap-0 max-h-screen overflow-hidden">
      <DialogTitle className="text-lg font-semibold text-center mb-4">Gallery</DialogTitle>
      
      <div 
        ref={imageRef}
        className="relative mb-6"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={galleryImages[selectedImageIndex].src}
          alt={galleryImages[selectedImageIndex].alt}
          width={800}
          height={600}
          className="w-full h-auto max-h-[70vh] object-contain bg-black rounded-lg"
        />
      </div>
      
      <div className="px-2">
        <p className="text-sm text-slate-700 mb-4 text-center">
          {galleryImages[selectedImageIndex].caption}
        </p>
        
        {/* Thumbnail navigation */}
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={handleModalPrevious}
            className="p-2 rounded-full border border-slate-300 hover:bg-slate-50 transition-colors shrink-0"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 text-slate-600" />
          </button>
          
          <div 
            ref={thumbnailContainerRef}
            className="flex gap-2 overflow-x-auto max-w-xs px-1 py-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => handleImageSelect(index)}
                className={`relative shrink-0 rounded-lg transition-all ${
                  index === selectedImageIndex 
                    ? 'ring-2 ring-indigo-600' 
                    : ''
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={70}
                  height={52}
                  className="rounded-lg object-cover"
                />
              </button>
            ))}
          </div>
          
          <button
            onClick={handleModalNext}
            className="p-2 rounded-full border border-slate-300 hover:bg-slate-50 transition-colors shrink-0"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 text-slate-600" />
          </button>
        </div>
      </div>
    </DialogContent>
  );
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://picsum.photos/id/1/800/600",
    alt: "Solar panel installation",
    caption: "Professional solar panel installation on residential property"
  },
  {
    id: 2,
    src: "https://picsum.photos/id/2/800/600",
    alt: "Solar energy system",
    caption: "High-efficiency solar energy system for commercial use"
  },
  {
    id: 3,
    src: "https://picsum.photos/id/3/800/600",
    alt: "Solar maintenance",
    caption: "Regular maintenance ensures optimal solar panel performance"
  },
  {
    id: 4,
    src: "https://picsum.photos/id/4/800/600",
    alt: "Solar consultation",
    caption: "Expert consultation for custom solar energy solutions"
  },
  {
    id: 5,
    src: "https://picsum.photos/id/5/800/600",
    alt: "Green energy",
    caption: "Sustainable green energy for a better future"
  },
  {
    id: 6,
    src: "https://picsum.photos/id/6/800/600",
    alt: "Solar technology",
    caption: "Latest solar technology and innovation"
  },
];

export default function GallerySection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [mobileCurrentIndex, setMobileCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleMobilePrevious = () => {
    setMobileCurrentIndex((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleMobileNext = () => {
    setMobileCurrentIndex((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleModalPrevious = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleModalNext = () => {
    setSelectedImageIndex((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleImageSelect = (index: number) => {
    setSelectedImageIndex(index);
  };

  const openModalWithImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <section className="py-16 px-4 md:px-16 lg:px-24 xl:px-32">
      <h1 className="text-3xl font-semibold text-center mx-auto">Gallery</h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
        Take a look at our recent solar installations and energy solutions.
      </p>

      {/* Desktop Gallery */}
      <div className="hidden md:block mt-16">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrevious}
            className="p-2 rounded-full border border-slate-300 hover:bg-slate-50 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>
          
          <div className="flex gap-4 overflow-hidden transition-transform duration-300 ease-in-out">
            {Array.from({ length: 5 }, (_, index) => {
              const actualIndex = (currentImageIndex + index) % galleryImages.length;
              const image = galleryImages[actualIndex];
              return (
                <Dialog key={`${image.id}-${actualIndex}`}>
                  <DialogTrigger asChild>
                    <div className="relative group cursor-pointer" onClick={() => openModalWithImage(actualIndex)}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={240}
                        height={180}
                        className="rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg" />
                    </div>
                  </DialogTrigger>
                  <DesktopModal
                    selectedImageIndex={selectedImageIndex}
                    galleryImages={galleryImages}
                    handleModalPrevious={handleModalPrevious}
                    handleModalNext={handleModalNext}
                    handleImageSelect={handleImageSelect}
                  />
                </Dialog>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-full border border-slate-300 hover:bg-slate-50 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-slate-600" />
          </button>
        </div>
      </div>

      {/* Mobile Gallery */}
      <div className="md:hidden mt-16">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handleMobilePrevious}
            className="p-2 rounded-full border border-slate-300 hover:bg-slate-50 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          
          <Dialog>
            <DialogTrigger asChild>
              <div 
                className="relative group cursor-pointer" 
                onClick={() => openModalWithImage(mobileCurrentIndex)}
                onTouchStart={(e) => {
                  const touch = e.touches[0];
                  e.currentTarget.dataset.touchStartX = touch.clientX.toString();
                }}
                onTouchEnd={(e) => {
                  const touchStartX = parseFloat(e.currentTarget.dataset.touchStartX || '0');
                  const touch = e.changedTouches[0];
                  const touchEndX = touch.clientX;
                  const distance = touchStartX - touchEndX;
                  
                  if (Math.abs(distance) > 50) {
                    e.preventDefault();
                    if (distance > 0) {
                      handleMobileNext();
                    } else {
                      handleMobilePrevious();
                    }
                  }
                }}
              >
                <Image
                  src={galleryImages[mobileCurrentIndex].src}
                  alt={galleryImages[mobileCurrentIndex].alt}
                  width={350}
                  height={260}
                  className="rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg" />
              </div>
            </DialogTrigger>
            <MobileModal
              selectedImageIndex={selectedImageIndex}
              galleryImages={galleryImages}
              handleModalPrevious={handleModalPrevious}
              handleModalNext={handleModalNext}
              handleImageSelect={handleImageSelect}
            />
          </Dialog>
          
          <button
            onClick={handleMobileNext}
            className="p-2 rounded-full border border-slate-300 hover:bg-slate-50 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>
    </section>
  );
}