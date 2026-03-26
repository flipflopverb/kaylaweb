import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-28 px-4 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#2D2D2D] mb-6 leading-tight">
            Welcome!
          </h1>
          <p className="text-lg text-[#7A7A7A] mb-10 max-w-2xl mx-auto font-['Raleway'] font-light">
            Professional photography services tailored to preserve your special memories with an artistic touch.
          </p>
          <div className="flex gap-6 justify-center">
            <Link
              href="/portfolio"
              className="px-8 py-3 bg-[#8B5E3C] text-white hover:bg-[#C4A35A] transition-colors tracking-widest text-sm uppercase"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-[#8B5E3C] text-[#8B5E3C] hover:bg-[#8B5E3C] hover:text-white transition-colors tracking-widest text-sm uppercase"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-4 bg-[#F5F2ED]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-['Playfair_Display'] text-center text-[#2D2D2D] mb-16 italic">
            Services Offered
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#E8E4DF] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">✦</span>
              </div>
              <h3 className="text-lg font-['Playfair_Display'] text-[#2D2D2D] mb-3">Portrait Sessions</h3>
              <p className="text-[#7A7A7A] font-light">Individual, family, and group portraits</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#E8E4DF] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">✦</span>
              </div>
              <h3 className="text-lg font-['Playfair_Display'] text-[#2D2D2D] mb-3">Events</h3>
              <p className="text-[#7A7A7A] font-light">Weddings, parties, and special occasions</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#E8E4DF] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">✦</span>
              </div>
              <h3 className="text-lg font-['Playfair_Display'] text-[#2D2D2D] mb-3">Headshots</h3>
              <p className="text-[#7A7A7A] font-light">Professional and creative headshots</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
