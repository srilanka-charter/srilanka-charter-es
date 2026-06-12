import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

// ─── Price Data ───────────────────────────────────────────────────────────────
type VehicleKey = "sedan" | "van" | "bigvan";
type TierKey = "bronze" | "silver" | "gold";
type CurrencyKey = "USD" | "GBP" | "EUR" | "AUD";

const CURRENCY_SYMBOLS: Record<CurrencyKey, string> = {
  USD: "$",
  GBP: "£",
  EUR: "€",
  AUD: "A$",
};

const PRICES: Record<CurrencyKey, Record<TierKey, Record<VehicleKey, number[]>>> = {
  USD: {
    bronze: {
      sedan:  [270,340,410,480,520,560,600,680,750,830,900,980,1050,1130,1200,1280,1350,1430,1500],
      van:    [330,410,500,580,630,670,720,820,900,1000,1080,1180,1260,1360,1440,1540,1620,1720,1800],
      bigvan: [390,480,590,680,740,780,840,950,1050,1160,1260,1370,1470,1580,1680,1790,1890,2000,2100],
    },
    silver: {
      sedan:  [310,400,490,580,640,700,760,860,950,1050,1140,1240,1330,1430,1520,1620,1710,1810,1900],
      van:    [370,470,580,680,750,810,880,1000,1100,1220,1320,1440,1540,1660,1760,1880,1980,2100,2200],
      bigvan: [430,540,670,780,860,920,1000,1130,1250,1380,1500,1630,1750,1880,2000,2130,2250,2380,2500],
    },
    gold: {
      sedan:  [350,460,570,680,760,840,920,1040,1150,1270,1380,1500,1610,1730,1840,1960,2070,2190,2300],
      van:    [410,530,660,780,870,950,1040,1180,1300,1440,1560,1700,1820,1960,2080,2220,2340,2480,2600],
      bigvan: [470,600,750,880,980,1060,1160,1310,1450,1600,1740,1890,2030,2180,2320,2470,2610,2760,2900],
    },
  },
  GBP: {
    bronze: {
      sedan:  [200,240,290,340,370,400,420,480,530,590,640,690,740,800,850,910,950,1010,1060],
      van:    [250,290,360,420,450,480,510,570,640,710,770,830,890,960,1030,1090,1150,1210,1280],
      bigvan: [290,350,430,490,540,570,600,680,760,840,920,980,1060,1140,1220,1300,1360,1440,1520],
    },
    silver: {
      sedan:  [230,290,350,420,460,510,540,620,680,760,820,890,950,1030,1090,1170,1220,1300,1360],
      van:    [280,340,420,500,540,590,630,710,790,880,950,1030,1100,1190,1270,1350,1420,1500,1580],
      bigvan: [320,400,490,570,630,680,720,820,910,1010,1100,1180,1270,1370,1460,1560,1630,1730,1820],
    },
    gold: {
      sedan:  [260,340,410,500,550,620,660,760,830,930,1000,1090,1160,1260,1330,1430,1490,1590,1660],
      van:    [310,390,480,580,630,700,750,850,940,1050,1130,1230,1310,1420,1510,1610,1690,1790,1880],
      bigvan: [350,450,550,650,720,790,840,960,1060,1180,1280,1380,1480,1600,1700,1820,1900,2020,2120],
    },
  },
  EUR: {
    bronze: {
      sedan:  [230,280,350,400,440,460,500,560,620,680,740,810,870,930,990,1050,1120,1180,1240],
      van:    [280,340,420,480,530,560,600,680,750,830,900,980,1050,1130,1200,1280,1350,1430,1500],
      bigvan: [330,400,500,570,620,650,700,790,880,970,1060,1140,1230,1320,1410,1500,1580,1670,1760],
    },
    silver: {
      sedan:  [270,330,420,490,550,590,640,720,800,880,960,1040,1120,1200,1280,1360,1440,1520,1600],
      van:    [320,390,490,570,640,690,740,840,930,1030,1120,1210,1300,1400,1490,1590,1670,1770,1860],
      bigvan: [370,450,570,660,730,780,840,950,1060,1170,1280,1370,1480,1590,1700,1810,1900,2010,2120],
    },
    gold: {
      sedan:  [310,380,490,580,660,720,780,880,980,1080,1180,1270,1370,1470,1570,1670,1760,1860,1960],
      van:    [360,440,560,660,750,820,880,1000,1110,1230,1340,1440,1550,1670,1780,1900,1990,2110,2220],
      bigvan: [410,500,640,750,840,910,980,1110,1240,1370,1500,1600,1730,1860,1990,2120,2220,2350,2480],
    },
  },
  AUD: {
    bronze: {
      sedan:  [380,480,580,680,730,790,840,960,1050,1170,1260,1380,1470,1590,1680,1800,1890,2010,2100],
      van:    [470,580,700,820,890,940,1010,1150,1260,1400,1520,1660,1770,1910,2020,2160,2270,2410,2520],
      bigvan: [550,680,830,960,1040,1100,1180,1330,1470,1630,1770,1920,2060,2220,2360,2510,2650,2800,2940],
    },
    silver: {
      sedan:  [440,560,690,820,900,980,1070,1210,1330,1470,1600,1740,1870,2010,2130,2270,2400,2540,2660],
      van:    [520,660,820,960,1050,1140,1240,1400,1540,1710,1850,2020,2160,2330,2470,2640,2780,2940,3080],
      bigvan: [610,760,940,1100,1210,1290,1400,1590,1750,1940,2100,2290,2450,2640,2800,2990,3150,3340,3500],
    },
    gold: {
      sedan:  [490,650,800,960,1070,1180,1290,1460,1610,1780,1940,2100,2260,2430,2580,2750,2900,3070,3220],
      van:    [580,750,930,1100,1220,1330,1460,1640,1820,2020,2190,2380,2550,2750,2920,3110,3280,3480,3640],
      bigvan: [660,840,1050,1240,1380,1490,1630,1840,2030,2240,2440,2650,2850,3060,3250,3460,3660,3870,4060],
    },
  },
};

