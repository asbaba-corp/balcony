import { Recipes } from "../../core/domains/recipes";
import { ListRecipeIngredients } from "./list-recipe-ingredient";


interface ListRecipesProps {
  recipes: Recipes[]
}

export function ListRecipes({ recipes }: ListRecipesProps) {

  return (
    <>
      {recipes.map(recipe => {
        (
          <>
            <h3>{recipe.name}</h3>
            <span>{recipe.creator_id}</span>
            <li>
              <ListRecipeIngredients ingredients={recipe.ingredients}></ListRecipeIngredients>
            </li>
          </>
        )
      })}
    </>
  )
}