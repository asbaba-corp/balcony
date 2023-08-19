import { FormEvent, useState } from "react";
import SearchInput from "../../components/search-input";
import { SelectedRecipes } from "../../components/selected-ingredients";
import { Recipes } from "../../../core/domains/recipes";
import { Button } from "@mui/base";
import { recipeService } from "../../../core/factories/recipes.factory";
import { useRouter } from "next/router";
import { useRecipes } from "../../../contexts/recipe";
import { LIST_RECIPES } from "../../../constants/app.routes";

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



export default function SearchAndListIngredientsSelectedComposition({ recipes }: ListCompositionProps) {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])
  const { push } = useRouter()
  const { setRecipes } = useRecipes();


  async function handleSearchRecipesByIngredients(ingredients: string[]) {
    const recipes = await recipeService.findRecipesByIngredients(ingredients)
    setRecipes(recipes)
    push(LIST_RECIPES)
  }
  const updateSelectedIngredients = (selectedIngredient: string) => {
    setSelectedIngredients((prevState) => [...prevState, selectedIngredient]
    )
  }
  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await handleSearchRecipesByIngredients(selectedIngredients)
  }
  function removeIngredient(ingredient: string) {
    const removedIngredient = selectedIngredients.filter(recipe => recipe !== ingredient)
    setSelectedIngredients(removedIngredient)
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <SearchInput recipes={recipes} handleChange={updateSelectedIngredients} />
      <SelectedRecipes ingredients={selectedIngredients} removeIngredient={removeIngredient} />
      <Button type="submit">cataprato</Button>
    </form>
  )
}