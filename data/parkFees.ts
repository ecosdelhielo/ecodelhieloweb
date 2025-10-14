export interface ParkFee {
  category: string;
  price: number;
  notes?: string;
}

export const parkFees: ParkFee[] = [
  { category: "RESIDENTES NACIONALES", price: 15000, notes: "DNI con domicilio en Argentina." },
  { category: "NIÑOS Y ADOLESCENTES NACIONALES (6 a 16 años)", price: 5000 },
  { category: "ESTUDIANTES UNIVERSITARIOS / TERCIARIOS (en Argentina)", price: 5000, notes: "Con libreta estudiantil vigente." },
  { category: "RESIDENTES PROVINCIALES (Santa Cruz)", price: 4000, notes: "DNI con domicilio en Santa Cruz." },
  { category: "GENERAL NO RESIDENTES (Extranjeros)", price: 45000 },
  { 
    category: "EXENTOS DE PAGO", 
    price: 0, 
    notes: "Menores de 6 años, residentes locales, jubilados/pensionados argentinos, personas con discapacidad y un acompañante. Requiere acreditación." 
  },
];


export const parkFeesChile: ParkFee[] = [
  { 
    category: "Extranjero (Hasta 3 días): Adulto (+18), P. con Discapacidad, Adulto Mayor", 
    price: 32400, 
    notes: "Precio en CLP (Pesos Chilenos)" 
  },
  { 
    category: "Extranjero (Hasta 3 días): Joven (13-17)", 
    price: 16600, 
    notes: "Precio en CLP (Pesos Chilenos)" 
  },
   { 
    category: "Extranjero (Más de 3 días): Adulto y Joven", 
    price: 46200, 
    notes: "Precio en CLP (Pesos Chilenos)" 
  },
  { 
    category: "Niños (-12 años)", 
    price: 0, 
    notes: "Precio en CLP (Pesos Chilenos)" 
  },
];