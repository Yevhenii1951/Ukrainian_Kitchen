import RecipeCard from "@/components/common/recipe-card";
import { getRecipes } from "@/actions/recipe";
import { Button } from "@heroui/react";
import Link from "next/link";

export const revalidate = 60;

export default async function Home() {
  const result = await getRecipes();

  return (
    <>
      <div className="flex w-full justify-center items-center mb-4">
        <Link href="/recipes/new">
          <Button color="primary">Rezept hinzufügen</Button>
        </Link>
      </div>

      {result.success === false && (
        <p className="text-red-500 mb-4">{result.error}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {result.recipes?.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
}