const DAYS = Array.from({ length: 19 }, (_, i) => i + 2);

const TIERS: { key: TierKey; label: string; badge?: string; color: string; features: string[] }[] = [
  {
    key: "bronze",
    label: "Plan Bronce",
    color: "#cd7f32",
    features: [
      "Conductor en prácticas asignado",
      "Servicio de traslado, incluyendo recogida/entrega en hotel y restaurante",
      "Coordinador local de habla inglesa",
      "Vehículo limpio con aire acondicionado",
      "Plan recomendado para quienes desean viajar de forma económica",
    ],
  },
  {
    key: "silver",
    label: "Plan Plata",
    badge: "Más Popular",
    color: "#c9a84c",
    features: [
      "Conductor Turístico certificado por el gobierno o superior",
      "Acompañamiento y guía en los lugares de interés",
      "Coordinador local de habla inglesa",
      "Organización de safaris y actividades",
      "Servicio de guía sin coste adicional",
    ],
  },
  {
    key: "gold",
    label: "Plan Oro",
    color: "#d4af37",
    features: [
      "Conductor Guía Chófer de alta valoración garantizado",
      "Acompañamiento completo del itinerario y guía en los lugares de interés",
      "Coordinador local de habla inglesa",
      "Sistema de doble apoyo",
      "Organización de safaris y actividades",
    ],
  },
];

const VEHICLES: { key: VehicleKey; label: string; capacity: string }[] = [
  { key: "sedan", label: "Sedán", capacity: "1–3 personas" },
  { key: "van", label: "Furgoneta", capacity: "3–6 personas" },
  { key: "bigvan", label: "Furgoneta Grande", capacity: "6–9 personas" },
];

const CURRENCIES: CurrencyKey[] = ["USD", "GBP", "EUR", "AUD"];

