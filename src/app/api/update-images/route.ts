import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET() {
  try {
    await prisma.recipe.updateMany({
      where: { name: "Borschtsch" },
      data: { imageUrl: "/borsch.webp" },
    });
    await prisma.recipe.updateMany({
      where: { name: "Deruny" },
      data: { imageUrl: "/deruni.webp" },
    });
    await prisma.recipe.updateMany({
      where: { name: "Holubtsi" },
      data: { imageUrl: "/golubtsi.webp" },
    });
    await prisma.recipe.updateMany({
      where: { name: "Pampuschky" },
      data: { imageUrl: "/pampuchki.webp" },
    });
    await prisma.recipe.updateMany({
      where: { name: "Varenyky mit Hüttenkäse" },
      data: { imageUrl: "/vareniki.webp" },
    });
    await prisma.recipe.updateMany({
      where: { name: "Kotelett nach Kiew" },
      data: { imageUrl: "/kotleta po kievski.webp" },
    });
    await prisma.recipe.updateMany({
      where: { name: "Kotelett nach KIEW" },
      data: { imageUrl: "/kotleta po kievski.webp" },
    });
    const recipes = await prisma.recipe.findMany();
    return NextResponse.json({ ok: true, recipes: recipes.map(r => ({name: r.name, imageUrl: r.imageUrl})) });
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
