import { User } from "../domains/user"
import { HttpClient } from "../http-client/interface"

export class UserService {
  constructor(private readonly httpClient: HttpClient) {}


  register(user: User) {
    const data = {
      email: user.email,
      password: user.password
    }
    return this.httpClient.post<string>(`/register`, data)
  }
}