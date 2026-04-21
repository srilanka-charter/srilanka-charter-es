import { useState } from "react";

export default function ContactSection() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const lines: string[] = [];
    data.forEach((value, key) => {
      lines.push(key + ": " + value.toString());
    });
    if (startDate) lines.push("Fecha inicio: " + startDate);
    if (endDate) lines.push("Fecha fin: " + endDate);
    const body = lines.join("\n");
    window.location.href = "mailto:info@srilanka-charter.com?subject=Consulta de Charter Sri Lanka&body=" + encodeURIComponent(body);
  };

  return (
    <section id="contact" className="py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-4">CONTACTO</p>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Empiece a Planificar<br />Su Aventura<br />en Sri Lanka
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Indíquenos sus fechas de viaje, tamaño del grupo y preferencias — le responderemos con un itinerario y presupuesto personalizado en 24 horas.
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Ya sea que planifique un tour cultural de 5 días o un viaje de 2 semanas por toda la isla, nuestro equipo está aquí para ayudarle.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-white/5 rounded p-4">
                <span className="text-xl">⏱️</span>
                <div>
                  <p className="text-white font-semibold text-sm">Respuesta en 24 horas</p>
                  <p className="text-white/50 text-xs mt-1">Consultas aceptadas 24/7 — le responderemos con prontitud.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/5 rounded p-4">
                <span className="text-xl">🔒</span>
                <div>
                  <p className="text-white font-semibold text-sm">Sin compromiso</p>
                  <p className="text-white/50 text-xs mt-1">Esta es una consulta gratuita y sin obligación.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white/60 text-xs font-semibold tracking-widest uppercase mb-1.5">
                  NOMBRE COMPLETO <span className="text-[#C9A84C]">*</span>
                </label>
                <input
                  name="name"
                  required
                  placeholder="ej. Carlos García"
                  className="w-full bg-white/5 border border-white/15 rounded px-3 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#C9A84C] transition-colors"
                />
              </div>

              <div>
                <label className="block text-white/60 text-xs font-semibold tracking-widest uppercase mb-1.5">
                  PAÍS <span className="text-[#C9A84C]">*</span>
                </label>
                <select
                  name="country"
                  required
                  defaultValue=""
                  className="w-full bg-[#1a1a1a] border border-white/15 rounded px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                >
                  <option value="" disabled>— Seleccione su país —</option>
                  <option>España</option>
                  <option>Reino Unido</option>
                  <option>Estados Unidos</option>
                  <option>Francia</option>
                  <option>Alemania</option>
                  <option>Países Bajos</option>
                  <option>Italia</option>
                  <option>Australia</option>
                  <option>China</option>
                  <option>India</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-white/60 text-xs font-semibold tracking-widest uppercase mb-1.5">
                  CORREO ELECTRÓNICO <span className="text-[#C9A84C]">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="su@correo.com"
                  className="w-full bg-white/5 border border-white/15 rounded px-3 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#C9A84C] transition-colors"
                />
              </div>

              <div>
                <label className="block text-white/60 text-xs font-semibold tracking-widest uppercase mb-1.5">
                  NÚMERO DE TELÉFONO
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+34 600 000 000"
                  className="w-full bg-white/5 border border-white/15 rounded px-3 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#C9A84C] transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-white/60 text-xs font-semibold tracking-widest uppercase mb-1.5">
                    FECHA DE INICIO <span className="text-[#C9A84C]">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 rounded px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#C9A84C] transition-colors [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-xs font-semibold tracking-widest uppercase mb-1.5">
                    FECHA DE FIN <span className="text-[#C9A84C]">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 rounded px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#C9A84C] transition-colors [color-scheme:dark]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/60 text-xs font-semibold tracking-widest uppercase mb-1.5">
                  LUGAR DE INICIO DEL CHARTER <span className="text-[#C9A84C]">*</span>
                </label>
                <select
                  name="pickup"
                  required
                  defaultValue=""
                  className="w-full bg-[#1a1a1a] border border-white/15 rounded px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                >
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

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-white/60 text-xs font-semibold tracking-widest uppercase mb-1.5">
                    Nº DE ADULTOS <span className="text-[#C9A84C]">*</span>
                  </label>
                  <select
                    name="adults"
                    required
                    defaultValue=""
                    className="w-full bg-[#1a1a1a] border border-white/15 rounded px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                  >
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
                <div>
                  <label className="block text-white/60 text-xs font-semibold tracking-widest uppercase mb-1.5">
                    Nº DE NIÑOS
                  </label>
                  <select
                    name="children"
                    defaultValue="0"
                    className="w-full bg-[#1a1a1a] border border-white/15 rounded px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4 o más</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white/60 text-xs font-semibold tracking-widest uppercase mb-1.5">
                  TIPO DE VEHÍCULO <span className="text-[#C9A84C]">*</span>
                </label>
                <select
                  name="vehicle"
                  required
                  defaultValue=""
                  className="w-full bg-[#1a1a1a] border border-white/15 rounded px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                >
                  <option value="" disabled>— Seleccione vehículo —</option>
                  <option>Sedán (hasta 3 pasajeros)</option>
                  <option>Furgoneta (hasta 6 pasajeros)</option>
                  <option>Furgoneta Grande (hasta 10 pasajeros)</option>
                  <option>Déjenos recomendar</option>
                </select>
              </div>

              <div>
                <label className="block text-white/60 text-xs font-semibold tracking-widest uppercase mb-1.5">
                  MONEDA PREFERIDA
                </label>
                <select
                  name="currency"
                  defaultValue=""
                  className="w-full bg-[#1a1a1a] border border-white/15 rounded px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                >
                  <option value="">— Seleccione moneda —</option>
                  <option>EUR (€ Euro)</option>
                  <option>GBP (£ Libra esterlina)</option>
                  <option>USD ($ Dólar estadounidense)</option>
                  <option>AUD (A$ Dólar australiano)</option>
                </select>
              </div>

              <div>
                <label className="block text-white/60 text-xs font-semibold tracking-widest uppercase mb-1.5">
                  DESTINOS / NOTAS DE ITINERARIO
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder="Por favor, indique los destinos, atracciones o peticiones especiales que tenga en mente."
                  className="w-full bg-white/5 border border-white/15 rounded px-3 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C9A84C] text-[#0e0e0e] font-bold text-sm tracking-wider uppercase py-3.5 rounded hover:bg-[#b8963e] transition-colors"
              >
                Enviar Consulta
              </button>
              <p className="text-white/30 text-xs text-center">
                Al enviar este formulario, acepta nuestra{" "}
                <a href="#" className="underline hover:text-[#C9A84C]">Política de Privacidad</a>.
                Sin compromiso.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
