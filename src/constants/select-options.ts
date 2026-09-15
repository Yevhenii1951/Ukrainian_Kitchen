export const CATEGORY_OPTIONS = [
  { value: "VEGETABLES", label: "Gemüse" },
  { value: "FRUITS", label: "Obst" },
  { value: "MEAT", label: "Fleisch" },
  { value: "DAIRY", label: "Milchprodukte" },
  { value: "SPICES", label: "Gewürze" },
  { value: "OTHER", label: "Sonstiges" }
] as const;

export const UNIT_OPTIONS = [
  { value: "GRAMS", label: "Gramm" },
  { value: "KILOGRAMS", label: "Kilogramm" },
  { value: "LITERS", label: "Liter" },
  { value: "MILLILITERS", label: "Milliliter" },
  { value: "PIECES", label: "Stück" }
] as const;

export const UNIT_ABBREVIATIONS = [
  { value: "GRAMS", label: "g" },
  { value: "KILOGRAMS", label: "kg" },
  { value: "LITERS", label: "l" },
  { value: "MILLILITERS", label: "ml" },
  { value: "PIECES", label: "Stk." }
] as const;