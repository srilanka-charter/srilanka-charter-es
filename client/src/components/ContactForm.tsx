import { useState } from "react";

interface ContactFormProps {
  compact?: boolean;
}

export default function ContactForm({ compact = false }: ContactFormProps) {
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
    window.location.href =
      "mailto:info@srilanka-charter.com?subject=Consulta de Charter Sri Lanka&body=" +
      encodeURIComponent(body);
  };

  const inputClass =
    "w-full bg-white/5 border border-white/15 rounded px-3 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#C9A84C] transition-colors";
  const selectClass =
    "w-full bg-[#1a1a1a] border border-white/15 rounded px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#C9A84C] transition-colors";
  const labelClass =
    "block text-white/60 text-xs font-semibold tracking-widest uppercase mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className={labelClass}>
          NOMBRE COMPLETO <span className="text-[#C9A84C]">*</span>
        </label>
        <input
          name="name"
          required
          placeholder="ej. Carlos García"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>
          PAÍS <span className="text-[#C9A84C]">*</span>
        </label>
        <select name="country" required defaultValue="" className={selectClass}>
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
        <label className={labelClass}>
          CORREO ELECTRÓNICO <span className="text-[#C9A84C]">*</span>
        </label>
        <input
          name="email"
          type="email"
          required
          placeholder="su@correo.com"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>NÚMERO DE TELÉFONO</label>
        <input
          name="phone"
          type="tel"
          placeholder="+34 600 000 000"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>
            FECHA DE INICIO <span className="text-[#C9A84C]">*</span>
          </label>
          <input
            type="date"
            required
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className={inputClass + " [color-scheme:dark]"}
          />
        </div>
        <div>
          <label className={labelClass}>
            FECHA DE FIN <span className="text-[#C9A84C]">*</span>
          </label>
          <input
            type="date"
            required
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className={inputClass + " [color-scheme:dark]"}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>
          LUGAR DE INICIO DEL CHARTER <span className="text-[#C9A84C]">*</span>
        </label>
        <select name="pickup" required defaultValue="" className={selectClass}>
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
          <label className={labelClass}>
            Nº DE ADULTOS <span className="text-[#C9A84C]">*</span>
          </label>
          <select name="adults" required defaultValue="" className={selectClass}>
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
          <label className={labelClass}>Nº DE NIÑOS</label>
          <select name="children" defaultValue="0" className={selectClass}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4+">4 o más</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>
          TIPO DE VEHÍCULO <span className="text-[#C9A84C]">*</span>
        </label>
        <select name="vehicle" required defaultValue="" className={selectClass}>
          <option value="" disabled>— Seleccione vehículo —</option>
          <option>Sedán (hasta 3 pasajeros)</option>
          <option>Furgoneta (hasta 6 pasajeros)</option>
          <option>Furgoneta Grande (hasta 10 pasajeros)</option>
          <option>Déjenos recomendar</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>MONEDA PREFERIDA</label>
        <select name="currency" defaultValue="" className={selectClass}>
          <option value="">— Seleccione moneda —</option>
          <option>EUR (€ Euro)</option>
          <option>GBP (£ Libra esterlina)</option>
          <option>USD ($ Dólar estadounidense)</option>
          <option>AUD (A$ Dólar australiano)</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>DESTINOS / NOTAS DE ITINERARIO</label>
        <textarea
          name="notes"
          rows={3}
          placeholder="Por favor, indique los destinos, atracciones o peticiones especiales que tenga en mente."
          className="w-full bg-white/5 border border-white/15 rounded px-3 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
        />
      </div>

      <p className="text-white/50 text-xs text-center border border-white/10 rounded px-3 py-2.5 bg-white/5">
        ※ Tras recibir su consulta, le responderemos en inglés.
      </p>
      <button
        type="submit"
        className="w-full bg-[#C9A84C] text-[#0e0e0e] font-bold text-sm tracking-wider uppercase py-3.5 rounded hover:bg-[#b8963e] transition-colors"
      >
        Enviar Consulta
      </button>
      <p className="text-white/30 text-xs text-center">
        Al enviar este formulario, acepta nuestra{" "}
        <a href="#" className="underline hover:text-[#C9A84C]">
          Política de Privacidad
        </a>
        . Sin compromiso.
      </p>
    </form>
  );
}
