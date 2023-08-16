import { useListRecipes } from "../../core/hooks/use-list-recipes";
import { useSearchRecipeByIngredients } from "../../core/hooks/use-search-recipes";
import SearchAndListRecipesSelectedComposition, { serializeRecipesResponseToList } from "../../ui/compositions/search-and-list-recipes-composition";

export default function Home() {
  const { data } = useListRecipes()

  if (!data) {
    return <span>ooops</span>
  }
  const recipesToList = serializeRecipesResponseToList(data)
  return <SearchAndListRecipesSelectedComposition recipes={recipesToList} />
}

