import { CreateUser,LoginUser } from "../domains/user"
import { HttpClient } from "../http-client/interface"

export class UserService {
  constructor(private readonly httpClient: HttpClient) {}

  async auth(token: string): Promise<boolean> {
    const hasToken = !!await this.httpClient.post<string>('/auth', token)
    return hasToken
  }

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