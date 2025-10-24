import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function AfroccinoSite() {
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Add slightly more zoom so image always covers viewport
  const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [1.2, 1.25] : [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 60] : [0, 100]);

  // Start from center (0%) to far right (+25%) — no black bar
  const rawX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isMobile ? ["0%", "25%", "15%"] : ["0%", "0%", "0%"]
  );

  const x = useSpring(rawX, {
    stiffness: 120, // faster acceleration
    damping: 15,
    mass: 0.4,
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  const gallery = Array.from({ length: 9 }).map((_, i) => ({
    id: i + 1,
    src: `/images/portfolio-${i + 1}.jpg`,
    alt: `Afroccino photo ${i + 1}`,
  }));

  return (
    <div className="min-h-screen bg-black text-gray-100 antialiased scroll-smooth overflow-hidden">
      {/* HEADER */}
      <header className="absolute top-0 left-0 right-0 z-30 px-6 py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src={`${process.env.PUBLIC_URL}/images/afroccino-logo.png`}
              alt="Afroccino Photography"
              className="h-[180px] w-auto object-contain drop-shadow-lg"
            />
          </a>

          <nav className="space-x-6 text-sm text-gray-200 drop-shadow">
            <a href="#work" className="hover:text-white transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.img
          src={`${process.env.PUBLIC_URL}/images/hero.jpg`}
          alt="Afroccino Hero"
          style={{ scale, y, x }}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
          loading="eager"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 flex flex-col justify-center items-start h-full max-w-5xl mx-auto px-6 space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl font-extralight leading-tight text-white drop-shadow-lg"
          >
            For the little moments that mean everything.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl drop-shadow"
          >
            Candid family photography — real, emotional, and full of life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="flex items-center space-x-4"
          >
            <a
              href="#work"
              className="inline-block px-8 py-3 border border-white rounded-md text-sm font-medium hover:bg-white hover:text-black transition-colors"
            >
              View Work
            </a>
            <a
              href="#about"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* WORK SECTION */}
      <motion.section
        id="work"
        className="min-h-screen py-20 max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-2xl font-light text-white">Selected Work</h2>
          <a
            href="#contact"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Inquire
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((img) => (
            <figure key={img.id} className="group overflow-hidden rounded-xl">
              <motion.img
                src={img.src}
                alt={img.alt}
                className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-90"
                whileHover={{ scale: 1.05 }}
              />
              <figcaption className="mt-2 text-xs text-gray-500">
                Family session — candid moments
              </figcaption>
            </figure>
          ))}
        </div>
      </motion.section>

      {/* ABOUT SECTION */}
      <motion.section
        id="about"
        className="py-20 border-t border-gray-800 max-w-5xl mx-auto px-6"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-light mb-4 text-white">About</h3>
        <p className="text-gray-400 leading-relaxed">
          I’m Fady Azmy — I used to chase new places; now I chase the stories unfolding at home. 
          My photography celebrates family — the energy, the love, and the fleeting seconds that become 
          everything. Every frame is about movement, emotion, and the beauty that happens between moments.
        </p>
      </motion.section>

      {/* CONTACT SECTION */}
      <motion.section
        id="contact"
        className="py-20 border-t border-gray-800 max-w-5xl mx-auto px-6"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-light mb-4 text-white">Contact</h3>
        <p className="text-gray-400 mb-6">
          For bookings and inquiries — use the form below or email me directly.
        </p>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="grid grid-cols-1 gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border border-gray-700 bg-black text-gray-200 rounded-md px-4 py-3 placeholder-gray-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border border-gray-700 bg-black text-gray-200 rounded-md px-4 py-3 placeholder-gray-500"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="border border-gray-700 bg-black text-gray-200 rounded-md px-4 py-3 h-32 placeholder-gray-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-md border border-gray-100 text-sm font-medium text-white hover:bg-white hover:text-black transition-colors"
          >
            Send
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4">
          Or email:{" "}
          <a
            href="mailto:hello@afroccino.com"
            className="underline hover:text-white"
          >
            hello@afroccino.com
          </a>
        </p>
      </motion.section>

      {/* FOOTER */}
      <footer className="py-12 flex justify-center text-sm text-gray-600 border-t border-gray-800">
        © {new Date().getFullYear()} Afroccino — by Fady Azmy
      </footer>
    </div>
  );
}
