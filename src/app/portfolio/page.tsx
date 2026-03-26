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
          Add your images to the public/images folder and they will appear here.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="aspect-[4/5] bg-[#E8E4DF] flex items-center justify-center">
          <span className="text-[#B0A89A] font-['Playfair_Display'] italic">Add image here</span>
        </div>
        <div className="aspect-[4/5] bg-[#E8E4DF] flex items-center justify-center">
          <span className="text-[#B0A89A] font-['Playfair_Display'] italic">Add image here</span>
        </div>
        <div className="aspect-[4/5] bg-[#E8E4DF] flex items-center justify-center">
          <span className="text-[#B0A89A] font-['Playfair_Display'] italic">Add image here</span>
        </div>
        <div className="aspect-[4/5] bg-[#E8E4DF] flex items-center justify-center">
          <span className="text-[#B0A89A] font-['Playfair_Display'] italic">Add image here</span>
        </div>
        <div className="aspect-[4/5] bg-[#E8E4DF] flex items-center justify-center">
          <span className="text-[#B0A89A] font-['Playfair_Display'] italic">Add image here</span>
        </div>
        <div className="aspect-[4/5] bg-[#E8E4DF] flex items-center justify-center">
          <span className="text-[#B0A89A] font-['Playfair_Display'] italic">Add image here</span>
        </div>
      </div>
    </div>
  );
}
