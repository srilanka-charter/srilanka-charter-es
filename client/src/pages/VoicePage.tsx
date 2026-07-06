import { useSEO } from "@/hooks/useSEO";
import { Link } from "wouter";

/* ─────────────────────────────────────────────────────────────────────────────
   Tipos
───────────────────────────────────────────────────────────────────────────── */
interface Review {
  id: string;
  photo: string;
  photoPosition?: string;
  driver: string;
  name: string;
  pax: string;
  period: string;
  route: string;
  ratings: { driver: number; vehicle: number; operator: number };
  quote: string;
  body: string;
}

/* ─────────────────────────────────────────────────────────────────────────────
   Datos de reseñas — 22 reseñas, traducidas al español
   (foto URLs idénticas a la versión inglesa)
───────────────────────────────────────────────────────────────────────────── */
const REVIEWS: Review[] = [
  {
    id: "aruna",
    photo: "https://en.srilanka-charter.com/manus-storage/review_aruna_78705121.jpeg",
    driver: "Aruna",
    name: "La Pareja M",
    pax: "2 pasajeros",
    period: "Marzo 2025",
    route: "Colombo – Ella – Nuwara Eliya – Kandy",
    ratings: { driver: 5, vehicle: 5, operator: 4.5 },
    quote: "Aruna hizo que cada carretera de montaña pareciera una aventura, no un desafío.",
    body: "Contratamos a Aruna para un circuito de una semana por las tierras altas, y superó todas nuestras expectativas. Su conocimiento de los miradores panorámicos — muchos de los cuales no aparecen en las guías de viaje — fue extraordinario. Calculó perfectamente nuestra llegada a Ella Rock para capturar la niebla matutina, y su sugerencia de parar en un pequeño puesto de té al borde de la carretera se convirtió en uno de nuestros recuerdos más preciados. La conducción de Aruna es suave y segura incluso en los estrechos pasos de montaña, y su serenidad nos tranquilizó completamente durante todo el viaje. Siempre puntual, siempre sonriente, y siempre pensando un paso por delante. Un profesional excepcional y un ser humano genuinamente cálido.",
  },
  {
    id: "dhammika",
    photo: "https://en.srilanka-charter.com/manus-storage/review_dhammika_f371cfdd.jpeg",
    photoPosition: "center 40%",
    driver: "Dhammika",
    name: "La Pareja R",
    pax: "2 pasajeros",
    period: "Febrero 2025",
    route: "Colombo – Sigiriya – Kandy – Mirissa",
    ratings: { driver: 5, vehicle: 4.5, operator: 4.5 },
    quote: "El conocimiento local de Dhammika transformó nuestro viaje de unas vacaciones en una auténtica inmersión cultural.",
    body: "Desde el momento en que Dhammika nos recogió en el Aeropuerto de Colombo, supimos que estábamos en buenas manos. Tiene un conocimiento enciclopédico de la historia y la cultura de Sri Lanka que comparte con verdadero entusiasmo — nunca dando lecciones, siempre conversando. En Sigiriya sabía exactamente desde qué ángulo fotografiar la roca a la hora dorada, y en Kandy nos llevó a una actuación de danza kandiana que la mayoría de los turistas nunca encuentran. Su vehículo estaba impecable y con aire acondicionado, y siempre tenía agua fría esperándonos. Dhammika es el tipo de conductor que genuinamente se preocupa por si estás teniendo la mejor experiencia posible. Ya lo hemos recomendado a tres grupos de amigos.",
  },
  {
    id: "kushan",
    photo: "https://en.srilanka-charter.com/manus-storage/review_kushan_f9478373.jpeg",
    driver: "Kushan",
    name: "El Grupo B",
    pax: "4 pasajeros",
    period: "Enero 2025",
    route: "Colombo – Dambulla – Polonnaruwa – Trincomalee",
    ratings: { driver: 5, vehicle: 4.5, operator: 5 },
    quote: "Kushan manejó cuatro personalidades muy diferentes con paciencia, buen humor y una habilidad notable.",
    body: "Nuestro grupo de cuatro tenía intereses muy distintos — historia, fauna, playas y gastronomía — y Kushan logró tejerlos todos en un itinerario perfecto. Fue infinitamente paciente cuando no nos poníamos de acuerdo sobre dónde comer, siempre tenía una sugerencia lista, y nunca nos hizo sentir con prisa. Su conducción por las carreteras costeras fue segura y confiada, y conocía cada atajo para evitar el peor tráfico de la tarde. El vehículo era amplio, cómodo e impecablemente limpio durante todo el viaje. La naturaleza tranquila de Kushan hizo que los largos días de conducción fueran genuinamente agradables. Nos fuimos de Sri Lanka sintiéndonos como si hubiéramos hecho un amigo.",
  },
  {
    id: "lasith",
    photo: "https://en.srilanka-charter.com/manus-storage/review_lasith2_555d5b29.jpeg",
    driver: "Lasith",
    name: "La Familia W",
    pax: "3 pasajeros",
    period: "Abril 2025",
    route: "Colombo – Sigiriya – Kandy – Galle",
    ratings: { driver: 5, vehicle: 5, operator: 5 },
    quote: "Lasith fue infinitamente paciente con nuestros hijos y hizo que cada momento del viaje pareciera sin esfuerzo.",
    body: "Tener a Lasith con nosotros fue un verdadero golpe de suerte. Su cálida actitud con los niños nos tranquilizó a todos, y su inglés claro significó que nunca se perdió nada en la traducción. Puntual, lleno de sugerencias reflexivas para lugares de interés y restaurantes locales, y consistentemente tranquilo al volante — fue todo lo que podíamos haber pedido. Le recomendamos sin dudarlo: atento, conocedor y completamente digno de confianza. Si alguna vez estás en Europa, Lasith — la primera ronda corre de nuestra cuenta.",
  },
  {
    id: "malinga",
    photo: "https://en.srilanka-charter.com/manus-storage/review_malinga_5636b125.jpeg",
    driver: "Malinga",
    name: "La Pareja S",
    pax: "2 pasajeros",
    period: "Mayo 2025",
    route: "Negombo – Wilpattu – Anuradhapura – Trincomalee",
    ratings: { driver: 5, vehicle: 4.5, operator: 5 },
    quote: "El entusiasmo de Malinga por la fauna de Sri Lanka fue completamente contagioso — hizo que cada safari fuera inolvidable.",
    body: "Elegimos un itinerario centrado en la fauna y Malinga fue el guía perfecto para ello. Su conocimiento del Parque Nacional de Wilpattu fue extraordinario — avistó un leopardo descansando en un árbol que nuestro jeep de safari oficial se había perdido por completo. También organizó un safari en barca por el Río Madu que no estaba en nuestro plan original, y resultó ser uno de los momentos culminantes de todo el viaje. Malinga conduce con verdadero cuidado por los caminos de las reservas de fauna, y su paciencia esperando el avistamiento perfecto es notable. Su alegre comentario durante todo el trayecto hizo que cada kilómetro entre parques fuera agradable. Un conductor excepcional para cualquiera que ame la naturaleza.",
  },
  {
    id: "ravi",
    photo: "https://en.srilanka-charter.com/manus-storage/review_ravi_b940edfb.jpeg",
    driver: "Ravi",
    name: "El Grupo Y",
    pax: "7 pasajeros",
    period: "Marzo 2025",
    route: "Colombo – Sigiriya – Dambulla – Kandy – Galle",
    ratings: { driver: 5, vehicle: 4.5, operator: 4.5 },
    quote: "Ravi mantuvo a siete personas contentas, puntuales y riendo durante todo el camino — no es poca cosa.",
    body: "Viajando como un grupo grande de siete jóvenes adultos, estábamos un poco nerviosos sobre si un chárter privado funcionaría para nosotros. Ravi disipó todas las preocupaciones en la primera hora. Tiene un don natural para gestionar la dinámica de grupo — sabe cuándo sugerir una parada, cuándo seguir adelante, y cuándo dejar que todos simplemente disfruten del paisaje en silencio. Su furgoneta era espaciosa y cómoda, y la mantuvo impecable durante todo el viaje. Ravi también tiene un excelente ojo para las oportunidades fotográficas y siempre estaba dispuesto a detenerse para la toma perfecta. Nos presentó comida callejera local que nunca habríamos encontrado por nuestra cuenta, y cada recomendación fue excepcional. Ravi hizo que nuestro viaje en grupo fuera genuinamente especial.",
  },
  {
    id: "smith",
    photo: "https://en.srilanka-charter.com/manus-storage/review_smith_3ba6750f.jpeg",
    driver: "Smith",
    name: "La Familia K",
    pax: "5 pasajeros",
    period: "Febrero 2025",
    route: "Colombo – Ella – Yala – Mirissa",
    ratings: { driver: 5, vehicle: 5, operator: 5 },
    quote: "El profesionalismo tranquilo y la calidez genuina de Smith hicieron que nuestras vacaciones familiares fueran verdaderamente excepcionales.",
    body: "Viajamos como una familia de cinco — incluyendo dos niños pequeños y una abuela — y Smith manejó cada desafío logístico con eficiencia silenciosa y una sonrisa constante. Fue meticuloso con la seguridad, siempre asegurándose de que todos estuvieran cómodos antes de partir, y su conducción por las sinuosas carreteras hacia Ella fue impresionantemente suave. Smith organizó una tarta de cumpleaños sorpresa para nuestra abuela en un restaurante de Mirissa, lo que emocionó profundamente a toda la familia. Su conocimiento del Parque Nacional de Yala fue sobresaliente — vimos leopardos, elefantes y cocodrilos en una sola mañana. Smith es el tipo de conductor que genuinamente invierte en tu felicidad. No podemos recomendarle lo suficiente.",
  },
  {
    id: "asanka",
    photo: "https://en.srilanka-charter.com/manus-storage/review_asanka_couple_3ef4bb3c.png",
    photoPosition: "center 30%",
    driver: "Asanka",
    name: "La Pareja P",
    pax: "2 pasajeros",
    period: "Enero 2025",
    route: "Colombo – Anuradhapura – Polonnaruwa – Sigiriya",
    ratings: { driver: 5, vehicle: 5, operator: 4.5 },
    quote: "Asanka hizo que las ciudades antiguas cobraran vida — su conocimiento y calidez fueron simplemente sobresalientes.",
    body: "Exploramos el Triángulo Cultural con Asanka durante tres días, y fue una experiencia que nunca olvidaremos. Su profundo conocimiento de Anuradhapura y Polonnaruwa transformó lo que podría haber sido un largo paseo entre ruinas en un genuinamente emocionante viaje a través de la historia. Sabía exactamente qué lugares priorizar, cuándo detenerse y cuándo seguir adelante — siempre leyendo perfectamente nuestra energía. En Sigiriya nos guió por la roca con paciencia y aliento, y su timing significó que tuvimos las mejores vistas casi para nosotros solos. Asanka es cálido, profesional y eternamente entusiasta por compartir su país. Nos fuimos de Sri Lanka sintiéndonos como si hubiéramos hecho un verdadero amigo.",
  },
  {
    id: "ranjana",
    photo: "https://en.srilanka-charter.com/manus-storage/review_ranjana_50bce7fd.jpeg",
    driver: "Ranjana",
    name: "La Pareja H",
    pax: "2 pasajeros",
    period: "Noviembre 2025",
    route: "Colombo – Kandy – Nuwara Eliya – Galle",
    ratings: { driver: 5, vehicle: 4.5, operator: 4.5 },
    quote: "Ranjana convirtió nuestro viaje a Sri Lanka en algo mucho más allá del turismo ordinario.",
    body: "Reservamos un chárter privado para dos y nos emparejaron con Ranjana — una decisión de la que no podríamos estar más contentos. Aportó una tranquila confianza a cada trayecto, navegando por carreteras de montaña y bulliciosos centros urbanos con igual facilidad. Lo que más destacó fue su genuino entusiasmo: sugirió una experiencia de rafting en aguas bravas que no habíamos planeado, y se convirtió en uno de los momentos culminantes del viaje. Su conocimiento local de miradores ocultos, restaurantes auténticos y costumbres culturales enriqueció cada día. Ranjana es el tipo de guía que te hace sentir como un invitado del país, no solo un turista de paso.",
  },
  {
    id: "chamara-nine-arch",
    photo: "https://en.srilanka-charter.com/manus-storage/voice_review_nine_arch_7dfe057f.jpg",
    photoPosition: "center 30%",
    driver: "Chamara",
    name: "El Grupo K",
    pax: "4 pasajeros",
    period: "Junio 2026",
    route: "Colombo – Ella – Mirissa – Galle",
    ratings: { driver: 5, vehicle: 5, operator: 5 },
    quote: "Chamara conocía cada ángulo oculto del Puente de los Nueve Arcos — nuestras fotos quedaron absolutamente impresionantes.",
    body: "Éramos un grupo de cuatro amigos viajando a Sri Lanka por primera vez, y Chamara hizo que la experiencia fuera verdaderamente inolvidable. En el Puente de los Nueve Arcos de Ella nos guió hasta un mirador que la mayoría de los turistas nunca encuentran: la luz era perfecta y las fotos increíbles. Siempre iba un paso por delante, sabiendo exactamente cuándo pasaría el tren y colocándonos para las mejores fotografías. Su conducción por las sinuosas carreteras de las tierras altas fue suave y segura, y nos entretuvo con historias sobre la cultura e historia local durante todo el trayecto. Chamara es cálido, profesional y genuinamente apasionado por compartir lo mejor de Sri Lanka. No podríamos haber pedido un mejor guía.",
  },
  {
    id: "pradeep-boat-couple",
    photo: "https://en.srilanka-charter.com/manus-storage/voice_review_boat_couple_0be07267.jpg",
    photoPosition: "center 40%",
    driver: "Pradeep",
    name: "La Pareja L",
    pax: "2 pasajeros",
    period: "Mayo 2026",
    route: "Colombo – Wilpattu – Anuradhapura – Trincomalee",
    ratings: { driver: 5, vehicle: 5, operator: 5 },
    quote: "El safari en barca por los humedales fue mágico — Pradeep lo organizó todo a la perfección.",
    body: "Mi pareja y yo buscábamos algo más allá del camino turístico habitual, y Pradeep nos lo proporcionó exactamente. Organizó un safari privado en barca por una impresionante reserva de humedales que nunca habríamos descubierto por nuestra cuenta. Deslizarse entre los nenúfares bajo un dosel de paja, rodeados de aves y exuberante vegetación, fue uno de los momentos más tranquilos de todo el viaje. El conocimiento de Pradeep sobre el ecosistema local era impresionante: identificó cada ave y planta que encontramos. Su vehículo estaba impecable, su puntualidad irreprochable y su calidez nos hizo sentir como en familia. Sri Lanka es un país hermoso, y Pradeep lo hizo aún más especial.",
  },
  {
    id: "nuwan-wetland-jp",
    photo: "https://en.srilanka-charter.com/manus-storage/voice_review_wetland_jp_372bc3f0.jpg",
    photoPosition: "center 35%",
    driver: "Nuwan",
    name: "La Pareja T",
    pax: "2 pasajeros",
    period: "Abril 2026",
    route: "Colombo – Sigiriya – Minneriya – Kandy",
    ratings: { driver: 5, vehicle: 5, operator: 5 },
    quote: "El conocimiento local de Nuwan abrió puertas que nunca esperábamos — una experiencia verdaderamente excepcional.",
    body: "Habíamos oído maravillas sobre los tours con conductor privado en Sri Lanka, pero Nuwan superó incluso nuestras más altas expectativas. En el Parque Nacional de Minneriya nos colocó perfectamente para presenciar la famosa Reunión de Elefantes: cientos de elefantes convergiendo cerca del embalse al atardecer. Fue un espectáculo de fauna como ningún otro que hayamos visto. La tranquila presencia de Nuwan y su conocimiento enciclopédico del parque hicieron que la experiencia se sintiera íntima y personal. También nos llevó a una zona de humedales oculta donde disfrutamos de un sereno paseo en barca rodeados de flores de loto y martines pescadores. Su atención al detalle — desde toallas frías después de los largos trayectos hasta paradas perfectamente cronometradas para picar algo local — demostró un nivel de cuidado que es difícil de encontrar. Volveremos a Sri Lanka, y pediremos a Nuwan.",
  },
  {
    id: "kasun-elephant-couple",
    photo: "https://en.srilanka-charter.com/manus-storage/voice_review_elephant_couple_efa97b04.jpg",
    photoPosition: "center 25%",
    driver: "Kasun",
    name: "La Pareja F",
    pax: "2 pasajeros",
    period: "Junio 2026",
    route: "Colombo – Minneriya – Dambulla – Sigiriya – Kandy",
    ratings: { driver: 5, vehicle: 5, operator: 5 },
    quote: "Estar entre cientos de elefantes salvajes con Kasun a nuestro lado — una experiencia para toda la vida.",
    body: "Reservamos un chárter privado específicamente para ver la Reunión de Elefantes en Minneriya, y Kasun lo hizo absolutamente extraordinario. Llegó temprano para asegurar la mejor posición en el parque, y cuando los elefantes comenzaron a moverse hacia el embalse, estábamos perfectamente colocados para presenciar el espectáculo desde el jeep descapotable. La magnitud de la reunión — docenas de familias moviéndose juntas por la llanura abierta — nos dejó sin palabras. Kasun narró el comportamiento de cada manada con la pericia de un naturalista, señalando crías, matriarcas y machos con un conocimiento notable. Más allá del safari, su conducción por el Triángulo Cultural fue suave y segura, y sus recomendaciones de restaurantes fueron constantemente excelentes. Un conductor sobresaliente y una persona genuinamente encantadora.",
  },
  {
    id: "dilshan-jeep-couple",
    photo: "https://en.srilanka-charter.com/manus-storage/voice_review_jeep_couple_eb1a3cff.jpg",
    photoPosition: "center 40%",
    driver: "Anjana",
    name: "La Pareja M",
    pax: "2 pasajeros",
    period: "Mayo 2026",
    route: "Colombo – Yala – Mirissa – Galle",
    ratings: { driver: 5, vehicle: 5, operator: 4.5 },
    quote: "El safari en jeep por Yala fue el punto culminante de toda nuestra luna de miel.",
    body: "Elegimos Sri Lanka para nuestra luna de miel y queríamos algo aventurero e inolvidable. Anjana organizó un safari privado en jeep por el Parque Nacional de Yala que superó todas las expectativas. Avistamos leopardos, osos perezosos, cocodrilos y una deslumbrante variedad de aves — todo en una sola mañana. El conocimiento de Anjana sobre el terreno del parque significó que siempre estábamos en el lugar correcto en el momento correcto, y su entusiasmo era contagioso. El jeep era robusto y bien mantenido, perfecto para los caminos de todo terreno en el interior del parque. Después del safari, nos llevó por la costa sur hasta Mirissa, donde observamos ballenas azules desde un barco que había organizado previamente. Anjana convirtió nuestra luna de miel en una verdadera aventura. No podemos recomendarle lo suficiente.",
  },
  {
    id: "sanjeewa-oxcart-couple",
    photo: "https://en.srilanka-charter.com/manus-storage/voice_review_oxcart_couple_1b0751ff.jpg",
    photoPosition: "center 50%",
    driver: "Sanjeewa",
    name: "La Pareja B",
    pax: "2 pasajeros",
    period: "Junio 2026",
    route: "Colombo – Sigiriya – Polonnaruwa – Kandy",
    ratings: { driver: 5, vehicle: 5, operator: 5 },
    quote: "Sanjeewa organizó experiencias que nunca podríamos haber encontrado por nuestra cuenta — incluido un mágico paseo en carreta de bueyes.",
    body: "Sanjeewa es el tipo de conductor que transforma unas vacaciones en un auténtico viaje cultural. Durante nuestra estancia en el Triángulo Cultural, organizó un paseo tradicional en carreta de bueyes por un pueblo rural completamente fuera del mapa turístico. Sentarse dentro del carro bellamente decorado, enmarcado por los árboles antiguos y rodeado de canto de pájaros, fue uno de esos raros momentos de viaje que se quedan contigo para siempre. Sanjeewa había construido claramente relaciones reales con las familias locales a lo largo de los años, y su calidez hacia él — y por extensión hacia nosotros — fue conmovedora. Su conducción fue igualmente impresionante: suave, segura y siempre puntual. Anticipaba nuestras necesidades antes de que las expresáramos, desde ajustar el aire acondicionado hasta sugerir el momento perfecto para visitar cada lugar. Sanjeewa representa todo lo que hace que los viajes con conductor privado en Sri Lanka sean tan especiales.",
  },
  {
    id: "ranjana-boat-group",
    photo: "https://en.srilanka-charter.com/manus-storage/voice_review_ranjana_boat_group_e98c1415.jpg",
    photoPosition: "center 40%",
    driver: "Ranjana",
    name: "El Grupo S",
    pax: "5 pasajeros",
    period: "Julio 2026",
    route: "Colombo – Wilpattu – Anuradhapura – Trincomalee",
    ratings: { driver: 5, vehicle: 5, operator: 5 },
    quote: "Ranjana se unió a nosotros en el safari en barca y hizo que toda la experiencia pareciera completamente sin esfuerzo.",
    body: "Éramos un grupo de cinco amigos viajando juntos, y Ranjana fue el compañero perfecto para cada etapa del viaje. Organizó un safari en barca por una impresionante reserva de humedales que nunca habríamos encontrado por nuestra cuenta — deslizarse por el agua rodeados de flores de loto y aves fue uno de los momentos más tranquilos de todo el viaje. Lo que más nos impresionó fue cómo Ranjana parecía anticiparlo todo: sabía exactamente cuándo sugerir una parada, qué lugares locales valían la pena visitar y cómo mantener a un grupo de cinco personas moviéndose sin que nadie se sintiera apresurado. Su calidez y genuino entusiasmo por compartir lo mejor de Sri Lanka hicieron que cada día se sintiera como una aventura. No podríamos haber pedido un mejor guía.",
  },
  {
    id: "chami-airport-group",
    photo: "https://en.srilanka-charter.com/manus-storage/voice_review_chami_airport_group_55b90413.jpg",
    photoPosition: "center 35%",
    driver: "Chami",
    name: "El Grupo Y",
    pax: "4 pasajeros",
    period: "Junio 2026",
    route: "Colombo – Sigiriya – Kandy – Mirissa – Galle",
    ratings: { driver: 5, vehicle: 5, operator: 5 },
    quote: "Chami nos recibió en el aeropuerto con guirnaldas de flores — y la calidez no se detuvo desde ese momento.",
    body: "Desde el primer momento en el Aeropuerto de Colombo, Chami marcó el tono para un viaje extraordinario. Nos estaba esperando con guirnaldas de flores tradicionales, lo que inmediatamente nos hizo sentir bienvenidos y especiales. Durante los días siguientes, nos guió por Sigiriya, Kandy y la costa sur con la pericia de alguien que genuinamente ama su país y se enorgullece de compartirlo. Su inglés era excelente, su conducción suave y segura, y sus recomendaciones de restaurantes constantemente sobresalientes. Siempre iba un paso por delante — organizando salidas tempranas para evitar las multitudes en los lugares populares, y encontrando rincones tranquilos que la mayoría de los turistas nunca descubren. Chami es un conductor verdaderamente excepcional y un ser humano maravilloso. Volveremos absolutamente a Sri Lanka y pediremos que sea él de nuevo.",
  },
  {
    id: "eranga",
    photo: "https://en.srilanka-charter.com/manus-storage/review1_r_family_eranga_a3545b4c.png",
    driver: "Eranga",
    name: "La Familia R",
    pax: "4 pasajeros",
    period: "Agosto 2025",
    route: "Anuradhapura – Dambulla – Sigiriya – Polonnaruwa",
    ratings: { driver: 5, vehicle: 5, operator: 5 },
    quote: "Servicio profesional desde la primera consulta hasta la entrega final — nos sentimos completamente tranquilos durante todo el proceso.",
    body: "Desde la reserva previa hasta el día del viaje, el equipo respondió con rapidez y claridad. Los precios y la planificación del itinerario se explicaron de una manera que no dejó lugar a la incertidumbre. El día en cuestión, Eranga condujo con cuidado y compostura, desviándose sin problemas para evitar la congestión y mantenernos en el horario previsto. Su profundo conocimiento de Anuradhapura, Dambulla, Sigiriya y Polonnaruwa nos proporcionó una rica base histórica para comprender este notable país. Nos consideramos afortunados de haberle tenido como conductor y guía.",
  },
  {
    id: "lasith-march26",
    photo: "https://en.srilanka-charter.com/manus-storage/review_lasith_family_ae2d2464.jpeg",
    driver: "Lasith",
    name: "La Familia W",
    pax: "3 pasajeros",
    period: "Marzo 2026",
    route: "Passikudah – Sigiriya – Colombo",
    ratings: { driver: 5, vehicle: 4.5, operator: 5 },
    quote: "Lasith fue infinitamente paciente con nuestros hijos y hizo que cada momento del viaje pareciera sin esfuerzo.",
    body: "Contar con Lasith fue un auténtico golpe de suerte. Su trato cálido con los niños nos tranquilizó a todos, y su inglés claro significó que nunca se perdió nada en la traducción. Puntual, lleno de sugerencias reflexivas sobre lugares de interés y restaurantes locales, y constantemente tranquilo al volante — era todo lo que podíamos pedir. (¡Probablemente nos saltemos esa carretera entre Passikudah y Sigiriya la próxima vez!) Lo recomendamos sin reservas: atento, conocedor y completamente de confianza. Si alguna vez estás por Europa, Lasith, la primera ronda corre de nuestra cuenta.",
  },
  {
    id: "ranjana-home",
    photo: "https://en.srilanka-charter.com/manus-storage/review_ranjana_new_2b654dea.png",
    driver: "Ranjana",
    name: "La Pareja H",
    pax: "2 pasajeros",
    period: "Noviembre 2025",
    route: "Colombo – Kandy – Nuwara Eliya – Galle",
    ratings: { driver: 5, vehicle: 4.5, operator: 4.5 },
    quote: "Ranjana convirtió nuestro viaje a Sri Lanka en algo mucho más allá del turismo ordinario.",
    body: "Reservamos un chárter privado para dos y nos emparejaron con Ranjana — una decisión de la que no podríamos estar más contentos. Aportó una tranquila confianza a cada trayecto, navegando por carreteras de montaña y bulliciosos centros urbanos con igual facilidad. Lo que más destacó fue su genuino entusiasmo: sugirió una experiencia de rafting en aguas bravas que no habíamos planeado, y se convirtió en uno de los momentos culminantes del viaje. Su conocimiento local de miradores ocultos, restaurantes auténticos y costumbres culturales enriqueció cada día. Ranjana es el tipo de guía que te hace sentir como un invitado del país, no solo un turista de paso.",
  },
  {
    id: "priyanth",
    photo: "https://en.srilanka-charter.com/manus-storage/review_priyantha_couple_e0a47aaf.png",
    driver: "Priyanth",
    name: "A&S",
    pax: "2 pasajeros",
    period: "Agosto 2025",
    route: "Colombo – Sigiriya – Kandy – Nuwara Eliya – Galle",
    ratings: { driver: 5, vehicle: 4.5, operator: 5 },
    quote: "Priyanth hizo que seis días se sintieran como un viaje con un amigo de confianza, no con un conductor contratado.",
    body: "Partiendo del Aeropuerto de Colombo, Priyanth nos guió por Sigiriya, Kandy, Nuwara Eliya y Galle durante seis días. Fue puntual y condujo con cuidado durante todo el recorrido, comprobando siempre cómo nos sentíamos — algo que genuinamente apreciamos en los tramos más largos. Su alegre compañía hizo que cada traslado fuera agradable, y sus reflexiones sobre la historia y la cultura de Sri Lanka añadieron una profundidad real a lo que vimos. También nos llevó a un mirador impresionante que no estaba en nuestro plan original, y nos presentó restaurantes locales que fueron simplemente sobresalientes. Nos encantaría viajar con él de nuevo en nuestra próxima visita a Sri Lanka.",
  },
  {
    id: "indika",
    photo: "https://en.srilanka-charter.com/manus-storage/review5_t_couple_indika_519f1510.png",
    driver: "Indika",
    name: "La Pareja T",
    pax: "2 pasajeros",
    period: "Octubre 2025",
    route: "Negombo – Sigiriya – Kandy – Nuwara Eliya – Mirissa",
    ratings: { driver: 5, vehicle: 5, operator: 5 },
    quote: "Gracias a Indika, nuestro viaje no fue solo turismo — se convirtió en un viaje rico en colores e inolvidable.",
    body: "Viajamos en pareja desde Negombo por Sigiriya, Kandy, Nuwara Eliya y Mirissa durante cinco días. En la primera mañana — que resultó ser un cumpleaños — apareció una tarta en el desayuno, organizada discretamente por Indika a través del hotel. También nos regaló una pequeña figura de elefante. Nos conmovió genuinamente. Durante todo el viaje fue una presencia estable y tranquilizadora: informándonos antes de cada lugar, gestionando las salidas tempranas sin quejarse, recomendando restaurantes que él mismo frecuenta (todos fueron excelentes) e incluso viajando en tren con nosotros para mantenernos seguros entre la multitud. Cuando algo parecía sobrevalorado, simplemente decía: 'Saltémonos esto', y esa honestidad nos hizo confiar en él completamente.",
  },
  {
    id: "chamil",
    photo: "https://en.srilanka-charter.com/manus-storage/review_dfamily_chamil_9214e24c.png",
    driver: "Chamil",
    name: "La Familia D",
    pax: "5 pasajeros",
    period: "Diciembre 2025",
    route: "Colombo – Sigiriya – Kandy – Yala – Galle",
    ratings: { driver: 5, vehicle: 5, operator: 4.5 },
    quote: "A pesar de tener que reorganizar completamente nuestro itinerario tras un ciclón, Chamil hizo que fuera el viaje de nuestra vida.",
    body: "Viajamos como tres generaciones — abuelos, padres y un niño — justo después de que un ciclón hubiera perturbado la isla. Chamil recopilaba constantemente la información más reciente sobre el estado de las carreteras y la seguridad, y siempre proponía las mejores rutas disponibles teniendo en cuenta nuestras preferencias. Cuando necesitamos cancelar hoteles y reservas de tren y organizar nuevos a corto plazo, estuvo ahí ayudándonos en cada paso. Se unió a nosotros para la escalada de la Roca de Sigiriya y el safari, lo que nos dio una enorme tranquilidad. Su atención a nuestro hijo fue especialmente conmovedora. La calidez, la rapidez de pensamiento y la natural consideración de Chamil conquistaron a todos los miembros de nuestra familia. Ya estamos deseando nuestro próximo viaje a Sri Lanka, y pediremos absolutamente a Chamil de nuevo.",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Cálculo de puntuaciones globales
───────────────────────────────────────────────────────────────────────────── */
function avg(arr: number[]): number {
  return Math.round((arr.reduce((a, b) => a + b, 0) / arr.length) * 10) / 10;
}

const overallScore = avg(
  REVIEWS.map((r) => (r.ratings.driver + r.ratings.vehicle + r.ratings.operator) / 3)
);
const driverAvg = avg(REVIEWS.map((r) => r.ratings.driver));
const vehicleAvg = avg(REVIEWS.map((r) => r.ratings.vehicle));
const operatorAvg = avg(REVIEWS.map((r) => r.ratings.operator));

/* ─────────────────────────────────────────────────────────────────────────────
   Tarjeta de reseña individual
───────────────────────────────────────────────────────────────────────────── */
function ReviewCard({ review }: { review: Review }) {
  const overall =
    Math.round(
      ((review.ratings.driver + review.ratings.vehicle + review.ratings.operator) / 3) * 10
    ) / 10;

  return (
    <article className="voice-card">
      {/* Foto */}
      <div className="voice-card-photo-wrap">
        <img
          src={review.photo}
          alt={`Reseña de ${review.name} con el conductor ${review.driver}`}
          className="voice-card-photo"
          style={{ objectPosition: review.photoPosition ?? "center 40%" }}
          loading="lazy"
        />
        <div className="voice-card-overall-badge">
          <span className="voice-badge-star">★</span>
          <span className="voice-badge-num">{overall.toFixed(1)}</span>
        </div>
      </div>

      {/* Contenido */}
      <div className="voice-card-content">
        <div>
          <p className="voice-card-driver">Conductor: {review.driver}</p>
          <p className="voice-card-meta">
            {review.name} · {review.pax} · {review.period}
          </p>
          <p className="voice-card-route">📍 {review.route}</p>
        </div>

        <blockquote className="voice-card-quote">"{review.quote}"</blockquote>

        <p className="voice-card-body">{review.body}</p>

        {/* Valoraciones */}
        <div className="voice-ratings">
          <div className="voice-total-score">
            <span className="voice-total-label">OVERALL</span>
            <span className="voice-total-num">{overall.toFixed(1)}</span>
            <span className="voice-total-stars">{"★".repeat(Math.round(overall))}</span>
          </div>
          <div className="voice-breakdown">
            {(
              [
                ["Conductor", review.ratings.driver],
                ["Vehículo", review.ratings.vehicle],
                ["Operador", review.ratings.operator],
              ] as [string, number][]
            ).map(([label, score]) => (
              <div key={label} className="voice-breakdown-row">
                <span className="voice-breakdown-label">{label}</span>
                <div className="voice-breakdown-bar-wrap">
                  <div
                    className="voice-breakdown-bar"
                    style={{ width: `${(score / 5) * 100}%` }}
                  />
                </div>
                <span className="voice-breakdown-score">{score.toFixed(1)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Página principal
───────────────────────────────────────────────────────────────────────────── */
export default function VoicePage() {
  useSEO({
    title: "Opiniones de Clientes | Reseñas de Conductores Privados en Sri Lanka | SLTCS",
    description:
      "Lee las opiniones reales de viajeros que han explorado Sri Lanka con los conductores privados de SLTCS. Puntuación global 4.9/5 basada en 22 reseñas verificadas.",
    path: "/voice",
    noindex: false,
    hreflangs: [
      { hreflang: "es", href: "https://es.srilanka-charter.com/voice" },
      { hreflang: "en", href: "https://en.srilanka-charter.com/voice" },
      { hreflang: "fr", href: "https://fr.srilanka-charter.com/voice" },
      { hreflang: "de", href: "https://de.srilanka-charter.com/voice" },
      { hreflang: "nl", href: "https://nl.srilanka-charter.com/voice" },
      { hreflang: "x-default", href: "https://en.srilanka-charter.com/voice" },
    ],
    jsonLdList: [
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "SLTCS – Sri Lanka Car Hire with Private Driver",
        url: "https://es.srilanka-charter.com",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: overallScore.toString(),
          bestRating: "5",
          worstRating: "1",
          ratingCount: REVIEWS.length.toString(),
        },
      },
    ],
    jsonLdIdPrefix: "voice-page",
  });

  return (
    <div className="voice-page">
      {/* ── Cabecera ── */}
      <header className="voice-header">
        <div className="voice-header-inner">
          <Link href="/" className="voice-back-link">
            ← Volver al inicio
          </Link>
          <Link href="/" className="voice-site-title">
            SLTCS｜Alquiler de Coche con Conductor Privado en Sri Lanka
          </Link>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="voice-hero">
          <div className="voice-hero-eyebrow">— OPINIONES —</div>
          <h1>
            Lo Que Dicen Nuestros <em>Viajeros</em>
          </h1>
          <p className="voice-hero-sub">
            Reseñas reales de viajeros que han explorado Sri Lanka con los conductores privados de
            SLTCS.
          </p>

          {/* Barra de puntuaciones globales */}
          <div className="voice-summary-bar">
            <div className="voice-summary-item">
              <span className="voice-summary-num">{driverAvg.toFixed(1)}</span>
              <span className="voice-summary-label">Conductor</span>
            </div>
            <div className="voice-summary-divider" />
            <div className="voice-summary-item">
              <span className="voice-summary-num">{overallScore.toFixed(1)}</span>
              <span className="voice-summary-label">Overall</span>
            </div>
            <div className="voice-summary-divider" />
            <div className="voice-summary-item">
              <span className="voice-summary-num">{vehicleAvg.toFixed(1)}</span>
              <span className="voice-summary-label">Vehículo</span>
            </div>
            <div className="voice-summary-divider" />
            <div className="voice-summary-item">
              <span className="voice-summary-num">{operatorAvg.toFixed(1)}</span>
              <span className="voice-summary-label">Operador</span>
            </div>
          </div>
        </section>

        {/* ── Reseñas ── */}
        <section className="voice-reviews-section">
          <div className="voice-reviews-grid">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="voice-cta-section">
          <h2 className="voice-cta-title">¿Listo para Crear Tu Propia Historia?</h2>
          <p className="voice-cta-sub">
            Únete a cientos de viajeros que han explorado Sri Lanka con nuestros conductores
            privados.
          </p>
          <a href="/#contacto" className="voice-cta-btn">
            Consulta Gratuita
          </a>
        </section>
      </main>

      {/* ── Pie de página ── */}
      <footer className="voice-footer">
        <p>
          © 2025 SLTCS – Sri Lanka Car Hire with Private Driver ·{" "}
          <a href="https://es.srilanka-charter.com">es.srilanka-charter.com</a>
        </p>
      </footer>
    </div>
  );
}
