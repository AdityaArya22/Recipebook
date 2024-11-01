import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";


export const fetchRecipe = createAsyncThunk("fetchRecipes", async (query) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await response.json();
        // console.log(data.meals);
        return data;

    } catch (error) {
        throw error
    }
})


export const recipeSlice = createSlice({
    name: "recipe",
   initialState : {
        isLoading: false,
        isError: false,
        fetchedData: [] || null,
        bookmarkedRecipes: JSON.parse(localStorage.getItem("savedRecipe")) || [],
        postPerPage:9,
        currentPage:1
    },
    reducers:{
        addBookmark:(state,action)=>{
           const isAlraedybookmarked = state.bookmarkedRecipes.some((item)=> item.idMeal === action.payload.idMeal)
           if(!isAlraedybookmarked){
                state.bookmarkedRecipes.push(action.payload)
           }
        },
        pagination:(state,action)=>{
            state.currentPage = action.payload
        },
        removeBookmark:(state,action)=>{
            state.bookmarkedRecipes = state.bookmarkedRecipes.filter((items)=>items.idMeal !== action.payload.idMeal)
            // console.log(state.bookmarkedRecipes);
            localStorage.setItem("savedRecipe", JSON.stringify(state.bookmarkedRecipes));
        },
        setBookmarks:(state,action)=>{
            state.bookmarkedRecipes = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRecipe.fulfilled, (state, action) => {
            state.isLoading = false,
            state.fetchedData = action.payload
            state.currentPage = 1
           state.isError !== action.payload.meals
        })
        builder.addCase(fetchRecipe.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchRecipe.rejected, (state, action) => {
                
                state.isError = true
        
            console.log("error : ", action.payload);
        })
    }
})
export const {addBookmark, removeBookmark, setBookmarks,pagination} = recipeSlice.actions
export default recipeSlice.reducer 