export default function Footer() {
  return (
    <footer className="bg-[#F5F2ED] border-t border-[#E8E4DF] mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-center text-[#7A7A7A] text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Kayla Photography. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
