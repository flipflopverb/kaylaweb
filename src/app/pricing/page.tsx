export const metadata = {
  title: "Pricing - Kayla Photography",
  description: "Photography pricing and services",
};

const services = [
  {
    name: "Portrait Session",
    price: "$150",
    description: "1-hour session, 20 edited digital photos",
    features: ["1 hour duration", "20 digital images", "Online gallery", "Print release"],
  },
  {
    name: "Event Coverage",
    price: "$400",
    description: "3-hour event coverage, 50+ edited digital photos",
    features: ["3 hours coverage", "50+ digital images", "Online gallery", "Quick turnaround"],
  },
  {
    name: "Wedding Package",
    price: "$1,500",
    description: "Full day coverage, all edited digital photos",
    features: ["Full day coverage", "All edited digital images", "Second shooter", "Engagement session included"],
  },
  {
    name: "Headshots",
    price: "$100",
    description: "30-minute session, 10 edited digital photos",
    features: ["30 minutes", "10 digital images", "Multiple outfits", "Online gallery"],
  },
];

export default function Pricing() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-['Playfair_Display'] text-[#2D2D2D] mb-4">Pricing</h1>
        <div className="w-16 h-px bg-[#C4A35A] mx-auto mb-6"></div>
        <p className="text-[#7A7A7A] font-light max-w-xl mx-auto">
          Transparent pricing for all my photography services. Custom packages available upon request.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.name}
            className="border border-[#E8E4DF] rounded-sm p-8 hover:border-[#C4A35A] transition-colors bg-white"
          >
            <h3 className="text-lg font-['Playfair_Display'] text-[#2D2D2D] mb-2">{service.name}</h3>
            <p className="text-3xl font-['Playfair_Display'] text-[#8B5E3C] mb-3">{service.price}</p>
            <p className="text-[#7A7A7A] text-sm mb-6 font-light">{service.description}</p>
            <ul className="space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="text-sm text-[#7A7A7A] flex items-center font-light">
                  <span className="mr-2 text-[#C4A35A]">·</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-[#7A7A7A] mb-6 font-light">
          Need something custom? Let&apos;s discuss your specific needs.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 border border-[#8B5E3C] text-[#8B5E3C] hover:bg-[#8B5E3C] hover:text-white transition-colors tracking-widest text-sm uppercase"
        >
          Request Quote
        </a>
      </div>
    </div>
  );
}
