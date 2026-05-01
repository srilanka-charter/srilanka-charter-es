import { useState } from "react";

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
  { key: "bronze", label: "Plan Bronze", color: "#cd7f32" },
  { key: "silver", label: "Plan Silver", badge: "Más Popular", color: "#c9a84c" },
  { key: "gold",   label: "Plan Gold",   color: "#d4af37" },
];

const VEHICLES_HP: { key: VehicleKeyHP; label: string; capacity: string }[] = [
  { key: "sedan",  label: "Sedán",    capacity: "1–3 personas" },
  { key: "van",    label: "Furgoneta", capacity: "3–6 personas" },
  { key: "bigvan", label: "Van Grande", capacity: "6–9 personas" },
];

function PriceCard({ tier, currency }: { tier: (typeof TIERS_HP)[number]; currency: CurrencyKeyHP }) {
  const [vehicle, setVehicle] = useState<VehicleKeyHP>("sedan");
  const sym = CURRENCY_SYMBOLS_HP[currency];
  const prices = PRICES_HP[currency][tier.key][vehicle];

  return (
    <div style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${tier.color}33`, borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ padding: "16px 18px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: `linear-gradient(135deg, ${tier.color}11, transparent)` }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
          <span style={{ background: `${tier.color}22`, border: `1px solid ${tier.color}66`, color: tier.color, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", padding: "2px 8px", borderRadius: "20px", textTransform: "uppercase" }}>{tier.key.toUpperCase()}</span>
          {tier.badge && <span style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)", color: "#c9a84c", fontSize: "0.6rem", fontWeight: 600, padding: "2px 7px", borderRadius: "20px", textTransform: "uppercase" }}>{tier.badge}</span>}
        </div>
        <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, margin: 0 }}>{tier.label}</h3>
      </div>
      {/* Vehicle Tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.2)" }}>
        {VEHICLES_HP.map((v) => (
          <button key={v.key} onClick={() => setVehicle(v.key)} style={{ flex: 1, padding: "8px 4px", background: "none", border: "none", borderBottom: vehicle === v.key ? `2px solid ${tier.color}` : "2px solid transparent", color: vehicle === v.key ? tier.color : "rgba(255,255,255,0.5)", fontSize: "0.7rem", fontWeight: vehicle === v.key ? 600 : 400, cursor: "pointer", transition: "all 0.2s", textAlign: "center", lineHeight: 1.3 }}>
            <div>{v.label}</div>
            <div style={{ fontSize: "0.6rem", opacity: 0.7 }}>{v.capacity}</div>
          </button>
        ))}
      </div>
      {/* Price Table */}
      <div style={{ flex: 1 }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ padding: "8px 14px", textAlign: "left", color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", background: "rgba(20,20,20,0.95)" }}>Días</th>
              <th style={{ padding: "8px 14px", textAlign: "right", color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", background: "rgba(20,20,20,0.95)" }}>Precio (IVA incl.)</th>
            </tr>
          </thead>
          <tbody>
            {DAYS_HP.map((day, idx) => (
              <tr key={day} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", background: idx % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)" }}>
                <td style={{ padding: "8px 14px", color: "rgba(255,255,255,0.7)", fontSize: "0.82rem" }}>{day} días</td>
                <td style={{ padding: "8px 14px", textAlign: "right", color: "#fff", fontSize: "0.9rem", fontWeight: 600 }}>{sym}{prices[idx].toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function PricingPreview() {
  const [currency, setCurrency] = useState<CurrencyKeyHP>("USD");
  return (
    <section id="pricing" style={{ background: "var(--dark, #0d0d0d)", padding: "80px 0" }}>
      <div className="container">
        <div className="section-eyebrow">PRECIOS TRANSPARENTES</div>
        <h2 className="section-title">Lista de Precios Fijos</h2>
        <p className="section-sub" style={{ marginBottom: "32px" }}>Todos los precios incluyen impuestos y corresponden a conductores de habla inglesa. Seleccione su moneda y tipo de vehículo preferidos.</p>
        {/* Currency Tabs */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "28px", flexWrap: "wrap" }}>
          {(["USD", "GBP", "EUR", "AUD"] as CurrencyKeyHP[]).map((c) => (
            <button key={c} onClick={() => setCurrency(c)} style={{ padding: "8px 20px", background: currency === c ? "rgba(201,168,76,0.2)" : "rgba(255,255,255,0.05)", border: currency === c ? "1px solid rgba(201,168,76,0.5)" : "1px solid rgba(255,255,255,0.1)", borderRadius: "6px", color: currency === c ? "#c9a84c" : "rgba(255,255,255,0.55)", fontSize: "0.85rem", fontWeight: currency === c ? 700 : 400, cursor: "pointer", transition: "all 0.2s" }}>
              {CURRENCY_SYMBOLS_HP[c]} {c}
            </button>
          ))}
        </div>
        {/* Note */}
        <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "8px", padding: "12px 18px", marginBottom: "28px" }}>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: "#c9a84c" }}>Nota:</strong> Pueden aplicarse cargos adicionales si la distancia total supera la estimación estándar, o si el punto de recogida/entrega está fuera del área del aeropuerto.
          </p>
        </div>
        {/* Plan Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {TIERS_HP.map((tier) => <PriceCard key={tier.key} tier={tier} currency={currency} />)}
        </div>
        {/* Link to full price page */}
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <a href="/price" style={{ display: "inline-block", padding: "12px 32px", border: "1px solid rgba(201,168,76,0.5)", borderRadius: "6px", color: "#c9a84c", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none", transition: "all 0.2s", letterSpacing: "0.05em" }}>
            Ver Página de Precios Completa →
          </a>
        </div>
      </div>
    </section>
  );
}
