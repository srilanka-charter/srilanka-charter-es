import { useSEO } from "@/hooks/useSEO";
import Navbar from "@/components/Navbar";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Review {
  photo: string;
  photoPosition?: string;
  name: string;
  pax: string;
  period: string;
  route: string;
  driver: string;
  quote: string;
  body: string;
  overall: number;
  driverScore: number;
  vehicleScore: number;
  operatorScore: number;
}

// ─── Review Data ──────────────────────────────────────────────────────────────
const reviews: Review[] = [
  {
    photo: "/manus-storage/review2_r_family_aruna_3473eef8_11b2f7c2.png",
    photoPosition: "center top",
    name: "Pareja M",
    pax: "2 pasajeros",
    period: "Marzo 2025",
    route: "Colombo – Ella – Nuwara Eliya – Kandy",
    driver: "Aruna",
    quote: "Aruna hizo que cada carretera de montaña pareciera una aventura, no un desafío.",
    body: "Contratamos a Aruna para un circuito de una semana por las tierras altas, y superó todas nuestras expectativas. Su conocimiento de los miradores escénicos — muchos de los cuales no aparecen en las guías — fue extraordinario. Calculó perfectamente nuestra llegada a Ella Rock para capturar la niebla matutina, y su sugerencia de detenernos en un pequeño puesto de té al borde de la carretera se convirtió en uno de nuestros recuerdos más preciados. La conducción de Aruna es suave y segura incluso en los estrechos pasos de montaña, y su serenidad nos tranquilizó completamente durante todo el viaje. Siempre puntual, siempre sonriente, y siempre pensando un paso por delante. Un profesional excepcional y un ser humano genuinamente cálido.",
    overall: 4.8,
    driverScore: 5.0,
    vehicleScore: 5.0,
    operatorScore: 4.5,
  },
  {
    photo: "/manus-storage/review1_r_family_eranga_a3545b4c_645c08e0.png",
    photoPosition: "center center",
    name: "Pareja R",
    pax: "2 pasajeros",
    period: "Febrero 2025",
    route: "Colombo – Sigiriya – Kandy – Mirissa",
    driver: "Dhammika",
    quote: "El conocimiento local de Dhammika transformó nuestro viaje de unas vacaciones en una auténtica inmersión cultural.",
    body: "Desde el momento en que Dhammika nos recogió en el Aeropuerto de Colombo, supimos que estábamos en buenas manos. Tiene un conocimiento enciclopédico de la historia y la cultura de Sri Lanka que comparte con verdadero entusiasmo — nunca dando lecciones, siempre conversando. En Sigiriya sabía exactamente desde qué ángulo fotografiar la roca a la hora dorada, y en Kandy nos llevó a una actuación de danza kandiana que la mayoría de los turistas nunca encuentran. Su vehículo estaba impecable y con aire acondicionado, y siempre tenía agua fría esperándonos. Dhammika es el tipo de conductor que genuinamente se preocupa por si estás teniendo la mejor experiencia posible. Ya lo hemos recomendado a tres grupos de amigos.",
    overall: 4.7,
    driverScore: 5.0,
    vehicleScore: 4.5,
    operatorScore: 4.5,
  },
  {
    photo: "/manus-storage/review_ranjana_new_2b654dea_79c6e0c2.png",
    photoPosition: "center center",
    name: "Grupo B",
    pax: "4 pasajeros",
    period: "Enero 2025",
    route: "Colombo – Dambulla – Polonnaruwa – Trincomalee",
    driver: "Kushan",
    quote: "Kushan manejó cuatro personalidades muy diferentes con paciencia, buen humor y una habilidad notable.",
    body: "Nuestro grupo de cuatro tenía intereses muy distintos — historia, fauna, playas y gastronomía — y Kushan logró tejer todos ellos en un itinerario perfecto. Fue infinitamente paciente cuando no nos poníamos de acuerdo sobre dónde comer, siempre tenía una sugerencia lista, y nunca nos hizo sentir con prisa. Su conducción por las carreteras costeras fue segura y confiada, y conocía cada atajo para evitar el peor tráfico de la tarde. El vehículo era amplio, cómodo e impecablemente limpio durante todo el viaje. La naturaleza tranquila de Kushan hizo que los largos días de conducción fueran genuinamente agradables. Nos fuimos de Sri Lanka sintiéndonos como si hubiéramos hecho un amigo.",
    overall: 4.8,
    driverScore: 5.0,
    vehicleScore: 4.5,
    operatorScore: 5.0,
  },
  {
    photo: "/manus-storage/review2_r_family_aruna_3473eef8_11b2f7c2.png",
    photoPosition: "center bottom",
    name: "Familia W",
    pax: "3 pasajeros",
    period: "Abril 2025",
    route: "Colombo – Sigiriya – Kandy – Galle",
    driver: "Lasith",
    quote: "Lasith fue infinitamente paciente con nuestros hijos y hizo que cada momento del viaje pareciera sin esfuerzo.",
    body: "Tener a Lasith con nosotros fue un verdadero golpe de suerte. Su cálida actitud con los niños nos tranquilizó a todos, y su inglés claro significó que nunca se perdió nada en la traducción. Puntual, lleno de sugerencias reflexivas para lugares de interés y restaurantes locales, y consistentemente tranquilo al volante — fue todo lo que podíamos haber pedido. Le recomendamos sin dudarlo: atento, conocedor y completamente digno de confianza. Si alguna vez estás en Europa, Lasith — la primera ronda corre de nuestra cuenta.",
    overall: 5.0,
    driverScore: 5.0,
    vehicleScore: 5.0,
    operatorScore: 5.0,
  },
  {
    photo: "/manus-storage/review1_r_family_eranga_a3545b4c_645c08e0.png",
    photoPosition: "center top",
    name: "Pareja S",
    pax: "2 pasajeros",
    period: "Mayo 2025",
    route: "Negombo – Wilpattu – Anuradhapura – Trincomalee",
    driver: "Malinga",
    quote: "El entusiasmo de Malinga por la fauna de Sri Lanka fue completamente contagioso — hizo que cada safari fuera inolvidable.",
    body: "Elegimos un itinerario centrado en la fauna y Malinga fue el guía perfecto para ello. Su conocimiento del Parque Nacional de Wilpattu fue extraordinario — avistó un leopardo descansando en un árbol que nuestro jeep de safari oficial se había perdido por completo. También organizó un safari en barca por el Río Madu que no estaba en nuestro plan original, y resultó ser uno de los momentos culminantes de todo el viaje. Malinga conduce con verdadero cuidado por los caminos de las reservas de fauna, y su paciencia esperando el avistamiento perfecto es notable. Su alegre comentario durante todo el trayecto hizo que cada kilómetro entre parques fuera agradable. Un conductor excepcional para cualquiera que ame la naturaleza.",
    overall: 4.8,
    driverScore: 5.0,
    vehicleScore: 4.5,
    operatorScore: 5.0,
  },
  {
    photo: "/manus-storage/review_ranjana_new_2b654dea_79c6e0c2.png",
    photoPosition: "center center",
    name: "Grupo Y",
    pax: "7 pasajeros",
    period: "Marzo 2025",
    route: "Colombo – Sigiriya – Dambulla – Kandy – Galle",
    driver: "Ravi",
    quote: "Ravi mantuvo a siete personas contentas, puntuales y riendo durante todo el camino — no es poca cosa.",
    body: "Viajando como un grupo grande de siete jóvenes adultos, estábamos un poco nerviosos sobre si un charter privado funcionaría para nosotros. Ravi disipó todas las preocupaciones en la primera hora. Tiene un don natural para gestionar la dinámica de grupo — sabe cuándo sugerir una parada, cuándo seguir adelante, y cuándo dejar que todos simplemente disfruten del paisaje en silencio. Su furgoneta era espaciosa y cómoda, y la mantuvo impecable durante todo el viaje. Ravi también tiene un excelente ojo para las oportunidades fotográficas y siempre estaba dispuesto a detenerse para la toma perfecta. Nos presentó comida callejera local que nunca habríamos encontrado por nuestra cuenta, y cada recomendación fue excepcional. Ravi hizo que nuestro viaje en grupo fuera genuinamente especial.",
    overall: 4.7,
    driverScore: 5.0,
    vehicleScore: 4.5,
    operatorScore: 4.5,
  },
  {
    photo: "/manus-storage/review2_r_family_aruna_3473eef8_11b2f7c2.png",
    photoPosition: "center center",
    name: "Familia K",
    pax: "5 pasajeros",
    period: "Febrero 2025",
    route: "Colombo – Ella – Yala – Mirissa",
    driver: "Smith",
    quote: "El profesionalismo tranquilo y la calidez genuina de Smith hicieron que nuestras vacaciones familiares fueran verdaderamente excepcionales.",
    body: "Viajamos como una familia de cinco — incluyendo dos niños pequeños y una abuela — y Smith manejó cada desafío logístico con eficiencia silenciosa y una sonrisa constante. Fue meticuloso con la seguridad, siempre asegurándose de que todos estuvieran cómodos antes de partir, y su conducción por las sinuosas carreteras hacia Ella fue impresionantemente suave. Smith organizó una tarta de cumpleaños sorpresa para nuestra abuela en un restaurante de Mirissa, lo que emocionó profundamente a toda la familia. Su conocimiento del Parque Nacional de Yala fue sobresaliente — vimos leopardos, elefantes y cocodrilos en una sola mañana. Smith es el tipo de conductor que genuinamente invierte en tu felicidad. No podemos recomendarle lo suficiente.",
    overall: 5.0,
    driverScore: 5.0,
    vehicleScore: 5.0,
    operatorScore: 5.0,
  },
  {
    photo: "/manus-storage/review1_r_family_eranga_a3545b4c_645c08e0.png",
    photoPosition: "center center",
    name: "Pareja P",
    pax: "2 pasajeros",
    period: "Enero 2025",
    route: "Colombo – Anuradhapura – Polonnaruwa – Sigiriya",
    driver: "Asanka",
    quote: "Asanka hizo que las ciudades antiguas cobraran vida — su conocimiento y calidez fueron simplemente sobresalientes.",
    body: "Exploramos el Triángulo Cultural con Asanka durante tres días, y fue una experiencia que nunca olvidaremos. Su profundo conocimiento de Anuradhapura y Polonnaruwa transformó lo que podría haber sido un largo paseo entre ruinas en un genuinamente emocionante viaje a través de la historia. Sabía exactamente qué lugares priorizar, cuándo detenerse y cuándo seguir adelante — siempre leyendo perfectamente nuestra energía. En Sigiriya nos guió por la roca con paciencia y aliento, y su timing significó que tuvimos las mejores vistas casi para nosotros solos. Asanka es cálido, profesional y eternamente entusiasta por compartir su país. Nos fuimos de Sri Lanka sintiéndonos como si hubiéramos hecho un verdadero amigo.",
    overall: 4.8,
    driverScore: 5.0,
    vehicleScore: 5.0,
    operatorScore: 4.5,
  },
  {
    photo: "/manus-storage/review_ranjana_new_2b654dea_79c6e0c2.png",
    photoPosition: "center center",
    name: "Pareja H",
    pax: "2 pasajeros",
    period: "Noviembre 2025",
    route: "Colombo – Kandy – Nuwara Eliya – Galle",
    driver: "Ranjana",
    quote: "Ranjana convirtió nuestro viaje a Sri Lanka en algo mucho más allá del turismo ordinario.",
    body: "Reservamos un charter privado para dos y nos emparejaron con Ranjana — una decisión de la que no podríamos estar más contentos. Aportó una tranquila confianza a cada trayecto, navegando por carreteras de montaña y bulliciosos centros urbanos con igual facilidad. Lo que más destacó fue su genuino entusiasmo: sugirió una experiencia de rafting en aguas bravas que no habíamos planeado, y se convirtió en uno de los momentos culminantes del viaje. Su conocimiento local de miradores ocultos, restaurantes auténticos y costumbres culturales enriqueció cada día. Ranjana es el tipo de guía que te hace sentir como un invitado del país, no solo un turista de paso.",
    overall: 4.7,
    driverScore: 5.0,
    vehicleScore: 4.5,
    operatorScore: 4.5,
  },
  {
    photo: "/manus-storage/review2_r_family_aruna_3473eef8_11b2f7c2.png",
    photoPosition: "center top",
    name: "Grupo K",
    pax: "4 pasajeros",
    period: "Junio 2026",
    route: "Colombo – Ella – Mirissa – Galle",
    driver: "Chamara",
    quote: "Chamara conocía cada ángulo oculto del Puente de los Nueve Arcos — nuestras fotos fueron absolutamente impresionantes.",
    body: "Éramos un grupo de cuatro amigos viajando a Sri Lanka por primera vez, y Chamara hizo que la experiencia fuera verdaderamente inolvidable. En el Puente de los Nueve Arcos en Ella, nos guió hasta un mirador que la mayoría de los turistas nunca encuentran — la luz era perfecta y las fotos increíbles. Siempre iba un paso por delante, sabiendo exactamente cuándo pasaría el tren y posicionándonos para las mejores fotografías. Su conducción por las sinuosas carreteras del país de las colinas fue suave y segura, y nos entretuvo con historias sobre la cultura e historia local durante todo el trayecto. Chamara es cálido, profesional y genuinamente apasionado por compartir lo mejor de Sri Lanka. No podríamos haber pedido un mejor guía.",
    overall: 5.0,
    driverScore: 5.0,
    vehicleScore: 5.0,
    operatorScore: 5.0,
  },
  {
    photo: "/manus-storage/review1_r_family_eranga_a3545b4c_645c08e0.png",
    photoPosition: "center center",
    name: "Pareja L",
    pax: "2 pasajeros",
    period: "Mayo 2026",
    route: "Colombo – Wilpattu – Anuradhapura – Trincomalee",
    driver: "Pradeep",
    quote: "El safari en barca por los humedales fue mágico — Pradeep lo organizó todo a la perfección.",
    body: "Mi pareja y yo buscábamos algo más allá del camino turístico típico, y Pradeep entregó exactamente eso. Organizó un safari privado en barca por una impresionante reserva de humedales que nunca habríamos descubierto por nuestra cuenta. Deslizarse por los nenúfares con un toldo de paja sobre nuestras cabezas, rodeados de aves y exuberante vegetación, fue uno de los momentos más tranquilos de todo nuestro viaje. El conocimiento de Pradeep sobre el ecosistema local fue impresionante — identificó cada ave y planta que encontramos. Su vehículo estaba impecable, su puntualidad impecable, y su calidez nos hizo sentir como familia. Sri Lanka es un país hermoso, y Pradeep lo hizo aún más especial.",
    overall: 5.0,
    driverScore: 5.0,
    vehicleScore: 5.0,
    operatorScore: 5.0,
  },
  {
    photo: "/manus-storage/review_ranjana_new_2b654dea_79c6e0c2.png",
    photoPosition: "center center",
    name: "Pareja T",
    pax: "2 pasajeros",
    period: "Abril 2026",
    route: "Colombo – Sigiriya – Minneriya – Kandy",
    driver: "Saresh",
    quote: "El conocimiento local de Saresh abrió puertas que nunca esperábamos — una experiencia verdaderamente excepcional.",
    body: "Habíamos escuchado cosas maravillosas sobre los tours con conductor privado en Sri Lanka, pero Saresh superó incluso nuestras más altas expectativas. En el Parque Nacional de Minneriya, nos posicionó perfectamente para presenciar la famosa Congregación de Elefantes — cientos de elefantes convergiendo cerca del embalse al atardecer. Fue un espectáculo de fauna como ningún otro que hayamos visto. La presencia tranquila y el conocimiento enciclopédico de Saresh sobre el parque hicieron que la experiencia se sintiera íntima y personal. También nos llevó a una zona de humedales oculta donde disfrutamos de un sereno paseo en barca rodeados de flores de loto y martines pescadores. Su atención al detalle, desde toallas frías después de los largos trayectos hasta paradas perfectamente cronometradas para aperitivos locales, mostró un nivel de cuidado que es raro encontrar.",
    overall: 5.0,
    driverScore: 5.0,
    vehicleScore: 5.0,
    operatorScore: 5.0,
  },
  {
    photo: "/manus-storage/review2_r_family_aruna_3473eef8_11b2f7c2.png",
    photoPosition: "center center",
    name: "Pareja F",
    pax: "2 pasajeros",
    period: "Junio 2026",
    route: "Colombo – Minneriya – Dambulla – Sigiriya – Kandy",
    driver: "Leon",
    quote: "Estar entre cientos de elefantes salvajes con Leon a nuestro lado — una experiencia de toda una vida.",
    body: "Reservamos un charter privado específicamente para ver la Congregación de Elefantes en Minneriya, y Leon lo hizo absolutamente extraordinario. Llegó temprano para asegurar la mejor posición en el parque, y cuando los elefantes comenzaron a moverse hacia el embalse, estábamos perfectamente situados para presenciar el espectáculo desde el jeep descapotable. La pura escala de la congregación — docenas de familias moviéndose juntas por la llanura abierta — nos dejó sin palabras. Leon narró el comportamiento de cada manada con la experiencia de un naturalista, señalando crías, matriarcas y toros con un conocimiento notable. Más allá del safari, su conducción por el Triángulo Cultural fue suave y segura, y sus recomendaciones de restaurantes fueron consistentemente excelentes. Un conductor sobresaliente y una persona genuinamente encantadora.",
    overall: 5.0,
    driverScore: 5.0,
    vehicleScore: 5.0,
    operatorScore: 5.0,
  },
  {
    photo: "/manus-storage/review1_r_family_eranga_a3545b4c_645c08e0.png",
    photoPosition: "center center",
    name: "Pareja M",
    pax: "2 pasajeros",
    period: "Mayo 2026",
    route: "Colombo – Yala – Mirissa – Galle",
    driver: "Anjana",
    quote: "El safari de Yala en el jeep de Anjana fue el punto culminante de toda nuestra luna de miel.",
    body: "Elegimos Sri Lanka para nuestra luna de miel y queríamos algo aventurero e inolvidable. Anjana organizó un safari privado en jeep por el Parque Nacional de Yala que superó todas las expectativas. Avistamos leopardos, osos perezosos, cocodrilos y una deslumbrante variedad de aves — todo en una sola mañana. El conocimiento de Anjana sobre el terreno del parque significó que siempre estábamos en el lugar correcto en el momento correcto, y su entusiasmo era contagioso. El jeep era robusto y bien mantenido, perfecto para las pistas todoterreno en el interior del parque. Después del safari, nos llevó por la costa sur hasta Mirissa, donde observamos ballenas azules desde un barco que había pre-organizado. Anjana convirtió nuestra luna de miel en una verdadera aventura. No podemos recomendarle lo suficiente.",
    overall: 4.8,
    driverScore: 5.0,
    vehicleScore: 5.0,
    operatorScore: 4.5,
  },
  {
    photo: "/manus-storage/review_ranjana_new_2b654dea_79c6e0c2.png",
    photoPosition: "center center",
    name: "Pareja B",
    pax: "2 pasajeros",
    period: "Junio 2026",
    route: "Colombo – Sigiriya – Polonnaruwa – Kandy",
    driver: "Sanjeewa",
    quote: "Sanjeewa organizó experiencias que nunca podríamos haber encontrado por nuestra cuenta — incluyendo un mágico paseo en carreta de bueyes.",
    body: "Sanjeewa es el tipo de conductor que transforma unas vacaciones en un genuino viaje cultural. Durante nuestra estancia en el Triángulo Cultural, organizó un paseo tradicional en carreta de bueyes por un pueblo rural completamente fuera del mapa turístico. Sentados dentro del carro bellamente decorado, enmarcados por los árboles antiguos y rodeados de canto de pájaros, fue uno de esos raros momentos de viaje que se quedan contigo para siempre. Sanjeewa claramente había construido relaciones reales con familias locales a lo largo de los años, y su calidez hacia él — y por extensión hacia nosotros — fue conmovedora. Su conducción fue igualmente impresionante: suave, segura y siempre puntual. Anticipó nuestras necesidades antes de que las expresáramos, desde ajustar el aire acondicionado hasta sugerir el momento perfecto para visitar cada lugar. Sanjeewa representa todo lo que hace que viajar con conductor privado en Sri Lanka sea tan especial.",
    overall: 5.0,
    driverScore: 5.0,
    vehicleScore: 5.0,
    operatorScore: 5.0,
  },
  {
    photo: "/manus-storage/review2_r_family_aruna_3473eef8_11b2f7c2.png",
    photoPosition: "center center",
    name: "Grupo S",
    pax: "5 pasajeros",
    period: "Julio 2026",
    route: "Colombo – Wilpattu – Anuradhapura – Trincomalee",
    driver: "Ranjana",
    quote: "Ranjana se unió a nosotros en el safari en barca y hizo que toda la experiencia pareciera completamente sin esfuerzo.",
    body: "Éramos un grupo de cinco amigos viajando juntos, y Ranjana fue el compañero perfecto para cada etapa del viaje. Organizó un safari en barca por una impresionante reserva de humedales que nunca habríamos encontrado por nuestra cuenta — deslizarse por el agua rodeados de flores de loto y aves fue uno de los momentos más tranquilos de todo el viaje. Lo que más nos impresionó fue cómo Ranjana parecía anticipar todo: sabía exactamente cuándo sugerir una parada, qué lugares locales valía la pena visitar, y cómo mantener a un grupo de cinco moviéndose sin que nadie se sintiera apresurado. Su calidez y genuino entusiasmo por compartir lo mejor de Sri Lanka hicieron que cada día se sintiera como una aventura. No podríamos haber pedido un mejor guía.",
    overall: 5.0,
    driverScore: 5.0,
    vehicleScore: 5.0,
    operatorScore: 5.0,
  },
  {
    photo: "/manus-storage/review1_r_family_eranga_a3545b4c_645c08e0.png",
    photoPosition: "center center",
    name: "Grupo Y",
    pax: "4 pasajeros",
    period: "Junio 2026",
    route: "Colombo – Sigiriya – Kandy – Mirissa – Galle",
    driver: "Chami",
    quote: "Chami nos recibió en el aeropuerto con guirnaldas de flores — y la calidez no paró desde ese momento.",
    body: "Desde el primer momento en el Aeropuerto de Colombo, Chami marcó el tono para un viaje extraordinario. Nos esperaba con guirnaldas de flores tradicionales, lo que inmediatamente nos hizo sentir bienvenidos y especiales. Durante los días siguientes, nos guió por Sigiriya, Kandy y la costa sur con la experiencia de alguien que genuinamente ama su país y se enorgullece de compartirlo. Su inglés era excelente, su conducción suave y segura, y sus recomendaciones de restaurantes consistentemente sobresalientes. Siempre iba un paso por delante — organizando salidas tempranas para evitar las multitudes en los lugares populares, y encontrando rincones tranquilos que la mayoría de los turistas nunca descubren. Chami es un conductor verdaderamente excepcional y un ser humano maravilloso. Absolutamente volveremos a Sri Lanka y le pediremos de nuevo.",
    overall: 5.0,
    driverScore: 5.0,
    vehicleScore: 5.0,
    operatorScore: 5.0,
  },
  {
    photo: "/manus-storage/review1_r_family_eranga_a3545b4c_645c08e0.png",
    photoPosition: "center center",
    name: "Familia R",
    pax: "4 pasajeros",
    period: "Agosto 2025",
    route: "Anuradhapura – Dambulla – Sigiriya – Polonnaruwa",
    driver: "Eranga",
    quote: "Servicio profesional desde la primera consulta hasta el último traslado — nos sentimos completamente tranquilos durante todo el viaje.",
    body: "Desde la reserva previa hasta el día del viaje, el equipo respondió con rapidez y claridad. Los precios y la planificación del itinerario se explicaron de manera que no dejaron lugar a dudas. El día del viaje, Eranga condujo con cuidado y compostura, reorientando sin problemas para evitar el tráfico y mantenernos en horario. Su profundo conocimiento de Anuradhapura, Dambulla, Sigiriya y Polonnaruwa nos proporcionó una rica base histórica para comprender este extraordinario país. Nos consideramos afortunados de haberle tenido como conductor y guía.",
    overall: 5.0,
    driverScore: 5.0,
    vehicleScore: 5.0,
    operatorScore: 5.0,
  },
  {
    photo: "/manus-storage/review2_r_family_aruna_3473eef8_11b2f7c2.png",
    photoPosition: "center top",
    name: "Familia W",
    pax: "3 pasajeros",
    period: "Marzo 2026",
    route: "Passikudah – Sigiriya – Colombo",
    driver: "Lasith",
    quote: "Lasith fue infinitamente paciente con nuestros hijos y hizo que cada momento del viaje pareciera sin esfuerzo.",
    body: "Tener a Lasith con nosotros fue un verdadero golpe de suerte. Su cálida actitud con los niños nos tranquilizó a todos, y su inglés claro significó que nunca se perdió nada en la traducción. Puntual, lleno de sugerencias reflexivas para lugares de interés y restaurantes locales, y consistentemente tranquilo al volante — fue todo lo que podíamos haber pedido. (¡Probablemente saltaremos esa carretera entre Passikudah y Sigiriya la próxima vez!) Le recomendamos sin dudarlo: atento, conocedor y completamente digno de confianza.",
    overall: 4.8,
    driverScore: 5.0,
    vehicleScore: 4.5,
    operatorScore: 5.0,
  },
  {
    photo: "/manus-storage/review4_as_priyanth_2aeb5d81_c847c90d.png",
    photoPosition: "center center",
    name: "A&S",
    pax: "2 pasajeros",
    period: "Agosto 2025",
    route: "Colombo – Sigiriya – Kandy – Nuwara Eliya – Galle",
    driver: "Priyanth",
    quote: "Priyanth hizo que seis días parecieran un viaje con un amigo de confianza más que con un conductor contratado.",
    body: "Partiendo desde el Aeropuerto de Colombo, Priyanth nos guió por Sigiriya, Kandy, Nuwara Eliya y Galle durante seis días. Fue puntual y condujo con cuidado en todo momento, siempre comprobando cómo nos sentíamos — algo que realmente apreciamos en los tramos más largos. Su alegre compañía hizo que cada traslado fuera agradable, y sus conocimientos sobre la historia y cultura de Sri Lanka añadieron profundidad real a lo que vimos. También nos llevó a un mirador impresionante que no estaba en nuestro plan original, y nos presentó restaurantes locales que fueron simplemente excepcionales. Nos encantaría viajar con él de nuevo en nuestra próxima visita a Sri Lanka.",
    overall: 4.8,
    driverScore: 5.0,
    vehicleScore: 4.5,
    operatorScore: 5.0,
  },
  {
    photo: "/manus-storage/review5_t_couple_indika_519f1510_b6cf1cec.png",
    photoPosition: "center center",
    name: "Pareja T",
    pax: "2 pasajeros",
    period: "Octubre 2025",
    route: "Negombo – Sigiriya – Kandy – Nuwara Eliya – Mirissa",
    driver: "Indika",
    quote: "Gracias a Indika, nuestro viaje se convirtió no solo en turismo — sino en un viaje ricamente colorido e inolvidable.",
    body: "Viajamos como pareja desde Negombo por Sigiriya, Kandy, Nuwara Eliya y Mirissa durante cinco días. En la primera mañana — que resultó ser un cumpleaños — apareció un pastel en el desayuno, organizado discretamente por Indika a través del hotel. También nos regaló una pequeña figura de elefante. Nos emocionamos genuinamente. Durante todo el viaje fue una presencia estable y tranquilizadora: informándonos antes de cada lugar, manejando los madrugones sin quejarse, recomendando restaurantes que frecuenta personalmente (todos excelentes), e incluso viajando en tren con nosotros para mantenernos seguros entre la multitud. Cuando algo parecía caro, simplemente decía: 'Saltémonos esto' — esa honestidad nos hizo confiar en él completamente.",
    overall: 5.0,
    driverScore: 5.0,
    vehicleScore: 5.0,
    operatorScore: 5.0,
  },
  {
    photo: "/manus-storage/review_dfamily_chamil_9214e24c_e972933a.png",
    photoPosition: "center center",
    name: "Familia D",
    pax: "5 pasajeros",
    period: "Diciembre 2025",
    route: "Colombo – Sigiriya – Kandy – Yala – Galle",
    driver: "Chamil",
    quote: "A pesar de tener que reorganizar completamente nuestro itinerario tras un ciclón, Chamil convirtió el viaje en el de una vida.",
    body: "Viajamos como tres generaciones — abuelos, padres y un niño — justo después de que un ciclón hubiera perturbado la isla. Chamil recopilaba constantemente la información más reciente sobre las condiciones de las carreteras y la seguridad, y siempre proponía las mejores rutas disponibles teniendo en cuenta nuestras preferencias. Cuando necesitamos cancelar hoteles y reservas de tren y organizar nuevos con poco tiempo, estuvo ahí ayudándonos en cada paso. Se unió a nosotros en la escalada de la Roca de Sigiriya y el safari, lo que nos dio una enorme tranquilidad. Su atención a nuestro hijo fue especialmente conmovedora. La calidez, la rapidez de pensamiento y la natural consideración de Chamil conquistaron a cada miembro de nuestra familia. Ya estamos deseando nuestro próximo viaje a Sri Lanka, y absolutamente pediremos a Chamil de nuevo.",
    overall: 4.8,
    driverScore: 5.0,
    vehicleScore: 5.0,
    operatorScore: 4.5,
  },
];

