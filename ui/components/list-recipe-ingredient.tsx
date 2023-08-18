
interface ListRecipeIngredientsProps {
  ingredients: string[]
}

export function ListRecipeIngredients({ingredients}: ListRecipeIngredientsProps) {

  return (
    <>
      {ingredients.map(ingredient => (
        <ul key={ingredient}>
          {ingredient}
        </ul>
      ))}
    </>
  )
}