import { useEffect } from "react";
import { Link } from "wouter";
import ArticleNav from "@/components/ArticleNav";

const ARTICLES = [
  {
    slug: "/information/guia-costes-reserva/contratar-conductor-sri-lanka-costes-seguridad-checklist",
    image: "/manus-storage/article4_hero_cost_booking_35c88786.webp",
    date: "4 junio 2026",
    title: "Contratar Conductor en Sri Lanka: Costes, Seguridad y Lista de Verificación Antes de Reservar",
    desc: "Todo lo que necesitas verificar antes de reservar un conductor privado en Sri Lanka — lista de 7 puntos, precios transparentes y señales de alerta.",
  },
];

export default function CostBookingGuideCategory() {
  useEffect(() => {
    document.title = "Guía de Costes y Reserva — Sri Lanka Conductor Privado | SLTCS";
  }, []);

  return (
    <div className="sltcs-page">
      <ArticleNav />
      <div className="category-hero">
        <div className="category-hero-overlay" />
        <div className="category-hero-content">
          <h1>Guía de Costes y Reserva</h1>
          <p>Precios transparentes, listas de verificación y todo lo que necesitas saber antes de reservar tu conductor privado en Sri Lanka.</p>
        </div>
      </div>
      <div className="article-breadcrumb">
        <Link href="/">Inicio</Link>
        <span>›</span>
        <Link href="/information">Información</Link>
        <span>›</span>
        <span>Guía de Costes y Reserva</span>
      </div>
      <div className="category-articles-grid">
        {ARTICLES.map(a => (
          <Link key={a.slug} href={a.slug} className="category-article-card">
            <div className="category-article-img" style={{ backgroundImage: `url(${a.image})` }} />
            <div className="category-article-body">
              <span className="category-article-date">{a.date}</span>
              <h2 className="category-article-title">{a.title}</h2>
              <p className="category-article-desc">{a.desc}</p>
              <span className="category-article-read">Leer más →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
