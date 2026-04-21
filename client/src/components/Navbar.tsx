import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [itineraryOpen, setItineraryOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setItineraryOpen(false);
  };

  const itineraryItems = [
    "4 Noches / 5 Días",
    "5 Noches / 6 Días",
    "6 Noches / 7 Días",
    "5–7 Días Cultural",
    "10 Días – 2 Semanas",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0e0e0e]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="/"
            className="font-['Playfair_Display'] text-white text-sm font-bold tracking-wide hover:text-[#C9A84C] transition-colors"
          >
            SLTCS｜Alquiler de coche con conductor en Sri Lanka
          </a>

          <div className="hidden md:flex items-center gap-7">
            <a onClick={() => scrollTo("plans")} className="text-white/80 hover:text-[#C9A84C] text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer">PLANES</a>
            <div className="relative">
              <button
                onClick={() => setItineraryOpen(!itineraryOpen)}
                className="text-white/80 hover:text-[#C9A84C] text-xs font-semibold tracking-widest uppercase transition-colors flex items-center gap-1"
              >
                ITINERARIO MODELO
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {itineraryOpen && (
                <div className="absolute top-full right-0 mt-2 w-52 bg-[#1a1a1a] border border-white/10 rounded shadow-xl z-50">
                  {itineraryItems.map((label) => (
                    <a
                      key={label}
                      onClick={() => { scrollTo("itineraries"); setItineraryOpen(false); }}
                      className="block px-4 py-2.5 text-xs text-white/70 hover:text-[#C9A84C] hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a onClick={() => scrollTo("vehicles")} className="text-white/80 hover:text-[#C9A84C] text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer">VEHÍCULOS</a>
            <a onClick={() => scrollTo("faq")} className="text-white/80 hover:text-[#C9A84C] text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer">FAQ</a>
            <a onClick={() => scrollTo("contact")} className="text-white/80 hover:text-[#C9A84C] text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer">CONTACTO</a>

          </div>

          <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#0e0e0e]/95 backdrop-blur-md border-t border-white/10 py-4">
            {[
              { label: "PLANES", id: "plans" },
              { label: "ITINERARIO MODELO", id: "itineraries" },
              { label: "VEHÍCULOS", id: "vehicles" },
              { label: "FAQ", id: "faq" },
              { label: "CONTACTO", id: "contact" },
            ].map((item) => (
              <a
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block px-4 py-3 text-xs font-semibold tracking-widest uppercase text-white/80 hover:text-[#C9A84C] transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}

          </div>
        )}
      </div>
    </nav>
  );
}
