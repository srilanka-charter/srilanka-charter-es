import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Thanks() {
  const [, navigate] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0e0e0e] flex flex-col items-center justify-center px-6 text-center">
      {/* Gold check icon */}
      <div className="w-20 h-20 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/40 flex items-center justify-center mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-[#C9A84C]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>

      <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
        CONSULTA RECIBIDA
      </p>

      <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
        ¡Gracias por su consulta!
      </h1>

      <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl mb-4">
        Hemos recibido su solicitud correctamente. Nuestro equipo le responderá{" "}
        <span className="text-[#C9A84C] font-semibold">en inglés</span> en un plazo de{" "}
        <span className="text-[#C9A84C] font-semibold">24 horas</span>.
      </p>

      <p className="text-white/45 text-sm leading-relaxed max-w-lg mb-12">
        Si tiene alguna pregunta urgente, no dude en contactarnos directamente. Le
        prepararemos un itinerario y presupuesto personalizado lo antes posible.
      </p>

      {/* Info cards */}
      <div className="grid sm:grid-cols-2 gap-4 max-w-xl w-full mb-12">
        <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-5 text-left">
          <div className="w-9 h-9 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center mb-3 text-[#C9A84C]">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-white font-semibold text-sm mb-1">Respuesta en 24 horas</h3>
          <p className="text-white/45 text-xs leading-relaxed">
            Le enviaremos un itinerario y presupuesto personalizado en menos de 24 horas.
          </p>
        </div>
        <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-5 text-left">
          <div className="w-9 h-9 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center mb-3 text-[#C9A84C]">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
          </div>
          <h3 className="text-white font-semibold text-sm mb-1">Respuesta en inglés</h3>
          <p className="text-white/45 text-xs leading-relaxed">
            Nuestro equipo le responderá en inglés con toda la información necesaria.
          </p>
        </div>
      </div>

      <button
        onClick={() => navigate("/")}
        className="bg-[#C9A84C] text-[#0e0e0e] font-bold text-sm tracking-wider uppercase px-8 py-3.5 rounded hover:bg-[#b8963e] transition-colors"
      >
        Volver al Inicio
      </button>
    </div>
  );
}
