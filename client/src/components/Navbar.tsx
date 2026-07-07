import { useState, useEffect, useRef } from "react";

const languages = [
  { label: "Spanish", url: "https://es.srilanka-charter.com/", current: true },
  { label: "English", url: "https://en.srilanka-charter.com/", current: false },
  { label: "French", url: "https://fr.srilanka-charter.com/", current: false },
  { label: "German", url: "https://de.srilanka-charter.com/", current: false },
  { label: "Dutch", url: "https://nl.srilanka-charter.com/", current: false },
  { label: "Russian", url: "https://ru.srilanka-charter.com/", current: false },
  { label: "Japanese", url: "https://sltcs.srilanka-charter.com/", current: false },
  { label: "Korean", url: "https://ko.srilanka-charter.com/", current: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [itineraryOpen, setItineraryOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const infoCategories = [
    { label: "Guía de Conductor Privado", href: "/information/guia-conductor-privado" },
    { label: "Guía de Costes y Reserva", href: "/information/guia-costes-reserva" },
    { label: "Viajes en Familia y Grupos", href: "/information/viajes-familia-grupos" },
    { label: "Consejos de Viaje y Seguridad", href: "/information/consejos-viaje-seguridad" },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setItineraryOpen(false);
    setLangOpen(false);
  };

  const itineraryLinks = [
    { label: "4 Noches / 5 Días", href: "/information/itinerarios/itinerario-sri-lanka-4-noches-5-dias" },
    { label: "5 Noches / 6 Días", href: "/information/itinerarios/itinerario-sri-lanka-5-noches-6-dias" },
    { label: "6 Noches / 7 Días", href: "/information/itinerarios/itinerario-sri-lanka-6-noches-7-dias" },
    { label: "5–7 Días Cultural", href: "/information/itinerarios/ruta-triangulo-cultural-sri-lanka" },
    { label: "10 Días – 2 Semanas", href: "/information/itinerarios/itinerario-sri-lanka-10-dias-2-semanas" },
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

          <div className="hidden md:flex items-center gap-5">
            <a onClick={() => scrollTo("plans")} className="text-white/80 hover:text-[#C9A84C] text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer">PLANES</a>
            <div className="relative">
              <button
                onClick={() => setItineraryOpen(!itineraryOpen)}
                className="text-white/80 hover:text-[#C9A84C] text-xs font-semibold tracking-widest uppercase transition-colors flex items-center gap-1"
              >
                ITINERARIOS
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {itineraryOpen && (
                <div className="absolute top-full right-0 mt-2 w-52 bg-[#1a1a1a] border border-white/10 rounded shadow-xl z-50">
                  {itineraryLinks.map((item) => (
                    item.href
                      ? <a
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2.5 text-xs text-white/70 hover:text-[#C9A84C] hover:bg-white/5 transition-colors cursor-pointer"
                        >
                          {item.label}
                        </a>
                      : <span
                          key={item.label}
                          className="block px-4 py-2.5 text-xs text-white/30 cursor-default"
                        >
                          {item.label} <span style={{ fontSize: "0.6rem", color: "rgba(201,168,76,0.5)" }}>Próximamente</span>
                        </span>
                  ))}
                </div>
              )}
            </div>
            <a href="/price" className="text-white/80 hover:text-[#C9A84C] text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer">PRECIO</a>
            <a href="/voice" className="text-white/80 hover:text-[#C9A84C] text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer">OPINIONES</a>
            {/* INFORMACIÓN dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setInfoOpen(true)}
              onMouseLeave={() => setInfoOpen(false)}
            >
              <button className="flex items-center gap-1 text-white/80 hover:text-[#C9A84C] text-xs font-semibold tracking-widest uppercase transition-colors">
                INFORMACIÓN
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {infoOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#1a1a1a] border border-white/10 rounded shadow-xl z-50">
                  {infoCategories.map((cat) => (
                    <a
                      key={cat.href}
                      href={cat.href}
                      className="block px-4 py-2.5 text-[0.65rem] text-[#C9A84C] font-bold tracking-widest uppercase hover:bg-white/5 transition-colors"
                    >
                      {cat.label} →
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a onClick={() => scrollTo("contact")} className="text-white/80 hover:text-[#C9A84C] text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer">CONTACTO</a>
            <a href="/faq" className="text-white/80 hover:text-[#C9A84C] text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer">FAQ</a>

            {/* Language Switcher */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-white/80 hover:text-[#C9A84C] text-xs font-semibold tracking-widest uppercase transition-colors"
                aria-label="Select language"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
                ES
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-[#1a1a1a] border border-white/10 rounded shadow-xl z-50">
                  {languages.map((lang) => (
                    <a
                      key={lang.url}
                      href={lang.url}
                      className={`block px-4 py-2.5 text-xs hover:bg-white/5 transition-colors flex items-center justify-between ${
                        lang.current
                          ? "text-[#C9A84C] font-semibold"
                          : "text-white/70 hover:text-[#C9A84C]"
                      }`}
                    >
                      {lang.label}
                      {lang.current && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] inline-block" />
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>
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
            <a onClick={() => scrollTo("plans")} className="block px-4 py-3 text-xs font-semibold tracking-widest uppercase text-white/80 hover:text-[#C9A84C] transition-colors cursor-pointer">PLANES</a>
            <a onClick={() => scrollTo("itineraries")} className="block px-4 py-3 text-xs font-semibold tracking-widest uppercase text-white/80 hover:text-[#C9A84C] transition-colors cursor-pointer">ITINERARIO MODELO</a>
            <a onClick={() => scrollTo("vehicles")} className="block px-4 py-3 text-xs font-semibold tracking-widest uppercase text-white/80 hover:text-[#C9A84C] transition-colors cursor-pointer">VEHÍCULOS</a>
            <a href="/price" className="block px-4 py-3 text-xs font-semibold tracking-widest uppercase text-white/80 hover:text-[#C9A84C] transition-colors cursor-pointer">PRECIO</a>
            <a href="/voice" className="block px-4 py-3 text-xs font-semibold tracking-widest uppercase text-white/80 hover:text-[#C9A84C] transition-colors cursor-pointer">OPINIONES</a>
            {/* INFORMACIÓN mobile */}
            <div className="border-t border-white/5">
              <p className="px-4 py-2 text-xs font-semibold tracking-widest uppercase text-white/40">INFORMACIÓN</p>
              {infoCategories.map((cat) => (
                <a
                  key={cat.href}
                  href={cat.href}
                  className="block px-4 py-2 text-xs font-semibold tracking-widest uppercase text-[#C9A84C]/80 hover:text-[#C9A84C] transition-colors"
                >
                  {cat.label}
                </a>
              ))}
            </div>
            <a onClick={() => scrollTo("contact")} className="block px-4 py-3 text-xs font-semibold tracking-widest uppercase text-white/80 hover:text-[#C9A84C] transition-colors cursor-pointer">CONTACTO</a>
            <a href="/faq" className="block px-4 py-3 text-xs font-semibold tracking-widest uppercase text-white/80 hover:text-[#C9A84C] transition-colors cursor-pointer">FAQ</a>
            {/* Mobile Language Switcher */}
            <div className="border-t border-white/10 mt-2 pt-2">
              <p className="px-4 py-2 text-xs font-semibold tracking-widest uppercase text-white/40">OTHER LANGUAGES</p>
              {languages.map((lang) => (
                <a
                  key={lang.url}
                  href={lang.url}
                  className={`block px-4 py-3 text-xs font-semibold tracking-widest uppercase transition-colors flex items-center justify-between ${
                    lang.current
                      ? "text-[#C9A84C]"
                      : "text-white/80 hover:text-[#C9A84C]"
                  }`}
                >
                  {lang.label}
                  {lang.current && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] inline-block" />
                  )}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
