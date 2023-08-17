import { CreateUser,LoginUser } from "../domains/user"
import { HttpClient } from "../http-client/interface"

export class UserService {
  constructor(private readonly httpClient: HttpClient) {}
  login(user: LoginUser) {
    const data = {
      email: user.email,
      password: user.password
    }
    return this.httpClient.post<string>(`/auth`, data)
  }

  register(user: CreateUser) {
    const data = {
      email: user.email,
      password: user.password
    }
    return this.httpClient.post<string>(`/register`, data)
  }
}