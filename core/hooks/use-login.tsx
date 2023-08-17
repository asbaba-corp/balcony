import { useMutation } from "react-query";
import { LoginUser } from "../domains/user";
import { userService } from "../factories/user.factory";


export function useLogin(data: LoginUser) {
  const mutation = useMutation(() => userService.login(data));
  return mutation;
}