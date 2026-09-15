import { object, string, number } from "zod";
import { z } from "zod";

export const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(6, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters")
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
