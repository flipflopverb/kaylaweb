export const metadata = {
  title: "About - Kayla Photography",
  description: "Learn more about the photographer",
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-['Playfair_Display'] text-[#2D2D2D] mb-4">About Me</h1>
        <div className="w-16 h-px bg-[#C4A35A] mx-auto"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/3">
          <div className="aspect-square bg-[#E8E4DF] rounded-sm flex items-center justify-center">
            <span className="text-[#B0A89A] font-['Playfair_Display'] italic">Your photo here</span>
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <h2 className="text-xl font-['Playfair_Display'] text-[#2D2D2D] mb-6 italic">
            Hi, I&apos;m Kayla
          </h2>
          <p className="text-[#7A7A7A] mb-5 font-light leading-relaxed">
            I&apos;m a professional photographer passionate about capturing life&apos;s special moments.
            With over 5 years of experience, I specialize in portraits, events, and lifestyle photography.
          </p>
          <p className="text-[#7A7A7A] mb-5 font-light leading-relaxed">
            My approach is simple: I want you to feel comfortable and natural in front of the camera.
            Whether it&apos;s a wedding, family portrait, or headshot session, my goal is to create
            images you&apos;ll treasure forever.
          </p>
          <p className="text-[#7A7A7A] font-light leading-relaxed">
            When I&apos;m not photographing, you can find me exploring new coffee shops, hiking,
            and spending time with my family.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-['Playfair_Display'] text-[#2D2D2D] mb-6 italic text-center">My Equipment</h2>
        <div className="w-16 h-px bg-[#C4A35A] mx-auto mb-8"></div>
        <ul className="text-[#7A7A7A] space-y-2 text-center font-light">
          <li>Sony A7IV Full Frame Camera</li>
          <li>Sony 24-70mm f/2.8 GM Lens</li>
          <li>Sony 85mm f/1.4 GM Lens</li>
          <li>Godox AD600 Pro Flash System</li>
        </ul>
      </div>
    </div>
  );
}
