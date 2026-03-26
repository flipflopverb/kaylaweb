"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

interface LightboxProps {
  images: string[];
  galleryName: string;
  onClose: () => void;
}

export default function Lightbox({ images, galleryName, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, goToPrevious, goToNext]);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl font-light w-12 h-12 flex items-center justify-center z-10"
        aria-label="Close"
      >
        ×
      </button>

      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 text-white/50 hover:text-white text-5xl font-light p-4"
        aria-label="Previous"
      >
        ‹
      </button>

      <div className="max-w-5xl max-h-[85vh] px-16">
        <Image
          src={images[currentIndex]}
          alt={`${galleryName} - ${currentIndex + 1}`}
          width={1200}
          height={800}
          className="max-h-[85vh] w-auto h-auto object-contain"
          priority
        />
        <p className="text-white/60 text-center mt-4 text-sm tracking-widest">
          {currentIndex + 1} / {images.length}
        </p>
      </div>

      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 text-white/50 hover:text-white text-5xl font-light p-4"
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}
