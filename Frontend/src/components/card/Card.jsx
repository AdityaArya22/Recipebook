import { useSelector, useDispatch } from "react-redux";
import colorsMap from "../../colors.json";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { addBookmark, removeBookmark } from "../../feature/fetchRecipeSlice";
import countries from "../../countries.json";

const Card = () => {
    const { fetchedData, bookmarkedRecipes,isError } = useSelector(state => state.fetchRecipe);
    const dispatch = useDispatch();
    const meals = fetchedData.meals ;
    // console.log(bookmarkedRecipes);
    return (
        <div className="w-full p-10">
             {!meals && isError && <p className="text-red-500">Error occurred while fetching data or no results found.</p>}
           

            {meals && (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {meals.map((elem) => {
                        // Check if the current meal (elem) is bookmarked
                        const isBookmarked = bookmarkedRecipes.some(item => item.idMeal === elem.idMeal);

                        const handleBookmark = () => {
                            if (isBookmarked) {
                                dispatch(removeBookmark(elem));
                            } else {
                                dispatch(addBookmark(elem)); // Pass the entire meal object
                               
                            }
                            
                        };

                        return (
                            <div className="text-black bg-[#e0e0e0] w-[84%] px-3 py-3 rounded-lg" key={elem.idMeal}>
                                <img src={`${elem.strMealThumb}`} className="w-[100%] rounded-lg" alt="" />
                                <h2 className="font-bold my-3 text-2xl">{elem.strMeal}</h2>
                                <div style={{ backgroundColor: colorsMap[elem.strCategory] }} className={`px-3 py-1 rounded-lg font-bold text-center my-1 ${elem.strCategory.toLowerCase() === "vegetarian" || elem.strCategory.toLowerCase() === "miscellaneous" ||elem.strCategory.toLowerCase() === "breakfast" ? "w-32" : "w-20"}`}>
                                    {elem.strCategory}
                                </div>
                                <div style={{ backgroundColor: countries[elem.strArea] }} className="px-3 py-1 rounded-lg font-bold text-center mt-2 w-28">
                                    {elem.strArea}
                                </div>
                                <div className="flex mt-2 w-full justify-between pr-7 items-center">
                                    <button className="text-xl bg-blue-600 text-white px-4 py-1 rounded-lg font-bold">View Recipe</button>
                                    <button onClick={handleBookmark}>
                                        {isBookmarked ? <FaBookmark className="text-2xl cursor-pointer text-purple-700" /> : <FaRegBookmark  className="text-2xl cursor-pointer"/>}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Card;
