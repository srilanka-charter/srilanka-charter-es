import { useState } from "react";

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

const INFO_LINKS = [
  {
    category: "Guía de Conductor Privado",
    items: [
      { label: "Cómo Contratar un Conductor Privado", href: "/information/guia-conductor-privado/como-contratar-conductor-privado-sri-lanka" },
      { label: "Alquiler de Coche con Conductor: Guía Completa", href: "/information/guia-conductor-privado/alquiler-coche-conductor-sri-lanka-guia-completa" },
      { label: "Chófer Guía: Conductor vs Guía Turístico", href: "/information/guia-conductor-privado/chofer-guia-sri-lanka-conductor-vs-guia-turistico" },
    ],
  },
];

export default function ArticleNav() {
  const [infoOpen, setInfoOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileInfoOpen, setMobileInfoOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  return (
    <>
      <nav className="sltcs-nav scrolled" style={{ position: "fixed" }}>
        <a href="/" className="nav-logo">
          <span className="nav-logo-full">SLTCS｜Alquiler de Coche con Conductor Privado en Sri Lanka</span>
          <span className="nav-logo-short">SLTCS</span>
        </a>
        <ul className="nav-links">
          <li><a href="/#planes">PLANES</a></li>
          <li><a href="/#itinerarios">ITINERARIOS</a></li>
          <li><a href="/price">PRECIO</a></li>
          <li
            className="nav-dropdown"
            onMouseEnter={() => setInfoOpen(true)}
            onMouseLeave={() => setInfoOpen(false)}
          >
            <button>INFORMACIÓN</button>
            {infoOpen && (
              <div className="nav-dropdown-menu" style={{ minWidth: "260px" }}>
                <a href="/information/guia-conductor-privado" style={{ padding: "10px 16px", fontSize: "0.7rem", color: "#c9a84c", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", display: "block" }}>Guía de Conductor Privado →</a>
              </div>
            )}
          </li>
          <li><a href="/#contacto">CONTACTO</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li
            className="nav-dropdown nav-lang-dropdown"
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <button style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
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
        <div className="mobile-menu open" style={{ top: "72px" }}>
          <a href="/#planes">Planes</a>
          <a href="/#itinerarios">Itinerarios</a>
          <a href="/price">Precio</a>
          <div className="mobile-accordion">
            <button
              className="mobile-accordion-btn"
              onClick={() => setMobileInfoOpen((o) => !o)}
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
              </div>
            )}
          </div>
          <a href="/#contacto">Contacto</a>
          <a href="/faq">FAQ</a>
          <div className="mobile-accordion">
            <button
              className="mobile-accordion-btn"
              onClick={() => setMobileLangOpen((o) => !o)}
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
          <a href="/#contacto" className="btn-nav-mobile">Consulta Gratuita</a>
        </div>
      )}
    </>
  );
}
