import { PrismaClient, Category, Unit } from "../src/generated/prisma";

const prisma = new PrismaClient();

type IngredientSeed = {
  name: string;
  category: Category;
  unit: Unit;
  pricePerUnit: number;
  description: string;
};

const ingredients: IngredientSeed[] = [
  { name: "Rote Bete", category: "VEGETABLES", unit: "PIECES", pricePerUnit: 1.2, description: "Herzstück des Borschtsch" },
  { name: "Kartoffeln", category: "VEGETABLES", unit: "KILOGRAMS", pricePerUnit: 1.5, description: "Vielseitige Beilage und Grundzutat" },
  { name: "Kohl", category: "VEGETABLES", unit: "PIECES", pricePerUnit: 2.5, description: "Weißkohl für Holubtsi und Borschtsch" },
  { name: "Zwiebeln", category: "VEGETABLES", unit: "KILOGRAMS", pricePerUnit: 1.8, description: "Grundlage vieler Gerichte" },
  { name: "Karotten", category: "VEGETABLES", unit: "KILOGRAMS", pricePerUnit: 1.6, description: "Süßliche Basis für Suppen" },
  { name: "Knoblauch", category: "VEGETABLES", unit: "PIECES", pricePerUnit: 0.4, description: "Aromatisch, wichtig für Pampuschky" },
  { name: "Dill", category: "SPICES", unit: "GRAMS", pricePerUnit: 1.5, description: "Frisch und unverzichtbar" },
  { name: "Sauerrahm", category: "DAIRY", unit: "GRAMS", pricePerUnit: 2.0, description: "Wird zu Borschtsch serviert" },
  { name: "Hühnerfleisch", category: "MEAT", unit: "KILOGRAMS", pricePerUnit: 8.5, description: "Für Kotelett nach Kiew und Borschtsch" },
  { name: "Rindfleisch", category: "MEAT", unit: "KILOGRAMS", pricePerUnit: 12.0, description: "Reichhaltige Fleischbrühe" },
  { name: "Hackfleisch", category: "MEAT", unit: "KILOGRAMS", pricePerUnit: 9.0, description: "Für Holubtsi" },
  { name: "Reis", category: "OTHER", unit: "GRAMS", pricePerUnit: 2.0, description: "Füllung für Holubtsi" },
  { name: "Mehl", category: "OTHER", unit: "KILOGRAMS", pricePerUnit: 1.0, description: "Für Teig" },
  { name: "Hefeteig", category: "OTHER", unit: "PIECES", pricePerUnit: 2.5, description: "Für Pampuschky" },
  { name: "Butter", category: "DAIRY", unit: "GRAMS", pricePerUnit: 3.0, description: "Geschmolzene Butter in Kotelett nach Kiew" },
  { name: "Hühnereier", category: "OTHER", unit: "PIECES", pricePerUnit: 0.35, description: "Für Teig und Panade" },
  { name: "Hüttenkäse", category: "DAIRY", unit: "GRAMS", pricePerUnit: 3.5, description: "Für Varenyky" },
  { name: "Brotkrumen", category: "OTHER", unit: "GRAMS", pricePerUnit: 1.0, description: "Für Panade" }
];

type RecipeSeed = {
  name: string;
  description: string;
  imageUrl: string;
  ingredients: { slot: string; quantity: number }[];
};

