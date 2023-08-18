import { useListRecipes } from "../../core/hooks/use-list-recipes";
import SearchAndListIngredientsSelectedComposition, { serializeRecipesResponseToList } from "../../ui/compositions/search-and-list-recipes-composition";

export default function Home() {
  const { data} = useListRecipes()

  if (!data) {
    return <span>ooops</span>
  }
  const recipesToList = data ? serializeRecipesResponseToList(data) : []
  return <SearchAndListIngredientsSelectedComposition recipes={recipesToList} />
}

 