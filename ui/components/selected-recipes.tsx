
interface SelectedRecipesProps {
  recipes: string[]
}

export function SelectedRecipes({ recipes }: SelectedRecipesProps) {
  return (
    <>
      {recipes.map(recipe => {
        (
          <span>{recipe}</span>
        )
      })}
    </>
  )
}