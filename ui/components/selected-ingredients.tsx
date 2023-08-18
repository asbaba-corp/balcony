
interface SelectedIngredientsProps {
  ingredients: string[]
  removeIngredient: (ingredient: string) => void
}

export function SelectedRecipes({ ingredients, removeIngredient }: SelectedIngredientsProps) {
  return (
    <>
      {ingredients.map(ingredient => {
        (
          <>
            <span>{ingredient}</span>
            <button onClick={() => removeIngredient(ingredient)}>x</button>
          </>
        )
      })}
    </>
  )
}