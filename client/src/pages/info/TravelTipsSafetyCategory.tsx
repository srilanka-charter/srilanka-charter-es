import { useEffect } from "react";
import ArticleNav from "@/components/ArticleNav";

const articles = [
  {
    href: "/information/consejos-viaje-seguridad/mejor-epoca-para-visitar-sri-lanka",
    img: "/manus-storage/art_besttime_hero_sunset_palms_89793f4f.webp",
    category: "CONSEJOS DE VIAJE Y SEGURIDAD",
    title: "Cuándo Visitar Sri Lanka: Guía del Clima Mes a Mes (2026)",
    excerpt: "Descubre cuándo es el mejor momento para visitar Sri Lanka. Guía completa del clima mes a mes, los dos sistemas de monzón, temporada alta y baja, playas, safaris y tierras altas del té.",
    date: "13 junio 2026",
    readTime: "10 min de lectura",
  },
];

export default function TravelTipsSafetyCategory() {
  useEffect(() => {
    document.title = "Consejos de Viaje y Seguridad — Sri Lanka Conductor Privado | SLTCS";
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.setAttribute(
        "content",
        "Guías prácticas sobre clima, seguridad y consejos de viaje para planificar tu viaje a Sri Lanka con conductor privado."
      );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://es.srilanka-charter.com/information/consejos-viaje-seguridad";
    const hreflangs = [
      { lang: "es", url: "https://es.srilanka-charter.com/information/consejos-viaje-seguridad" },
      { lang: "en", url: "https://en.srilanka-charter.com/information/travel-tips-safety" },
      { lang: "fr", url: "https://fr.srilanka-charter.com/information/conseils-voyage-securite" },
      { lang: "de", url: "https://de.srilanka-charter.com/information/reisetipps-sicherheit" },
      { lang: "x-default", url: "https://en.srilanka-charter.com/information/travel-tips-safety" },
    ];
    const addedLinks: HTMLLinkElement[] = [];
    hreflangs.forEach(({ lang, url }) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = lang;
      link.href = url;
      document.head.appendChild(link);
      addedLinks.push(link);
    });
    return () => { addedLinks.forEach((l) => l.remove()); };
  }, []);

  return (
    <>
      <ArticleNav />
      <main style={{ background: "#0e0e0e", minHeight: "100vh", paddingTop: "80px" }}>
        {/* Category Header */}
        <section style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "48px 24px 32px",
        }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "#fff",
            fontWeight: 700,
            marginBottom: "8px",
            lineHeight: 1.2,
          }}>
            Consejos de Viaje y Seguridad{" "}
            <span style={{ fontSize: "0.5em", color: "#888", fontStyle: "italic", fontWeight: 400 }}>
              — categoría —
            </span>
          </h1>

          {/* Breadcrumb */}
          <nav style={{ display: "flex", gap: "6px", alignItems: "center", marginBottom: "20px", fontSize: "0.8rem" }}>
            <a href="/" style={{ color: "#C9A84C", textDecoration: "none" }}>Inicio</a>
            <span style={{ color: "#555" }}>›</span>
            <span style={{ color: "#888" }}>Información</span>
            <span style={{ color: "#555" }}>›</span>
            <span style={{ color: "#ccc" }}>Consejos de Viaje y Seguridad</span>
          </nav>

          <p style={{ color: "#aaa", fontSize: "1rem", lineHeight: 1.7, maxWidth: "640px" }}>
            Guías prácticas sobre clima, seguridad y consejos de viaje para planificar tu viaje a Sri Lanka con conductor privado.
          </p>
        </section>

        {/* Articles Grid */}
        <section style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 24px 64px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "24px",
        }}>
          {articles.map((article) => (
            <a
              key={article.href}
              href={article.href}
              style={{
                display: "block",
                background: "#1a1a1a",
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.06)",
                textDecoration: "none",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.4)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{ height: "180px", overflow: "hidden" }}>
                <img
                  src={article.img}
                  alt={article.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "20px" }}>
                <span style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  color: "#C9A84C",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "8px",
                }}>
                  {article.category}
                </span>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.05rem",
                  color: "#fff",
                  fontWeight: 600,
                  lineHeight: 1.4,
                  marginBottom: "10px",
                }}>
                  {article.title}
                </h2>
                <p style={{ color: "#888", fontSize: "0.82rem", lineHeight: 1.6, marginBottom: "14px" }}>
                  {article.excerpt}
                </p>
                <div style={{ display: "flex", gap: "12px", fontSize: "0.72rem", color: "#666" }}>
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </section>
      </main>
    </>
  );
}
