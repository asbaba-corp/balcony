import { useMutation } from 'react-query';
import { User } from '../domains/user';
import { userService } from '../factories/user.factory';

export const useListRecipes = (user: User) => {
  const mutation = useMutation(() => userService.register(user));

  return mutation;
};