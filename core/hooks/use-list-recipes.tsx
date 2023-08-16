import { useMutation } from 'react-query';
import { recipeService } from '../factories/recipes.factory';

export const useListRecipes = () => {
  const mutation = useMutation(() => recipeService.findAll());

  return mutation;
};