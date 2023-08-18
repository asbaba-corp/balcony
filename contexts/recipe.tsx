import { Recipes } from "../core/domains/recipes";
import { ReactNode, createContext, useContext, useState } from "react";

interface RecipeContextType {
  recipes: Recipes[];
  setRecipes: (recipes: Recipes[]) => void;
}

const RecipeContext = createContext({} as RecipeContextType);

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error('useRecipes must be used within a RecipeProvider')
  }
  return context;
}

export const RecipeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipes[]>([]);
  
  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipeContext.Provider>
  )
}