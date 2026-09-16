import RecipeCard from "@/components/common/recipe-card";
import { getRecipes } from "@/actions/recipe";
import Link from "next/link";

export const revalidate = 60;

export default async function Home() {
  const result = await getRecipes();

  return (
    <>
      <div className="w-full max-w-2xl text-center mb-8">
        <p className="text-lg text-foreground/80">
          Herzstück der ukrainischen Küche — von Borschtsch bis Pampuschky.
          Entdecke, wie der Duft von Dill, Roter Bete und frischem Backwerk auf
          den Tisch kommt.
        </p>
        <Link
          href="/recipes/new"
          className="inline-block mt-5 font-medium text-borsch hover:text-borsch/80 underline underline-offset-4 transition-colors"
        >
          Neues Rezept hinzufügen
        </Link>
      </div>

      {result.success === false && (
        <p className="text-red-500 mb-4">{result.error}</p>
      )}

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {result.recipes?.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
}