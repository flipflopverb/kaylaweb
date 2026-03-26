import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="bg-[#FAF8F5] border-b border-[#E8E4DF]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="font-['Playfair_Display'] text-2xl font-medium text-[#2D2D2D] tracking-wide">
            Kayla Photography
          </Link>
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#7A7A7A] hover:text-[#C4A35A] transition-colors text-sm tracking-widest uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