const recipes: RecipeSeed[] = [
  {
    name: "Borschtsch",
    description:
      "Die ikonische Rote-Bete-Suppe mit Rindfleisch, Kartoffeln und Kohl. Serviert mit einem Klecks Sauerrahm und frischem Dill – das Herzstück der ukrainischen Küche.",
    imageUrl: "/1borsch.jpg",
    ingredients: [
      { slot: "Rote Bete", quantity: 2 },
      { slot: "Kartoffeln", quantity: 0.5 },
      { slot: "Kohl", quantity: 0.3 },
      { slot: "Zwiebeln", quantity: 0.15 },
      { slot: "Karotten", quantity: 0.2 },
      { slot: "Knoblauch", quantity: 2 },
      { slot: "Rindfleisch", quantity: 0.7 },
      { slot: "Sauerrahm", quantity: 150 },
      { slot: "Dill", quantity: 20 }
    ]
  },
  {
    name: "Deruny",
    description:
      "Knusprige Kartoffelpuffer, goldbraun gebraten und mit Sauerrahm serviert. Ein einfaches Gericht mit unvergesslichem Geschmack.",
    imageUrl: "/deruni1.jpg",
    ingredients: [
      { slot: "Kartoffeln", quantity: 1 },
      { slot: "Zwiebeln", quantity: 0.1 },
      { slot: "Hühnereier", quantity: 2 },
      { slot: "Mehl", quantity: 100 },
      { slot: "Sauerrahm", quantity: 150 }
    ]
  },
  {
    name: "Holubtsi",
    description:
      "Weinkrautblätter gefüllt mit Reis und Hackfleisch, gedünstet in Tomatensauce. Ein festliches Hauptgericht für die ganze Familie.",
    imageUrl: "/golubtsi1.jpg",
    ingredients: [
      { slot: "Kohl", quantity: 1 },
      { slot: "Reis", quantity: 250 },
      { slot: "Hackfleisch", quantity: 0.5 },
      { slot: "Zwiebeln", quantity: 0.2 }
    ]
  },
  {
    name: "Pampuschky",
    description:
      "Lockere, gebackene Hefebrötchen, reichlich mit Knoblauchbutter und frischem Dill beträufelt – die Seele des Borschtsch-Erlebnisses.",
    imageUrl: "/pampushki1.jpg",
    ingredients: [
      { slot: "Hefeteig", quantity: 1 },
      { slot: "Knoblauch", quantity: 3 },
      { slot: "Butter", quantity: 100 },
      { slot: "Dill", quantity: 20 }
    ]
  },
  {
    name: "Varenyky mit Hüttenkäse",
    description:
      "Zarte Teigtaschen mit süßem Hüttenkäse, gekocht und mit Butter und Sauerrahm serviert – der Geschmack der Kindheit.",
    imageUrl: "/vareniki1.jpg",
    ingredients: [
      { slot: "Mehl", quantity: 0.5 },
      { slot: "Hühnereier", quantity: 2 },
      { slot: "Hüttenkäse", quantity: 500 },
      { slot: "Butter", quantity: 100 },
      { slot: "Sauerrahm", quantity: 150 }
    ]
  },
  {
    name: "Kotelett nach Kiew",
    description:
      "Paniertes Hühnerbrötchen mit geschmolzener Butter im Inneren. Ein Klassiker der ukrainischen Gastronomie und weltweit geliebt.",
    imageUrl: "/kotleta_po_Kievski1.jpg",
    ingredients: [
      { slot: "Hühnerfleisch", quantity: 0.8 },
      { slot: "Butter", quantity: 150 },
      { slot: "Hühnereier", quantity: 2 },
      { slot: "Mehl", quantity: 80 },
      { slot: "Brotkrumen", quantity: 120 },
      { slot: "Dill", quantity: 10 }
    ]
  }
];

async function main() {
  const ingredientCache: Record<string, string> = {};

  for (const ing of ingredients) {
    const result = await prisma.ingredient.upsert({
      where: { id: `seed-${ing.name}` },
      update: {
        category: ing.category,
        unit: ing.unit,
        pricePerUnit: ing.pricePerUnit,
        description: ing.description
      },
      create: {
        id: `seed-${ing.name}`,
        name: ing.name,
        category: ing.category,
        unit: ing.unit,
        pricePerUnit: ing.pricePerUnit,
        description: ing.description
      }
    });
    ingredientCache[ing.name] = result.id;
  }

  console.log(`✓ ${ingredients.length} Zutaten angelegt`);

  for (const recipe of recipes) {
    const exists = await prisma.recipe.findUnique({
      where: { id: `seed-${recipe.name}` }
    });

    if (!exists) {
      await prisma.recipe.create({
        data: {
          id: `seed-${recipe.name}`,
          name: recipe.name,
          description: recipe.description,
          imageUrl: recipe.imageUrl,
          ingredients: {
            create: recipe.ingredients.map(({ slot, quantity }) => ({
              quantity,
              ingredientId: ingredientCache[slot]
            }))
          }
        }
      });
      console.log(`+ Rezept angelegt: ${recipe.name}`);
    } else {
      console.log(`= Rezept existiert schon: ${recipe.name}`);
    }
  }

  console.log("Fertig! Alle Rezepte sind in der Datenbank.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });