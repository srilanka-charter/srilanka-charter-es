import ContactForm from "@/components/ContactForm";

export default function HeroContactSection() {
  return (
    <section className="py-16 bg-[#0e0e0e] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — CTA text */}
          <div className="lg:sticky lg:top-24">
            <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              CONSULTA GRATUITA
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Listo para Explorar<br />Sri Lanka?
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Rellene el formulario y le enviaremos un itinerario y presupuesto personalizado en menos de 24 horas. Sin compromiso.
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Nuestro equipo hispanohablante esta disponible para responder cualquier pregunta y ayudarle a planificar el viaje perfecto a Sri Lanka.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#C9A84C]/15 flex items-center justify-center text-sm">✓</span>
                <span className="text-white/70 text-sm">Conductor privado certificado por el gobierno</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#C9A84C]/15 flex items-center justify-center text-sm">✓</span>
                <span className="text-white/70 text-sm">Itinerario completamente personalizado</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#C9A84C]/15 flex items-center justify-center text-sm">✓</span>
                <span className="text-white/70 text-sm">Respuesta garantizada en 24 horas</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#C9A84C]/15 flex items-center justify-center text-sm">✓</span>
                <span className="text-white/70 text-sm">Sin pago por adelantado — sin compromiso</span>
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
