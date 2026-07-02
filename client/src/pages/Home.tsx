/**
 * SLTCS – Sri Lanka Car Hire with Private Driver (Spanish)
 * Design: Dark luxury travel aesthetic — matches English version
 */

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSEO } from "@/hooks/useSEO";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";

// ─── Custom Date Picker (Spanish locale) ─────────────────────────────────────
const MONTHS_ES = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const DAYS_ES = ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"];

function DatePicker({ id, name, value, onChange, required }: {
  id: string; name: string; value: string;
  onChange: (v: string) => void; required?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [viewYear, setViewYear] = useState(() => value ? parseInt(value.split("-")[0]) : new Date().getFullYear());
  const [viewMonth, setViewMonth] = useState(() => value ? parseInt(value.split("-")[1]) - 1 : new Date().getMonth());
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const displayValue = value
    ? (() => { const [y,m,d] = value.split("-"); return `${d} ${MONTHS_ES[parseInt(m)-1]} ${y}`; })()
    : "DD / MMM / AAAA";

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDay = new Date(viewYear, viewMonth, 1).getDay();

  const selectDate = (day: number) => {
    const m = String(viewMonth + 1).padStart(2, "0");
    const d = String(day).padStart(2, "0");
    onChange(`${viewYear}-${m}-${d}`);
    setOpen(false);
  };

  const prevMonth = () => { if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y-1); } else setViewMonth(m => m-1); };
  const nextMonth = () => { if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y+1); } else setViewMonth(m => m+1); };

  const selectedDay = value ? parseInt(value.split("-")[2]) : null;
  const selectedMonth = value ? parseInt(value.split("-")[1]) - 1 : null;
  const selectedYear = value ? parseInt(value.split("-")[0]) : null;

  return (
    <div className="datepicker-wrap" ref={ref}>
      <input type="hidden" id={id} name={name} value={value} required={required} />
      <button type="button" className="datepicker-trigger" onClick={() => setOpen(o => !o)}>
        <span className="datepicker-icon">📅</span>
        <span className={value ? "datepicker-val" : "datepicker-placeholder"}>{displayValue}</span>
      </button>
      {open && (
        <div className="datepicker-popup">
          <div className="datepicker-header">
            <button type="button" className="datepicker-nav" onClick={prevMonth}>‹</button>
            <span className="datepicker-month-year">{MONTHS_ES[viewMonth]} {viewYear}</span>
            <button type="button" className="datepicker-nav" onClick={nextMonth}>›</button>
          </div>
          <div className="datepicker-grid">
            {DAYS_ES.map(d => <div key={d} className="datepicker-dayname">{d}</div>)}
            {Array.from({length: firstDay}).map((_,i) => <div key={`e${i}`} />)}
            {Array.from({length: daysInMonth}).map((_,i) => {
              const day = i + 1;
              const isSelected = day === selectedDay && viewMonth === selectedMonth && viewYear === selectedYear;
              const isToday = day === new Date().getDate() && viewMonth === new Date().getMonth() && viewYear === new Date().getFullYear();
              return (
                <button
                  key={day}
                  type="button"
                  className={`datepicker-day${isSelected ? " selected" : ""}${isToday && !isSelected ? " today" : ""}`}
                  onClick={() => selectDate(day)}
                >{day}</button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Image URLs ───────────────────────────────────────────────────────────────
const IMAGES = {
  hero1: "/manus-storage/hero_van_srilanka_706f8966_a6da533f.jpg",
  hero2: "/manus-storage/slide2_sigiriya_b8468f12_41504844.jpg",
  hero3: "/manus-storage/slide3_tea_train_e100395a_28a9b387.jpg",
  hero4: "/manus-storage/slide4_kandy_19bf406f_d6088047.jpg",
  hero5: "/manus-storage/slide5_galle_8aced38c_85f7c897.jpg",
  destYala: "/manus-storage/dest_yala_0e498c0a_62a5a9e1.jpg",
  destElla: "/manus-storage/dest_ella_bd8060fc_c1d1a0f6.jpg",
  destNuwara: "/manus-storage/dest_nuwara_57f4e54f_503282e8.jpg",
};

const SLIDES = [
  { src: IMAGES.hero1, alt: "Furgoneta blanca conduciendo por una carretera de Sri Lanka al atardecer" },
  { src: IMAGES.hero2, alt: "Vista aérea de la Fortaleza de la Roca de Sigiriya" },
  { src: IMAGES.hero3, alt: "Tren escénico en las plantaciones de té de Sri Lanka" },
  { src: IMAGES.hero4, alt: "Templo del Diente de Kandy, Sri Lanka" },
  { src: IMAGES.hero5, alt: "Murallas coloniales holandesas del Fuerte de Galle" },
];

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [mobileItineraryOpen, setMobileItineraryOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const [mobileInfoOpen, setMobileInfoOpen] = useState(false);

  const LANGUAGES = [
    { label: "English", url: "https://en.srilanka-charter.com/" },
    { label: "Français", url: "https://fr.srilanka-charter.com/" },
    { label: "Deutsch", url: "https://de.srilanka-charter.com/" },
    { label: "Nederlands", url: "https://nl.srilanka-charter.com/" },
    { label: "Русский", url: "https://ru.srilanka-charter.com/" },
    { label: "Bahasa Melayu", url: "https://ms.srilanka-charter.com/" },
    { label: "Svenska", url: "https://sv.srilanka-charter.com/" },
    { label: "日本語", url: "https://sltcs.srilanka-charter.com/" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={`sltcs-nav${scrolled ? " scrolled" : ""}`}>
        <a href="#hero" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollTo("hero"); }}>
          <span className="nav-logo-full">SLTCS｜Alquiler de Coche con Conductor Privado en Sri Lanka</span>
          <span className="nav-logo-short">SLTCS</span>
        </a>
        <ul className="nav-links">
          <li><a href="#plans" onClick={(e) => { e.preventDefault(); scrollTo("plans"); }}>PLANES</a></li>
          <li className="nav-dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button>ITINERARIOS</button>
            {dropdownOpen && (
              <div className="nav-dropdown-menu">
                <a href="/information/itinerarios/itinerario-sri-lanka-4-noches-5-dias">4 Noches / 5 Días</a>
                <a href="/information/itinerarios/itinerario-sri-lanka-5-noches-6-dias">5 Noches / 6 Días</a>
                <a href="/information/itinerarios/itinerario-sri-lanka-6-noches-7-dias">6 Noches / 7 Días</a>
                <a href="/information/itinerarios/ruta-triangulo-cultural-sri-lanka">5–7 Días – Triángulo Cultural</a>
                <a href="/information/itinerarios/itinerario-sri-lanka-10-dias-2-semanas">10 Días – 2 Semanas</a>
              </div>
            )}
          </li>
          <li><a href="/price">PRECIO</a></li>
          <li className="nav-dropdown" onMouseEnter={() => setInfoOpen(true)} onMouseLeave={() => setInfoOpen(false)}>
            <button>INFORMACIÓN</button>
            {infoOpen && (
              <div className="nav-dropdown-menu" style={{ minWidth: "260px" }}>
                {[
                  { label: "Guía de Conductor Privado", href: "/information/guia-conductor-privado" },
                  { label: "Guía de Costes y Reserva", href: "/information/guia-costes-reserva" },
                  { label: "Viajes en Familia y Grupos", href: "/information/viajes-familia-grupos" },
                ].map((cat) => (
                  <a key={cat.href} href={cat.href} style={{ padding: "10px 16px", fontSize: "0.7rem", color: "#c9a84c", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", display: "block" }}>{cat.label} →</a>
                ))}
              </div>
            )}
          </li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>CONTACTO</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li className="nav-dropdown nav-lang-dropdown" onMouseEnter={() => setLangOpen(true)} onMouseLeave={() => setLangOpen(false)}>
            <button style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              ES
            </button>
            {langOpen && (
              <div className="nav-dropdown-menu">
                {LANGUAGES.map((lang) => (
                  <a key={lang.label} href={lang.url}>{lang.label}</a>
                ))}
              </div>
            )}
          </li>
        </ul>
        <button className="hamburger" aria-label="Menú" onClick={() => setMobileOpen(!mobileOpen)}>
          <span /><span /><span />
        </button>
      </nav>
      {mobileOpen && (
        <div className="mobile-menu open">
          <a href="#plans" onClick={(e) => { e.preventDefault(); scrollTo("plans"); }}>Planes</a>
          <div className="mobile-accordion">
            <button
              className="mobile-accordion-btn"
              onClick={() => setMobileItineraryOpen(o => !o)}
            >
              <span>Itinerarios</span>
              <svg
                width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                style={{ transform: mobileItineraryOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
              ><path d="M6 9l6 6 6-6" /></svg>
            </button>
            {mobileItineraryOpen && (
              <div className="mobile-accordion-body">
                <a href="/information/itinerarios/itinerario-sri-lanka-4-noches-5-dias">4 Noches / 5 Días</a>
                <a href="/information/itinerarios/itinerario-sri-lanka-5-noches-6-dias">5 Noches / 6 Días</a>
                <a href="/information/itinerarios/itinerario-sri-lanka-6-noches-7-dias">6 Noches / 7 Días</a>
                <a href="/information/itinerarios/ruta-triangulo-cultural-sri-lanka">5–7 Días – Triángulo Cultural</a>
                <a href="/information/itinerarios/itinerario-sri-lanka-10-dias-2-semanas">10 Días – 2 Semanas</a>
              </div>
            )}
          </div>
          <a href="/price">Precio</a>
          <div className="mobile-accordion">
            <button
              className="mobile-accordion-btn"
              onClick={() => setMobileInfoOpen(o => !o)}
            >
              <span>Información</span>
              <svg
                width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                style={{ transform: mobileInfoOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
              ><path d="M6 9l6 6 6-6" /></svg>
            </button>
            {mobileInfoOpen && (
              <div className="mobile-accordion-body">
                <a href="/information/guia-conductor-privado">Guía de Conductor Privado</a>
                <a href="/information/guia-costes-reserva">Guía de Costes y Reserva</a>
                <a href="/information/viajes-familia-grupos">Viajes en Familia y Grupos</a>
              </div>
            )}
          </div>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>Contacto</a>
          <a href="/faq">FAQ</a>
          <div className="mobile-accordion">
            <button
              className="mobile-accordion-btn"
              onClick={() => setMobileLangOpen(o => !o)}
            >
              <span>Otros Idiomas</span>
              <svg
                width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                style={{ transform: mobileLangOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
              ><path d="M6 9l6 6 6-6" /></svg>
            </button>
            {mobileLangOpen && (
              <div className="mobile-accordion-body">
                {LANGUAGES.map((lang) => (
                  <a key={lang.label} href={lang.url}>{lang.label}</a>
                ))}
              </div>
            )}
          </div>
          <a href="#contact" className="btn-nav-mobile" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>Consulta Gratuita</a>
        </div>
      )}
    </>
  );
}

// ─── Hero Slideshow ───────────────────────────────────────────────────────────
function Hero() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((n: number) => {
    setCurrent(n);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-slider">
        {SLIDES.map((slide, i) => (
          <div key={i} className={`hero-slide${i === current ? " active" : ""}`}>
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="container" style={{ paddingLeft: "0" }}>
          <div style={{ maxWidth: "680px" }}>
            <div className="hero-eyebrow">SERVICIO PRIVADO DE CHARTER EN SRI LANKA</div>
            <div className="hero-badge">ALQUILER DE COCHE CON CONDUCTOR</div>
            <h1>Alquiler de Coche en Sri Lanka <em>con Conductor Privado</em></h1>
            <p className="hero-sub">
              Explore Sri Lanka a su propio ritmo con un conductor privado dedicado.
              Completamente privado, completamente flexible — la mejor manera de descubrir la Perla del Océano Índico.
            </p>
            <div className="hero-tags">
              <span className="hero-tag">Atención en Inglés</span>
              <span className="hero-tag">Charter Totalmente Privado</span>
              <span className="hero-tag">Conductor Certificado por el Gobierno</span>
            </div>
            <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>
              Consulta Gratuita
            </a>
          </div>
        </div>
      </div>
      <div className="hero-location">
        <div className="hero-location-label">Cobertura</div>
        <div className="hero-location-value">Todo Sri Lanka</div>
      </div>
      <div className="hero-dots">
        {SLIDES.map((_, i) => (
          <button key={i} className={`hero-dot${i === current ? " active" : ""}`} onClick={() => goTo(i)} />
        ))}
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

// ─── Stats Counter ────────────────────────────────────────────────────────────
function Stats() {
  const [counts, setCounts] = useState({ charters: 0, satisfaction: 0, drivers: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCounts({
              charters: Math.floor(400 * eased),
              satisfaction: parseFloat((4.9 * eased).toFixed(1)),
              drivers: Math.floor(30 * eased),
            });
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats" ref={ref}>
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-number">{counts.charters}+</div>
          <div className="stat-label">Viajes Totales</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{counts.satisfaction.toFixed(1)}</div>
          <div className="stat-label">Satisfacción Media</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{counts.drivers}+</div>
          <div className="stat-label">Conductores Certificados</div>
        </div>
      </div>
    </div>
  );
}

// ─── Contact + Why SLTCS (2-column layout) ────────────────────────────────────
function ContactAndWhy() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const today = new Date().toISOString().split("T")[0];
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [, setLocation] = useLocation();

  const sendInquiry = trpc.contact.sendInquiry.useMutation({
    onSuccess: () => { setLocation("/gracias"); },
    onError: (err) => {
      setSubmitError(err.message || "Hubo un error al enviar su consulta. Por favor, inténtelo de nuevo.");
      setIsSubmitting(false);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    sendInquiry.mutate({
      fullName: (data.get("name") as string) || "",
      country: (data.get("country") as string) || "",
      email: (data.get("email") as string) || "",
      phone: (data.get("phone") as string) || undefined,
      startDate: startDate,
      endDate: endDate,
      startLocation: (data.get("pickup") as string) || "",
      adults: (data.get("adults") as string) || "",
      children: (data.get("children") as string) || "0",
      vehicleType: (data.get("vehicle") as string) || "",
      currency: (data.get("currency") as string) || undefined,
      notes: (data.get("notes") as string) || undefined,
    });
  };

  const reasons = [
    {
      num: "01",
      title: "Conductores Certificados por el Gobierno",
      desc: "Todos nuestros conductores poseen licencias oficiales de Conductor Turístico o Conductor Guía de Sri Lanka. Formados profesionalmente, enfocados en la seguridad y muy valorados por clientes anteriores.",
      svgPath: "M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2zm0 4l6 3.27V12c0 3.79-2.58 7.33-6 8.93-3.42-1.6-6-5.14-6-8.93V9.27L12 6z",
    },
    {
      num: "02",
      title: "Atención en Inglés",
      desc: "Desde la primera consulta hasta el último traslado, nuestro equipo responderá en inglés. Comunicación clara y profesional en cada paso de su viaje.",
      svgPath: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z",
    },
    {
      num: "03",
      title: "Charter Completamente Privado",
      desc: "A diferencia de los tours en grupo, su vehículo y conductor son exclusivamente suyos. Establezca su propio horario, elija sus paradas y viaje totalmente según sus términos.",
      svgPath: "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z",
    },
    {
      num: "04",
      title: "Conocimiento Local Experto",
      desc: "Nuestros Conductores Guía son apasionados de la historia, cultura y gastronomía de Sri Lanka. Le llevarán más allá de las guías turísticas a lugares ocultos y experiencias auténticas.",
      svgPath: "M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z",
    },
    {
      num: "05",
      title: "El Vehículo Adecuado para Cada Grupo",
      desc: "Desde parejas hasta grandes grupos familiares de 10 personas, adaptamos el vehículo perfecto a su grupo — garantizando comodidad incluso en los trayectos más largos por la isla.",
      svgPath: "M17 5H3c-1.1 0-2 .9-2 2v9h2c0 1.65 1.34 3 3 3s3-1.35 3-3h5.5c0 1.65 1.34 3 3 3s3-1.35 3-3H23v-5l-6-6zM3 11V7h4v4H3zm3 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7-6.5H9V7h4v4zm4.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM15 11V7h1l4 4h-5z",
    },
    {
      num: "06",
      title: "De Confianza para Viajeros Europeos",
      desc: "Con más de 400 charters completados y una valoración media de satisfacción de 4,9, SLTCS es la opción preferida para visitantes del Reino Unido y Europa que exploran Sri Lanka.",
      svgPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
    },
  ];

  return (
    <section id="contact" style={{ background: "#faf7f2", padding: "100px 0" }}>
      <div className="container">
        <div className="contact-why-grid">

          {/* ── LEFT: Contact Form ─────────────────────────────────────────── */}
          <div>
            <div className="section-eyebrow" style={{ color: "#c9a84c" }}>CONTACTO</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.2, margin: "0 0 16px" }}>
              Empiece a Planificar<br />Su Aventura<br />en Sri Lanka
            </h2>
            <p style={{ color: "#4a4a4a", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "8px" }}>
              Indíquenos sus fechas de viaje, tamaño del grupo y preferencias — le responderemos con un itinerario personalizado y presupuesto en 24 horas.
            </p>
            <p style={{ color: "#4a4a4a", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "24px" }}>
              Rellene el formulario y envíelo. Normalmente respondemos en 24 horas.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div className="form-grid">
                <div className="form-group full">
                  <label htmlFor="name">NOMBRE COMPLETO *</label>
                  <input type="text" id="name" name="name" placeholder="ej. Carlos García" required />
                </div>
                <div className="form-group full">
                  <label htmlFor="country">PAÍS *</label>
                  <select id="country" name="country" required defaultValue="">
                    <option value="" disabled>— Seleccione su país —</option>
                    <option value="España">España</option>
                    <option value="México">México</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Chile">Chile</option>
                    <option value="Perú">Perú</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Panamá">Panamá</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Cuba">Cuba</option>
                    <option value="República Dominicana">República Dominicana</option>
                    <option value="Reino Unido">Reino Unido</option>
                    <option value="Estados Unidos">Estados Unidos</option>
                    <option value="Francia">Francia</option>
                    <option value="Alemania">Alemania</option>
                    <option value="Países Bajos">Países Bajos</option>
                    <option value="Italia">Italia</option>
                    <option value="Australia">Australia</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="email">CORREO ELECTRÓNICO *</label>
                  <input type="email" id="email" name="email" placeholder="su@correo.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">TELÉFONO</label>
                  <input type="tel" id="phone" name="phone" placeholder="+34 600 000 000" />
                </div>
                <div className="form-group">
                  <label>FECHA DE INICIO *</label>
                  <DatePicker id="startDate" name="startDate" value={startDate} onChange={setStartDate} required />
                </div>
                <div className="form-group">
                  <label>FECHA DE FIN *</label>
                  <DatePicker id="endDate" name="endDate" value={endDate} onChange={setEndDate} required />
                </div>
                <div className="form-group full">
                  <label htmlFor="pickup">LUGAR DE INICIO DEL CHARTER *</label>
                  <select id="pickup" name="pickup" required defaultValue="">
                    <option value="" disabled>— Seleccione ubicación —</option>
                    <option>Aeropuerto de Colombo (BIA)</option>
                    <option>Ciudad de Colombo</option>
                    <option>Negombo</option>
                    <option>Kandy</option>
                    <option>Sigiriya</option>
                    <option>Nuwara Eliya</option>
                    <option>Galle</option>
                    <option>Otro (especifique en notas)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="adults">Nº DE ADULTOS *</label>
                  <select id="adults" name="adults" required defaultValue="">
                    <option value="" disabled>Seleccionar</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7+">7 o más</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="children">Nº DE NIÑOS</label>
                  <select id="children" name="children" defaultValue="0">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4 o más</option>
                  </select>
                </div>
                <div className="form-group full">
                  <label htmlFor="vehicle">TIPO DE VEHÍCULO *</label>
                  <select id="vehicle" name="vehicle" required defaultValue="">
                    <option value="" disabled>— Seleccione vehículo —</option>
                    <option>Sedán (hasta 3 pasajeros)</option>
                    <option>Furgoneta (hasta 6 pasajeros)</option>
                    <option>Furgoneta Grande (hasta 10 pasajeros)</option>
                    <option>Déjenos recomendar</option>
                  </select>
                </div>
                <div className="form-group full">
                  <label htmlFor="currency">MONEDA PREFERIDA</label>
                  <select id="currency" name="currency" defaultValue="">
                    <option value="">— Seleccione moneda —</option>
                    <option>EUR (€ Euro)</option>
                    <option>GBP (£ Libra esterlina)</option>
                    <option>USD ($ Dólar estadounidense)</option>
                    <option>AUD (A$ Dólar australiano)</option>
                  </select>
                </div>
                <div className="form-group full">
                  <label htmlFor="notes">DESTINOS / NOTAS DE ITINERARIO</label>
                  <textarea id="notes" name="notes" rows={3} placeholder="Por favor, indique los destinos, atracciones o peticiones especiales que tenga en mente." />
                </div>
              </div>
              {submitError && (
                <p style={{ color: "#e53e3e", fontSize: "0.82rem", textAlign: "center", border: "1px solid rgba(229,62,62,0.2)", borderRadius: "4px", padding: "10px 14px", background: "rgba(229,62,62,0.05)" }}>
                  {submitError}
                </p>
              )}
              <p style={{ fontSize: "0.78rem", color: "#888", textAlign: "center", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "4px", padding: "10px 14px", background: "rgba(0,0,0,0.02)" }}>
                ※ Tras recibir su consulta, le responderemos en inglés.
              </p>
              <button type="submit" disabled={isSubmitting} className="form-submit-btn">
                {isSubmitting ? "Enviando..." : "Enviar Consulta"}
              </button>
              <p className="form-note">
                Al enviar este formulario, acepta nuestra{" "}
                <a href="#" onClick={(e) => e.preventDefault()}>Política de Privacidad</a>. Sin compromiso.
              </p>
            </form>
          </div>

          {/* ── RIGHT: 6 Reasons ──────────────────────────────────────────── */}
          <div>
            <div style={{ marginBottom: "32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "1px", background: "#c9a84c" }} />
                <span style={{ color: "#c9a84c", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>POR QUÉ SLTCS</span>
              </div>
              <div style={{ marginBottom: "12px" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#c9a84c"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.2, margin: 0 }}>
                6 Razones por las que los Viajeros<br />Eligen <span style={{ color: "#c9a84c" }}>SLTCS</span>
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {reasons.map((r) => (
                <div
                  key={r.num}
                  style={{
                    display: "flex",
                    alignItems: "stretch",
                    background: "#f9f5ee",
                    border: "1px solid rgba(201,168,76,0.25)",
                    borderRadius: "10px",
                    overflow: "hidden",
                    transition: "box-shadow 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(201,168,76,0.15)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.5)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.25)"; }}
                >
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px", padding: "18px 16px", minWidth: "76px", borderRight: "1px solid rgba(201,168,76,0.15)" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#f0e8d0", border: "1px solid rgba(201,168,76,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#1a3a1a"><path d={r.svgPath} /></svg>
                    </div>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: "#c9a84c", lineHeight: 1 }}>{r.num}</span>
                  </div>
                  <div style={{ padding: "18px 20px", flex: 1 }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", fontWeight: 700, color: "#1a1a1a", margin: "0 0 6px", lineHeight: 1.3 }}>{r.title}</h3>
                    <p style={{ fontSize: "0.8rem", color: "#4a4a4a", lineHeight: 1.65, margin: 0 }}>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Concerns ─────────────────────────────────────────────────────────────────
function Concerns() {
  const concerns = [
    { label: "Barreras idiomáticas", svgPath: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" },
    { label: "Moverse de forma independiente", svgPath: "M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" },
    { label: "Ser cobrado en exceso", svgPath: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" },
    { label: "Preocupaciones de seguridad en taxis", svgPath: "M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2zm0 4l6 3.27V12c0 3.79-2.58 7.33-6 8.93-3.42-1.6-6-5.14-6-8.93V9.27L12 6z" },
    { label: "Encontrar los lugares correctos", svgPath: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" },
    { label: "Cumplir con los horarios", svgPath: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" },
    { label: "Viajar con niños o personas mayores", svgPath: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" },
    { label: "Entender la cultura local", svgPath: "M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" },
  ];
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="concerns" style={{ background: "#0d0f13", padding: "100px 0" }}>
      <div className="container">
        <div style={{ marginBottom: "56px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "32px", height: "1px", background: "#c9a84c" }} />
            <span style={{ color: "#c9a84c", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>SUS PREOCUPACIONES</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, margin: 0 }}>
            ¿Preocupado por Viajar<br />a <span style={{ color: "#c9a84c" }}>Sri Lanka?</span>
          </h2>
        </div>

        <div className="concerns-inline-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "40px" }}>
          {concerns.map((c) => (
            <div
              key={c.label}
              style={{ display: "flex", alignItems: "center", gap: "14px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "4px", padding: "18px 20px", transition: "border-color 0.2s, background 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.3)"; (e.currentTarget as HTMLDivElement).style.background = "rgba(201,168,76,0.04)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)"; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#c9a84c" style={{ flexShrink: 0, opacity: 0.8 }}><path d={c.svgPath} /></svg>
              <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.4 }}>{c.label}</span>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", background: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.04) 100%)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "4px", padding: "36px 48px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
            <div style={{ flexShrink: 0, width: "48px", height: "48px", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#c9a84c"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2zm0 4l6 3.27V12c0 3.79-2.58 7.33-6 8.93-3.42-1.6-6-5.14-6-8.93V9.27L12 6z" /></svg>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 700, color: "#fff", margin: "0 0 8px" }}>SLTCS Resuelve Cada Una de Estas Preocupaciones</h3>
              <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: 0, maxWidth: "560px" }}>Su conductor privado dedicado se encarga de todo — navegación, comunicación, horarios y experiencia local. Todo lo que necesita hacer es relajarse y disfrutar del viaje.</p>
            </div>
          </div>
          <button
            onClick={() => scrollTo("contact")}
            style={{ flexShrink: 0, display: "inline-flex", alignItems: "center", gap: "10px", background: "#c9a84c", border: "none", color: "#0a0c0f", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "16px 36px", borderRadius: "3px", cursor: "pointer", transition: "opacity 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.88"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            Consulte Ahora — Es Gratis
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Plans ────────────────────────────────────────────────────────────────────
function Plans() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="plans">
      <div className="container">
        <div className="section-eyebrow">NUESTROS PLANES</div>
        <h2 className="section-title">Elija el Plan<br />Que Mejor Se Adapte a Usted</h2>
        <p className="section-sub">Ya sea que viaje con un presupuesto ajustado o busque una experiencia premium, tenemos un plan adaptado a sus necesidades.</p>
        <div className="plans-grid">
          <div className="plan-card">
            <div className="plan-tier">BRONCE</div>
            <h3>Plan Bronce</h3>
            <p>Para viajeros con presupuesto ajustado que necesitan transporte fiable.</p>
            <ul className="plan-features">
              <li>Conductor en prácticas</li>
              <li>Traslados al aeropuerto y punto a punto</li>
              <li>Coordinador local de habla inglesa</li>
              <li>Vehículo limpio con aire acondicionado</li>
            </ul>
            <a href="#contact" className="plan-cta" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>Ver Detalles</a>
          </div>
          <div className="plan-card featured">
            <div className="plan-badge-popular">Más Popular</div>
            <div className="plan-tier">PLATA</div>
            <h3>Plan Plata</h3>
            <p>El mejor equilibrio entre valor y calidad — nuestra opción más popular.</p>
            <ul className="plan-features">
              <li>Conductor Turístico certificado por el gobierno o superior</li>
              <li>Acompañamiento y comentarios en atracciones</li>
              <li>Coordinador local de habla inglesa</li>
              <li>Reservas de safari y actividades gestionadas</li>
              <li>Servicios de guía incluidos sin cargo adicional</li>
            </ul>
            <a href="#contact" className="plan-cta" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>Ver Detalles</a>
          </div>
          <div className="plan-card">
            <div className="plan-tier">ORO</div>
            <h3>Plan Oro</h3>
            <p>Para viajeros que exigen la mejor experiencia en Sri Lanka.</p>
            <ul className="plan-features">
              <li>Conductor Guía Chófer mejor valorado garantizado</li>
              <li>Acompañamiento de día completo y comentarios expertos</li>
              <li>Coordinador local de habla inglesa</li>
              <li>Estructura de soporte dual para total tranquilidad</li>
              <li>Servicio de conserjería premium</li>
            </ul>
            <a href="#contact" className="plan-cta" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>Ver Detalles</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Pricing Preview ──────────────────────────────────────────────────────────
type VehicleKeyHP = "sedan" | "van" | "bigvan";
type TierKeyHP = "bronze" | "silver" | "gold";
type CurrencyKeyHP = "USD" | "GBP" | "EUR" | "AUD";

const CURRENCY_SYMBOLS_HP: Record<CurrencyKeyHP, string> = { USD: "$", GBP: "£", EUR: "€", AUD: "A$" };

const PRICES_HP: Record<CurrencyKeyHP, Record<TierKeyHP, Record<VehicleKeyHP, number[]>>> = {
  USD: {
    bronze: { sedan: [270,340,410,480,520,560,600,680,750,830,900,980,1050,1130,1200,1280,1350,1430,1500], van: [330,410,500,580,630,670,720,820,900,1000,1080,1180,1260,1360,1440,1540,1620,1720,1800], bigvan: [390,480,590,680,740,780,840,950,1050,1160,1260,1370,1470,1580,1680,1790,1890,2000,2100] },
    silver: { sedan: [310,400,490,580,640,700,760,860,950,1050,1140,1240,1330,1430,1520,1620,1710,1810,1900], van: [370,470,580,680,750,810,880,1000,1100,1220,1320,1440,1540,1660,1760,1880,1980,2100,2200], bigvan: [430,540,670,780,860,920,1000,1130,1250,1380,1500,1630,1750,1880,2000,2130,2250,2380,2500] },
    gold:   { sedan: [350,460,570,680,760,840,920,1040,1150,1270,1380,1500,1610,1730,1840,1960,2070,2190,2300], van: [410,530,660,780,870,950,1040,1180,1300,1440,1560,1700,1820,1960,2080,2220,2340,2480,2600], bigvan: [470,600,750,880,980,1060,1160,1310,1450,1600,1740,1890,2030,2180,2320,2470,2610,2760,2900] },
  },
  GBP: {
    bronze: { sedan: [200,240,290,340,370,400,420,480,530,590,640,690,740,800,850,910,950,1010,1060], van: [250,290,360,420,450,480,510,570,640,710,770,830,890,960,1030,1090,1150,1210,1280], bigvan: [290,350,430,490,540,570,600,680,760,840,920,980,1060,1140,1220,1300,1360,1440,1520] },
    silver: { sedan: [230,290,350,420,460,510,540,620,680,760,820,890,950,1030,1090,1170,1220,1300,1360], van: [280,340,420,500,540,590,630,710,790,880,950,1030,1100,1190,1270,1350,1420,1500,1580], bigvan: [320,400,490,570,630,680,720,820,910,1010,1100,1180,1270,1370,1460,1560,1630,1730,1820] },
    gold:   { sedan: [260,340,410,500,550,620,660,760,830,930,1000,1090,1160,1260,1330,1430,1490,1590,1660], van: [310,390,480,580,630,700,750,850,940,1050,1130,1230,1310,1420,1510,1610,1690,1790,1880], bigvan: [350,450,550,650,720,790,840,960,1060,1180,1280,1380,1480,1600,1700,1820,1900,2020,2120] },
  },
  EUR: {
    bronze: { sedan: [230,280,350,400,440,460,500,560,620,680,740,810,870,930,990,1050,1120,1180,1240], van: [280,340,420,480,530,560,600,680,750,830,900,980,1050,1130,1200,1280,1350,1430,1500], bigvan: [330,400,500,570,620,650,700,790,880,970,1060,1140,1230,1320,1410,1500,1580,1670,1760] },
    silver: { sedan: [270,330,420,490,550,590,640,720,800,880,960,1040,1120,1200,1280,1360,1440,1520,1600], van: [320,390,490,570,640,690,740,840,930,1030,1120,1210,1300,1400,1490,1590,1670,1770,1860], bigvan: [370,450,570,660,730,780,840,950,1060,1170,1280,1370,1480,1590,1700,1810,1900,2010,2120] },
    gold:   { sedan: [310,380,490,580,660,720,780,880,980,1080,1180,1270,1370,1470,1570,1670,1760,1860,1960], van: [360,440,560,660,750,820,880,1000,1110,1230,1340,1440,1550,1670,1780,1900,1990,2110,2220], bigvan: [410,500,640,750,840,910,980,1110,1240,1370,1500,1600,1730,1860,1990,2120,2220,2350,2480] },
  },
  AUD: {
    bronze: { sedan: [380,480,580,680,730,790,840,960,1050,1170,1260,1380,1470,1590,1680,1800,1890,2010,2100], van: [470,580,700,820,890,940,1010,1150,1260,1400,1520,1660,1770,1910,2020,2160,2270,2410,2520], bigvan: [550,680,830,960,1040,1100,1180,1330,1470,1630,1770,1920,2060,2220,2360,2510,2650,2800,2940] },
    silver: { sedan: [440,560,690,820,900,980,1070,1210,1330,1470,1600,1740,1870,2010,2130,2270,2400,2540,2660], van: [520,660,820,960,1050,1140,1240,1400,1540,1710,1850,2020,2160,2330,2470,2640,2780,2940,3080], bigvan: [610,760,940,1100,1210,1290,1400,1590,1750,1940,2100,2290,2450,2640,2800,2990,3150,3340,3500] },
    gold:   { sedan: [490,650,800,960,1070,1180,1290,1460,1610,1780,1940,2100,2260,2430,2580,2750,2900,3070,3220], van: [580,750,930,1100,1220,1330,1460,1640,1820,2020,2190,2380,2550,2750,2920,3110,3280,3480,3640], bigvan: [660,840,1050,1240,1380,1490,1630,1840,2030,2240,2440,2650,2850,3060,3250,3460,3660,3870,4060] },
  },
};

const DAYS_HP = Array.from({ length: 19 }, (_, i) => i + 2);

const TIERS_HP: { key: TierKeyHP; label: string; badge?: string; color: string }[] = [
  { key: "bronze", label: "Plan Bronce", color: "#cd7f32" },
  { key: "silver", label: "Plan Plata", badge: "Más Popular", color: "#c9a84c" },
  { key: "gold",   label: "Plan Oro",   color: "#d4af37" },
];

const VEHICLES_HP: { key: VehicleKeyHP; label: string; capacity: string }[] = [
  { key: "sedan",  label: "Sedán",       capacity: "1–3 personas" },
  { key: "van",    label: "Furgoneta",   capacity: "3–6 personas" },
  { key: "bigvan", label: "Furgoneta Grande", capacity: "6–9 personas" },
];

function PriceCard({ tier, currency }: { tier: (typeof TIERS_HP)[number]; currency: CurrencyKeyHP }) {
  const [vehicle, setVehicle] = useState<VehicleKeyHP>("sedan");
  const sym = CURRENCY_SYMBOLS_HP[currency];
  const prices = PRICES_HP[currency][tier.key][vehicle];
  return (
    <div style={{ background: "#ffffff", border: `1.5px solid ${tier.color}50`, borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
      <div style={{ background: `linear-gradient(135deg, ${tier.color}22, ${tier.color}08)`, borderBottom: `1px solid ${tier.color}30`, padding: "16px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
          <span style={{ background: tier.color, color: "#000", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", padding: "2px 8px", borderRadius: "20px", textTransform: "uppercase" }}>{tier.key === "bronze" ? "BRONCE" : tier.key === "silver" ? "PLATA" : "ORO"}</span>
          {tier.badge && <span style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)", color: "#c9a84c", fontSize: "0.6rem", fontWeight: 600, padding: "2px 7px", borderRadius: "20px", textTransform: "uppercase" }}>{tier.badge}</span>}
        </div>
        <h3 style={{ color: "#1a1a1a", fontSize: "1rem", fontWeight: 700, margin: 0 }}>{tier.label}</h3>
      </div>
      <div style={{ display: "flex", borderBottom: "1px solid #e8e2d8", background: "#f9f5ee" }}>
        {VEHICLES_HP.map((v) => (
          <button key={v.key} onClick={() => setVehicle(v.key)} style={{ flex: 1, padding: "8px 4px", background: "none", border: "none", borderBottom: vehicle === v.key ? `2px solid ${tier.color}` : "2px solid transparent", color: vehicle === v.key ? tier.color : "#888", fontSize: "0.7rem", fontWeight: vehicle === v.key ? 600 : 400, cursor: "pointer", transition: "all 0.2s", textAlign: "center", lineHeight: 1.3 }}>
            <div>{v.label}</div>
            <div style={{ fontSize: "0.6rem", opacity: 0.7 }}>{v.capacity}</div>
          </button>
        ))}
      </div>
      <div style={{ flex: 1 }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ padding: "8px 14px", textAlign: "left", color: "#888", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", background: "#f4f0e8" }}>Días</th>
              <th style={{ padding: "8px 14px", textAlign: "right", color: "#888", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", background: "#f4f0e8" }}>Precio (IVA incl.)</th>
            </tr>
          </thead>
          <tbody>
            {DAYS_HP.map((day, idx) => (
              <tr key={day} style={{ borderBottom: "1px solid #ede8e0", background: idx % 2 === 0 ? "transparent" : "#faf7f2" }}>
                <td style={{ padding: "8px 14px", color: "#4a4a4a", fontSize: "0.82rem" }}>{day} días</td>
                <td style={{ padding: "8px 14px", textAlign: "right", color: "#1a1a1a", fontSize: "0.9rem", fontWeight: 600 }}>{sym}{prices[idx].toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PricingPreview() {
  const [currency, setCurrency] = useState<CurrencyKeyHP>("EUR");
  return (
    <section id="pricing" style={{ background: "#faf7f2", padding: "80px 0" }}>
      <div className="container">
        <div className="section-eyebrow" style={{ color: "#c9a84c" }}>PRECIOS TRANSPARENTES</div>
        <h2 className="section-title" style={{ color: "#1a1a1a" }}>Lista de Precios Fijos</h2>
        <p className="section-sub" style={{ color: "#4a4a4a", marginBottom: "32px" }}>Todos los precios incluyen impuestos y se aplican a conductores de habla inglesa. Seleccione su moneda y tipo de vehículo preferidos.</p>

        <div style={{ display: "flex", gap: "8px", marginBottom: "28px", flexWrap: "wrap" }}>
          {(["USD", "GBP", "EUR", "AUD"] as CurrencyKeyHP[]).map((c) => (
            <button key={c} onClick={() => setCurrency(c)} style={{ padding: "8px 20px", background: currency === c ? "rgba(201,168,76,0.15)" : "#ffffff", border: currency === c ? "1.5px solid rgba(201,168,76,0.6)" : "1.5px solid #d1ccc4", borderRadius: "6px", color: currency === c ? "#c9a84c" : "#4a4a4a", fontSize: "0.85rem", fontWeight: currency === c ? 700 : 400, cursor: "pointer", transition: "all 0.2s" }}>
              {CURRENCY_SYMBOLS_HP[c]} {c}
            </button>
          ))}
        </div>

        <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "8px", padding: "12px 18px", marginBottom: "28px" }}>
          <p style={{ color: "#4a4a4a", fontSize: "0.85rem", lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: "#c9a84c" }}>Nota:</strong> Pueden aplicarse cargos adicionales si la distancia total supera la estimación estándar, o si el punto de recogida/entrega está fuera del área del aeropuerto.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {TIERS_HP.map((tier) => <PriceCard key={tier.key} tier={tier} currency={currency} />)}
        </div>

        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <a href="/price" className="btn-outline" style={{ display: "inline-block", color: "#c9a84c", borderColor: "#c9a84c" }}>Ver Página de Precios Completa →</a>
        </div>
      </div>
    </section>
  );
}

// ─── Itineraries ──────────────────────────────────────────────────────────────
type DayItem = { day: string; title: string; desc: string };
type Itinerary = {
  id: string; label: string; title: string; duration: string;
  focus: string; highlights: string; idealFor: string; days: DayItem[];
};

const ITINERARIES: Itinerary[] = [
  {
    id: "4n5d", label: "4N/5D",
    title: "4 Noches / 5 Días", duration: "5 Días",
    focus: "Aspectos Culturales Destacados", highlights: "Sigiriya, Kandy, Nuwara Eliya, Galle",
    idealFor: "Visitantes por primera vez con tiempo limitado",
    days: [
      { day: "Día 1", title: "Llegada → Sigiriya", desc: "Llegada al Aeropuerto de Colombo. Traslado a Sigiriya pasando por el Templo Rupestre de Dambulla (UNESCO). Check-in en el hotel en la zona de Sigiriya." },
      { day: "Día 2", title: "Fortaleza de la Roca de Sigiriya", desc: "Ascenso temprano a la Roca de Sigiriya (UNESCO). Tarde libre o safari opcional en jeep en el Parque Nacional Minneriya." },
      { day: "Día 3", title: "Kandy — Templo del Diente", desc: "Traslado a Kandy pasando por un jardín de especias en Matale. Visita al Templo de la Sagrada Reliquia del Diente (UNESCO). Espectáculo de danza kandiana por la tarde." },
      { day: "Día 4", title: "Nuwara Eliya → Galle", desc: "Pintoresco recorrido por exuberantes plantaciones de té. Experiencia de recolección de té. Continuación hasta el Fuerte de Galle (UNESCO) en la costa sur." },
      { day: "Día 5", title: "Fuerte de Galle → Salida", desc: "Exploración matutina de las murallas coloniales holandesas del Fuerte de Galle, tiendas boutique y vistas al océano. Traslado al Aeropuerto de Colombo." },
    ],
  },
  {
    id: "5n6d", label: "5N/6D",
    title: "5 Noches / 6 Días", duration: "6 Días",
    focus: "Cultura + Naturaleza", highlights: "Sigiriya, Kandy, Ella, Galle",
    idealFor: "Parejas y grupos pequeños",
    days: [
      { day: "Día 1", title: "Llegada → Sigiriya", desc: "Llegada al Aeropuerto de Colombo. Traslado a Sigiriya pasando por el Templo Rupestre de Dambulla. Noche en la zona de Sigiriya." },
      { day: "Día 2", title: "Sigiriya y Safari", desc: "Ascenso a la Roca de Sigiriya por la mañana. Safari de fauna en el Parque Nacional Minneriya o Kaudulla por la tarde." },
      { day: "Día 3", title: "Visita a Kandy", desc: "Traslado a Kandy pasando por el Jardín de Especias de Matale. Visita al Templo de la Reliquia del Diente y los Jardines Botánicos de Peradeniya." },
      { day: "Día 4", title: "Nuwara Eliya y Ella", desc: "Recorrido por las impresionantes tierras altas del té. Visita a una fábrica de té, luego continuación hasta Ella para ver el famoso Puente de los Nueve Arcos." },
      { day: "Día 5", title: "Safari en el Parque Nacional de Yala", desc: "Safari en jeep de día completo en el Parque Nacional de Yala — hogar de leopardos, elefantes y exótica avifauna." },
      { day: "Día 6", title: "Fuerte de Galle → Salida", desc: "Visita matutina al Fuerte de Galle (UNESCO). Traslado al Aeropuerto de Colombo." },
    ],
  },
  {
    id: "6n7d", label: "6N/7D",
    title: "6 Noches / 7 Días", duration: "7 Días",
    focus: "Experiencia Completa de la Isla", highlights: "Sigiriya, Kandy, Tren del Té, Yala, Galle",
    idealFor: "Familias y exploradores exhaustivos",
    days: [
      { day: "Día 1", title: "Llegada → Triángulo Cultural", desc: "Llegada al BIA. Conducción hacia el norte pasando por el Templo Rupestre de Dambulla hasta la zona de Sigiriya / Kandalama." },
      { day: "Día 2", title: "Sigiriya y Polonnaruwa", desc: "Ascenso a la Roca de Sigiriya. Visita por la tarde a la antigua ciudad de Polonnaruwa (Patrimonio Mundial UNESCO)." },
      { day: "Día 3", title: "Kandy", desc: "Traslado a Kandy pasando por un jardín de especias. Visita al Templo de la Reliquia del Diente y espectáculo de danza kandiana tradicional." },
      { day: "Día 4", title: "Nuwara Eliya — Tierras Altas del Té", desc: "Pintoresco recorrido por el país del té. Experiencia de recolección de té y té de la tarde en un hotel de plantación de época colonial." },
      { day: "Día 5", title: "Ella y el Puente de los Nueve Arcos", desc: "Viaje en el icónico tren del té. Visita al Puente de los Nueve Arcos y el Pequeño Pico de Adán en Ella." },
      { day: "Día 6", title: "Parque Nacional de Yala", desc: "Safari en jeep de día completo en Yala — la reserva natural más importante de Sri Lanka. Leopardos, elefantes, cocodrilos y más." },
      { day: "Día 7", title: "Fuerte de Galle → Salida", desc: "Mañana en el Fuerte de Galle (UNESCO). Traslado al Aeropuerto de Colombo pasando por la playa de Mirissa (parada opcional)." },
    ],
  },
  {
    id: "5to7d", label: "5–7 Días Cultural",
    title: "5 a 7 Días\nTriángulo Cultural",
    duration: "5–7 Días", focus: "Sitios Patrimonio UNESCO y Safari",
    highlights: "Sigiriya, Anuradhapura, Polonnaruwa, Kandy",
    idealFor: "Entusiastas de la historia y la cultura",
    days: [
      { day: "Día 1", title: "Aeropuerto → Templo Rupestre de Dambulla → Zona de Sigiriya", desc: "Salida desde el Aeropuerto de Colombo (aprox. 3–4 horas en coche). En ruta, visita al Templo Rupestre de Dambulla — un impresionante sitio Patrimonio Mundial UNESCO tallado en una pared rocosa. Check-in en Heritance Kandalama, una obra maestra arquitectónica diseñada por Geoffrey Bawa." },
      { day: "Día 2", title: "Fortaleza de la Roca de Sigiriya y Safari en Minneriya", desc: "Ascenso temprano a la Roca de Sigiriya (UNESCO) — reserve 2,5–3 horas para el recorrido de ida y vuelta. Safari en jeep por la tarde en el Parque Nacional Minneriya, famoso por sus concentraciones de elefantes. Regreso al hotel." },
      { day: "Día 3", title: "Capital Antigua de Anuradhapura", desc: "Explore las vastas ruinas de Anuradhapura (UNESCO) — la primera capital antigua de Sri Lanka. Visite el sagrado Árbol Bo, la Estupa Ruwanwelisaya y otros monumentos notables. Reserve un día completo para este extenso yacimiento." },
      { day: "Día 4", title: "Polonnaruwa y Roca de Pidurangala", desc: "Ascenso opcional a la Roca de Pidurangala para vistas espectaculares de Sigiriya. Luego explore la ciudad medieval de Polonnaruwa (UNESCO) — templos bien conservados, palacios y colosales estatuas de Buda." },
      { day: "Día 5", title: "Kandy pasando por el Jardín de Especias", desc: "Traslado a Kandy pasando por un jardín de especias tradicional en Matale. Visita al Templo de la Sagrada Reliquia del Diente (UNESCO). Espectáculo de danza cultural kandiana por la tarde." },
    ],
  },
  {
    id: "10to14d", label: "10 Días–2 Semanas",
    title: "10 Días a 2 Semanas\nPlan Clásico para Primeros Visitantes",
    duration: "10–14 Días", focus: "Experiencia Completa de la Isla",
    highlights: "Sigiriya, Kandy, Tren del Té, Yala, Galle, Playa",
    idealFor: "Primeros visitantes que quieren la experiencia completa de Sri Lanka",
    days: [
      { day: "Día 1", title: "Aeropuerto → Templo Rupestre de Dambulla → Sigiriya", desc: "Salida desde el Aeropuerto de Colombo o Negombo. Traslado al Triángulo Cultural (aprox. 3 horas). Parada en el Templo Rupestre de Dambulla para almorzar y visitar. Check-in en Heritance Kandalama — un célebre hotel de Geoffrey Bawa rodeado de bosque y lago." },
      { day: "Día 2", title: "Roca de Sigiriya y Anuradhapura", desc: "Ascenso matutino a la Fortaleza de la Roca de Sigiriya (UNESCO). Traslado a la capital antigua de Anuradhapura (1,5–2 horas). Explore el sagrado Árbol Bo, estupas y ruinas antiguas. Regreso al hotel." },
      { day: "Día 3", title: "Kandy — Jardín de Especias y Templo", desc: "Traslado a Kandy pasando por un jardín de especias en Matale (aprox. 3 horas). Visita a la Fábrica de Té Geragama y al Templo de la Sagrada Reliquia del Diente (UNESCO). Espectáculo de danza kandiana por la tarde." },
      { day: "Día 4", title: "Nuwara Eliya — Tierras Altas del Té", desc: "Pintoresco recorrido de montaña hasta Nuwara Eliya a través de exuberantes plantaciones de té. Experiencia de recolección de té y té de la tarde en un hotel de plantación colonial. Explore el encantador pueblo de la 'Pequeña Inglaterra'." },
      { day: "Día 5", title: "Tren Escénico del Té — Puente de los Nueve Arcos", desc: "Suba al icónico tren del país del té para un impresionante viaje a través de montañas neblinosas. Fotografíe el famoso Puente de los Nueve Arcos. Llegada a Ella." },
      { day: "Día 6", title: "Visita a Ella → Yala", desc: "Senderismo matutino hasta el Pequeño Pico de Adán y la Roca de Ella para vistas panorámicas. Traslado por la tarde a la zona de Yala (aprox. 2 horas). Check-in en un lodge de safari." },
      { day: "Día 7", title: "Safari en el Parque Nacional de Yala → Playa de Mirissa", desc: "Safari en jeep temprano por la mañana en Yala — el parque natural más famoso de Sri Lanka, hogar de la mayor densidad de leopardos del mundo. Traslado por la tarde al resort de playa de Mirissa." },
      { day: "Día 8", title: "Fuerte de Galle y Día de Playa", desc: "Visita matutina al Fuerte de Galle (UNESCO) — murallas coloniales holandesas, tiendas boutique y vistas al océano. Tarde libre en la playa de Mirissa. Avistamiento opcional de ballenas (de temporada)." },
      { day: "Día 9", title: "Negombo — Ayurveda y Descanso", desc: "Traslado a Negombo en la costa oeste (aprox. 3–4 horas). Check-in en un hotel de Ayurveda para tratamientos tradicionales y relajación antes de su salida." },
      { day: "Día 10", title: "Visita a Colombo → Aeropuerto", desc: "Exploración matutina de Colombo — Templo Gangaramaya, Mercado Pettah y el vibrante Galle Face Green. Traslado al Aeropuerto de Colombo (BIA) para su vuelo de salida." },
    ],
  },
];

function Itineraries() {
  const [activeTab, setActiveTab] = useState("4n5d");
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const active = ITINERARIES.find((it) => it.id === activeTab)!;

  return (
    <section id="courses">
      <div className="container">
        <div className="section-eyebrow">ITINERARIOS MODELO</div>
        <h2 className="section-title">Itinerarios Sugeridos</h2>
        <p className="section-sub">¿No sabe por dónde empezar? Explore nuestros itinerarios de muestra seleccionados y úselos como inspiración para su viaje perfecto a Sri Lanka.</p>
        <div className="course-tabs">
          {ITINERARIES.map((it) => (
            <button key={it.id} className={`course-tab${activeTab === it.id ? " active" : ""}`} onClick={() => setActiveTab(it.id)}>
              {it.label}
            </button>
          ))}
        </div>
        <div className="course-panel active">
          <div className="course-overview">
            <div className="course-meta">
              <h3 style={{ whiteSpace: "pre-line" }}>{active.title}</h3>
              <div className="course-meta-item"><span className="course-meta-label">Duración</span><span className="course-meta-value">{active.duration}</span></div>
              <div className="course-meta-item"><span className="course-meta-label">Enfoque</span><span className="course-meta-value">{active.focus}</span></div>
              <div className="course-meta-item"><span className="course-meta-label">Destacados</span><span className="course-meta-value">{active.highlights}</span></div>
              <div className="course-meta-item"><span className="course-meta-label">Ideal Para</span><span className="course-meta-value">{active.idealFor}</span></div>
            </div>
            <div className="course-timeline">
              <h4>Resumen Día a Día</h4>
              {active.days.map((d, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-left">
                    <div className="timeline-day">{d.day}</div>
                    {i < active.days.length - 1 && <div className="timeline-line" />}
                  </div>
                  <div className="timeline-content">
                    <h5>{d.title}</h5>
                    <p>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="courses-cta">
          <a href="#contact" className="btn-outline" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>
            Ver Todos los Planes y Obtener Presupuesto
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Destinations ─────────────────────────────────────────────────────────────
function Destinations() {
  const dests = [
    { img: IMAGES.hero2, badge: "Patrimonio Mundial UNESCO", title: "Fortaleza de la Roca de Sigiriya", desc: "Un antiguo palacio celestial encaramado sobre una roca volcánica de 200m — el monumento más icónico de Sri Lanka." },
    { img: IMAGES.hero4, badge: "Patrimonio Mundial UNESCO", title: "Kandy — Templo del Diente", desc: "El sagrado templo que alberga la reliquia del diente del Buda, situado junto a un tranquilo lago." },
    { img: IMAGES.destNuwara, badge: "País del Té", title: "Nuwara Eliya — Tierras Altas del Té", desc: "Exuberantes plantaciones de té esmeralda en altitud. Experimente la recolección de té, visitas a fábricas y hoteles de plantación de época colonial." },
    { img: IMAGES.hero5, badge: "Patrimonio Mundial UNESCO", title: "Fuerte de Galle", desc: "Una ciudad colonial holandesa perfectamente conservada en la costa sur, llena de boutiques y cafés." },
    { img: IMAGES.destYala, badge: "Safari de Fauna", title: "Parque Nacional de Yala", desc: "Hogar de la mayor densidad de leopardos del mundo. También aviste elefantes, cocodrilos y cientos de especies de aves." },
    { img: IMAGES.destElla, badge: "Ferrocarril Escénico", title: "Ella — Puente de los Nueve Arcos", desc: "El icónico viaducto ferroviario colonial rodeado de exuberante jungla y plantaciones de té. Un momento imprescindible para fotografiar." },
  ];
  return (
    <section id="destinations">
      <div className="container">
        <div className="section-eyebrow">DESTINOS</div>
        <h2 className="section-title">Los Destinos Más<br />Icónicos de Sri Lanka</h2>
        <p className="section-sub">Desde sitios Patrimonio Mundial UNESCO hasta playas vírgenes, Sri Lanka concentra una extraordinaria variedad de experiencias en una isla compacta.</p>
        <div className="destinations-grid">
          {dests.map((d, i) => (
            <div key={i} className="dest-card">
              <img src={d.img} alt={d.title} />
              <div className="dest-card-overlay">
                <div className="dest-card-badge">{d.badge}</div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Reviews ──────────────────────────────────────────────────────────────────
function Reviews() {
  const [slide, setSlide] = useState(0);
  const reviews = [
    {
      photo: "/manus-storage/review1_r_family_eranga_a3545b4c_645c08e0.png",
      photoPosition: "center center",
      name: "Familia R",
      pax: "4 pasajeros",
      period: "Agosto 2025",
      driver: "Eranga",
      quote: "Servicio profesional desde la primera consulta hasta el último traslado — nos sentimos completamente tranquilos durante todo el viaje.",
      body: "Desde la reserva previa hasta el día del viaje, el equipo respondió con rapidez y claridad. Los precios y la planificación del itinerario se explicaron de manera que no dejaron lugar a dudas. El día del viaje, Eranga condujo con cuidado y compostura, reorientando sin problemas para evitar el tráfico y mantenernos en horario. Su profundo conocimiento de Anuradhapura, Dambulla, Sigiriya y Polonnaruwa nos proporcionó una rica base histórica para comprender este extraordinario país. Nos consideramos afortunados de haberle tenido como conductor y guía.",
    },
    {
      photo: "/manus-storage/review2_r_family_aruna_3473eef8_11b2f7c2.png",
      name: "Familia R",
      pax: "4 pasajeros",
      period: "Marzo 2026",
      driver: "Aruna",
      quote: "Aruna fue infinitamente paciente con nuestros hijos y hizo que cada momento del viaje pareciera sin esfuerzo.",
      body: "Tener a Aruna con nosotros fue un verdadero golpe de suerte. Su cálida actitud con los niños nos tranquilizó a todos, y su inglés claro significó que nunca se perdió nada en la traducción. Puntual, lleno de sugerencias reflexivas para lugares de interés y restaurantes locales, y consistentemente tranquilo al volante — fue todo lo que podíamos haber pedido. (¡Probablemente saltaremos esa carretera entre Passikudah y Sigiriya la próxima vez!) Le recomendamos sin dudarlo: atento, conocedor y completamente digno de confianza.",
    },
    {
      photo: "/manus-storage/review_ranjana_new_2b654dea_79c6e0c2.png",
      name: "Pareja H",
      pax: "2 pasajeros",
      period: "Noviembre 2025",
      driver: "Ranjana",
      quote: "Ranjana convirtió nuestro viaje a Sri Lanka en algo mucho más allá del turismo ordinario.",
      body: "Reservamos un charter privado para dos y nos emparejaron con Ranjana — una decisión de la que no podríamos estar más contentos. Aportó una tranquila confianza a cada trayecto, navegando por carreteras de montaña y bulliciosos centros urbanos con igual facilidad. Lo que más destacó fue su genuino entusiasmo: sugirió una experiencia de rafting en aguas bravas que no habíamos planeado, y se convirtió en uno de los momentos culminantes del viaje. Su conocimiento local de miradores ocultos, restaurantes auténticos y costumbres culturales enriqueció cada día.",
    },
    {
      photo: "/manus-storage/review4_as_priyanth_2aeb5d81_c847c90d.png",
      name: "A&S",
      pax: "2 pasajeros",
      period: "Agosto 2025",
      driver: "Priyanth",
      quote: "Priyanth hizo que seis días parecieran un viaje con un amigo de confianza más que con un conductor contratado.",
      body: "Partiendo desde el Aeropuerto de Colombo, Priyanth nos guió por Sigiriya, Kandy, Nuwara Eliya y Galle durante seis días. Fue puntual y condujo con cuidado en todo momento, siempre comprobando cómo nos sentíamos — algo que realmente apreciamos en los tramos más largos. Su alegre compañía hizo que cada traslado fuera agradable, y sus conocimientos sobre la historia y cultura de Sri Lanka añadieron profundidad real a lo que vimos. También nos llevó a un mirador impresionante que no estaba en nuestro plan original, y nos presentó restaurantes locales que fueron simplemente excepcionales.",
    },
    {
      photo: "/manus-storage/review5_t_couple_indika_519f1510_b6cf1cec.png",
      name: "Pareja T",
      pax: "2 pasajeros",
      period: "Octubre 2025",
      driver: "Indika",
      quote: "Gracias a Indika, nuestro viaje se convirtió no solo en turismo — sino en un viaje ricamente colorido e inolvidable.",
      body: "Viajamos como pareja desde Negombo por Sigiriya, Kandy, Nuwara Eliya y Mirissa durante cinco días. En la primera mañana — que resultó ser un cumpleaños — apareció un pastel en el desayuno, organizado discretamente por Indika a través del hotel. También nos regaló una pequeña figura de elefante. Nos emocionamos genuinamente. Durante todo el viaje fue una presencia estable y tranquilizadora: informándonos antes de cada lugar, manejando los madrugones sin quejarse, recomendando restaurantes que frecuenta personalmente (todos excelentes), e incluso viajando en tren con nosotros para mantenernos seguros entre la multitud.",
    },
    {
      photo: "/manus-storage/review_dfamily_chamil_9214e24c_e972933a.png",
      name: "Familia D",
      pax: "5 pasajeros",
      period: "Diciembre 2025",
      driver: "Chamil",
      quote: "A pesar de tener que reorganizar completamente nuestro itinerario tras un ciclón, Chamil convirtió el viaje en el de una vida.",
      body: "Viajamos como tres generaciones — abuelos, padres y un niño — justo después de que un ciclón hubiera perturbado la isla. Chamil recopilaba constantemente la información más reciente sobre las condiciones de las carreteras y la seguridad, y siempre proponía las mejores rutas disponibles teniendo en cuenta nuestras preferencias. Cuando necesitamos cancelar hoteles y reservas de tren y organizar nuevos con poco tiempo, estuvo ahí ayudándonos en cada paso. Se unió a nosotros en la escalada de la Roca de Sigiriya y el safari, lo que nos dio una enorme tranquilidad. Su atención a nuestro hijo fue especialmente conmovedora.",
    },
  ];

  const totalSlides = Math.ceil(reviews.length / 2);
  const prevSlide = () => setSlide((s) => (s - 1 + totalSlides) % totalSlides);
  const nextSlide = () => setSlide((s) => (s + 1) % totalSlides);
  const visibleReviews = reviews.slice(slide * 2, slide * 2 + 2);

  return (
    <section id="reviews" style={{ background: "var(--dark2)" }}>
      <div className="container">
        <div className="section-eyebrow">OPINIONES DE CLIENTES</div>
        <h2 className="section-title">Lo Que Dicen Nuestros Viajeros</h2>
        <p className="section-sub">Opiniones reales de viajeros que han explorado Sri Lanka con SLTCS.</p>
        <div className="reviews-slider">
          <div className="reviews-slide-row">
            {visibleReviews.map((r, i) => (
              <div key={slide * 2 + i} className="review-card-v2">
                <div className="review-photo-wrap">
                  <img src={r.photo} alt={r.name} className="review-photo" style={r.photoPosition ? { objectPosition: r.photoPosition } : undefined} />
                </div>
                <div className="review-card-body">
                  <div className="review-stars">★★★★★</div>
                  <div className="review-quote-v2">"{r.quote}"</div>
                  <div className="review-body-v2">{r.body}</div>
                  <div className="review-meta-row">
                    <div className="review-name-v2">{r.name}</div>
                    <div className="review-tags">
                      <span className="review-tag-item">{r.pax}</span>
                      <span className="review-tag-item">{r.period}</span>
                      <span className="review-tag-item">Conductor: {r.driver}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="reviews-controls">
            <button className="reviews-nav" onClick={prevSlide} aria-label="Anterior">‹</button>
            <div className="reviews-dots">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  className={`reviews-dot${i === slide ? " active" : ""}`}
                  onClick={() => setSlide(i)}
                  aria-label={`Diapositiva ${i + 1}`}
                />
              ))}
            </div>
            <button className="reviews-nav" onClick={nextSlide} aria-label="Siguiente">›</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { icon: "💬", title: "1. Envíe su Consulta", desc: "Rellene el formulario de contacto con sus fechas de viaje, tamaño del grupo y preferencias." },
    { icon: "📋", title: "2. Reciba la Propuesta", desc: "Le enviaremos un itinerario personalizado y presupuesto en 24 horas." },
    { icon: "💳", title: "3. Confirme", desc: "¿Satisfecho con el plan? Simplemente confirme su reserva. No se requiere pago por adelantado — paga únicamente a su llegada a Sri Lanka." },
    { icon: "🕐", title: "4. Briefing Pre-Viaje", desc: "Antes de la salida, confirmamos los detalles de su conductor, punto de encuentro e itinerario final." },
    { icon: "🏝️", title: "5. ¡Disfrute Sri Lanka!", desc: "Su conductor privado le acompaña en cada paso. Relájese y explore." },
  ];
  return (
    <section id="how">
      <div className="container">
        <div className="section-eyebrow">CÓMO FUNCIONA</div>
        <h2 className="section-title">Reserve su Conductor Privado<br />en Sri Lanka en 5 Pasos</h2>
        <div className="how-steps">
          {steps.map((s, i) => (
            <div key={i} className="how-step">
              <div className="how-step-num">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Vehicles ─────────────────────────────────────────────────────────────────
function Vehicles() {
  return (
    <section id="vehicles" style={{ background: "var(--dark3)" }}>
      <div className="container">
        <div className="section-eyebrow">VEHÍCULOS</div>
        <h2 className="section-title">Nuestra Flota</h2>
        <p className="section-sub">Todos los vehículos tienen aire acondicionado, están limpios y se mantienen regularmente para su comodidad y seguridad.</p>
        <div className="vehicles-grid">
          <div className="vehicle-card">
            <div className="vehicle-img-wrap">
              <img src="/manus-storage/vehicle_sedan_b6b21042_991971a0.png" alt="Sedán" className="vehicle-img" />
            </div>
            <h3>Sedán</h3>
            <div className="vehicle-capacity">Hasta 3 pasajeros</div>
            <p>Ideal para viajeros individuales y parejas. Cómodo y económico para recorrer Sri Lanka.</p>
          </div>
          <div className="vehicle-card featured">
            <div className="vehicle-img-wrap">
              <img src="/manus-storage/vehicle_van_70a807f8_233a386f.png" alt="Furgoneta" className="vehicle-img" />
            </div>
            <h3>Furgoneta</h3>
            <div className="vehicle-capacity">Hasta 6 pasajeros</div>
            <p>Nuestra opción más popular. Espaciosa y cómoda para familias y grupos pequeños.</p>
          </div>
          <div className="vehicle-card">
            <div className="vehicle-img-wrap">
              <img src="/manus-storage/vehicle_large_van_61632670_0b9547da.png" alt="Furgoneta Grande" className="vehicle-img" />
            </div>
            <h3>Furgoneta Grande</h3>
            <div className="vehicle-capacity">Hasta 10 pasajeros</div>
            <p>Perfecta para grupos grandes y familias. Máxima comodidad para viajes de larga distancia por la isla.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Company ──────────────────────────────────────────────────────────────────
function Company() {
  return (
    <section id="company" style={{ background: "var(--dark2)" }}>
      <div className="container">
        <div className="section-eyebrow">EMPRESA</div>
        <h2 className="section-title">Sobre SLTCS</h2>
        <table className="company-table">
          <tbody>
            <tr><th>Nombre del Servicio</th><td>SLTCS｜Alquiler de Coche con Conductor Privado en Sri Lanka</td></tr>
            <tr><th>Nombre Completo</th><td>Sri Lanka Taxi Charter Service (SLTCS)<br /><small style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>Marca Registrada Nº 7034996</small></td></tr>
            <tr><th>Actividad</th><td>Servicio intermediario de transporte terrestre en línea</td></tr>
            <tr><th>Área de Cobertura</th><td>Todo Sri Lanka — Colombo, Negombo, Kandy, Sigiriya, Nuwara Eliya, Galle, Yala y más</td></tr>
            <tr><th>Idiomas</th><td>Inglés</td></tr>
            <tr><th>Horario de Atención</th><td>24/7 — Consultas aceptadas en cualquier momento</td></tr>
            <tr><th>Contacto</th><td>Por favor, utilice el formulario de consulta en esta página</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">SLTCS</div>
            <p>Alquiler de Coche con Conductor Privado en Sri Lanka. Servicio de charter completamente privado y flexible que cubre todo Sri Lanka — de confianza para viajeros europeos y españoles.</p>
          </div>
          <div className="footer-col">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#plans" onClick={(e) => { e.preventDefault(); scrollTo("plans"); }}>Planes</a></li>
              <li><a href="#courses" onClick={(e) => { e.preventDefault(); scrollTo("courses"); }}>Itinerarios Modelo</a></li>
              <li><a href="#vehicles" onClick={(e) => { e.preventDefault(); scrollTo("vehicles"); }}>Vehículos</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>Contacto</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Itinerarios</h4>
            <ul>
              <li><a href="#courses" onClick={(e) => { e.preventDefault(); scrollTo("courses"); }}>4 Noches / 5 Días</a></li>
              <li><a href="#courses" onClick={(e) => { e.preventDefault(); scrollTo("courses"); }}>5 Noches / 6 Días</a></li>
              <li><a href="#courses" onClick={(e) => { e.preventDefault(); scrollTo("courses"); }}>6 Noches / 7 Días</a></li>
              <li><a href="#courses" onClick={(e) => { e.preventDefault(); scrollTo("courses"); }}>5–7 Días Cultural</a></li>
              <li><a href="#courses" onClick={(e) => { e.preventDefault(); scrollTo("courses"); }}>10 Días – 2 Semanas</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Política de Privacidad</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Términos y Condiciones</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © SLTCS｜Alquiler de Coche con Conductor Privado en Sri Lanka. Todos los derechos reservados.</p>
          <div className="footer-bottom-links">
            <a href="#" onClick={(e) => e.preventDefault()}>Política de Privacidad</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Floating CTA ─────────────────────────────────────────────────────────────
function FloatingCTA() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <div className="floating-cta">
      <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>
        <span>💬</span> Consulta Gratuita
      </a>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  useSEO({
    title: "Alquiler de Coche con Conductor Privado en Sri Lanka | SLTCS",
    description: "Alquiler de coche con conductor privado en Sri Lanka. Servicio de charter privado con conductores certificados SLTDA. Planes Bronce, Plata y Oro desde $270.",
    path: "/",
    hreflangs: [
      { hreflang: "es", href: "https://es.srilanka-charter.com/" },
      { hreflang: "en", href: "https://en.srilanka-charter.com/" },
      { hreflang: "fr", href: "https://fr.srilanka-charter.com/" },
      { hreflang: "de", href: "https://de.srilanka-charter.com/" },
      { hreflang: "x-default", href: "https://en.srilanka-charter.com/" },
    ],
  });

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Navbar />
      <Hero />
      <Stats />
      <ContactAndWhy />
      <Concerns />
      <Plans />
      <PricingPreview />
      <Itineraries />
      <Destinations />
      <Reviews />
      <HowItWorks />
      <Vehicles />
      <Company />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
