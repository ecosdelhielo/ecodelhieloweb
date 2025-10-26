
import { Excursion, Difficulty, BoxLunchDetails, SalaPremiumDetails, PasarelasDescensoDetails } from '../types';

export const excursions: Excursion[] = [
  {
    id: "pasarelas-perito-moreno",
    title: "Pasarelas Glaciar Perito Moreno",
    shortDescription: "Recorre los balcones frente al glaciar más famoso del mundo y maravíllate con sus desprendimientos.",
    longDescription: "La excursión comienza con el traslado desde tu hotel en El Calafate hacia el Parque Nacional Los Glaciares. Durante el viaje, realizaremos paradas en miradores estratégicos para que puedas capturar las mejores vistas panorámicas. Una vez en el destino, tendrás tiempo libre para recorrer a tu propio ritmo las extensas pasarelas que se despliegan frente al imponente Glaciar Perito Moreno, permitiéndote apreciar su majestuosidad desde múltiples ángulos y, con suerte, presenciar alguno de sus famosos desprendimientos. Es un día completo para sumergirse en uno de los paisajes más espectaculares de la Patagonia.",
    difficulty: Difficulty.Baja,
    images: [
        "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/pasarelas-glaciar-perito-moreno/moreno1.jpg", 
        "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/pasarelas-glaciar-perito-moreno/glaciar-2.jpg", 
        "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/pasarelas-glaciar-perito-moreno/glaciar-3.jpg"
    ],
    duration: "Día completo",
    schedule: "09:00 a 17:00 hs",
    includes: ["Guía bilingüe (español/inglés)", "Tiempo libre para recorrer pasarelas", "Traslado desde tu alojamiento incluido"],
    whatToBring: ["Ropa cómoda y abrigada", "Calzado de trekking", "Lentes de sol, protector solar", "Vianda o dinero para snacks", "Cámara de fotos"],
    ageRules: [
      { ageMin: 0, ageMax: 2, category: 'Infante' },
      { ageMin: 3, ageMax: 3, category: 'Menor' },
      { ageMin: 4, ageMax: 12, category: 'Menor' },
      { ageMin: 13, ageMax: 15, category: 'Adulto' },
      { ageMin: 16, ageMax: 100, category: 'Adulto' },
    ],
    optionalActivities: [
      { id: 'safari-nautico', name: 'Navegación (1 hora)', description: 'Navegación de una hora por la pared sur del Glaciar Perito Moreno.' }
    ],
    seasons: [
       { 
        name: "Temporada 2025/26 A", 
        startDate: "2025-08-10", 
        endDate: "2025-09-30", 
        prices: [0, 70000, 70000, 80000, 80000], 
        optionalPrices: { 
          "safari-nautico": [0, 0, 51200, 51200, 64000] 
        }
      },
      { 
        name: "Temporada 2025/26 B", 
        startDate: "2025-10-01", 
        endDate: "2026-04-30", 
        prices: [0, 70000, 70000, 80000, 80000], 
        optionalPrices: { 
          "safari-nautico": [0, 0, 51200, 51200, 64000] 
        }
      },
    ],
    transfer: 'included',
    requiresParkEntry: true,
  },
  {
    id: "minitrekking",
    title: "Minitrekking",
    shortDescription: "Camina sobre el hielo del Glaciar Perito Moreno en una aventura única y segura.",
    longDescription: "La aventura comienza con una navegación de aproximación a la pared sur del Glaciar Perito Moreno. Al desembarcar, nuestros guías de montaña te ayudarán a colocarte los crampones para iniciar una caminata segura sobre el hielo. Durante una hora y media, explorarás grietas, sumideros y lagunas azules en una experiencia inolvidable. Al finalizar, celebraremos con un vaso de whisky servido con hielo milenario del propio glaciar.",
    difficulty: Difficulty.Media,
    images: [
        "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/minitrekking/mini-2.jpg",
        "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/minitrekking/mini-1.jpg",
        "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/minitrekking/mini-4.jpg"
    ],
    duration: "1.5 horas de caminata",
    schedule: "Turnos por la mañana y tarde",
    includes: ["Guías de montaña bilingües", "Crampones para la caminata", "Navegación de aproximación", "Whisky con hielo del glaciar"],
    whatToBring: ["Botas de trekking (excluyente)", "Ropa deportiva cómoda y abrigada", "Guantes y gorro", "Mochila pequeña", "Vianda y agua"],
    ageRules: [
      { ageMin: 8, ageMax: 15, category: 'Menor' },
      { ageMin: 16, ageMax: 65, category: 'Adulto' },
    ],
    seasons: [
      { name: "Temporada 2025 A", startDate: "2025-08-13", endDate: "2025-09-30", prices: [256000, 320000], transferPrices: [64000, 64000] },
      { name: "Temporada 2025 B (1-10 Oct)", startDate: "2025-10-01", endDate: "2025-10-10", prices: [320000, 400000], transferPrices: [64000, 64000] },
      { name: "Temporada 2025 B (11-31 Oct)", startDate: "2025-10-11", endDate: "2025-10-31", prices: [256000, 320000], transferPrices: [64000, 64000] },
      { name: "Temporada 2025 B (Nov-Abr)", startDate: "2025-11-01", endDate: "2026-04-30", prices: [320000, 400000], transferPrices: [64000, 64000] }
    ],
    transfer: 'optional',
    requiresParkEntry: true,
    restrictions: {
      title: "Restricciones Importantes",
      intro: "Debido al grado de esfuerzo y dificultad <strong>(MODERADA, con pronunciadas subidas y bajadas en un terreno irregular)</strong> que esta actividad presenta y con el solo objetivo de preservar la salud, no podrán participar:",
      items: [
        "<strong>Solo apto para personas de 8 a 65 años.</strong> Sin excepción.",
        "<strong>Mujeres embarazadas.</strong>",
        "<strong>Personas con sobrepeso u obesidad:</strong> La Organización Mundial de la Salud (OMS) define la obesidad cuando una persona presenta un Índice de Masa Corporal (IMC) igual o superior a 30. El IMC se calcula dividiendo el peso (kg) por el cuadrado de la talla (m&sup2;).",
        "Personas con cualquier grado o tipo de <strong>discapacidad física o mental</strong> que afecte su atención, marcha y/o coordinación.",
        "<strong>Personas con antecedentes cardíacos:</strong> Quienes sufran enfermedades cardiovasculares centrales o periféricas, que sus capacidades cardíacas o vasculares se encuentren disminuidas, o utilicen stent, bypass, marcapasos u otras prótesis. (Ej: medicamentos anticoagulantes, várices grado III).",
        "Personas que padezcan <strong>enfermedades respiratorias crónicas</strong> (EPOC, asma, enfisema, etc.).",
      ],
      note: "Ante cualquier duda o consulta sobre estas restricciones, por favor contáctenos antes de realizar su reserva."
    }
  },
  {
    id: "mayo-spirit-trek",
    title: "Mayo Spirit Trek",
    shortDescription: "Combina navegación, trekking a glaciares ocultos y visita a las pasarelas del Perito Moreno.",
    longDescription: "Esta excursión combina navegación por el Lago Argentino con trekking por el bosque andino patagónico. Explorarás glaciares poco conocidos como el Cerro Mayo y Cerro Negro, con la oportunidad de caminar por la zona de Bahía Toro. También visitarás las pasarelas del Glaciar Perito Moreno, disfrutando de paisajes únicos e inolvidables.",
    difficulty: Difficulty.Baja,
    images: [
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/mayo-spirit-trek/mayo-1.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/mayo-spirit-trek/mayo-2.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/mayo-spirit-trek/mayo-3.jpg"
    ],
    duration: "10 horas (Día completo)",
    schedule: "Pick up a confirmar",
    includes: ["Navegación por el Lago Argentino", "Trekking en bosque patagónico", "Visita a pasarelas del Glaciar P. Moreno", "Guía profesional"],
    whatToBring: ["Vianda y bebidas", "Calzado cómodo para caminar", "Ropa de abrigo", "Protector solar y lentes de sol"],
    ageRules: [
      { ageMin: 0, ageMax: 2, category: 'Infante' },
      { ageMin: 3, ageMax: 5, category: 'Infante' },
      { ageMin: 6, ageMax: 15, category: 'Menor' },
      { ageMin: 16, ageMax: 100, category: 'Adulto' },
    ],
    seasons: [
       { 
        name: "Temporada 2025/26", 
        startDate: "2025-10-01", 
        endDate: "2026-04-30", 
        prices: [0, 0, 144000, 180000], 
        transferPrices: [0, 40000, 40000, 40000] 
      }
    ],
    transfer: 'optional',
    requiresParkEntry: true,
  },
   {
    id: "todo-glaciares",
    title: "Navegación Todo Glaciares",
    shortDescription: "Navega entre témpanos y descubre los impresionantes glaciares Upsala y Spegazzini.",
    longDescription: "Una navegación imperdible por los glaciares más impresionantes del Parque Nacional Los Glaciares. Desde el Lago Argentino, navegarás por el Canal Upsala, donde verás enormes témpanos desprendidos del glaciar, y luego por el Canal Spegazzini, hogar del glaciar más alto del parque. Un día de pura naturaleza y paisajes asombrosos.",
    difficulty: Difficulty.Baja,
    images: [
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/navegacion-todo-glaciares/todoglaciares-1.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/navegacion-todo-glaciares/todoglaciares-3.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/navegacion-todo-glaciares/todoglaciares-5.jpg"
    ],
    duration: "7 horas de navegación",
    schedule: "Pick Up: 07:00 am",
    includes: ["Navegación de día completo", "Guía bilingüe (español/inglés)"],
    whatToBring: ["Ropa de abrigo e impermeable", "Vianda y bebidas (si no contrata almuerzo)", "Cámara de fotos", "Protector solar y lentes de sol"],
    ageRules: [
      { ageMin: 0, ageMax: 2, category: 'Infante' },
      { ageMin: 3, ageMax: 5, category: 'Menor' },
      { ageMin: 6, ageMax: 16, category: 'Menor' },
      { ageMin: 17, ageMax: 100, category: 'Adulto' },
    ],
    optionalActivities: [
      { 
        id: 'almuerzo-spegazzini', 
        name: 'Almuerzo en Refugio Spegazzini', 
        description: 'Disfruta de un almuerzo en el Refugio Spegazzini con vistas panorámicas.',
        detailedDescription: 'Disfruta de un almuerzo completo en el Refugio Spegazzini, un espacio gastronómico único con vistas espectaculares al Glaciar Spegazzini, ideal para reponer energías en medio de un paisaje soñado.',
        modalTitle: 'Opciones de Menú - Refugio Spegazzini',
        modalContent: [
          {
            title: 'OPCIÓN CLÁSICA',
            entrée: 'Empanada de carne',
            mainCourse: 'Goulash de guanaco',
            dessert: 'Mousse de chocolate blanco y negro',
            includes: '1 bebida sin alcohol + 1 infusión'
          },
          {
            title: 'OPCIÓN CLÁSICA 2',
            notes: 'Apto Celíacos',
            entrée: 'Ensalada (lechuga, tomate, zanahoria y huevo)',
            mainCourse: 'Cazuela de cordero',
            dessert: 'Mousse de chocolate blanco y negro',
            includes: '1 bebida sin alcohol + 1 infusión'
          },
          {
            title: 'OPCIÓN VEGETARIANA',
            entrée: 'Empanada de verdura',
            mainCourse: 'Cazuela de lentejas y vegetales',
            dessert: 'Mousse de chocolate blanco y negro',
            includes: '1 bebida sin alcohol + 1 infusión'
          }
        ]
      },
      { 
        id: 'vip-captains-club', 
        name: "Suplemento VIP Captain's Club", 
        description: 'Accede a un salón exclusivo con atención personalizada, bebidas y pastelería.',
        detailedDescription: 'De eso se trata el Captain’s Club. De llevar la navegación hacia otro nivel, potenciando el disfrute de un momento mágico e irrepetible, con servicios exclusivos que complementan tu experiencia.',
        modalTitle: "Detalles del Captain's Club VIP",
        modalContent: {
          description: "El Club del Capitán te ofrece un servicio personalizado, que incluye ubicación en una cabina preferencial con mayor comodidad y privacidad, donde un guía y un host te asistirán durante todo el viaje.\n\nTambién tendrás un servicio exclusivo de comidas y bebidas sin alcohol durante toda la experiencia. Incluso podrás disfrutar de bebidas con alcohol para los momentos especiales de tu aventura. Y cuando realices el descenso en la Base Spegazzini, te esperará un espectacular menú con delicias regionales patagónicas inolvidables.\n\nEsto es Captain’s Club. Lo maravilloso de vivir una experiencia única con la mejor comodidad, sumada a la satisfacción de hacerlo con un servicio inigualable.",
          menu: [
            {
              title: "BIENVENIDA",
              items: ["Café, té, chocolate caliente.", "Pattiserie."]
            },
            {
              title: "MOMENTO SPEGAZZINI",
              items: ["Picada Patagónica.", "Variedad de vinos, cerveza.", "Bebidas sin alcohol."]
            },
            {
              title: "MOMENTO REFUGIO",
              items: [
                "Goulash de guanaco con puré de papa y puerro.",
                "Pollo al curry con arroz.",
                "Cazuela de cordero patagónico.",
                "Guiso de lentejas.",
                "Wok de vegetales con arroz estilo oriental.",
                "Variedad de vinos, cerveza.",
                "Bebidas sin alcohol."
              ]
            },
            {
              title: "CIERRE DULCE",
              items: [
                "Mouse de chocolate blanco y negro con tierra de cacao.",
                "Brindis a elección: champagne, whisky, espirituosas.",
                "Bebidas sin alcohol."
              ]
            }
          ]
        }
      }
    ],
    seasons: [
      { 
        name: "Temporada Media 2025", 
        startDate: "2025-08-10", 
        endDate: "2025-09-30", 
        prices: [0, 0, 180000, 220000], 
        transferPrices: [0, 50000, 50000, 50000], 
        optionalPrices: { 
          "almuerzo-spegazzini": [0, 40000, 40000, 40000],
          "vip-captains-club": [0, 140000, 140000, 140000]
        }
      },
      { 
        name: "Temporada Alta 2025/26", 
        startDate: "2025-10-01", 
        endDate: "2026-03-31", 
        prices: [0, 0, 180000, 220000],
        transferPrices: [0, 50000, 50000, 50000],
        optionalPrices: { 
          "almuerzo-spegazzini": [0, 50000, 50000, 50000],
          "vip-captains-club": [0, 190000, 190000, 190000]
        }
      }
    ],
    transfer: 'optional',
    requiresParkEntry: true,
  },
  {
    id: "full-day-chalten",
    title: "Full Day Chaltén",
    shortDescription: "Disfruta de un día completo en El Chaltén con caminatas suaves, vistas al Fitz Roy y almuerzo incluido.",
    longDescription: "Disfruta de un día completo en El Chaltén, recorrendo los paisajes de la Patagonia sin necesidad de ser un caminante experimentado. Partimos desde El Calafate por la Ruta 40, bordeando el Lago Argentino y pasando por el histórico Paso La Leona, hasta el mirador del Glaciar Viedma. En El Chaltén, haremos una caminata al Mirador de los Cóndores, con vistas inigualables del Fitz Roy y el Cerro Torre, y luego almorzaremos en un restaurante. Por la tarde, visitaremos la cascada del Salto del Chorrillo antes de recorrer el pueblo.",
    difficulty: Difficulty.Baja,
    images: [
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/chalten/chalten-1.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/chalten/chalten-3.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/chalten/chalten-4.jpg"
    ],
    duration: "11 hs",
    schedule: "08:00 a 19:00 hs",
    includes: ["Traslados desde el hotel en El Calafate", "Guía bilingüe", "Almuerzo en restaurante en El Chaltén"],
    whatToBring: ["Ropa de trekking y calzado cómodo", "Protector solar", "Cámara", "Snack"],
    ageRules: [
       { ageMin: 0, ageMax: 11, category: 'Menor' },
       { ageMin: 12, ageMax: 100, category: 'Adulto' },
    ],
    seasons: [
      { name: "Temporada Baja 2025", startDate: "2025-08-12", endDate: "2025-08-31", prices: [108000, 135000] },
      { name: "Temporada Alta 2025/26", startDate: "2025-09-01", endDate: "2026-04-30", prices: [108000, 135000] }
    ],
    transfer: 'included',
    requiresParkEntry: true,
  },
  {
    id: "nativos-experience",
    title: "Nativos Experience",
    shortDescription: "Paseo en 4x4 a la historia patagónica, con vistas al Lago Argentino y almuerzo o cena en una cueva.",
    longDescription: "Una excursión de medio día que te llevará en vehículos 4x4 a un viaje por la historia y la antropología de la Patagonia. Conocerás cómo los primeros exploradores interactuaron con los Tehuelches y te maravillarás con las vistas al Lago Argentino. La experiencia culmina con un almuerzo o cena dentro de una cueva, creando un ambiente único y natural.",
    difficulty: Difficulty.Baja,
    images: [
        "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/nativos-experience/nativos-3.jpg", 
        "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/nativos-experience/nativos-1.jpg", 
        "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/nativos-experience/nativos-4.jpg"
    ],
    duration: "3 horas (Half Day)",
    schedule: "Turnos de mediodía o tarde/noche",
    includes: ["Traslados", "Guía especializado", "Almuerzo o cena en una cueva"],
    whatToBring: ["Ropa cómoda y abrigo", "Calzado cómodo", "Cámara de fotos"],
     ageRules: [
      { ageMin: 0, ageMax: 2, category: 'Infante' },
      { ageMin: 3, ageMax: 12, category: 'Menor' },
      { ageMin: 13, ageMax: 100, category: 'Adulto' },
    ],
    seasons: [
      { name: "Temporada 2025", startDate: "2025-09-01", endDate: "2025-12-31", prices: [0, 75000, 150000] },
      { name: "Temporada 2026", startDate: "2026-01-01", endDate: "2026-04-30", prices: [0, 100000, 200000] }
    ],
    transfer: 'included',
    menuDetails: {
      entrée: { title: "Entrada", description: "Sopa casera de calabaza." },
      mainCourse: { title: "Plato Principal", description: "Cazuela de cordero en pan de campo con vegetales." },
      dessert: { title: "Postre", description: "Mousse de chocolate." },
      beverages: { title: "Bebidas", description: "Incluye vino tinto, agua mineral o jugo sin límite." },
      notes: [
        { type: 'vegetarian', text: "Se ofrece adaptación del menú para vegetarianos con previo aviso." },
        { type: 'celiac', text: "Se ofrece adaptación del menú para celíacos con previo aviso." }
      ]
    },
    requiresParkEntry: false,
  },
  {
    id: "glaciares-gourmet",
    title: "Navegación Glaciares Gourmet",
    shortDescription: "Una exclusiva navegación por los glaciares Upsala, Spegazzini y Perito Moreno.",
    longDescription: "Disfruta de una experiencia exclusiva navegando entre los témpanos de los glaciares Upsala, Spegazzini y Perito Moreno. Podrás observar la inmensidad de estos glaciares, con la posibilidad de enriquecer tu día con servicios opcionales como un delicioso box lunch gourmet a bordo. Una experiencia de lujo para los amantes de la naturaleza y la buena comida.",
    difficulty: Difficulty.Baja,
    images: [
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/Marpatag/marpa-1.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/Marpatag/marpa-2.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/Marpatag/marpa-3.jpg"
    ],
    duration: "11 horas (Full Day)",
    schedule: "Pick up: 07:00 am",
    includes: ["Navegación de día completo", "Guía bilingüe"],
    whatToBring: ["Ropa cómoda y abrigo", "Lentes de sol", "Cámara de fotos", "Protector solar"],
    ageRules: [
      { ageMin: 0, ageMax: 4, category: 'Infante' },
      { ageMin: 5, ageMax: 15, category: 'Menor' },
      { ageMin: 16, ageMax: 100, category: 'Adulto' },
    ],
    optionalActivities: [
      {
        id: 'box-lunch-gourmet',
        name: 'Box Lunch Gourmet',
        description: 'Un almuerzo completo para disfrutar a bordo.',
        detailedDescription: 'Para que no te preocupes por la comida, te ofrecemos una vianda gourmet caliente y completa, entregada directamente en la embarcación para que disfrutes de los paisajes sin interrupciones.',
        modalTitle: 'Menú Box Lunch Gourmet',
        modalContent: {
          intro: "Vianda Gourmet caliente entregada dentro de la embarcación.",
          optionsTitle: "Opciones de Sándwich (elegir uno)",
          options: [
            { title: "Sandwich de cordero", description: "Sándwich de cordero braseado en pan de harina orgánica integral, con cebolla caramelizada, suave aderezo y queso criollo." },
            { title: "Sandwich de ave", description: "Sándwich de ave desmenuzado y marinado en crema de ajo, en pan de Viena, con panceta grillada, tomates confitados y queso cheddar." },
            { title: "Sandwich vegetariano", description: "Sándwich de vegetales grillados en pan de salvado, semillas multicereal y fetas de queso tybo." },
            { title: "Sandwich de bondiola", description: "Sándwich de bondiola de cerdo tiernizada, marinada en salsa de especias en pan francés, con sofrito de cebollas moradas y queso pategrás. Acompañado de un dip de barbacoa." }
          ],
          sideDish: { title: "Acompañamiento", description: "Bocadillo de tortilla de papa y tortilla de espinaca con tomates cherry acompañado de un dip de queso ahumado." },
          dessert: { title: "Postre", description: "Mousse de dulce de leche con frutos rojos y praliné de maní." },
          beverages: { title: "Bebidas", description: "Una bebida sin alcohol o una copa de vino tinto." },
          notes: [
            { type: 'vegetarian', text: "Se ofrece adaptación del menú para vegetarianos con previo aviso." },
            { type: 'celiac', text: "Se ofrece adaptación del menú para celíacos con previo aviso." }
          ]
        } as BoxLunchDetails,
      },
      {
        id: 'sala-vip',
        name: 'Sala Premium VIP',
        description: 'Acceso a un salón exclusivo con mayor confort y vistas preferenciales.',
        detailedDescription: "Mejora tu experiencia con acceso a un salón exclusivo con mayor confort, vistas preferenciales y atención personalizada. Ideal para quienes buscan un toque extra de lujo y privacidad durante la navegación.",
        modalTitle: 'Detalles Sala Premium VIP',
        modalContent: {
          description: "Salón Premium con ubicación preferencial a bordo y capacidad hasta 14 personas. Incluye menú gourmet de 5 pasos y bebidas con y sin alcohol durante el almuerzo. Bebidas sin alcohol e infusiones durante toda la navegación.",
          warning: "El Salón Premium tiene cupos muy limitados. Deberás consultar disponibilidad antes de reservar este servicio.",
          menu: [
            { category: "Snacks salados", item: "Calamares con tradicional salsa criolla y mousse de palta. Guanaco escabechado. Pickles de portobellos." },
            { category: "Aperitivo", item: "Sopa de maíz con langostinos tail on." },
            { category: "Entrada", item: "Empanada de osobuco braseado." },
            { category: "Plato principal", item: "Bife de cordero con crocante de hierbas y nuestra clásica demi-glace, con crema de zanahorias y vegetales de temporada." },
            { category: "Postre", item: "Mousse de praliné y chocolate con leche con frutos rojos macerados en reducción de vino torrontés." }
          ],
          beverages: {
            title: "Bebidas",
            description: "Cafetería y bebidas no alcohólicas incluidas durante todo el recorrido. Bebidas alcohólicas incluidas durante el almuerzo."
          },
          notes: [
             { type: 'vegetarian', text: "Se ofrece adaptación del menú para vegetarianos con previo aviso." },
             { type: 'celiac', text: "Se ofrece adaptación del menú para celíacos con previo aviso." }
          ]
        } as SalaPremiumDetails
      },
      {
        id: 'descenso-pasarelas',
        name: 'Descenso en Pasarelas',
        description: 'Opción de desembarcar para recorrer las pasarelas del Glaciar Perito Moreno.',
        detailedDescription: "No te pierdas la oportunidad de caminar por las pasarelas del Glaciar Perito Moreno. Este opcional te permite desembarcar y disponer de tiempo libre para apreciar de cerca la majestuosidad del glaciar más famoso del mundo y sus desprendimientos.",
        modalTitle: 'Detalles del Descenso en Pasarelas',
        modalContent: {
          whatYouWillDo: {
            title: "Qué harás",
            description: "Podrás descender en el Glaciar Perito Moreno después de haber navegado por su frente para así recorrer los balcones y miradores y tener una perspectiva diferente de este glaciar."
          },
          scheduleChange: {
            title: "¿Cómo se modifica el horario de la excursión?",
            description: "Descenderán a las 3:30 p.m. en el Glaciar Perito Moreno y podrán visitar las pasarelas hasta las 5:00 p.m. Regresarán a su hotel de El Calafate a las 7:00 p.m."
          },
          idealFor: {
            title: "¿Para quién es ideal este servicio?",
            description: "Es un servicio ideal para quienes deseen visitar en un mismo día dos de los principales atractivos del Parque Nacional Los Glaciares: además de visitar los glaciares Upsala, Spegazzini y Perito Moreno desde el agua, sumarán la visita a las pasarelas de este último glaciar."
          },
          considerations: {
            title: "Consideraciones a tener en cuenta",
            description: "Un guía los recibirá al descender en el Glaciar Perito Moreno y esperará hasta el momento de regresar a El Calafate por vía terrestre."
          },
          warning: "Servicio sólo disponible reservando la excursión con inicio en su hotel de El Calafate."
// FIX: Corrected typo in type assertion from PaslasDescensoDetails to PasarelasDescensoDetails.
        } as PasarelasDescensoDetails
      }
    ],
    seasons: [
      {
        name: "Temporada Media 2025",
        startDate: "2025-10-01",
        endDate: "2025-12-31",
        prices: [0, 182000, 260000],
        transferPrices: [0, 50000, 50000],
        optionalPrices: {
          "box-lunch-gourmet": [0, 40000, 40000],
          "sala-vip": [0, 230000, 230000],
          "descenso-pasarelas": [0, 85000, 85000]
        }
      },
      {
        name: "Temporada Alta 2025/26",
        startDate: "2025-12-31",
        endDate: "2026-04-30",
        prices: [0, 189000, 270000],
        transferPrices: [0, 50000, 50000],
        optionalPrices: {
          "box-lunch-gourmet": [0, 40000, 40000],
          "sala-vip": [0, 230000, 230000],
          "descenso-pasarelas": [0, 85000, 85000]
        }
      }
    ],
    transfer: 'optional',
    requiresParkEntry: true,
  },
  {
    id: "estancia-25-de-mayo",
    title: "Estancia 25 de Mayo",
    shortDescription: "Tarde de campo con demostración de esquila, caminata y cena show folklórico en una histórica estancia patagónica.",
    longDescription: "Descubre la vida rural en la Patagonia con esta visita a la histórica Estancia 25 de Mayo. Participarás en actividades típicas como el arreo de ovejas y la demostración de esquila. También podrás disfrutar de una caminata por la estancia y deleitarte con una cena tradicional de cordero al asador. Una experiencia auténtica que te permitirá conectarte con la cultura patagónica.",
    difficulty: Difficulty.Baja,
    images: [
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/ea25demayo/estancia_25demayo%20(4).jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/ea25demayo/estancia_25demayo%20(6).jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/ea25demayo/estancia_25demayo_9.jpg"
    ],
    duration: "5 horas (Half Day)",
    schedule: "Pick Up: 17:30 hs",
    includes: ["Traslado desde tu alojamiento", "Demostración de esquila y arreo", "Caminata guiada", "Cena show con cordero al asador"],
    whatToBring: ["Ropa cómoda y abrigo", "Calzado cómodo", "Cámara de fotos"],
    ageRules: [
      { ageMin: 0, ageMax: 2, category: 'Infante' },
      { ageMin: 3, ageMax: 12, category: 'Menor' },
      { ageMin: 13, ageMax: 100, category: 'Adulto' },
    ],
    optionalActivities: [
      {
        id: 'iniciacion-cabalgata',
        name: 'Iniciación a la Cabalgata',
        description: 'Recorrido de 45 min. Apto para mayores de 6 años.',
        detailedDescription: 'Disfruta de un tranquilo paseo a caballo de 45 minutos por los alrededores de la estancia. Una actividad ideal para principiantes y familias, sin necesidad de experiencia previa para conectar con la naturaleza y los paisajes patagónicos de una manera única.',
        ageMin: 6,
        selectionType: 'per-person'
      }
    ],
    seasons: [
      { 
        name: "Temporada 2025/26", 
        startDate: "2025-09-01", 
        endDate: "2026-04-30", 
        prices: [0, 55000, 110000],
        optionalPrices: {
          "iniciacion-cabalgata": [0, 25000, 25000]
        }
      }
    ],
    transfer: 'included',
    requiresParkEntry: false,
    menuDetails: {
      entrée: { title: "Recepción y Entrada", description: "Aperitivo de bienvenida. Pan de campo con dips y empanada criolla." },
      mainCourse: { title: "Plato Principal", description: "Cordero al asador, pollo, ternera, chorizo y morcilla, acompañado de papas rústicas y ensaladas." },
      dessert: { title: "Postre", description: "Postre a elección." },
      beverages: { title: "Bebidas", description: "Incluye agua mineral." },
      notes: [
        { type: 'vegetarian', text: "Menú vegetariano disponible con previo aviso." },
        { type: 'celiac', text: "Menú para celíacos disponible con previo aviso." }
      ]
    }
  },
  {
    id: "traslados-aeropuerto",
    title: "Traslados Aeropuerto",
    shortDescription: "Servicio de traslados compartidos (shuttle) desde y hacia el aeropuerto de El Calafate.",
    longDescription: "Garantizá tu llegada y partida de El Calafate con nuestro confiable servicio de traslados compartidos. Nuestros conductores te esperarán en el aeropuerto para llevarte directamente a tu hotel en la ciudad (y viceversa al finalizar tu viaje), asegurando un traslado cómodo y puntual junto a otros pasajeros. Es la opción ideal para viajar de manera eficiente y económica.",
    difficulty: Difficulty.Baja,
    images: ["https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/aeropuerto-traslado.jpg"],
    duration: "Variable",
    schedule: "Según horario de vuelos",
    includes: ["Recepción en el aeropuerto", "Traslado a tu alojamiento en El Calafate (o viceversa)", "Asistencia con equipaje"],
    whatToBring: ["Voucher de reserva"],
    ageRules: [
        { ageMin: 0, ageMax: 2, category: 'Infante' },
        { ageMin: 3, ageMax: 100, category: 'Adulto' }
    ],
    seasons: [
        {
            name: "Temporada 2025 A",
            startDate: "2025-08-11",
            endDate: "2025-09-30",
            prices: [0, 17000]
        },
        {
            name: "Temporada 2025/26",
            startDate: "2025-10-01",
            endDate: "2026-04-30",
            prices: [0, 20000]
        }
    ],
    transfer: 'included',
    requiresParkEntry: false,
  },
  {
    id: "traslado-bus-perito-moreno",
    title: "Traslado en bus Glaciar Perito Moreno",
    shortDescription: "Viajá desde tu hotel al Glaciar Perito Moreno sin guía y recorré las pasarelas a tu propio ritmo.",
    longDescription: "Nuestro servicio de traslado en bus te ofrece la forma más cómoda y directa de llegar al Glaciar Perito Moreno desde tu hotel en El Calafate. Esta opción es perfecta para los viajeros que prefieren explorar las pasarelas por su cuenta, sin la estructura de una excursión guiada. Ofrecemos dos horarios de salida para que elijas el que mejor se adapte a tu itinerario: una salida por la mañana para aprovechar el día completo (09:00 a 17:00 hs) y otra al mediodía para una visita por la tarde (12:00 a 19:00 hs aprox). El bus te dejará en el estacionamiento del glaciar, donde tendrás amplio tiempo libre para recorrer los balcones y maravillarte con el imponente paisaje antes de emprender el regreso a la hora pactada.",
    difficulty: Difficulty.Baja,
    images: [
        "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/pasarelas-glaciar-perito-moreno/glaciar-4.jpg",
        "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/pasarelas-glaciar-perito-moreno/moreno.jpg", 
        "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/pasarelas-glaciar-perito-moreno/glaciar-2.jpg"
    ],
    duration: "Día completo o medio día",
    schedule: "Salida 09:00 (regreso 17hs) / Salida 12:00 (regreso 19hs)",
    includes: ["Traslado ida y vuelta desde tu alojamiento", "Tiempo libre para recorrer pasarelas"],
    whatToBring: ["Ropa cómoda y abrigada", "Calzado adecuado para caminar", "Lentes de sol, protector solar", "Vianda o dinero para snacks", "Cámara de fotos"],
    ageRules: [
      { ageMin: 0, ageMax: 2, category: 'Infante' },
      { ageMin: 3, ageMax: 11, category: 'Menor' },
      { ageMin: 12, ageMax: 100, category: 'Adulto' },
    ],
    seasons: [
       { 
        name: "Temporada 2025/26", 
        startDate: "2025-08-10", 
        endDate: "2026-04-30", 
        prices: [0, 50000, 60000], 
      },
    ],
    transfer: 'included',
    requiresParkEntry: true,
  },
  {
    id: "safari-nautico-perito-moreno",
    title: "Safari Náutico - Glaciar Perito Moreno",
    shortDescription: "Navegá durante una hora frente a la imponente pared sur del Glaciar Perito Moreno.",
    longDescription: "<p>Esta navegación tiene una duración de una hora y brinda la posibilidad de observar desde nuestras confortables embarcaciones, y con una perspectiva totalmente diferente, las impresionantes paredes del Glaciar Perito Moreno y sus continuos y estruendosos derrumbes sobre las aguas del Lago Rico.</p><p>A 400 metros de la pared sur del Glaciar Perito Moreno, el barco se detiene por unos minutos para poder observar más detalladamente el paisaje. ¡Más cerca de la pared de la ruptura, imposible!</p><p>El Safari Náutico es una navegación apta para todas las edades y se puede realizar los 365 días del año. Está orientada a personas que quieren contemplar la magia del hielo e inmortalizarla en la memoria, observando cada detalle de la pared de hielo y su entorno.</p><p><strong>A tener en cuenta antes de comprar:</strong> Para realizar esta excursión deberás acercarte por tus propios medios al Puerto Bajo las Sombras, ubicado en la Ruta 11 km 70.9. Te sugerimos salir con 1 hora y media de anticipación desde El Calafate para llegar a horario. El camino dentro del Parque Nacional es sinuoso y, por seguridad, te recomendamos respetar los límites de velocidad señalados.</p><p><strong>Importante:</strong> Esta excursión NO incluye el traslado hasta el puerto ni la entrada al Parque Nacional, que deberá abonarse al ingresar al mismo.</p>",
    difficulty: Difficulty.Baja,
    images: [
        "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/nav%202.jpg",
        "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/nav%201.jpg",
        "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/nav%203.jpg"
    ],
    duration: "1 hora",
    schedule: "10:00, 11:30 y 14:30 hs (consultar por otras salidas)",
    includes: ["Navegación de 1 hora por el Brazo Rico", "Vistas de la pared sur del Glaciar Perito Moreno"],
    whatToBring: ["Ropa de abrigo e impermeable", "Cámara de fotos", "Protector solar", "Gorro y guantes"],
    ageRules: [
      { ageMin: 0, ageMax: 3, category: 'Infante' },
      { ageMin: 4, ageMax: 15, category: 'Menor' },
      { ageMin: 16, ageMax: 100, category: 'Adulto' }
    ],
    seasons: [
       { 
        name: "Temporada 2025/26 A", 
        startDate: "2025-08-13", 
        endDate: "2025-09-30", 
        prices: [0, 51200, 64000]
      },
      { 
        name: "Temporada 2025/26 B", 
        startDate: "2025-10-01", 
        endDate: "2025-12-31", 
        prices: [0, 51200, 64000] 
      },
    ],
    transfer: 'none',
    requiresParkEntry: true,
  },
   {
    id: "big-ice",
    title: "Big Ice",
    shortDescription: "Una caminata extrema de 3 horas sobre el Glaciar Perito Moreno, ideal para aventureros.",
    longDescription: "Sumérgete en una aventura extrema con esta caminata sobre el Glaciar Perito Moreno. Equipado con crampones, caminarás durante 3 horas sobre el hielo y explorarás las profundas grietas y lagunas azules del glaciar. También realizarás un trekking de 4 horas por el bosque y la morrena, disfrutando de vistas impresionantes del glaciar.",
    difficulty: Difficulty.Alta,
    images: [
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/bigice/bigice0_2.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/bigice/bigice0_4.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/bigice/bigice0_6.jpg"
    ],
    duration: "12 horas (Full Day)",
    schedule: "Pick Up: A confirmar",
    includes: ["Navegación de aproximación", "Guías de montaña bilingües", "Crampones para la caminata", "Caminata de 3 horas sobre el glaciar", "Trekking por bosque y morrena"],
    whatToBring: ["Botas de trekking impermeables (excluyente)", "Ropa cómoda y abrigada (varias capas)", "Guantes y gorro", "Mochila pequeña", "Vianda y agua", "Protector solar y lentes de sol"],
    ageRules: [
      { ageMin: 18, ageMax: 50, category: 'Adulto' },
    ],
    seasons: [
      { 
        name: "Temporada 2025/26 A", 
        startDate: "2025-09-15", 
        endDate: "2025-10-10", 
        prices: [640000],
        transferPrices: [64000]
      },
      { 
        name: "Temporada 2025/26 B", 
        startDate: "2025-10-11", 
        endDate: "2025-12-31", 
        prices: [590000],
        transferPrices: [64000]
      },
      { 
        name: "Temporada 2025/26 C", 
        startDate: "2026-01-01", 
        endDate: "2026-04-30", 
        prices: [640000],
        transferPrices: [80000]
      }
    ],
    transfer: 'optional',
    requiresParkEntry: true,
    restrictions: {
      title: "Restricciones Importantes",
      intro: "Debido al grado de esfuerzo y dificultad <strong>(ALTA, con pronunciadas subidas y bajadas en un terreno irregular)</strong> que esta actividad presenta y con el solo objetivo de preservar la salud, no podrán participar:",
      items: [
        "<strong>Solo apto para personas de 18 a 50 años.</strong> Sin excepción.",
        "<strong>Mujeres embarazadas.</strong>",
        "<strong>Personas con sobrepeso u obesidad:</strong> La Organización Mundial de la Salud (OMS) define la obesidad cuando una persona presenta un Índice de Masa Corporal (IMC) igual o superior a 30. El IMC se calcula dividindo el peso (kg) por el cuadrado de la talla (m&sup2;).",
        "<strong>Personas con cualquier grado o tipo de discapacidad física o mental</strong> que afecte su atención, marcha y/o coordinación.",
        "<strong>Personas con antecedentes cardíacos:</strong> Quienes sufran enfermedades cardiovasculares centrales o periféricas, que sus capacidades cardíacas o vasculares se encuentren disminuidas, o utilicen stent, bypass, marcapasos u otras prótesis. (Ej: medicamentos anticoagulantes, várices grado III).",
        "<strong>Personas que padezcan enfermedades respiratorias crónicas</strong> (EPOC, asma, enfisema, etc.).",
      ],
      note: "Ante cualquier duda o consulta sobre estas restricciones, por favor contáctenos antes de realizar su reserva."
    }
  },
  {
    id: "kayak-perito-moreno",
    title: "Kayak Glaciar Perito Moreno",
    shortDescription: "Rema en kayak frente al imponente Glaciar Perito Moreno en una aventura inolvidable.",
    longDescription: "Vive una experiencia única remando en kayak frente al Glaciar Perito Moreno. Luego de una orientación sobre seguridad y el uso del equipo, te adentrarás en el canal de los témpanos, manteniendo una distancia segura del glaciar pero suficiente para admirar su grandiosidad. La actividad incluye una hora y media de kayak.",
    difficulty: Difficulty.Media,
    images: [
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/kayakmoreno/kayakmoreno_1.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/kayakmoreno/kayakmoreno_2.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/kayakmoreno/kayakmoreno_3.jpg"
    ],
    duration: "5 horas",
    schedule: "Inicio: A confirmar",
    includes: ["Equipamiento completo para kayak (traje seco, botas, chaleco)", "Guía profesional bilingüe"],
    whatToBring: ["Ropa cómoda y abrigada (interior térmico)", "Muda de medias extra", "Calzado cerrado de recambio", "Lentes de sol y protector solar"],
    ageRules: [
      { ageMin: 14, ageMax: 100, category: 'Adulto' }
    ],
    seasons: [
      { 
        name: "Temporada 2025/26", 
        startDate: "2025-09-01", 
        endDate: "2026-04-30", 
        prices: [360000],
        transferPrices: [40000]
      }
    ],
    transfer: 'optional',
    requiresParkEntry: true,
    restrictions: {
      title: "Restricciones de la Actividad",
      intro: "Para garantizar la seguridad y el disfrute de todos los participantes, esta actividad tiene los siguientes requisitos:",
      items: [
        "<strong>Edad mínima: 14 años.</strong> Los menores deben estar acompañados por un adulto responsable.",
        "Se requiere un buen estado de salud y condición física moderada.",
        "No es necesario tener experiencia previa en kayak.",
        "Actividad no apta para mujeres embarazadas.",
        "Peso máximo por participante: 120 kg."
      ],
      note: "La actividad está sujeta a las condiciones climáticas. El guía puede cancelar o modificar el recorrido por razones de seguridad."
    }
  },
  {
    id: "kayak-darwin-experience",
    title: "Kayak Darwin Experience",
    shortDescription: "Rema por el histórico río Santa Cruz en una aventura de kayak con almuerzo en una estancia.",
    longDescription: "Revive la aventura de Charles Darwin en la Patagonia. Esta excursión te permite armar tu día a medida: elegí entre participar en la emocionante remada de 15 km por el río Santa Cruz o disfrutar como acompañante de la belleza de la estancia, el transporte en 4x4 y un almuerzo tradicional. La opción de acompañante es ideal para familias o grupos donde no todos desean remar. En la calculadora, simplemente asigná el rol de cada pasajero para cotizar tu aventura personalizada.",
    difficulty: Difficulty.Alta,
    images: [
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/darwin/darwinexperience-1.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/darwin/darwinexperience%20(3).jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/darwin/darwinexperience%20(5).jpg"
    ],
    duration: "5 horas",
    schedule: "Inicio: 09:00 hs",
    includes: ["Guía certificado", "Transporte en 4x4", "Almuerzo y bebidas incluidas", "Kayaks dobles", "Trajes secos Gore Tex", "Chaleco salvavidas", "Botas y guantes"],
    whatToBring: ["Ropa cómoda y de abrigo", "Muda de ropa y medias extra", "Calzado cerrado de recambio", "Protector solar y lentes de sol", "Gorro"],
    ageRules: [
      { ageMin: 0, ageMax: 2, category: 'Infante' },
      { ageMin: 3, ageMax: 15, category: 'Menor' },
      { ageMin: 16, ageMax: 100, category: 'Adulto' },
    ],
    optionalActivities: [
      {
        id: 'participante-kayak',
        name: 'Participante Kayak',
        description: 'Navegación de 15km por el Río Santa Cruz. Incluye almuerzo. Edad mínima 16 años.',
        ageMin: 16,
        selectionType: 'per-person'
      },
      {
        id: 'acompanante-sin-kayak',
        name: 'Acompañante (sin kayak)',
        description: 'Disfruta del transporte, estancia y almuerzo sin realizar la actividad de remo. Apto para todas las edades.',
        selectionType: 'per-person'
      }
    ],
    seasons: [
      {
        name: "Temporada 2025/26",
        startDate: "2025-08-12",
        endDate: "2026-04-30",
        prices: [0, 0, 0],
        optionalPrices: {
          "participante-kayak": [0, 0, 240000],
          "acompanante-sin-kayak": [0, 120000, 120000]
        }
      }
    ],
    transfer: 'included',
    requiresParkEntry: false,
    restrictions: {
      title: "Restricciones de la Actividad de Kayak",
      intro: "La opción de acompañante es apta para todas las edades y condiciones físicas. Sin embargo, para participar en la actividad de remo, que es de dificultad <strong>ALTA</strong>, se deben cumplir los siguientes requisitos:",
      items: [
        "<strong>Edad mínima para kayak: 16 años.</strong> Sin excepción.",
        "Se requiere una buena condición física para el tramo de remo de 15 km.",
        "<strong>Actividad no apta para mujeres embarazadas.</strong>",
        "No apto para personas con problemas cardíacos, de espalda o columna preexistentes.",
        "El peso máximo por participante es de 120 kg."
      ],
      note: "La empresa se reserva el derecho de admisión a la actividad de remo si considera que la seguridad del pasajero puede verse comprometida."
    },
    menuDetails: {
      entrée: { title: "Entrada", description: "Focaccia con dip de berenjenas y provoleta con tomate." },
      mainCourse: { title: "Plato Principal", description: "Bife angosto a la criolla acompañado de ensaladas." },
      dessert: { title: "Postre", description: "Mousse de chocolate." },
      beverages: { title: "Bebidas", description: "Bebidas incluidas durante el almuerzo." },
       notes: [
        { type: 'vegetarian', text: "Menú vegetariano disponible con previo aviso." },
        { type: 'celiac', text: "Menú para celíacos disponible con previo aviso." }
      ]
    }
  },
  {
    id: "buses-regulares",
    title: "Buses Regulares",
    shortDescription: "Contratá tus pasajes a El Chaltén, Puerto Natales y más. ¡Consultanos por horarios y disponibilidad!",
    longDescription: '<p>Te ofrecemos la forma más cómoda y directa de moverte por la Patagonia. Podés contratar con nosotros los servicios de buses regulares a los principales destinos de la zona.</p><p>Esta opción es perfecta para los viajeros que prefieren armar su itinerario y moverse de forma independiente. ¡Consultanos por WhatsApp para conocer los horarios actualizados y asegurar tu lugar!</p><h4 class="text-xl font-bold mt-6 mb-2">Precios de Referencia (por tramo):</h4><ul class="list-disc list-inside space-y-2 text-gray-700 pl-2"><li><strong>El Chaltén:</strong> desde $45.000 ARS</li><li><strong>Puerto Natales (Chile):</strong> desde $40.000 ARS</li><li><strong>Río Gallegos:</strong> desde $39.000 ARS</li></ul><p class="mt-4 text-sm">Los precios son por persona y por tramo, y pueden variar según la temporada y la empresa prestadora.</p>',
    difficulty: Difficulty.Baja,
    images: [
        "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/main/buses-transporte-publico.jpg"
    ],
    duration: "Variable",
    schedule: "Consultar horarios",
    includes: ["Pasaje de bus al destino seleccionado", "Gestión de reserva", "Asesoramiento"],
    whatToBring: ["DNI o Pasaporte", "Voucher de reserva"],
    ageRules: [
      { ageMin: 0, ageMax: 100, category: 'Adulto' },
    ],
    seasons: [
       { 
        name: "Temporada 2025/26", 
        startDate: "2025-01-01",
        endDate: "2026-12-31", 
        prices: [39000],
      },
    ],
    transfer: 'none',
    requiresParkEntry: false,
  },
  {
    id: "safari-experience",
    title: "Safari Experience",
    shortDescription: "Explora la estepa patagónica en 4x4 con avistaje de fauna y almuerzo campestre.",
    longDescription: "Explora la estepa patagónica en un safari en 4x4, donde podrás avistar fauna autóctona como guanacos, zorros y cóndores. El recorrido incluye una interpretación del ecosistema local y la historia de los pioneros de la región. Finaliza con un almuerzo campestre en un entorno natural impresionante.",
    difficulty: Difficulty.Baja,
    images: [
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/safariexperience/safariexperience_1.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/safariexperience/safariexperience_2.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/safariexperience/safariexperience_3.jpg"
    ],
    duration: "4 horas (Half Day)",
    schedule: "Pick Up: A confirmar",
    includes: ["Excursión en 4x4 por la estepa", "Guía especializado", "Almuerzo campestre"],
    whatToBring: ["Ropa cómoda y de abrigo", "Calzado adecuado", "Lentes de sol y protector solar", "Cámara de fotos"],
    ageRules: [
      { ageMin: 0, ageMax: 2, category: 'Infante' },
      { ageMin: 3, ageMax: 12, category: 'Menor' },
      { ageMin: 13, ageMax: 100, category: 'Adulto' },
    ],
    seasons: [
      { 
        name: "Temporada 2025", 
        startDate: "2025-11-01", 
        endDate: "2025-12-31", 
        prices: [0, 82500, 165000]
      }
    ],
    transfer: 'included',
    requiresParkEntry: false,
    menuDetails: {
      entrée: { title: "Entrada", description: "Picada" },
      mainCourse: { title: "Plato Principal", description: "Guiso de lentejas con chorizo colorado y panceta" },
      dessert: { title: "Postre", description: "Cheesecake" },
      beverages: { title: "Bebidas", description: "Incluye vino, agua mineral y jugo natural." },
      notes: [
        { type: 'vegetarian', text: "Se ofrece adaptación del menú para vegetarianos con previo aviso." },
        { type: 'celiac', text: "Se ofrece adaptación del menú para celíacos con previo aviso." }
      ]
    }
  },
  {
    id: "safari-azul",
    title: "SAFARI AZUL - Toca el Glaciar",
    shortDescription: "Combina navegación, una caminata por el bosque y la inolvidable experiencia de tocar el Glaciar Perito Moreno.",
    longDescription: "<p>El Safari Azul es una excursión de día completo que te ofrece una experiencia íntima y completa con el Glaciar Perito Moreno, combinando navegación, una caminata por el bosque y la oportunidad única de tocar el hielo milenario. La aventura puede comenzar con el viaje en bus desde tu hotel en El Calafate (disponible como opcional) o directamente en el Parque Nacional Los Glaciares.</p><p>Al llegar al Puerto Bajo de las Sombras, embarcarás para una corta navegación de 20 minutos a través del Lago Rico, desembarcando en la costa opuesta. Desde allí, iniciarás una caminata guiada de aproximadamente una hora y media. El sendero te llevará a través de un frondoso bosque patagónico y a lo largo de la orilla del lago, siempre con la imponente pared sur del glaciar como telón de fondo.</p><p>El punto culminante de la caminata es cuando te acercas lo suficiente al glaciar para apreciar en detalle sus texturas, formas y los profundos tonos azules del hielo. En este momento mágico, tendrás la oportunidad de tocar el glaciar, sintiendo la energía de este gigante de la naturaleza.</p><p>Posteriormente, volverás a embarcar para navegar frente a toda la majestuosa pared sur, admirando su grandiosidad desde el agua. Para finalizar, la excursión incluye aproximadamente dos horas de tiempo libre para recorrer las pasarelas del Glaciar Perito Moreno, permitiéndote disfrutar de las famosas vistas panorámicas y capturar fotos inolvidables desde diferentes ángulos.</p>",
    difficulty: Difficulty.Baja,
    images: [
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/safariazul/safariazul_3.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/safariazul/safariazul_2.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/safariazul/safariazul_1.jpg"
    ],
    duration: "8 horas (Full Day)",
    schedule: "Pick Up: A confirmar",
    includes: ["Navegación por el Lago Rico", "Caminata guiada de 1.5hs por bosque y costa", "Oportunidad de tocar el hielo del glaciar", "Tiempo libre en las pasarelas del Perito Moreno"],
    whatToBring: ["Ropa cómoda y de abrigo", "Calzado cómodo para caminar", "Vianda y bebidas (no incluidas)", "Protector solar y lentes de sol", "Cámara de fotos"],
    ageRules: [
      { ageMin: 6, ageMax: 15, category: 'Menor' },
      { ageMin: 16, ageMax: 70, category: 'Adulto' }
    ],
    seasons: [
       { 
        name: "Temporada 2025 A", 
        startDate: "2025-08-13",
        endDate: "2025-09-30",
        prices: [128000, 160000], 
        transferPrices: [64000, 64000] 
      },
      { 
        name: "Temporada 2025 B", 
        startDate: "2025-10-01",
        endDate: "2026-04-30",
        prices: [160000, 200000], 
        transferPrices: [64000, 64000] 
      }
    ],
    transfer: 'optional',
    requiresParkEntry: true,
    restrictions: {
      title: "Restricciones Importantes",
      intro: "Para garantizar la seguridad y el disfrute de todos los participantes, esta excursión tiene límites de edad estrictos:",
      items: [
        "<strong>Edad mínima: 6 años.</strong>",
        "<strong>Edad máxima: 70 años.</strong>"
      ],
      note: "No se harán excepciones con los límites de edad. Se podrá solicitar documentación para verificar la edad al momento de la excursión."
    }
  },
  {
    id: "cerro-huiliche",
    title: "Cerro Huiliche 4x4",
    shortDescription: "Aventura en 4x4 con vistas panorámicas y opción de descensos con trekking o tirolesa.",
    longDescription: "Embárcate en una travesía en vehículos 4x4 hasta la cima del Cerro Huiliche, desde donde se despliegan vistas panorámicas espectaculares del Lago Argentino, la Cordillera de los Andes y la estepa patagónica. Tras maravillarte con el paisaje y disfrutar de un snack en la confitería, la aventura continúa. Para el descenso, podrás elegir entre una caminata guiada por senderos naturales (trekking) o un emocionante circuito de tirolesas que te hará volar sobre el bosque. Una excursión de medio día que combina la emoción del off-road con la belleza natural y la adrenalina del descenso.",
    difficulty: Difficulty.Baja,
    images: [
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/cerohuiliche/cerro_huiliche%20(1).jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/cerohuiliche/cerro_huiliche%20(10).jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/cerohuiliche/cerro_huiliche%20(2).jpg"
    ],
    duration: "Medio día",
    schedule: "Salidas por la mañana y tarde",
    includes: ["Traslado desde tu alojamiento", "Guía bilingüe", "Paseo en 4x4", "Almuerzo o cena en confitería (salidas de mediodía) o merienda (salidas de la tarde)"],
    whatToBring: ["Ropa cómoda y de abrigo", "Calzado cerrado y cómodo", "Lentes de sol", "Cámara de fotos"],
    ageRules: [
      { ageMin: 0, ageMax: 2, category: 'Infante' },
      { ageMin: 3, ageMax: 11, category: 'Menor' },
      { ageMin: 12, ageMax: 100, category: 'Adulto' },
    ],
    optionalActivities: [
      {
        id: 'descenso-tirolesa',
        name: 'Descenso en Tirolesa',
        description: 'Apto para mayores de 12 años.',
        detailedDescription: 'Siente la adrenalina descendiendo por un circuito de tirolesas que atraviesan el bosque patagónico. Una forma única y emocionante de regresar, con vistas espectaculares del Lago Argentino y la estepa. Totalmente seguro y supervisado por guías expertos.',
        ageMin: 12,
        ageMax: 65,
        selectionType: 'per-person'
      },
      {
        id: 'descenso-trekking',
        name: 'Descenso con Trekking (sin costo)',
        description: 'Apto para mayores de 8 años.',
        detailedDescription: 'Disfruta de una caminata guiada en descenso por los senderos del Cerro Huiliche. Una oportunidad para conectar con la naturaleza, aprender sobre la flora local y disfrutar del paisaje a un ritmo tranquilo. Este opcional no tiene costo adicional.',
        ageMin: 8,
        ageMax: 65,
        selectionType: 'per-person'
      }
    ],
    seasons: [
      {
        name: "Temporada 2025/26",
        startDate: "2025-08-11",
        endDate: "2026-04-30",
        prices: [0, 92000, 115000],
        optionalPrices: {
          "descenso-tirolesa": [0, 0, 40000],
          "descenso-trekking": [0, 0, 0]
        }
      }
    ],
    transfer: 'included',
    requiresParkEntry: false,
    restrictions: {
      title: "Restricciones de Actividades Opcionales",
      intro: "La excursión base es apta para todas las edades y no presenta dificultad física. Sin embargo, las actividades de descenso opcionales tienen requisitos específicos:",
      items: [
        "<strong>Descenso con Trekking:</strong> Apto para mayores de 8 años. Requiere calzado adecuado y una condición física normal para caminar por senderos com pendientes.",
        "<strong>Descenso en Tirolesa:</strong> Apto para mayores de 12 años. El peso máximo es de 100 kg. No es una actividad apta para mujeres embarazadas, personas con problemas de corazón, osteoporosis, problemas de columna o cirugías recentes.",
      ],
      note: "La empresa se reserva el derecho de admisión a las actividades de descenso si considera que la seguridad del pasajero puede verse comprometida."
    },
    menuDetails: {
      entrée: { title: "Almuerzo / Cena: Entrada", description: "Empanada de carne o sopa de calabaza." },
      mainCourse: { title: "Almuerzo / Cena: Plato Principal", description: "Cazuela de ternera." },
      dessert: { title: "Almuerzo / Cena: Postre", description: "Brownie." },
      beverages: { 
        title: "Merienda y Bebidas", 
        description: "Las salidas de la tarde incluyen una merienda completa: Chocolate caliente, café, té, jugos, tortas caseras, alfajores y tostadas. Para el almuerzo/cena se incluye agua, jugo y copa de vino." 
      },
      notes: [
        { type: 'vegetarian', text: "Opción vegetariana para almuerzo/cena: empanada o sopa y cazuela de verdura. Informar con antelación." },
        { type: 'celiac', text: "Opción para celíaco para almuerzo/cena: sopa de calabaza y cazuela de verdura. Informar con antelación." }
      ]
    }
  },
  {
    id: "chalten-trekking-libre",
    title: "Full Day Chaltén - Trekking Libre",
    shortDescription: "Viajá a El Chaltén y elegí tu propia aventura de trekking por los senderos más famosos.",
    longDescription: "Esta excursión te lleva desde El Calafate hasta El Chaltén, la Capital Nacional del Trekking. Una vez allí, tendrás tiempo libre para explorar los senderos autoguiados a tu propio ritmo. El tiempo disponible te permite realizar caminatas de dificultad media como la que te lleva hasta la Laguna Capri, o senderos más cortos como el Mirador de los Cóndores, para que aproveches al máximo tu día.",
    difficulty: Difficulty.Media,
    images: [
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/chalten/chalten_capri_1-2.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/chalten/chalten_trekking_2-2.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/chalten/chalten_trekking_3-2.jpg"
    ],
    duration: "Día completo (12 hs aprox.)",
    schedule: "07:00 a 19:00 hs",
    includes: ["Traslados ida y vuelta desde El Calafate"],
    whatToBring: ["Ropa y calzado de trekking", "Vianda y agua", "Protector solar y lentes de sol", "Mochila", "Bastones de trekking (opcional)"],
    ageRules: [
       { ageMin: 0, ageMax: 11, category: 'Menor' },
       { ageMin: 12, ageMax: 100, category: 'Adulto' },
    ],
    seasons: [
      { name: "Temporada Baja 2025", startDate: "2025-08-12", endDate: "2025-08-31", prices: [86400, 108000] },
      { name: "Temporada Alta 2025", startDate: "2025-09-01", endDate: "2025-10-10", prices: [86400, 108000] },
      { name: "Temporada Alta 2025/26", startDate: "2025-10-11", endDate: "2026-04-30", prices: [86400, 108000] }
    ],
    transfer: 'included',
    requiresParkEntry: true
  },
  {
    id: "estancia-nibepo-aike",
    title: "Estancia Nibepo Aike",
    shortDescription: "Día de campo en una estancia histórica con demostración de esquila, asado patagónico y cabalgata opcional.",
    longDescription: "Vive un día de campo en la histórica Estancia Nibepo Aike, donde participarás en una demostración de esquila tradicional y disfrutarás de un almuerzo patagónico con cordero al asador. Recorrerás la estancia, conocerás su historia y, si lo deseas, podrás sumar una cabalgata opcional para explorar a caballo los paisajes de los alrededores.",
    difficulty: Difficulty.Baja,
    images: [
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/nibepo/nibepo_1.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/nibepo/nibepo_2.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/nibepo/nibepo_4.jpg"
    ],
    duration: "6 horas (Half Day)",
    schedule: "Pick Up: A confirmar",
    includes: ["Tarde de campo", "Demostración de esquila", "Almuerzo con cordero al asador"],
    whatToBring: ["Ropa cómoda y abrigo", "Calzado cómodo", "Cámara de fotos"],
    ageRules: [
      { ageMin: 0, ageMax: 3, category: 'Infante' },
      { ageMin: 4, ageMax: 10, category: 'Menor' },
      { ageMin: 11, ageMax: 100, category: 'Adulto' },
    ],
    optionalActivities: [
      {
        id: 'cabalgata-opcional',
        name: 'Cabalgata Opcional (1 hora)',
        description: 'Disfruta de un paseo a caballo por los alrededores de la estancia. Apto para mayores de 10 años.',
        selectionType: 'per-person',
        ageMin: 10
      }
    ],
    seasons: [
      { 
        name: "Temporada 2025/26", 
        startDate: "2025-09-15", 
        endDate: "2026-04-30", 
        prices: [0, 84000, 132000],
        optionalPrices: {
          "cabalgata-opcional": [0, 28800, 28800]
        }
      }
    ],
    transfer: 'included',
    requiresParkEntry: false,
    menuDetails: {
      entrée: { title: "Entrada", description: "Empanadas criollas o similar de campo." },
      mainCourse: { title: "Plato Principal", description: "Auténtico cordero patagónico al asador con variedad de ensaladas." },
      dessert: { title: "Postre", description: "Postre casero regional." },
      beverages: { title: "Bebidas", description: "No incluidas, se abonan en el lugar." },
      notes: [
        { type: 'vegetarian', text: "Menú vegetariano disponible con previo aviso." },
        { type: 'celiac', text: "Menú para celíacos disponible con previo aviso." }
      ]
    }
  },
  {
    id: "cabalgata-experience",
    title: "Cabalgata Experience",
    shortDescription: "Cabalgata de 3 horas por la Reserva Natural Estancia 25 de Mayo con almuerzo en una cueva.",
    longDescription: "Vive la experiencia de cabalgar por los cañadones y arroyos de la Reserva Natural Estancia 25 de Mayo. A lo largo de un recorrido de 12km que dura aproximadamente 3 horas, descubrirás paisajes patagónicos únicos y vistas panorámicas del Lago Argentino, para finalmente disfrutar de un almuerzo tradicional en la Cueva del Arroyo. Una travesía de dificultad intermedia ideal para sentir la inmensidad de la Patagonia a caballo.",
    difficulty: Difficulty.Media,
    images: [
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/cabalgataexperience/cabalgata_experience_1.JPG",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/cabalgataexperience/cabalgata_experience_2.JPG",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/cabalgataexperience/cabalgata_experience_3.JPG"
    ],
    duration: "4 horas (Half Day)",
    schedule: "Salidas diarias 10:00 hs (Opera del 15/11 al 30/04)",
    includes: ["Traslados desde tu alojamiento", "Cabalgata por el Cañadón (12km)", "Almuerzo en Cueva del Arroyo", "Guía baqueano"],
    whatToBring: ["Ropa cómoda y de abrigo", "Pantalón largo", "Calzado cerrado y cómodo", "Protector solar y lentes de sol"],
    ageRules: [
      { ageMin: 12, ageMax: 100, category: 'Adulto' },
    ],
    seasons: [
      { 
        name: "Temporada 2025/26", 
        startDate: "2025-11-01", 
        endDate: "2026-04-30", 
        prices: [170000]
      }
    ],
    transfer: 'included',
    requiresParkEntry: false,
    menuDetails: {
      entrée: { title: "Entrada", description: "Picada." },
      mainCourse: { title: "Plato Principal", description: "Bifes a la criolla, entre panes." },
      dessert: { title: "Postre", description: "Cheesecake." },
      beverages: { title: "Bebidas", description: "Bebidas incluidas (agua y vino)." },
      notes: [
        { type: 'vegetarian', text: "Se ofrece adaptación del menú para vegetarianos con previo aviso." },
        { type: 'celiac', text: "Se ofrece adaptación del menú para celíacos con previo aviso." }
      ]
    },
    restrictions: {
      title: "Restricciones de la Actividad",
      intro: "Para garantizar la seguridad y el disfrute de todos los participantes, esta cabalgata de dificultad moderada tiene los siguientes requisitos:",
      items: [
        "<strong>Edad mínima: 12 años.</strong>",
        "<strong>Peso máximo: 95 kg.</strong>",
        "<strong>No es una actividad apta para mujeres embarazadas.</strong>",
        "No se requiere experiencia previa en equitación, pero sí una buena condición física para una cabalgata de 3 horas."
      ]
    }
  },
  {
    id: "cabalgata-bahia-redonda",
    title: "Cabalgata en Patagonia - Bahia Redonda",
    shortDescription: "Elegí entre dos cabalgatas guiadas (corta o larga) por la costa del Lago Argentino y la estepa patagónica.",
    longDescription: "Esta experiencia te invita a explorar los paisajes de la Bahía Redonda a caballo, una forma única de conectar con la naturaleza patagónica. Ofrecemos dos recorridos guiados para que elijas tu propia aventura, ambos partiendo desde una estancia cercana y aptos para todos los niveles de jinetes. Selecciona la cabalgata que más te guste en la calculadora y prepárate para una experiencia memorable. Los traslados hasta el punto de partida no están incluidos.",
    difficulty: Difficulty.Baja,
    images: [
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/cabalgatachabon/cabalgata%20chabon%20(1).jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/cabalgatachabon/cabalgata%20chabon%20(4).jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/cabalgatachabon/cabalgata_chabon_3.jpg"
    ],
    duration: "Variable (1.5 o 3 hs)",
    schedule: "Salidas diarias (ver opciones)",
    includes: ["Guía baqueano", "Caballos mansos y equipamiento", "Instrucciones de seguridad"],
    whatToBring: ["Ropa cómoda y de abrigo", "Pantalón largo", "Calzado cerrado y cómodo", "Protector solar y lentes de sol", "Gorro"],
    ageRules: [
      { ageMin: 0, ageMax: 7, category: 'Infante' },
      { ageMin: 8, ageMax: 12, category: 'Menor' },
      { ageMin: 13, ageMax: 70, category: 'Adulto' },
    ],
    optionalActivities: [
      {
        id: 'cabalgata-corta',
        name: 'Cabalgata Corta',
        description: 'Duración: 1.5 hs. Paseo por Bahía Redonda y Punta Soberana.',
        ageMin: 8,
        selectionType: 'per-person'
      },
      {
        id: 'cabalgata-larga',
        name: 'Cabalgata Larga',
        description: 'Duración: 3 hs. Ascenso por la estepa hasta mirador "Garganta del Diablo".',
        ageMin: 8,
        selectionType: 'per-person'
      }
    ],
    seasons: [
      { 
        name: "Temporada 2025/26", 
        startDate: "2025-08-12", 
        endDate: "2026-04-30",
        prices: [0, 0, 0],
        optionalPrices: {
          "cabalgata-corta": [0, 70000, 70000],
          "cabalgata-larga": [0, 140000, 140000]
        }
      }
    ],
    transfer: 'none',
    requiresParkEntry: false,
    restrictions: {
      title: "Restricciones de la Actividad",
      intro: "Por motivos de seguridad, para participar en esta actividad se deben tener en cuenta las siguientes restricciones:",
      items: [
        "<strong>Edad mínima: 8 años.</strong>",
        "<strong>Peso máximo: 95 kg.</strong>",
        "<strong>No es una actividad apta para mujeres embarazadas.</strong>"
      ],
      note: "No se requiere experiencia previa en equitación. Los guías evaluarán la capacidad de cada jinete."
    }
  },
  {
    id: "estancia-cristina-classic",
    title: "Estancia Cristina Classic",
    shortDescription: "Glaciar Upsala + Estancia Cristina + Museo + Visita histórica y paseo.",
    longDescription: "<p>Una experiencia que combina una espectacular navegación entre témpanos en el canal del Glaciar Upsala con un día de campo en la histórica Estancia Cristina. Partiendo desde el Puerto de Punta Bandera, la excursión te lleva a través de los imponentes paisajes del Lago Argentino hasta la estancia.</p><p>Una vez en tierra, realizarás una visita guiada al Museo Costumbrista y a la capilla, disfrutarás de un almuerzo completo en el restaurante de la estancia y emprenderás una caminata de baja dificultad hacia el pintoresco Río Caterina y su cascada. Por la tarde, regresarás navegando al puerto, completando un día inolvidable en el corazón del Parque Nacional.</p><p>La excursión cuenta con un servicio de traslado opcional desde tu hotel en El Calafate.</p>",
    difficulty: Difficulty.Baja,
    images: [
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/eacristina/eacristina_classic_2.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/eacristina/eacristina_classic_1.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/eacristina/eacristina_classic_3.jpg"
    ],
    duration: "Día completo (12 hs aprox.)",
    schedule: "Pick up: 07:15 hs / En puerto: 08:30 hs",
    includes: [
      "Navegación frente al Glaciar Upsala",
      "Visita al casco de Estancia Cristina y caminatas",
      "Almuerzo en restaurant",
      "Guía durante toda la navegación y caminatas",
      "Ticket de acceso al Parque Nacional"
    ],
    whatToBring: [
      "Ropa de abrigo e impermeable",
      "Calzado cómodo para caminar",
      "Lentes de sol y protector solar",
      "Cámara de fotos"
    ],
    ageRules: [
      { ageMin: 0, ageMax: 2, category: 'Infante' },
      { ageMin: 3, ageMax: 11, category: 'Menor' },
      { ageMin: 12, ageMax: 100, category: 'Adulto' },
    ],
    seasons: [
      { 
        name: "Temporada 2025/26", 
        startDate: "2025-10-01", 
        endDate: "2025-12-31", 
        prices: [0, 210000, 300000],
        transferPrices: [0, 65000, 65000]
      }
    ],
    transfer: 'optional',
    requiresParkEntry: false,
    menuDetails: {
      entrée: { title: "Menú Family Style - Entradas", description: "Humus de remolacha. Sopa crema de calabaza. Bruschetta con ricotta cremosa, berenjenas, pimientos y tomates secos." },
      mainCourse: { title: "Menú Family Style - Principal", description: "Cordero braseado en jugo de oporto especiado, con papas asadas, ensalada de lentejas y vegetales, y ensalada verde." },
      dessert: { title: "Postre", description: "Mousse de queso crema y limón, coulis de berries y húmeda de chocolate." },
      beverages: { title: "Bebidas", description: "Copa de vino, agua con y sin gas, café y té." },
       notes: [
        { type: 'vegetarian', text: "Se ofrece adaptación del menú para vegetarianos y veganos con previo aviso." },
        { type: 'celiac', text: "Se ofrece adaptación del menú para celíacos con previo aviso." }
      ]
    }
  },
  {
    id: "estancia-cristina-discovery",
    title: "Estancia Cristina Discovery",
    shortDescription: "Glaciar Upsala + Estancia Cristina + 4x4 Mirador Upsala + Museo.",
    longDescription: "<p>La excursión Discovery de Estancia Cristina combina la navegación por el Lago Argentino hasta la zona del Glaciar Upsala con un día de campo en la estancia. En Estancia Cristina, experimentará la aventura en una travesía 4x4, admirando vistas panorámicas privilegiadas y únicas desde el Mirador del Glaciar Upsala del frente Oriental del Glaciar Upsala y los glaciares que lo alimentan, Lago Guillermo, Hielo Patagónico Sur y Cordillera de los Andes.</p>",
    difficulty: Difficulty.Baja,
    images: [
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/eacristina/eacristina_discovery_1.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/eacristina/eacristina_discovery_2.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/eacristina/eacristina_classic_3.jpg"
    ],
    duration: "Día completo (12 hs aprox.)",
    schedule: "Pick up: 07:15 hs / En puerto: 08:30 hs",
    includes: [
      "Navegación frente al Glaciar Upsala",
      "Visita en 4x4 al Mirador del Glaciar Upsala",
      "Almuerzo en restaurant",
      "Guía durante toda la navegación y visita a la estancia",
      "Ticket de acceso al Parque Nacional"
    ],
    whatToBring: [
      "Ropa de abrigo e impermeable",
      "Calzado cómodo para caminar",
      "Lentes de sol y protector solar",
      "Cámara de fotos"
    ],
    ageRules: [
      { ageMin: 0, ageMax: 2, category: 'Infante' },
      { ageMin: 3, ageMax: 11, category: 'Menor' },
      { ageMin: 12, ageMax: 100, category: 'Adulto' },
    ],
    seasons: [
      { 
        name: "Temporada 2025/26", 
        startDate: "2025-10-01", 
        endDate: "2025-12-31", 
        prices: [0, 266000, 380000],
        transferPrices: [0, 65000, 65000]
      }
    ],
    transfer: 'optional',
    requiresParkEntry: false,
    menuDetails: {
      entrée: { title: "Menú Family Style - Entradas", description: "Humus de remolacha. Sopa crema de calabaza. Bruschetta con ricotta cremosa, berenjenas, pimientos y tomates secos." },
      mainCourse: { title: "Menú Family Style - Principal", description: "Cordero braseado en jugo de oporto especiado, con papas asadas, ensalada de lentejas y vegetales, y ensalada verde." },
      dessert: { title: "Postre", description: "Mousse de queso crema y limón, coulis de berries y húmeda de chocolate." },
      beverages: { title: "Bebidas", description: "Copa de vino, agua con y sin gas, café y té." },
       notes: [
        { type: 'vegetarian', text: "Se ofrece adaptación del menú para vegetarianos y veganos con previo aviso." },
        { type: 'celiac', text: "Se ofrece adaptación del menú para celíacos con previo aviso." }
      ]
    }
  },
  {
    id: "estancia-cristina-trekking",
    title: "Estancia Cristina Trekking",
    shortDescription: "Glaciar Upsala + 4x4 + Trekking en el Cañadón de los Fósiles.",
    longDescription: "<p>La excursión Trekking de Estancia Cristina combina la navegación por el Lago Argentino hasta Estancia Cristina con una travesía 4x4 y un trekking por el Cañadón de Fósiles. Desde la estancia, se trasladarán en vehículos 4x4 hasta el Mirador del Glaciar Upsala. Desde allí comienza el trekking de 4 horas por el cañadón, regresando a Estancia Cristina, mientras se pueden observar fósiles marinos recientemente dejados al descubierto por la acción glaciaria.</p>",
    difficulty: Difficulty.Alta,
    images: [
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/eacristina/eacristina_trekking_1.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/eacristina/eacristina_classic_1.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/eacristina/eacristina_classic_3.jpg"
    ],
    duration: "Día completo (12 hs aprox.)",
    schedule: "Pick up: 07:15 hs / En puerto: 08:30 hs",
    includes: [
      "Navegación frente al Glaciar Upsala",
      "Visita en 4x4 al Mirador del Glaciar Upsala y trekking por Cañadón de los Fósiles",
      "Guía durante toda la navegación y trekking",
      "Vianda",
      "Ticket de acceso al Parque Nacional"
    ],
    whatToBring: [
      "Ropa abrigada",
      "Campera y pantalón impermeable",
      "Botas de trekking (obligatorio)",
      "Guantes y gorro",
      "Protector solar y anteojos de sol",
      "Mochila"
    ],
    ageRules: [
      { ageMin: 12, ageMax: 100, category: 'Adulto' },
    ],
    seasons: [
      { 
        name: "Temporada 2025/26", 
        startDate: "2025-10-01", 
        endDate: "2025-12-31", 
        prices: [450000],
        transferPrices: [65000]
      }
    ],
    transfer: 'optional',
    requiresParkEntry: false,
    menuDetails: {
        entrée: {
            title: "Sándwich",
            description: "Sándwich de pollo, tomates secos, queso gruyere, alioli de albahaca en pan ciabatta. Opción vegetariana: sándwich de queso brie, tomates secos, berenjenas y zucchinis grillados, alioli de albahaca en pan ciabatta.",
        },
        mainCourse: {
            title: "Ensalada",
            description: "Ensalada de zapallo asado, tomates secos, almendras, escamas de queso parmesano, rúcula, olivas negras, vinagreta de aceto balsámico, oliva y miel.",
        },
        dessert: {
            title: "Snacks y Postre",
            description: "Manzana, crumble de frutos rojos (sin TACC) y mix de frutos secos.",
        },
        beverages: {
            title: "Bebida",
            description: "Botella de agua.",
        },
        notes: [
            { type: 'vegetarian', text: "Se ofrece adaptación del menú para vegetarianos con previo aviso." },
            { type: 'celiac', text: "Se ofrece adaptación del menú para celíacos con previo aviso." }
        ]
    },
    restrictions: {
      title: "Restricciones Importantes",
      intro: "Esta es una actividad de trekking de alta exigencia física <strong>(ALTA)</strong>. Por seguridad, es fundamental tener en cuenta las siguientes restricciones:",
      items: [
        "<strong>Solo apto para personas mayores de 12 años.</strong> Sin excepción.",
        "Se requiere un <strong>excelente estado físico</strong> para afrontar una caminata de 4 horas por terreno irregular con desniveles.",
        "<strong>No es una actividad apta para mujeres embarazadas.</strong>",
        "No recomendado para personas con sobrepeso, problemas cardíacos, de espalda, columna o rodillas.",
        "Es obligatorio el uso de <strong>calzado de trekking</strong> con buen agarre. No se permiten zapatillas urbanas."
      ],
      note: "La empresa se reserva el derecho de admisión si considera que el pasajero no cumple con los requisitos físicos o de equipamiento necesarios para garantizar su seguridad."
    }
  },
  {
    id: "torres-del-paine",
    title: "Torres del Paine - Full Day Overland",
    shortDescription: "Cruza la frontera hacia Chile y descubre los paisajes icónicos del Parque Nacional Torres del Paine en un día.",
    longDescription: "Descubre las maravillas del Parque Nacional Torres del Paine, en el corazón de la Patagonia chilena. Saliendo de El Calafate, cruzaremos la estepa patagónica hasta la frontera en Cancha Carrera y, al ingresar a Chile, haremos diversas paradas estratégicas y caminatas breves para apreciar los majestuosos paisajes de montañas, lagos y fauna local. Visitaremos miradores panorámicos como Laguna Amarga y el Salto Grande, y admiraremos los Cuernos del Paine y el Valle del Francés desde Lago Pehoe, uno de los puntos más icónicos del parque. <strong>Importante:</strong> Entre el 12 de agosto y el 30 de septiembre de 2025, esta excursión opera únicamente los días lunes, miércoles y viernes.",
    difficulty: Difficulty.Baja,
    images: [
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/torresdelpaine/torresdelpaine_1.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/torresdelpaine/torresdelpaine_2.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/torresdelpaine/torresdelpaine_3.jpg"
    ],
    duration: "15.5 horas (Día completo)",
    schedule: "06:30 a 22:00 hs",
    includes: ["Traslados en 4x4", "Vianda incluida", "Guía bilingüe (español - inglés)"],
    whatToBring: [
      "Documentación vigente (DNI/Pasaporte original)", 
      "Entrada al Parque Nacional (comprada online)", 
      "Declaración SAG completa", 
      "Ropa de abrigo e impermeable", 
      "Calzado cómodo", 
      "Protector solar y lentes de sol", 
      "Agua y snack extra (alimentos secos)", 
      "Cámara de fotos"
    ],
    ageRules: [
      { ageMin: 0, ageMax: 11, category: 'Menor' },
      { ageMin: 12, ageMax: 100, category: 'Adulto' },
    ],
    seasons: [
       { 
        name: "Temporada Alta 2025/26", 
        startDate: "2025-08-12", 
        endDate: "2026-04-30", 
        prices: [168000, 210000]
      }
    ],
    transfer: 'included',
    requiresParkEntry: false,
    menuDetails: {
      entrée: { title: "Vianda Standard", description: "Sandwich de Carne, queso y cebolla dorada, empanada de jamón y queso, alfajor de dulce de leche, budín dulce, frutos secos, jugo de fruta 150cc, agua 500c, caramelos." },
      mainCourse: { title: "Vianda Apta (Vegetarianos, Veganos, Sin TACC, Alérgicos a la Lactosa)", description: "Ensalada fría de vegetales cocidos (Vegetales al horno y arroz integral), madalena vegana, alfajor vegano, frutos secos, paquete de 40 gramos de papitas sin tacc y veganas, Agua, Jugo." },
      dessert: { title: "Aviso Importante", description: "El menú puede variar manteniendo características similares." },
      beverages: { title: "", description: "" }
    }
  },
  {
    id: "calafate-night-astroturismo",
    title: "Calafate Night Astroturismo",
    shortDescription: "Una noche mágica bajo el cielo patagónico con cena, observación astronómica y astrofotografía.",
    longDescription: "Disfruta de una noche mágica bajo el cielo patagónico. Después de una cena típica de la región, participarás en una sesión de observación astronómica guiada, donde aprenderás sobre constelações, la Vía Láctea y más. La actividad incluye astrofotografía y la posibilidad de hacer light painting.",
    difficulty: Difficulty.Baja,
    images: [
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/astroturismo/astroturismo_2.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/astroturismo/calafate-night-4-.jpg",
      "https://raw.githubusercontent.com/ecosdelhielo/ecosdelhielo/cerro_huiliche/img/excursiones/astroturismo/calafate_nigth.png"
    ],
    duration: "5 horas (Half Day)",
    schedule: "Pick Up: 18:00 hs",
    includes: ["Traslados", "Cena", "Observación astronómica guiada", "Astrofotografía y Light Painting"],
    whatToBring: ["Ropa de abrigo", "Cámara de fotos"],
    ageRules: [
      { ageMin: 0, ageMax: 2, category: 'Infante' },
      { ageMin: 3, ageMax: 11, category: 'Menor' },
      { ageMin: 12, ageMax: 100, category: 'Adulto' },
    ],
    seasons: [
      {
        name: "Temporada 2025/26",
        startDate: "2025-09-15",
        endDate: "2026-04-30",
        prices: [0, 120000, 160000]
      }
    ],
    transfer: 'included',
    requiresParkEntry: false,
    menuDetails: {
      entrée: { title: "Entrada", description: "Mousse de Roquefort sobre Pan de Campo." },
      mainCourse: { title: "Plato Principal", description: "Osobuco de Cordero con Risotto de tomate y romero." },
      dessert: { title: "Postre", description: "Panqueque de dulce de leche, merengue suizo y canela." },
      beverages: { title: "Bebidas", description: "1 botella de agua mineral por persona." }
    }
  }
];
