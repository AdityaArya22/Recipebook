import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import colorsMap from "../colors.json";
import countries from "../countries.json";
import { addBookmark,removeBookmark } from '../feature/fetchRecipeSlice';
function RecipeDetails() {
  const { id } = useParams();
  const { fetchedData, bookmarkedRecipes } = useSelector(state => state.fetchRecipe);
 const dispatch = useDispatch()
  // Find the specific recipe by ID
  const recipe = fetchedData?.meals?.find(meal => meal.strMeal === id);
  const isBookmarked = bookmarkedRecipes.some((item)=>item.strMeal === recipe.strMeal)
  console.log(isBookmarked);
  const handleBookmark = () =>{
    if(isBookmarked){
      dispatch(removeBookmark(recipe))
    }else{
      dispatch(addBookmark(recipe))
    }
  }
  if (!recipe) {
    return <p className="text-red-600 text-center mt-4 font-bold">Recipe not found.</p>;
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure ? measure : ""} ${ingredient}`);
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
        <img 
          src={recipe.strMealThumb} 
          className="w-full md:w-1/2 rounded-lg shadow-md object-cover" 
          alt={recipe.strMeal} 
        />
        <div className="flex flex-col space-y-10 w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-center">{recipe.strMeal}</h1>
          <div className="flex flex-col space-y-2 mt-4">
            <div 
              style={{ backgroundColor: colorsMap[recipe.strCategory] }} 
              className="text-center py-2 font-bold text-white rounded-lg"
            >
              {recipe.strCategory}
            </div>
            <div 
              style={{ backgroundColor: countries[recipe.strArea] }} 
              className="text-center py-2 font-bold text-white rounded-lg"
            >
              {recipe.strArea}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a 
              className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg transition duration-200 shadow-md" 
              target='_blank' 
              rel="noopener noreferrer" 
              href={recipe.strYoutube}
            >
              Watch on YouTube
            </a>
            <a 
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg transition duration-200 shadow-md" 
              target='_blank' 
              rel="noopener noreferrer" 
              href={recipe.strSource}
            >
              View Source
            </a> 
            <button onClick={handleBookmark} className={`${isBookmarked ? "bg-purple-600 text-white" : "bg-purple-300 text-black"} px-4 py-2 rounded-lg font-bold `}>{isBookmarked ? "Bookmarked!!" : "Bookmark"}</button>
          </div>
        </div>
      </div>

      <h2 className="text-2xl mt-6 font-semibold border-b-2 pb-2">Ingredients:</h2>
      <ul className="list-disc list-inside ml-5 space-y-1 mt-2">
        {ingredients.map((item, index) => (
          <li key={index} className="text-gray-700">{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl my-4 font-semibold border-b-2 pb-2">How to Cook:</h2>
      <p className="text-gray-700 leading-relaxed">{recipe.strInstructions}</p>
    </div>
  );
}

export default RecipeDetails;
