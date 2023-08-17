import axios, { AxiosRequestConfig } from "axios"
import { HttpClient } from "./interface"

export class AxiosHttpClient implements HttpClient {
  private client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
  })
  get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    return this.client.get(url, options)
  }

  post<T>(url: string, data: any, options: AxiosRequestConfig): Promise<T> {

    return this.client.post(url, data, options)
  }
}