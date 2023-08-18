import { Autocomplete, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface RecipesOptions {
  label: string;
  id: string
}

interface SearchInputProps {
  recipes: RecipesOptions[];
  handleChange: (selectedRecipe: string) => void;
}

export default function SearchInput({handleChange,recipes}: SearchInputProps) {
  return (
    <div className="p-5">
      <Autocomplete
        options={recipes}
        sx={{ width: 300 }}
        onInputChange={(e, value) => handleChange(value)}
        renderInput={(params) => <TextField {...params} label="Recipes" />}
      />
    </div>
  )
}