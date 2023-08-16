import { Recipes } from "../domains/recipes"
import { HttpClient } from "../http-client/interface"

export class RecipesService {
  constructor(private readonly httpClient: HttpClient) {}

  findAll(): Promise<Recipes[]> {
    return this.httpClient.get<Recipes[]>('/recipes')
  }

  findRecipesByIngredients(ingredients: string[]) {
    const ingredientsQuery = ingredients.join(',')
    return this.httpClient.get<Recipes[]>(`/search-recipes?ingredients=${ingredientsQuery}`)
  }
}