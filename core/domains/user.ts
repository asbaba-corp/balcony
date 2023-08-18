export interface CreateUser {
  email: string
  password: string
}

export interface LoginUser {
  email: string
  password: string
}

export interface LoginPayload {
  token: string
}