import { useState, useEffect } from "react";

const IMAGES = {
  hero: "/manus-storage/hero_van_srilanka_706f8966_eea1a974.jpg",
  slide2: "/manus-storage/slide2_sigiriya_b8468f12_f8982bb9.jpg",
  slide3: "/manus-storage/slide3_tea_train_e100395a_9e27466d.jpg",
  slide4: "/manus-storage/slide4_kandy_19bf406f_35c5dfdd.jpg",
  slide5: "/manus-storage/slide5_galle_8aced38c_17b403b5.jpg",
};

export default function HeroSection() {
  const slides = [
    { img: IMAGES.hero, alt: "Furgoneta blanca circulando por una carretera de Sri Lanka al atardecer" },
    { img: IMAGES.slide2, alt: "Vista aérea de la Fortaleza de la Roca de Sigiriya" },
    { img: IMAGES.slide3, alt: "Tren escénico entre plantaciones de té en Sri Lanka" },
    { img: IMAGES.slide4, alt: "Templo del Diente de Buda en Kandy, Sri Lanka" },
    { img: IMAGES.slide5, alt: "Murallas coloniales holandesas del Fuerte de Galle" },
  ];
  const [current, setCurrent] = useState(0);
  const [stats, setStats] = useState({ trips: 0, satisfaction: 0.0, drivers: 0 });

  useEffect(() => {
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const steps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const p = step / steps;
      setStats({
        trips: Math.round(1200 * p),
        satisfaction: parseFloat((4.9 * p).toFixed(1)),
        drivers: Math.round(50 * p),
      });
      if (step >= steps) clearInterval(timer);
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {slides.map((slide, i) => (
        <div key={i} className={"absolute inset-0 transition-opacity duration-1000 " + (i === current ? "opacity-100" : "opacity-0")}>
          <img src={slide.img} alt={slide.alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            SERVICIO PRIVADO DE CHARTER EN SRI LANKA
          </p>
          <div className="inline-block border border-[#C9A84C]/60 text-[#C9A84C] text-xs tracking-widest uppercase px-3 py-1 mb-6">
            ALQUILER DE COCHE CON CONDUCTOR
          </div>
          <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Sri Lanka{" "}
            <em className="text-[#C9A84C] not-italic">Alquiler</em>
            <br />
            con Conductor Privado
          </h1>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            Explore Sri Lanka a su propio ritmo con un conductor privado dedicado. Totalmente flexible, totalmente privado — la mejor manera de descubrir la Perla del Océano Índico.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {["Atención en Español", "Charter Totalmente Privado", "Conductor Certificado por el Gobierno"].map((tag) => (
              <span key={tag} className="border border-white/30 text-white/80 text-xs px-3 py-1.5 rounded-full">{tag}</span>
            ))}
          </div>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#0e0e0e] font-bold text-sm tracking-wider uppercase px-6 py-3.5 rounded hover:bg-[#b8963e] transition-colors"
          >
            💬 Consulta Gratis
          </button>
        </div>

        <div className="absolute bottom-24 right-8 text-right hidden sm:block">
          <p className="text-white/40 text-xs tracking-widest uppercase">UBICACIÓN</p>
          <p className="text-white/80 text-sm">Todo Sri Lanka</p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <p className="text-white/40 text-xs tracking-widest uppercase">DESPLAZAR</p>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>

        <div className="absolute bottom-8 right-8 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={"h-2 rounded-full transition-all " + (i === current ? "bg-[#C9A84C] w-6" : "bg-white/30 w-2")}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-[#C9A84C] text-2xl font-bold font-['Playfair_Display']">{stats.trips}+</p>
            <p className="text-white/50 text-xs tracking-widest uppercase">VIAJES TOTALES</p>
          </div>
          <div>
            <p className="text-[#C9A84C] text-2xl font-bold font-['Playfair_Display']">{stats.satisfaction}</p>
            <p className="text-white/50 text-xs tracking-widest uppercase">SATISFACCIÓN MEDIA</p>
          </div>
          <div>
            <p className="text-[#C9A84C] text-2xl font-bold font-['Playfair_Display']">{stats.drivers}+</p>
            <p className="text-white/50 text-xs tracking-widest uppercase">CONDUCTORES CERTIFICADOS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
