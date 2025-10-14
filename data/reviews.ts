export interface Review {
  id: number;
  quote: string;
  author: string;
  location: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    id: 1,
    quote: "¡Una experiencia inolvidable! El Minitrekking sobre el glaciar fue increíble. La organización de Ecos del Hielo fue impecable, nos sentimos seguros y bien atendidos en todo momento. ¡Súper recomendable!",
    author: "Ana García",
    location: "Buenos Aires, Argentina",
    rating: 5,
  },
  {
    id: 2,
    quote: "La navegación 'Todo Glaciares' superó nuestras expectativas. Los paisajes son de otro mundo. Gracias al equipo por la excelente atención y por ayudarnos a planificar todo tan fácilmente.",
    author: "Carlos Rodriguez",
    location: "Montevideo, Uruguay",
    rating: 5,
  },
  {
    id: 3,
    quote: "Fizemos a excursão para El Chaltén e foi espetacular. O guia foi muito profissional e nos contou fatos muito interessantes sobre a região. O almoço incluído estava delicioso. Voltaremos!",
    author: "Mariana Lima",
    location: "São Paulo, Brasil",
    rating: 5,
  },
    {
    id: 4,
    quote: "Hicimos el Big Ice y fue la experiencia más extrema y gratificante de nuestras vidas. Los guías son unos genios, te cuidan en cada paso. Ecos del Hielo nos gestionó todo perfecto. ¡Gracias!",
    author: "Javier Pérez",
    location: "Córdoba, Argentina",
    rating: 5,
  },
  {
    id: 5,
    quote: "Remar en kayak entre témpanos con el Perito Moreno de fondo es algo que no se puede describir con palabras. La paz que se siente es única. La atención de Ecos del Hielo fue súper personalizada.",
    author: "Sofía Martinez",
    location: "Rosario, Argentina",
    rating: 5,
  },
  {
    id: 6,
    quote: "Fuimos con los chicos a la Estancia 25 de Mayo y les encantó. La demostración de esquila y la cena show fueron geniales. Un plan familiar perfecto para conocer la cultura patagónica.",
    author: "Familia Gómez",
    location: "Mendoza, Argentina",
    rating: 4,
  },
];