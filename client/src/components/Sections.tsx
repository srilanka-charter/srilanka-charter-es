import React, { useState } from "react";

const IMAGES = {
  destElla: "/manus-storage/dest_ella_bd8060fc_ee662bd8.jpg",
  destNuwara: "/manus-storage/dest_nuwara_57f4e54f_9e62fc9c.jpg",
  destYala: "/manus-storage/dest_yala_0e498c0a_94fadf94.jpg",
  review1: "/manus-storage/review1_r_family_eranga_a3545b4c_4c5f320f.png",
  review2: "/manus-storage/review2_r_family_aruna_3473eef8_b0cf532f.png",
  review4: "/manus-storage/review4_as_priyanth_2aeb5d81_ce374053.png",
  review5: "/manus-storage/review5_t_couple_indika_519f1510_a02ac6c2.png",
  reviewDfamily: "/manus-storage/review_dfamily_chamil_9214e24c_34c151c5.png",
  reviewRanjana: "/manus-storage/review_ranjana_new_2b654dea_e4c421b8.png",
  vehicleSedan: "/manus-storage/vehicle_sedan_b6b21042_72d56706.png",
  vehicleVan: "/manus-storage/vehicle_van_70a807f8_51c22730.png",
  vehicleLargeVan: "/manus-storage/vehicle_large_van_61632670_d5e131a3.png",
};

// ─── Why SLTCS ────────────────────────────────────────────────
const WhyIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-12 h-12 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center mb-5 text-[#C9A84C]">
    {children}
  </div>
);

