"use client";

import { IRecipe } from "@/types/recipe";
import { Card, CardBody, CardHeader, Button } from "@heroui/react";
import { useRecipeStore } from "@/store/recipe.store";
import Link from "next/link";
import { useTransition } from "react";
import Image from "next/image";
import { UNIT_ABBREVIATIONS } from "@/constants/select-options";
import { useAuthStore } from "@/store/auth.store";

interface RecipeCardProps {
  recipe: IRecipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const { removeRecipe } = useRecipeStore();
  const { isAuth } = useAuthStore();
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      try {
        await removeRecipe(recipe.id);
      } catch (error) {
        console.error("Fehler beim Löschen des Rezepts:", error);
      }
    });
  };

  const getUnitLabel = (unit: string) => {
    const unitOption = UNIT_ABBREVIATIONS.find(
      (option) => option.value === unit
    );
    return unitOption ? unitOption.label : unit.toLowerCase();
  };

  return (
    <Card className="w-full min-w-[254px] max-w-md flex flex-col overflow-hidden border border-border-soft bg-card shadow-none transition-shadow duration-300 hover:shadow-lg">
      <div className="h-44 overflow-hidden">
        {recipe.imageUrl ? (
          <div className="relative h-44 group overflow-hidden bg-borsch-soft">
            <Image
              src={recipe.imageUrl}
              alt="Image for recipe"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="w-full h-full bg-borsch-soft flex items-center justify-center">
            <span className="text-borsch/70 italic">Kein Bild</span>
          </div>
        )}
      </div>

      <CardHeader className="flex justify-between items-center px-5 pt-4 pb-1">
        <h2 className="font-serif text-xl font-bold text-borsch">
          {recipe.name}
        </h2>
      </CardHeader>

      <CardBody className="flex-1 px-5 py-2">
        <p className="text-foreground/70 line-clamp-4 text-sm">
          {recipe.description || "Ohne Beschreibung"}
        </p>
        <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted">
          Zutaten
        </h3>
        <ul className="list-disc pl-5 overflow-y-auto max-h-24 text-sm text-foreground/80">
          {recipe.ingredients.map((ing) => (
            <li key={ing.id}>
              {ing.ingredient.name}: {ing.quantity}{" "}
              {getUnitLabel(ing.ingredient.unit)}
            </li>
          ))}
        </ul>
      </CardBody>

      {isAuth && (
        <div className="flex justify-end gap-2 px-5 py-3">
          <Link href={`/recipes/${recipe.id}`}>
            <Button color="primary" variant="light">
              Bearbeiten
            </Button>
          </Link>
          <Button
            color="danger"
            variant="light"
            onPress={handleDelete}
            isLoading={isPending}
          >
            Löschen
          </Button>
        </div>
      )}
    </Card>
  );
};

export default RecipeCard;