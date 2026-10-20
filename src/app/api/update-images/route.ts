import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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
      where: { name: "Kotelett nach KIEW" },
      data: { imageUrl: "/kotleta po kievski.webp" },
    });
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
