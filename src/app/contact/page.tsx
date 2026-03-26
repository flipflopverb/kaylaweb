export const metadata = {
  title: "Contact - Kayla Photography",
  description: "Get in touch for booking inquiries",
};

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-['Playfair_Display'] text-[#2D2D2D] mb-4">Get in Touch</h1>
        <div className="w-16 h-px bg-[#C4A35A] mx-auto mb-6"></div>
        <p className="text-[#7A7A7A] font-light max-w-xl mx-auto">
          Ready to book a session or have questions? Fill out the form below or schedule directly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-lg font-['Playfair_Display'] text-[#2D2D2D] mb-6 italic">Send a Message</h2>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm text-[#7A7A7A] mb-2 font-light">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-[#E8E4DF] bg-white focus:border-[#C4A35A] focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-[#7A7A7A] mb-2 font-light">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-[#E8E4DF] bg-white focus:border-[#C4A35A] focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm text-[#7A7A7A] mb-2 font-light">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                className="w-full px-4 py-3 border border-[#E8E4DF] bg-white focus:border-[#C4A35A] focus:outline-none transition-colors"
              >
                <option value="">Select a service</option>
                <option value="portrait">Portrait Session</option>
                <option value="event">Event Coverage</option>
                <option value="wedding">Wedding Package</option>
                <option value="headshots">Headshots</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-[#7A7A7A] mb-2 font-light">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 border border-[#E8E4DF] bg-white focus:border-[#C4A35A] focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your needs..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#8B5E3C] text-white hover:bg-[#C4A35A] transition-colors tracking-widest text-sm uppercase"
            >
              Send Message
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-lg font-['Playfair_Display'] text-[#2D2D2D] mb-6 italic">Schedule Directly</h2>
          <p className="text-[#7A7A7A] mb-6 font-light">
            Prefer to book directly? Use my Calendly to find a time that works for you.
          </p>
          
          <div className="bg-[#F5F2ED] border border-[#E8E4DF] p-8">
            <p className="text-[#7A7A7A] text-sm mb-6 font-light">
              Click below to see available dates and times
            </p>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#8B5E3C] text-white hover:bg-[#C4A35A] transition-colors tracking-widest text-sm uppercase"
            >
              Open Scheduler
            </a>
            <p className="text-[#B0A89A] text-xs mt-6 italic">
              (Replace with your Calendly link)
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-['Playfair_Display'] text-[#2D2D2D] mb-3 italic">Other Ways to Reach Me</h3>
            <p className="text-[#7A7A7A] font-light">
              Email: <a href="mailto:hello@example.com" className="text-[#8B5E3C] hover:text-[#C4A35A] transition-colors">hello@example.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