export function WhySection() {
  const reasons = [
    {
      title: "Conductores Certificados por el Gobierno",
      desc: "Todos nuestros conductores poseen licencias oficiales de Conductor Turístico o Conductor Guía de Sri Lanka. Formados profesionalmente, enfocados en la seguridad y muy valorados por clientes anteriores.",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      title: "Atención en Español",
      desc: "Desde la primera consulta hasta el último traslado, nuestro equipo hispanohablante está disponible para asistirle. Sin barreras idiomáticas — solo comunicación fluida durante todo su viaje.",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
        </svg>
      ),
    },
    {
      title: "Charter Completamente Privado",
      desc: "A diferencia de los tours en grupo, su vehículo y conductor son exclusivamente suyos. Establezca su propio horario, elija sus paradas y viaje totalmente según sus términos.",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      ),
    },
    {
      title: "Conocimiento Local Experto",
      desc: "Nuestros Conductores Guía son apasionados de la historia, cultura y gastronomía de Sri Lanka. Le llevarán más allá de las guías turísticas a lugares ocultos y experiencias auténticas.",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>
      ),
    },
    {
      title: "El Vehículo Adecuado para Cada Grupo",
      desc: "Desde parejas hasta grandes grupos familiares de 10 personas, adaptamos el vehículo perfecto a su grupo — garantizando comodidad incluso en los trayectos más largos por la isla.",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
    },
    {
      title: "De Confianza para Viajeros Europeos",
      desc: "Con más de 1.200 charters completados y una valoración media de satisfacción de 4,9, SLTCS es la opción preferida para visitantes del Reino Unido y Europa que exploran Sri Lanka.",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
    },
  ];
  return (
    <section className="py-20 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-4">POR QUÉ SLTCS</p>
        <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-white mb-12 leading-tight">
          6 Razones por las que los Viajeros<br />Eligen SLTCS
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6 hover:border-[#C9A84C]/40 transition-colors group">
              <WhyIcon>{r.svg}</WhyIcon>
              <h3 className="font-['Playfair_Display'] text-white font-bold text-lg mb-3">{r.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Concerns Section ─────────────────────────────────────────
export function ConcernsSection() {
  const concerns = [
    "🗣️ Barreras idiomáticas",
    "🚌 Moverse de forma independiente",
    "💸 Ser cobrado en exceso",
    "🚕 Preocupaciones sobre la seguridad de los taxis",
    "📍 Encontrar los lugares correctos",
    "⏰ Cumplir con los horarios",
    "👨‍👩‍👧 Viajar con niños o personas mayores",
    "🗺️ Entender la cultura local",
  ];
  return (
    <section className="py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-4">SUS PREOCUPACIONES</p>
        <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-white mb-10 leading-tight">
          ¿Preocupado por<br />Viajar a Sri Lanka?
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {concerns.map((c) => (
            <div key={c} className="border border-white/15 rounded-lg px-4 py-3 text-white/70 text-sm text-center hover:border-[#C9A84C]/40 transition-colors">{c}</div>
          ))}
        </div>
        <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-['Playfair_Display'] text-white font-bold text-xl mb-2">SLTCS Resuelve Cada Una de Estas Preocupaciones</h3>
            <p className="text-white/55 text-sm leading-relaxed max-w-2xl">Su conductor privado dedicado se encarga de todo — navegación, comunicación, horarios y experiencia local. Todo lo que necesita hacer es relajarse y disfrutar del viaje.</p>
          </div>
          <a onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="shrink-0 bg-[#C9A84C] text-[#0e0e0e] font-bold text-xs tracking-wider uppercase px-6 py-3 rounded hover:bg-[#b8963e] transition-colors cursor-pointer whitespace-nowrap">
            Consulte Ahora — Es Gratis
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Plans Section ────────────────────────────────────────────
export function PlansSection() {
  const plans = [
    {
      tier: "BRONCE", name: "Plan Bronce",
      desc: "Para viajeros con presupuesto ajustado que necesitan transporte fiable.",
      features: ["Conductor en prácticas", "Traslados al aeropuerto y punto a punto", "Coordinador local hispanohablante", "Vehículo limpio con aire acondicionado"],
      popular: false,
    },
    {
      tier: "PLATA", name: "Plan Plata",
      desc: "El mejor equilibrio entre valor y calidad — nuestra opción más popular.",
      features: ["Conductor Turístico certificado por el gobierno o superior", "Acompañamiento y comentarios en atracciones", "Coordinador local hispanohablante", "Reservas de safari y actividades gestionadas", "Servicios de guía incluidos sin cargo adicional"],
      popular: true,
    },
    {
      tier: "ORO", name: "Plan Oro",
      desc: "Para viajeros que exigen la mejor experiencia en Sri Lanka.",
      features: ["Conductor Guía Chófer mejor valorado garantizado", "Acompañamiento de día completo y comentarios expertos", "Coordinador local hispanohablante", "Estructura de soporte dual para total tranquilidad", "Servicio de conserjería premium"],
      popular: false,
    },
  ];
  return (
    <section id="plans" className="py-20 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-4">NUESTROS PLANES</p>
        <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
          Elija el Plan<br />Que Mejor Se Adapte a Usted
        </h2>
        <p className="text-white/55 text-sm mb-12 max-w-xl">Ya sea que viaje con un presupuesto ajustado o busque una experiencia premium, tenemos un plan adaptado a sus necesidades.</p>
        <div className="grid sm:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.tier} className={`relative rounded-lg border p-6 flex flex-col ${plan.popular ? "border-[#C9A84C] bg-[#1a1a1a]" : "border-white/10 bg-[#1a1a1a]"}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#0e0e0e] text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full">MÁS POPULAR</div>
              )}
              <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-2">{plan.tier}</p>
              <h3 className="font-['Playfair_Display'] text-white font-bold text-xl mb-3">{plan.name}</h3>
              <p className="text-white/55 text-sm mb-6">{plan.desc}</p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-white/70 text-sm">
                    <span className="text-[#C9A84C] mt-0.5">✓</span>{f}
                  </li>
                ))}
              </ul>
              <a onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className={`block text-center text-sm font-bold tracking-wider uppercase py-3 rounded transition-colors cursor-pointer ${plan.popular ? "bg-[#C9A84C] text-[#0e0e0e] hover:bg-[#b8963e]" : "border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/10"}`}>
                Ver Detalles
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Itineraries Section ──────────────────────────────────────
export function ItinerariesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const itineraries = [
    {
      label: "4N/5D", title: "4 Noches / 5 Días", duration: "5 Días",
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
      label: "5N/6D", title: "5 Noches / 6 Días", duration: "6 Días",
      focus: "Cultural + Playa", highlights: "Sigiriya, Kandy, Nuwara Eliya, Galle, Mirissa",
      idealFor: "Viajeros que desean cultura y playa",
      days: [
        { day: "Día 1", title: "Llegada → Sigiriya", desc: "Llegada al Aeropuerto de Colombo. Traslado a Sigiriya pasando por el Templo Rupestre de Dambulla (UNESCO)." },
        { day: "Día 2", title: "Fortaleza de la Roca de Sigiriya", desc: "Ascenso temprano a la Roca de Sigiriya (UNESCO). Safari opcional en jeep en el Parque Nacional Minneriya." },
        { day: "Día 3", title: "Kandy — Templo del Diente", desc: "Visita al Templo de la Sagrada Reliquia del Diente (UNESCO). Espectáculo de danza kandiana por la tarde." },
        { day: "Día 4", title: "Nuwara Eliya — Tierras Altas del Té", desc: "Pintoresco recorrido por plantaciones de té. Experiencia de recolección de té y visita a fábrica." },
        { day: "Día 5", title: "Galle Fort → Mirissa", desc: "Exploración del Fuerte de Galle (UNESCO). Tarde en la playa de Mirissa." },
        { day: "Día 6", title: "Mirissa → Salida", desc: "Mañana libre en la playa. Traslado al Aeropuerto de Colombo." },
      ],
    },
    {
      label: "6N/7D", title: "6 Noches / 7 Días", duration: "7 Días",
      focus: "Tour Completo de la Isla", highlights: "Sigiriya, Polonnaruwa, Kandy, Ella, Galle, Yala",
      idealFor: "Viajeros que desean ver lo mejor de Sri Lanka",
      days: [
        { day: "Día 1", title: "Llegada → Sigiriya", desc: "Llegada al Aeropuerto de Colombo. Traslado a Sigiriya." },
        { day: "Día 2", title: "Sigiriya + Polonnaruwa", desc: "Ascenso a la Roca de Sigiriya. Visita a la antigua ciudad de Polonnaruwa (UNESCO)." },
        { day: "Día 3", title: "Kandy", desc: "Visita al Templo del Diente (UNESCO) y jardín botánico de Peradeniya." },
        { day: "Día 4", title: "Ella", desc: "Pintoresco viaje en tren hasta Ella. Senderismo hasta el Puente de los Nueve Arcos." },
        { day: "Día 5", title: "Yala National Park", desc: "Safari de día completo en el Parque Nacional de Yala. Avistamiento de leopardos y elefantes." },
        { day: "Día 6", title: "Galle Fort", desc: "Exploración del Fuerte de Galle (UNESCO). Tarde en la playa." },
        { day: "Día 7", title: "Salida", desc: "Traslado al Aeropuerto de Colombo." },
      ],
    },
    {
      label: "5–7 Días Cultural", title: "5–7 Días Cultural", duration: "5–7 Días",
      focus: "Patrimonio Cultural", highlights: "Anuradhapura, Polonnaruwa, Sigiriya, Kandy, Dambulla",
      idealFor: "Entusiastas de la historia y la cultura",
      days: [
        { day: "Día 1", title: "Llegada → Anuradhapura", desc: "Llegada y traslado a la antigua ciudad de Anuradhapura (UNESCO)." },
        { day: "Día 2", title: "Anuradhapura", desc: "Exploración completa de las ruinas de Anuradhapura — stupas, palacios y el árbol sagrado Bo." },
        { day: "Día 3", title: "Polonnaruwa → Sigiriya", desc: "Visita a la ciudad medieval de Polonnaruwa (UNESCO). Traslado a Sigiriya." },
        { day: "Día 4", title: "Sigiriya + Dambulla", desc: "Ascenso a la Roca de Sigiriya. Visita al Templo Rupestre de Dambulla (UNESCO)." },
        { day: "Día 5", title: "Kandy → Salida", desc: "Visita al Templo del Diente (UNESCO). Traslado al Aeropuerto de Colombo." },
      ],
    },
    {
      label: "10 Días–2 Semanas", title: "10 Días – 2 Semanas", duration: "10–14 Días",
      focus: "Exploración Completa de la Isla", highlights: "Todo Sri Lanka — norte, centro, sur y este",
      idealFor: "Viajeros con tiempo suficiente para explorar en profundidad",
      days: [
        { day: "Días 1–2", title: "Llegada + Colombo", desc: "Llegada y exploración de Colombo — el Fuerte, Pettah y la Galería Nacional." },
        { day: "Días 3–4", title: "Triángulo Cultural", desc: "Anuradhapura, Polonnaruwa y Sigiriya — el corazón del patrimonio de Sri Lanka." },
        { day: "Días 5–6", title: "Kandy + Tierras Altas", desc: "Kandy, Nuwara Eliya y las exuberantes plantaciones de té." },
        { day: "Días 7–8", title: "Ella + Parque Nacional", desc: "Ella, el Puente de los Nueve Arcos y safari en Yala." },
        { day: "Días 9–10", title: "Costa Sur", desc: "Galle Fort, Mirissa y las playas de la costa sur." },
        { day: "Días 11–14", title: "Costa Este (opcional)", desc: "Trincomalee, Pasikudah y las playas vírgenes del este." },
      ],
    },
  ];

  const active = itineraries[activeTab];

  return (
    <section id="itineraries" className="py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-4">ITINERARIOS MODELO</p>
        <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-white mb-4">Itinerarios Sugeridos</h2>
        <p className="text-white/55 text-sm mb-10 max-w-xl">Explore nuestros itinerarios de muestra seleccionados y úselos como inspiración para su viaje perfecto a Sri Lanka.</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {itineraries.map((it, i) => (
            <button key={it.label} onClick={() => setActiveTab(i)} className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded transition-colors ${i === activeTab ? "bg-[#C9A84C] text-[#0e0e0e]" : "border border-white/20 text-white/60 hover:border-[#C9A84C]/40 hover:text-[#C9A84C]"}`}>
              {it.label}
            </button>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
            <h3 className="font-['Playfair_Display'] text-white font-bold text-xl mb-4">{active.title}</h3>
            <div className="space-y-3 text-sm mb-6">
              {[
                { label: "DURACIÓN", value: active.duration },
                { label: "ENFOQUE", value: active.focus },
                { label: "DESTACADOS", value: active.highlights },
                { label: "IDEAL PARA", value: active.idealFor },
              ].map((item) => (
                <div key={item.label} className="flex justify-between gap-2">
                  <span className="text-white/40 uppercase text-xs tracking-widest shrink-0">{item.label}</span>
                  <span className="text-white text-right">{item.value}</span>
                </div>
              ))}
            </div>
            <a onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="block text-center bg-[#C9A84C] text-[#0e0e0e] font-bold text-xs tracking-wider uppercase py-3 rounded hover:bg-[#b8963e] transition-colors cursor-pointer">
              Reservar Este Itinerario
            </a>
          </div>
          <div className="lg:col-span-2 space-y-3">
            {active.days.map((d) => (
              <div key={d.day} className="bg-[#1a1a1a] border border-white/10 rounded-lg p-4 flex gap-4">
                <div className="shrink-0 w-16 text-center">
                  <span className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase">{d.day}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{d.title}</p>
                  <p className="text-white/50 text-xs leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Destinations Section ─────────────────────────────────────
export function DestinationsSection() {
  const destinations = [
    { img: IMAGES.destNuwara, name: "Nuwara Eliya", desc: "Conocida como la 'Pequeña Inglaterra', esta ciudad de las tierras altas ofrece paisajes de plantaciones de té, clima fresco y arquitectura colonial.", tags: ["Plantaciones de Té", "Clima Fresco", "Vistas Panorámicas"] },
    { img: IMAGES.destYala, name: "Parque Nacional de Yala", desc: "El parque nacional más visitado de Sri Lanka, famoso por la mayor densidad de leopardos del mundo, junto con elefantes, cocodrilos y aves exóticas.", tags: ["Safari", "Leopardos", "Elefantes"] },
    { img: IMAGES.destElla, name: "Ella", desc: "Un pintoresco pueblo en las tierras altas rodeado de montañas verdes, famoso por el icónico Puente de los Nueve Arcos y las impresionantes vistas desde Little Adam's Peak.", tags: ["Senderismo", "Vistas", "Puente de los Nueve Arcos"] },
  ];
  return (
    <section className="py-20 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-4">DESTINOS DESTACADOS</p>
        <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-white mb-12 leading-tight">
          Descubra los Tesoros<br />de Sri Lanka
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div key={dest.name} className="group rounded-lg overflow-hidden border border-white/10 hover:border-[#C9A84C]/40 transition-colors">
              <div className="relative h-52 overflow-hidden">
                <img src={dest.img} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-4 left-4 font-['Playfair_Display'] text-white font-bold text-xl">{dest.name}</h3>
              </div>
              <div className="p-5 bg-[#1a1a1a]">
                <p className="text-white/60 text-sm leading-relaxed mb-4">{dest.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {dest.tags.map((tag) => (
                    <span key={tag} className="border border-[#C9A84C]/40 text-[#C9A84C] text-xs px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Vehicles Section ─────────────────────────────────────────
export function VehiclesSection() {
  const vehicles = [
    { img: IMAGES.vehicleSedan, name: "Sedán", capacity: "Hasta 3 pasajeros", features: ["Toyota Axio o similar", "Aire acondicionado", "Maletero amplio", "Ideal para parejas o viajeros individuales"], best: "Parejas y viajeros individuales" },
    { img: IMAGES.vehicleVan, name: "Furgoneta", capacity: "Hasta 6 pasajeros", features: ["Toyota KDH o similar", "Asientos cómodos con espacio extra", "Aire acondicionado", "Ideal para familias y grupos pequeños"], best: "Familias y grupos pequeños", popular: true },
    { img: IMAGES.vehicleLargeVan, name: "Furgoneta Grande", capacity: "Hasta 10 pasajeros", features: ["Rosa Bus o similar", "Amplio espacio para equipaje", "Aire acondicionado", "Ideal para grupos grandes"], best: "Grupos grandes" },
  ];
  return (
    <section id="vehicles" className="py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-4">NUESTRA FLOTA</p>
        <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-white mb-12 leading-tight">
          Vehículos para Cada<br />Tipo de Viajero
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {vehicles.map((v) => (
            <div key={v.name} className={`relative rounded-lg border overflow-hidden ${v.popular ? "border-[#C9A84C]" : "border-white/10"} bg-[#1a1a1a]`}>
              {v.popular && (
                <div className="absolute top-3 right-3 bg-[#C9A84C] text-[#0e0e0e] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full z-10">MÁS POPULAR</div>
              )}
              <div className="h-48 overflow-hidden bg-[#111]">
                <img src={v.img} alt={v.name} className="w-full h-full object-contain p-4" />
              </div>
              <div className="p-5">
                <h3 className="font-['Playfair_Display'] text-white font-bold text-xl mb-1">{v.name}</h3>
                <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">{v.capacity}</p>
                <ul className="space-y-2 mb-4">
                  {v.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-white/60 text-sm">
                      <span className="text-[#C9A84C] mt-0.5">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <p className="text-white/40 text-xs">Ideal para: <span className="text-white/70">{v.best}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Reviews Section ──────────────────────────────────────────
export function ReviewsSection() {
  const reviews = [
    { img: IMAGES.review1, name: "Eranga", origin: "Familia R", rating: 5, text: "Nuestro conductor fue absolutamente increíble. Conocía cada rincón de Sri Lanka y nos llevó a lugares que nunca habríamos encontrado solos. ¡Totalmente recomendable!" },
    { img: IMAGES.review2, name: "Aruna", origin: "Familia R", rating: 5, text: "Servicio excepcional de principio a fin. El conductor fue puntual, profesional y muy amable con nuestros hijos. Sri Lanka es hermosa y SLTCS hizo que nuestra experiencia fuera perfecta." },
    { img: IMAGES.review4, name: "Priyanth", origin: "Familia AS", rating: 5, text: "Reservamos el Plan Plata y superó todas nuestras expectativas. El conductor guía nos explicó la historia y cultura de cada lugar con gran detalle. Una experiencia inolvidable." },
    { img: IMAGES.review5, name: "Indika", origin: "Pareja T", rating: 5, text: "Viaje de luna de miel perfecto gracias a SLTCS. Nuestro conductor fue muy atento y nos ayudó a planificar cada detalle. Los paisajes de Sri Lanka son impresionantes." },
    { img: IMAGES.reviewDfamily, name: "Chamil", origin: "Familia D", rating: 5, text: "Viajamos con tres generaciones de familia y SLTCS se adaptó perfectamente a nuestras necesidades. La furgoneta grande fue muy cómoda y el conductor muy paciente con los mayores." },
    { img: IMAGES.reviewRanjana, name: "Ranjana", origin: "Viajero Individual", rating: 5, text: "Como viajero solitario, me sentí completamente seguro y bien cuidado. El conductor se convirtió en un amigo y guía. Definitivamente volveré a usar SLTCS en mi próximo viaje a Sri Lanka." },
  ];
  return (
    <section className="py-20 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-4">OPINIONES DE CLIENTES</p>
        <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-white mb-12 leading-tight">
          Lo Que Dicen<br />Nuestros Viajeros
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden hover:border-[#C9A84C]/30 transition-colors">
              <img src={r.img} alt={"Opinión de " + r.name} className="w-full h-48 object-cover" />
              <div className="p-5">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <span key={i} className="text-[#C9A84C] text-sm">★</span>
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4 italic">{r.text}</p>
                <div>
                  <p className="text-white font-semibold text-sm">{r.name}</p>
                  <p className="text-white/40 text-xs">{r.origin}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Section ──────────────────────────────────────────────
export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "¿Qué incluye el servicio de charter?", a: "El servicio de charter incluye un conductor privado dedicado, vehículo con aire acondicionado, combustible y todos los peajes de carretera. Dependiendo del plan elegido, también puede incluir servicios de guía, gestión de reservas de safari y soporte de coordinador local." },
    { q: "¿Cuánto cuesta el servicio?", a: "Los precios varían según la duración del viaje, el tipo de vehículo y el plan elegido. Contáctenos con sus detalles de viaje y le enviaremos un presupuesto personalizado sin compromiso." },
    { q: "¿Hablan español sus conductores?", a: "Nuestro equipo de coordinación habla español y estará disponible para asistirle durante todo el viaje. Los conductores hablan inglés con fluidez. Para viajeros hispanohablantes, nuestro coordinador local actuará como enlace cuando sea necesario." },
    { q: "¿Puedo personalizar mi itinerario?", a: "Absolutamente. Nuestro servicio es completamente privado y flexible. Puede ajustar el itinerario según sus preferencias, añadir o quitar destinos, y cambiar el ritmo del viaje según lo desee." },
    { q: "¿Es seguro viajar en Sri Lanka?", a: "Sri Lanka es generalmente un destino seguro para los turistas. Nuestros conductores son profesionales certificados con amplia experiencia en el transporte de viajeros internacionales. Además, nuestro equipo de coordinación está disponible las 24 horas para cualquier emergencia." },
    { q: "¿Cómo realizo la reserva?", a: "Simplemente rellene el formulario de contacto con sus detalles de viaje. Le responderemos en 24 horas con un itinerario personalizado y presupuesto. Una vez confirmado, le enviaremos los detalles de pago y confirmación de reserva." },
    { q: "¿Qué métodos de pago aceptan?", a: "Aceptamos transferencia bancaria internacional, tarjeta de crédito/débito y PayPal. El pago puede realizarse en euros, libras esterlinas, dólares estadounidenses o dólares australianos." },
    { q: "¿Qué pasa si necesito cancelar o cambiar mi reserva?", a: "Entendemos que los planes pueden cambiar. Tenemos una política de cancelación flexible. Por favor, contáctenos lo antes posible si necesita hacer cambios y haremos todo lo posible para acomodar sus necesidades." },
  ];

  return (
    <section id="faq" className="py-20 bg-[#111111]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-4">PREGUNTAS FRECUENTES</p>
        <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-white mb-12 leading-tight">
          Preguntas<br />Frecuentes
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-white font-semibold text-sm pr-4">{faq.q}</span>
                <span className={`text-[#C9A84C] text-lg transition-transform ${openIndex === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="font-['Playfair_Display'] text-white font-bold text-lg mb-4">SLTCS</h3>
            <p className="text-white/50 text-xs leading-relaxed mb-4">
              Servicio premium de alquiler de coche con conductor privado en Sri Lanka para viajeros europeos y españoles.
            </p>
            <p className="text-white/30 text-xs">info@srilanka-charter.com</p>
          </div>
          <div>
            <h4 className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-4">SERVICIOS</h4>
            <ul className="space-y-2">
              {["Plan Bronce", "Plan Plata", "Plan Oro", "Traslados al Aeropuerto", "Tours Privados"].map((item) => (
                <li key={item}><a href="#plans" className="text-white/40 text-xs hover:text-[#C9A84C] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-4">DESTINOS</h4>
            <ul className="space-y-2">
              {["Sigiriya", "Kandy", "Nuwara Eliya", "Galle", "Yala", "Ella"].map((item) => (
                <li key={item}><a href="#itineraries" className="text-white/40 text-xs hover:text-[#C9A84C] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-4">IDIOMAS</h4>
            <ul className="space-y-2">
              <li><a href="https://en.srilanka-charter.com" className="text-white/40 text-xs hover:text-[#C9A84C] transition-colors">English</a></li>
              <li><a href="https://fr.srilanka-charter.com" className="text-white/40 text-xs hover:text-[#C9A84C] transition-colors">Français</a></li>
              <li><span className="text-[#C9A84C] text-xs">Español (actual)</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© 2025 SLTCS Sri Lanka Charter Service. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 text-xs hover:text-[#C9A84C] transition-colors">Política de Privacidad</a>
            <a href="#" className="text-white/30 text-xs hover:text-[#C9A84C] transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
