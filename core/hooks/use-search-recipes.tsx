import { useMutation } from 'react-query';
import { recipeService } from '../factories/recipes.factory';

export const useSearchRecipeByIngredients = (ingredients: string[]) => {
  const mutation = useMutation(() => recipeService.findRecipesByIngredients(ingredients));
  return mutation;
};