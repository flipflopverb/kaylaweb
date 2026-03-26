import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata = {
  title: "Portfolio - Kayla Photography",
  description: "View my photography portfolio",
};

export default function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-['Playfair_Display'] text-[#2D2D2D] mb-4">Portfolio</h1>
        <div className="w-16 h-px bg-[#C4A35A] mx-auto mb-6"></div>
        <p className="text-[#7A7A7A] font-light max-w-xl mx-auto">
          A collection of moments captured with intention and artistry.
        </p>
      </div>
      
      <GalleryGrid />
    </div>
  );
}
