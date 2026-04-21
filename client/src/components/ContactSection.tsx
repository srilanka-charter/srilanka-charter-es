import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
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
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