// ─── Plan Card ────────────────────────────────────────────────────────────────
function PlanCard({
  tier,
  currency,
}: {
  tier: (typeof TIERS)[number];
  currency: CurrencyKey;
}) {
  const [vehicle, setVehicle] = useState<VehicleKey>("sedan");
  const sym = CURRENCY_SYMBOLS[currency];
  const prices = PRICES[currency][tier.key][vehicle];

  return (
    <div
      style={{
        background: "var(--dark2, #1a1a1a)",
        border: `1px solid ${tier.color}40`,
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: `linear-gradient(135deg, ${tier.color}22, ${tier.color}08)`,
          borderBottom: `1px solid ${tier.color}30`,
          padding: "24px 28px 20px",
          minHeight: "240px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
          <span
            style={{
              background: tier.color,
              color: "#000",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              padding: "3px 10px",
              borderRadius: "20px",
              textTransform: "uppercase",
            }}
          >
            {tier.key.toUpperCase()}
          </span>
          {tier.badge && (
            <span
              style={{
                background: "rgba(201,168,76,0.15)",
                border: "1px solid rgba(201,168,76,0.4)",
                color: "#c9a84c",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                padding: "2px 8px",
                borderRadius: "20px",
                textTransform: "uppercase",
              }}
            >
              {tier.badge}
            </span>
          )}
        </div>
        <h3 style={{ color: "#fff", fontSize: "1.2rem", fontWeight: 700, margin: "0 0 12px" }}>
          {tier.label}
        </h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {tier.features.map((f) => (
            <li
              key={f}
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.82rem",
                padding: "3px 0",
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
              }}
            >
              {f.trim() && <span style={{ color: tier.color, flexShrink: 0, marginTop: "1px" }}>✓</span>}
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Vehicle Tabs */}
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(0,0,0,0.2)",
        }}
      >
        {VEHICLES.map((v) => (
          <button
            key={v.key}
            onClick={() => setVehicle(v.key)}
            style={{
              flex: 1,
              padding: "10px 4px",
              background: "none",
              border: "none",
              borderBottom: vehicle === v.key ? `2px solid ${tier.color}` : "2px solid transparent",
              color: vehicle === v.key ? tier.color : "rgba(255,255,255,0.5)",
              fontSize: "0.75rem",
              fontWeight: vehicle === v.key ? 600 : 400,
              cursor: "pointer",
              transition: "all 0.2s",
              textAlign: "center",
              lineHeight: 1.3,
            }}
          >
            <div>{v.label}</div>
            <div style={{ fontSize: "0.65rem", opacity: 0.7 }}>{v.capacity}</div>
          </button>
        ))}
      </div>

      {/* Price Table */}
      <div style={{ flex: 1 }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "rgba(0,0,0,0.3)" }}>
              <th
                style={{
                  padding: "10px 16px",
                  textAlign: "left",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Días
              </th>
              <th
                style={{
                  padding: "10px 16px",
                  textAlign: "right",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Precio (IVA incl.)
              </th>
            </tr>
          </thead>
          <tbody>
            {DAYS.map((day, idx) => (
              <tr
                key={day}
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  background: idx % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
                }}
              >
                <td
                  style={{
                    padding: "10px 16px",
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.85rem",
                  }}
                >
                  {day} días
                </td>
                <td
                  style={{
                    padding: "10px 16px",
                    textAlign: "right",
                    color: "#fff",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                  }}
                >
                  {sym}
                  {prices[idx].toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Pricing() {
  const [currency, setCurrency] = useState<CurrencyKey>("EUR");

  useEffect(() => {
    document.title = "Precios de Alquiler de Coche con Conductor en Sri Lanka | SLTCS";

    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    const prevDesc = metaDesc.content;
    metaDesc.content =
      "Precios de alquiler de coche con conductor en Sri Lanka. Planes Bronce, Plata y Oro desde $270. Sedán, Furgoneta y Van Grande. Precios en USD, GBP, EUR y AUD.";

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Alquiler de Coche con Conductor Privado en Sri Lanka",
      description:
        "Servicio de alquiler de coche completamente privado en Sri Lanka con conductor de habla inglesa. Tres planes: Bronce, Plata, Oro.",
      url: "https://es.srilanka-charter.com/price",
      brand: {
        "@type": "Brand",
        name: "SLTCS – Alquiler de Coche con Conductor en Sri Lanka",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Plan Bronce – Sedán (2 días)",
          price: "270",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: "https://es.srilanka-charter.com/price",
        },
        {
          "@type": "Offer",
          name: "Plan Plata – Sedán (2 días)",
          price: "310",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: "https://es.srilanka-charter.com/price",
        },
        {
          "@type": "Offer",
          name: "Plan Oro – Sedán (2 días)",
          price: "350",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: "https://es.srilanka-charter.com/price",
        },
      ],
    };

    // ─ Canonical ─────────────────────────────────────────────────────────────────
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const prevCanonical = canonical?.href ?? '';
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = "https://es.srilanka-charter.com/price";
    // ─ hreflang ──────────────────────────────────────────────────────────────────
    const hreflangData = [
      { hreflang: "es", href: "https://es.srilanka-charter.com/price" },
      { hreflang: "en", href: "https://en.srilanka-charter.com/price" },
      { hreflang: "fr", href: "https://fr.srilanka-charter.com/price" },
      { hreflang: "de", href: "https://de.srilanka-charter.com/price" },
      { hreflang: "x-default", href: "https://en.srilanka-charter.com/price" },
    ];
    const existingHreflangs = document.querySelectorAll<HTMLLinkElement>('link[rel="alternate"][hreflang]');
    existingHreflangs.forEach((el) => el.remove());
    const addedHreflangs: HTMLLinkElement[] = [];
    hreflangData.forEach(({ hreflang, href }) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.setAttribute('hreflang', hreflang);
      link.href = href;
      document.head.appendChild(link);
      addedHreflangs.push(link);
    });

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "price-jsonld";
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    // canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://es.srilanka-charter.com/price";

    // hreflang
    const hreflangs = [
      { lang: "es", url: "https://es.srilanka-charter.com/price" },
      { lang: "en", url: "https://en.srilanka-charter.com/price" },
      { lang: "fr", url: "https://fr.srilanka-charter.com/price" },
      { lang: "de", url: "https://de.srilanka-charter.com/price" },
      { lang: "x-default", url: "https://en.srilanka-charter.com/price" },
    ];
    hreflangs.forEach(({ lang, url }) => {
      let el = document.querySelector(`link[hreflang="${lang}"]`) as HTMLLinkElement | null;
      if (!el) { el = document.createElement("link"); el.rel = "alternate"; el.setAttribute("hreflang", lang); document.head.appendChild(el); }
      el.href = url;
    });

    return () => {
      document.title = "SLTCS｜Alquiler de coche con conductor en Sri Lanka";
      metaDesc!.content = prevDesc;
      document.getElementById("price-jsonld")?.remove();
      addedHreflangs.forEach((el) => el.remove());
      if (canonical) canonical.href = prevCanonical;
    };
  }, []);

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--dark, #0d1117)",
        color: "#fff",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Navbar />
      {/* Hero */}
      <section
        style={{
          paddingTop: "120px",
          paddingBottom: "60px",
          textAlign: "center",
          background: "linear-gradient(180deg, rgba(201,168,76,0.06) 0%, transparent 100%)",
          borderBottom: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "rgba(201,168,76,0.12)",
            border: "1px solid rgba(201,168,76,0.3)",
            color: "#c9a84c",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.15em",
            padding: "6px 18px",
            borderRadius: "20px",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          PRECIOS
        </div>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            margin: "0 auto 20px",
            maxWidth: "700px",
          }}
        >
          Precios de Alquiler de Coche{" "}
          <em style={{ color: "#c9a84c", fontStyle: "italic" }}>con Conductor</em>
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: "1.05rem",
            maxWidth: "600px",
            margin: "0 auto 0",
            lineHeight: 1.7,
          }}
        >
          Precios fijos y transparentes a las tarifas más competitivas del sector — para un viaje seguro y sin preocupaciones por Sri Lanka.
        </p>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 32px" }}>

        {/* Intro */}
        <section style={{ padding: "56px 0 0" }}>
          <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.8, fontSize: "0.95rem", maxWidth: "820px" }}>
            En Sri Lanka Taxi Charter Service (SLTCS), mantenemos nuestros precios lo más bajos posible sin comprometer la calidad del servicio. Creemos que reducirlos más afectaría la experiencia que nos comprometemos a ofrecer.
          </p>
        </section>

        {/* Risks section */}
        <section
          style={{
            margin: "40px 0",
            background: "rgba(255,180,0,0.05)",
            border: "1px solid rgba(255,180,0,0.2)",
            borderRadius: "12px",
            padding: "28px 32px",
          }}
        >
          <h2
            style={{
              color: "#c9a84c",
              fontSize: "1.05rem",
              fontWeight: 700,
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            ⚠ Riesgos de elegir servicios de precio ultra bajo
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "14px" }}>
            Los servicios que compiten únicamente por precio pueden exponerle a los siguientes problemas:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "Una gran diferencia entre el precio cotizado y el importe final cobrado",
              "Sin soporte en inglés desde la etapa inicial de consulta",
              "Vehículos antiguos o en mal estado asignados",
              "Desvíos constantes a tiendas con comisión, alterando su itinerario",
            ].map((item) => (
              <li
                key={item}
                style={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "0.88rem",
                  padding: "5px 0",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <span style={{ color: "#c9a84c", flexShrink: 0 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.85rem", lineHeight: 1.7, marginTop: "16px" }}>
            En particular, algunos servicios aparentemente económicos imponen límites de kilometraje y cobran por excesos. Se han dado casos en que los conductores reportaron distancias infladas, resultando en facturas muy superiores a lo esperado.
          </p>
        </section>

        {/* Transparent pricing */}
        <section style={{ marginBottom: "8px" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.5rem",
              color: "#fff",
              marginBottom: "16px",
            }}
          >
            Precios Fijos y Transparentes de SLTCS
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.8, fontSize: "0.95rem", maxWidth: "820px" }}>
            SLTCS ofrece un presupuesto fijo basado en su itinerario, discutido en inglés desde la primera consulta. Aunque su itinerario no esté finalizado, simplemente comparta los lugares que desea visitar y le sugeriremos la mejor ruta con un presupuesto detallado.
          </p>
          <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.8, fontSize: "0.95rem", maxWidth: "820px", marginTop: "12px" }}>
            Todos los precios a continuación son <strong style={{ color: "#fff" }}>IVA incluido</strong> y corresponden a <strong style={{ color: "#fff" }}>conductores de habla inglesa</strong>. Ofrecemos tres planes para adaptarse a su estilo de viaje.
          </p>
        </section>

        {/* Plan Overview */}
        <section style={{ marginBottom: "20px", paddingTop: "0" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.4rem",
              color: "#fff",
              marginBottom: "24px",
              marginTop: "0",
              textAlign: "center",
            }}
          >
            Resumen de Planes
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              alignItems: "stretch",
            }}
          >
            {TIERS.map((tier) => (
              <div
                key={tier.key}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${tier.color}30`,
                  borderRadius: "12px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <span
                    style={{
                      background: tier.color,
                      color: "#000",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      padding: "3px 10px",
                      borderRadius: "20px",
                      textTransform: "uppercase",
                    }}
                  >
                    {tier.key.toUpperCase()}
                  </span>
                  {tier.badge && (
                    <span
                      style={{
                        background: "rgba(201,168,76,0.15)",
                        border: "1px solid rgba(201,168,76,0.4)",
                        color: "#c9a84c",
                        fontSize: "0.62rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        padding: "2px 8px",
                        borderRadius: "20px",
                        textTransform: "uppercase",
                      }}
                    >
                      {tier.badge}
                    </span>
                  )}
                </div>
                <h3 style={{ color: "#fff", fontSize: "1.05rem", fontWeight: 700, margin: "0 0 12px" }}>
                  {tier.label}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, flexGrow: 1 }}>
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        color: "rgba(255,255,255,0.7)",
                        fontSize: "0.82rem",
                        padding: "4px 0",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                      }}
                    >
                      <span style={{ color: tier.color, flexShrink: 0, marginTop: "1px" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Currency Tabs */}
        <section style={{ marginTop: "0", paddingTop: "0" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginBottom: "12px" }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.4rem",
                color: "#fff",
                margin: 0,
              }}
            >
              Lista de Precios
            </h2>
            <div
              style={{
                display: "flex",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              {CURRENCIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  style={{
                    padding: "8px 20px",
                    background: currency === c ? "rgba(201,168,76,0.2)" : "none",
                    border: "none",
                    borderRight: c !== "AUD" ? "1px solid rgba(255,255,255,0.1)" : "none",
                    color: currency === c ? "#c9a84c" : "rgba(255,255,255,0.55)",
                    fontSize: "0.85rem",
                    fontWeight: currency === c ? 700 : 400,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {CURRENCY_SYMBOLS[c]} {c}
                </button>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div
            style={{
              background: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "8px",
              padding: "14px 20px",
              marginBottom: "32px",
            }}
          >
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: "#c9a84c" }}>Nota:</strong> Los precios indicados corresponden a itinerarios estándar. Pueden aplicarse cargos adicionales si la distancia total supera la estimación estándar, o si el punto de recogida o entrega se encuentra fuera del área del aeropuerto (incluidos Colombo y Negombo).
            </p>
          </div>

          {/* Plan Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {TIERS.map((tier) => (
              <PlanCard key={tier.key} tier={tier} currency={currency} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ textAlign: "center", marginTop: "48px", marginBottom: "48px" }}>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", marginBottom: "24px" }}>
            ¿No está seguro de qué plan le conviene? Contáctenos para recibir un presupuesto personalizado y gratuito.
          </p>
          <button
            onClick={scrollToContact}
            style={{
              background: "#c9a84c",
              color: "#000",
              border: "none",
              borderRadius: "4px",
              padding: "14px 36px",
              fontSize: "0.9rem",
              fontWeight: 700,
              letterSpacing: "0.05em",
              cursor: "pointer",
              textTransform: "uppercase",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            💬 Consulta Gratuita
          </button>
        </section>
      </div>
    </div>
  );
}