// ─── Star Rating ──────────────────────────────────────────────────────────────
function StarRating({ score }: { score: number }) {
  const full = Math.floor(score);
  const half = score - full >= 0.5;
  return (
    <span style={{ color: "#C9A84C", fontSize: "0.85rem", letterSpacing: "0.05em" }}>
      {"★".repeat(full)}
      {half ? "½" : ""}
      {"☆".repeat(5 - full - (half ? 1 : 0))}
    </span>
  );
}

// ─── Score Bar ────────────────────────────────────────────────────────────────
function ScoreBar({ label, score }: { label: string; score: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.4rem" }}>
      <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", width: "60px", flexShrink: 0 }}>{label}</span>
      <div style={{ flex: 1, height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            width: `${(score / 5) * 100}%`,
            background: "linear-gradient(90deg, #C9A84C, #e8c96a)",
            borderRadius: "2px",
          }}
        />
      </div>
      <span style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 600, width: "28px", textAlign: "right" }}>{score.toFixed(1)}</span>
    </div>
  );
}

// ─── Review Card ──────────────────────────────────────────────────────────────
function ReviewCard({ review }: { review: Review }) {
  return (
    <article
      style={{
        background: "#111",
        border: "1px solid rgba(201,168,76,0.15)",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Photo */}
      <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
        <img
          src={review.photo}
          alt={`${review.name} — Conductor: ${review.driver}`}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: review.photoPosition ?? "center center",
            display: "block",
          }}
        />
        {/* Overall badge */}
        <div
          style={{
            position: "absolute",
            bottom: "0.75rem",
            right: "0.75rem",
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(201,168,76,0.4)",
            borderRadius: "8px",
            padding: "0.35rem 0.65rem",
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
          }}
        >
          <span style={{ color: "#C9A84C", fontSize: "0.75rem" }}>★</span>
          <span style={{ color: "#fff", fontSize: "0.85rem", fontWeight: 700 }}>{review.overall.toFixed(1)}</span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {/* Driver & meta */}
        <div>
          <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: "0.25rem" }}>
            Conductor: {review.driver}
          </h3>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", margin: 0 }}>
            {review.name} · {review.pax} · {review.period}
          </p>
          <p style={{ fontSize: "0.7rem", color: "rgba(201,168,76,0.7)", margin: "0.2rem 0 0", display: "flex", alignItems: "center", gap: "0.3rem" }}>
            <span style={{ fontSize: "0.65rem" }}>📍</span>
            {review.route}
          </p>
        </div>

        {/* Quote */}
        <blockquote
          style={{
            margin: 0,
            padding: "0.75rem 1rem",
            borderLeft: "3px solid #C9A84C",
            background: "rgba(201,168,76,0.05)",
            borderRadius: "0 6px 6px 0",
            fontStyle: "italic",
            fontSize: "0.9rem",
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.5,
          }}
        >
          "{review.quote}"
        </blockquote>

        {/* Body */}
        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: 0, flex: 1 }}>
          {review.body}
        </p>

        {/* Scores */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "0.75rem",
            marginTop: "auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
            <StarRating score={review.overall} />
            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              GENERAL {review.overall.toFixed(1)}
            </span>
          </div>
          <ScoreBar label="Conductor" score={review.driverScore} />
          <ScoreBar label="Vehículo" score={review.vehicleScore} />
          <ScoreBar label="Operador" score={review.operatorScore} />
        </div>
      </div>
    </article>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function VoicePage() {
  useSEO({
    title: "Opiniones de Clientes | Conductor Privado Sri Lanka | SLTCS",
    description:
      "Opiniones reales de viajeros que han explorado Sri Lanka con conductores privados de SLTCS. Puntuación general 4.9 — Conductor 5.0 · Vehículo 4.8 · Operador 4.8.",
    path: "/voice",
    jsonLdList: [
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "SLTCS – Alquiler de Coche con Conductor en Sri Lanka",
        url: "https://es.srilanka-charter.com",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "22",
        },
        review: reviews.map((r) => ({
          "@type": "Review",
          author: { "@type": "Person", name: r.name },
          datePublished: r.period,
          reviewBody: r.body,
          reviewRating: {
            "@type": "Rating",
            ratingValue: r.overall.toFixed(1),
            bestRating: "5",
          },
        })),
      },
    ],
    jsonLdIdPrefix: "voice-page",
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d1117",
        color: "#fff",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Navbar />

      {/* ── Hero ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0d1117 0%, #1a1f2e 50%, #0d1117 100%)",
          padding: "8rem 1.5rem 4rem",
          textAlign: "center",
          borderBottom: "1px solid rgba(201,168,76,0.2)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              color: "#C9A84C",
              marginBottom: "1rem",
              fontWeight: 600,
            }}
          >
            — VOICE —
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Lo Que Dicen Nuestros Viajeros
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.7)",
              marginBottom: "2.5rem",
              lineHeight: 1.6,
            }}
          >
            Opiniones reales de viajeros que han explorado Sri Lanka con los conductores privados de SLTCS.
          </p>

          {/* Overall Score Card */}
          <div
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "16px",
              padding: "1.5rem 2.5rem",
              minWidth: "320px",
            }}
          >
            <div style={{ fontSize: "3rem", fontWeight: 800, color: "#C9A84C", lineHeight: 1 }}>4.9</div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)", marginBottom: "1rem", marginTop: "0.25rem" }}>
              PUNTUACIÓN GENERAL
            </div>
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                justifyContent: "center",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                paddingTop: "1rem",
              }}
            >
              {[
                { label: "CONDUCTOR", score: "5.0" },
                { label: "VEHÍCULO", score: "4.8" },
                { label: "OPERADOR", score: "4.8" },
              ].map((item) => (
                <div key={item.label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#C9A84C" }}>{item.score}</div>
                  <div style={{ fontSize: "0.6rem", letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)" }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews Grid ── */}
      <section style={{ padding: "4rem 1.5rem 6rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "2rem",
          }}
        >
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a1f2e 0%, #0d1117 100%)",
          borderTop: "1px solid rgba(201,168,76,0.2)",
          padding: "4rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              marginBottom: "1rem",
              color: "#fff",
            }}
          >
            ¿Listo para Crear Tu Propia Historia?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.65)",
              marginBottom: "2rem",
              lineHeight: 1.6,
            }}
          >
            Únete a cientos de viajeros que han explorado Sri Lanka con nuestros conductores privados.
          </p>
          <a
            href="/#contact"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #C9A84C, #e8c96a)",
              color: "#000",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "1rem 2.5rem",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
          >
            CONSULTA GRATUITA
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "2rem 1.5rem",
          textAlign: "center",
          color: "rgba(255,255,255,0.3)",
          fontSize: "0.75rem",
        }}
      >
        © 2025 SLTCS – Alquiler de Coche con Conductor en Sri Lanka · es.srilanka-charter.com
      </footer>
    </div>
  );
}
