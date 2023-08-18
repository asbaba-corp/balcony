import { useRecipes } from "../../contexts/recipe"
import { ListRecipes } from "../../ui/components/list-recipes"
import { useProtectRoute } from "../../core/hooks/use-protected-routes";


export default function RecipesList() {
  const { recipes } = useRecipes()

  return (
    <>
      <ListRecipes recipes={recipes} />
    </>
  )
}