import { configureStore } from "@reduxjs/toolkit";
import fetchRecipeReducer from "./feature/fetchRecipeSlice";

export const store = configureStore({
    reducer: {
        fetchRecipe: fetchRecipeReducer, // key should match the slice's name
    },
});
