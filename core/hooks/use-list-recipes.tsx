import { useMutation, useQuery } from 'react-query';
import { recipeService } from '../factories/recipes.factory';

export const useListRecipes = () => {
  const getRecipes = () => recipeService.findAll().then(data => {
  console.log(data)
  return data
  })
  const query = useQuery({
    queryKey: ['recipes'],
    queryFn: getRecipes,

  });
  console.log(query)

  return query;
};