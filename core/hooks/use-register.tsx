import { useMutation } from 'react-query';
import { CreateUser } from '../domains/user';
import { userService } from '../factories/user.factory';

export const useListRecipes = (user: CreateUser) => {
  const mutation = useMutation(() => userService.register(user));

  return mutation;
};