import { FormEvent, useState } from "react";
import SearchInput from "../../components/search-input";
import { SelectedRecipes } from "../../components/selected-recipes";
import { Recipes } from "../../../core/domains/recipes";
import { Button} from "@mui/base";
import { useRouter } from 'next/router';
import { recipeService } from "../../../core/factories/recipes.factory";

interface ListCompositionProps {
  recipes: {
    label: string;
    id: string
  }[]
}

export function serializeRecipesResponseToList(recipeResponse: Recipes[]) {
  return recipeResponse.map(recipe => ({
    label: recipe.name,
    id: recipe.id
  }))
}

export default function SearchAndListRecipesSelectedComposition({ recipes }: ListCompositionProps) {
  const [selectedRecipes, setSelectedRecipes] = useState<string[]>([])
  const updateSelectedRecipes = (selectedRecipe: string) => {
    setSelectedRecipes((prevState) => [...prevState, selectedRecipe]
    )
  }

  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await recipeService.findRecipesByIngredients(selectedRecipes)
    
  }
  return (
  <form onSubmit={handleFormSubmit}>
    <SearchInput recipes={recipes} handleChange={updateSelectedRecipes} />
    <SelectedRecipes recipes={selectedRecipes} />
    <Button type="submit">cataprato</Button>
  </form>
  )
}