

export enum Difficulty {
  Baja = "Baja",
  Media = "Media",
  Alta = "Alta",
}

export type AgeCategory = 'Infante' | 'Menor' | 'Adulto' | 'Jubilado';

export interface AgeRule {
  ageMin: number;
  ageMax: number;
  category: AgeCategory;
}

export interface SpegazziniMenu {
  title: string;
  notes?: string;
  entrée: string;
  mainCourse: string;
  dessert: string;
  includes: string;
}

// New types for Captain's Club
export interface CaptainsClubSection {
  title: string;
  items: string[];
}

export interface CaptainsClubDetails {
  description: string;
  menu: CaptainsClubSection[];
}

export interface BoxLunchOption {
  title: string;
  description: string;
}

export interface BoxLunchDetails {
  intro: string;
  optionsTitle: string;
  options: BoxLunchOption[];
  sideDish: { title: string; description: string };
  dessert: { title: string; description: string };
  beverages: { title: string; description: string };
  notes?: MenuNote[];
}

export interface SalaPremiumDetails {
  description: string;
  warning: string;
  menu: { category: string, item: string }[];
  beverages: { title: string, description: string };
  notes?: MenuNote[];
}

export interface PasarelasDescensoDetails {
  whatYouWillDo: { title: string; description: string; };
  scheduleChange: { title: string; description: string; };
  idealFor: { title: string; description: string; };
  considerations: { title: string; description: string; };
  warning: string;
}


export interface OptionalActivity {
  id: string;
  name: string;
  description: string; // Used in PriceCalculator
  detailedDescription?: string; // Used in DetailPage body
  modalTitle?: string;
  modalContent?: string | SpegazziniMenu[] | CaptainsClubDetails | BoxLunchDetails | SalaPremiumDetails | PasarelasDescensoDetails;
  selectionType?: 'per-person' | 'all-or-nothing';
  ageMin?: number;
  ageMax?: number;
}


// Price array indices must correspond to ageRules indices.
export interface Season {
  name: string;
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  prices: number[];
  transferPrice?: number; // For simple, single-price transfers
  transferPrices?: number[]; // For age-differentiated transfer prices
  // Key is optional activity id, value is price array matching ageRules.
  optionalPrices?: { [activityId: string]: number[] };
}

export interface MenuNote {
  text: string;
  type: 'vegetarian' | 'celiac';
}

export interface MenuDetails {
  entrée: { title: string; description: string };
  mainCourse: { title: string; description: string };
  dessert: { title: string; description: string };
  beverages: { title: string; description: string };
  notes?: MenuNote[];
}

export interface RestrictionDetails {
  title: string;
  intro: string;
  items: string[];
  note?: string;
}

export interface Excursion {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  difficulty: Difficulty;
  images: string[];
  duration: string;
  schedule: string;
  includes: string[];
  whatToBring: string[];
  ageRules: AgeRule[];
  seasons: Season[];
  transfer: 'included' | 'optional' | 'none';
  optionalActivities?: OptionalActivity[];
  menuDetails?: MenuDetails;
  requiresParkEntry: boolean;
  restrictions?: RestrictionDetails;
}