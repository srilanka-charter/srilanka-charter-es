import { useEffect } from "react";
import ArticleNav from "@/components/ArticleNav";

const articles = [
  {
    href: "/information/viajes-familia-grupos/alquiler-furgoneta-conductor-sri-lanka-familias-grupos",
    img: "/manus-storage/article5_family_group_sri_lanka_8199b752.webp",
    category: "VIAJES EN FAMILIA Y GRUPOS",
    title: "Alquiler de Furgoneta con Conductor en Sri Lanka: La Guía para Familias y Grupos Pequeños",
    excerpt: "Guía completa para alquilar una furgoneta con conductor en Sri Lanka para familias y grupos pequeños. Tipos de vehículo, planes y consejos prácticos 2026.",
    date: "5 junio 2026",
    readTime: "9 min de lectura",
  },
];

export default function FamilyGroupTravelCategory() {
  useEffect(() => {
    document.title = "Viajes en Familia y Grupos — Sri Lanka Conductor Privado | SLTCS";
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.setAttribute(
        "content",
        "Guías prácticas para familias y grupos pequeños que viajan a Sri Lanka en vehículo privado con conductor."
      );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://es.srilanka-charter.com/information/viajes-familia-grupos";
    const hreflangs = [
      { lang: "es", url: "https://es.srilanka-charter.com/information/viajes-familia-grupos" },
      { lang: "en", url: "https://en.srilanka-charter.com/information/family-group-travel" },
      { lang: "x-default", url: "https://en.srilanka-charter.com/information/family-group-travel" },
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
            Viajes en Familia y Grupos{" "}
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
            <span style={{ color: "#ccc" }}>Viajes en Familia y Grupos</span>
          </nav>

          <p style={{ color: "#aaa", fontSize: "1rem", lineHeight: 1.7, maxWidth: "640px" }}>
            Guías prácticas para familias y grupos pequeños que viajan a Sri Lanka en vehículo privado con conductor.
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
                background: "#161616",
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: "8px",
                overflow: "hidden",
                textDecoration: "none",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,168,76,0.6)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,168,76,0.2)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              {/* Card Image */}
              <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
                <img
                  src={article.img}
                  alt={article.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  background: "rgba(0,0,0,0.7)",
                  color: "#C9A84C",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  padding: "4px 8px",
                  borderRadius: "2px",
                }}>
                  {article.category}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: "20px" }}>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.05rem",
                  color: "#fff",
                  fontWeight: 700,
                  lineHeight: 1.4,
                  marginBottom: "10px",
                }}>
                  {article.title}
                </h2>
                <p style={{
                  color: "#888",
                  fontSize: "0.82rem",
                  lineHeight: 1.6,
                  marginBottom: "16px",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}>
                  {article.excerpt}
                </p>
                <div style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                  fontSize: "0.75rem",
                  color: "#666",
                }}>
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </section>

        {/* Back to Home */}
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px 48px" }}>
          <a
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              color: "#C9A84C",
              fontSize: "0.85rem",
              textDecoration: "none",
              border: "1px solid rgba(201,168,76,0.3)",
              padding: "8px 16px",
              borderRadius: "4px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,168,76,0.1)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
          >
            ← Volver al Inicio
          </a>
        </div>
      </main>
    </>
  );
}
