import { useEffect } from "react";
import { Link } from "wouter";
import ArticleNav from "@/components/ArticleNav";

const ARTICLES = [
  {
    slug: "/information/viajes-familia-grupos/alquiler-furgoneta-conductor-sri-lanka-familias-grupos",
    image: "/manus-storage/article5_hero_family_group_van_f0b07741.webp",
    date: "5 junio 2026",
    title: "Alquiler de Furgoneta con Conductor en Sri Lanka: La Guía para Familias y Grupos Pequeños",
    desc: "Guía completa para alquilar una furgoneta con conductor en Sri Lanka para familias y grupos pequeños. Tipos de vehículo, planes y consejos prácticos 2026.",
  },
];

export default function FamilyGroupTravelCategory() {
  useEffect(() => {
    document.title = "Viajes en Familia y Grupos — Sri Lanka Conductor Privado | SLTCS";
  }, []);

  return (
    <div className="sltcs-page">
      <ArticleNav />
      <div className="category-hero">
        <div className="category-hero-overlay" />
        <div className="category-hero-content">
          <h1>Viajes en Familia y Grupos</h1>
          <p>Guías prácticas para familias y grupos pequeños que viajan a Sri Lanka en vehículo privado con conductor.</p>
        </div>
      </div>
      <div className="article-breadcrumb">
        <Link href="/">Inicio</Link>
        <span>›</span>
        <Link href="/information">Información</Link>
        <span>›</span>
        <span>Viajes en Familia y Grupos</span>
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
