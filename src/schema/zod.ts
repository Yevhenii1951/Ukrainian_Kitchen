import { object, string, number } from "zod";
import { z } from "zod";

export const signInSchema = object({
  email: string({ required_error: "E-Mail ist erforderlich" })
    .min(1, "E-Mail ist erforderlich")
    .email("Ungültige E-Mail-Adresse"),
  password: string({ required_error: "Passwort ist erforderlich" })
    .min(1, "Passwort ist erforderlich")
    .min(6, "Das Passwort muss mindestens 6 Zeichen lang sein")
    .max(32, "Das Passwort darf höchstens 32 Zeichen lang sein")
});

export const ingredientSchema = object({
  name: string().min(1, "Name ist erforderlich"),
  category: z.enum([
    "VEGETABLES",
    "FRUITS",
    "MEAT",
    "DAIRY",
    "SPICES",
    "OTHER"
  ]),
  unit: z.enum(["GRAMS", "KILOGRAMS", "LITERS", "MILLILITERS", "PIECES"]),
  pricePerUnit: number({ invalid_type_error: "Der Preis muss eine Zahl sein" })
    .min(0, "Der Preis muss positiv sein")
    .nullable(),
  description: z.string().optional()
});
