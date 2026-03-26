"use client";

import { useState } from "react";
import Image from "next/image";
import { galleries } from "@/data/galleries";
import Lightbox from "./Lightbox";

export default function GalleryGrid() {
  const [selectedGallery, setSelectedGallery] = useState<string[] | null>(null);
  const [selectedGalleryName, setSelectedGalleryName] = useState("");

  const openGallery = (gallery: typeof galleries[0]) => {
    const images = gallery.images.map(
      (img) => `/images/${gallery.slug}/${img}`
    );
    setSelectedGallery(images);
    setSelectedGalleryName(gallery.name);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setSelectedGalleryName("");
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {galleries.map((gallery) => (
          <button
            key={gallery.slug}
            onClick={() => openGallery(gallery)}
            className="group relative aspect-[4/5] overflow-hidden bg-[#E8E4DF]"
          >
            <Image
              src={`/images/${gallery.slug}/${gallery.cover}`}
              alt={gallery.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <h3 className="text-white text-2xl font-['Playfair_Display'] italic opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {gallery.name}
              </h3>
            </div>
          </button>
        ))}
      </div>

      {selectedGallery && (
        <Lightbox
          images={selectedGallery}
          galleryName={selectedGalleryName}
          onClose={closeGallery}
        />
      )}
    </>
  );
}
