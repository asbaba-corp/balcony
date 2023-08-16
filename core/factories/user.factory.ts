import { HttpClient } from "../http-client/interface"
import { UserService } from "../services/user-service"
import { axiosHttpClient } from "./axios-factory"

function makeUsersService(httpClient: HttpClient) {
  const userService = new UserService(httpClient)
  return userService
}

export const userService = makeUsersService(axiosHttpClient)