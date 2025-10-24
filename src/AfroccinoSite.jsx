import React from "react";

export default function AfroccinoSite() {
  const gallery = Array.from({ length: 9 }).map((_, i) => ({
    id: i + 1,
    src: `/images/portfolio-${i + 1}.jpg`,
    alt: `Afroccino photo ${i + 1}`,
  }));

  return (
    <div className="min-h-screen bg-black text-gray-100 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-semibold tracking-wide text-white">Afroccino</div>
          <div className="text-xs text-gray-400">by Fady Azmy</div>
        </div>
        <nav className="space-x-6 text-sm text-gray-300">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <section className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extralight leading-tight text-white">
              Candid family photography with calm, timeless design.
            </h1>
            <p className="text-lg text-gray-400 max-w-xl">
              I capture quiet moments, genuine smiles and the light between them. Based in Toronto —
              available for families and editorial work.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#contact" className="inline-block px-6 py-3 border border-gray-100 rounded-md text-sm font-medium hover:bg-white hover:text-black transition-colors">
                Book a session
              </a>
              <a href="#work" className="text-sm text-gray-400 hover:text-white transition-colors">See recent work</a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/hero.jpg"
              alt="Hero"
              className="w-full h-96 object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </section>

        <section id="work" className="py-12">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-2xl font-light text-white">Selected work</h2>
            <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Inquire</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {gallery.map((img) => (
              <figure key={img.id} className="group overflow-hidden rounded-xl">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-90"
                />
                <figcaption className="mt-2 text-xs text-gray-500">Family session — candid moments</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="about" className="py-12 border-t border-gray-800">
          <div className="max-w-3xl">
            <h3 className="text-xl font-light mb-4 text-white">About</h3>
            <p className="text-gray-400 leading-relaxed">
              I'm Fady Azmy — a former travel photographer turned family and portrait photographer. I
              aim for simplicity and honesty: minimal direction, natural light, and compositions that
              breathe. My sessions focus on connection and storytelling rather than stiff posing.
            </p>
          </div>
        </section>

        <section id="contact" className="py-12">
          <div className="max-w-2xl">
            <h3 className="text-xl font-light mb-4 text-white">Contact</h3>
            <p className="text-gray-400 mb-6">For bookings and enquiries — email or use the form below.</p>

            <form className="grid grid-cols-1 gap-4">
              <input className="border border-gray-700 bg-black text-gray-200 rounded-md px-4 py-3 placeholder-gray-500" placeholder="Name" />
              <input className="border border-gray-700 bg-black text-gray-200 rounded-md px-4 py-3 placeholder-gray-500" placeholder="Email" />
              <textarea className="border border-gray-700 bg-black text-gray-200 rounded-md px-4 py-3 h-32 placeholder-gray-500" placeholder="Message" />
              <div className="flex items-center space-x-4">
                <button type="submit" className="px-6 py-3 rounded-md border border-gray-100 text-sm font-medium text-white hover:bg-white hover:text-black transition-colors">Send</button>
                <span className="text-sm text-gray-500">Or email: <a href="mailto:hello@afroccino.com" className="underline hover:text-white">hello@afroccino.com</a></span>
              </div>
            </form>
          </div>
        </section>

        <footer className="py-12 flex justify-center text-sm text-gray-600 border-t border-gray-800">
          © {new Date().getFullYear()} Afroccino — by Fady Azmy
        </footer>
      </main>
    </div>
  );
}
