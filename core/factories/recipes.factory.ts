import { HttpClient } from "../http-client/interface"
import { RecipesService } from "../services/recipe-service"
import { axiosHttpClient } from "./axios-factory"

function makeRecipesService(httpClient: HttpClient) {
  const recipeService = new RecipesService(httpClient)
  return recipeService
}

export const recipeService = makeRecipesService(axiosHttpClient)