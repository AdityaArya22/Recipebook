import { useSelector, useDispatch } from "react-redux";
import colorsMap from "../../colors.json";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { addBookmark, removeBookmark } from "../../feature/fetchRecipeSlice";
import countries from "../../countries.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

const Card = () => {
    const { fetchedData, bookmarkedRecipes, isError,currentPage,postPerPage } = useSelector(state => state.fetchRecipe);
    const dispatch = useDispatch();
    const meals = fetchedData ?.meals || [];
    console.log(meals);
    useEffect(() => {
        localStorage.setItem("savedRecipe", JSON.stringify(bookmarkedRecipes))
    }, [bookmarkedRecipes])

    
    const endIndex = currentPage*postPerPage;
    const startIndex = endIndex - postPerPage;

    const currentPost = meals? meals.slice(startIndex,endIndex) : []
    return (
        <div className="w-full p-10">
            {meals.length === 0  && <p className="text-red-500 font-bold text-4xl flex items-center justify-center h-[65vh]">Error occurred while fetching data or no results found.</p>}


            {meals  && (
                <div className="grid   sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {currentPost?.map((elem) => {
                        // Check if the current meal (elem) is bookmarked
                        const isBookmarked = bookmarkedRecipes.some(item => item.idMeal === elem.idMeal);

                        const handleBookmark = () => {
                            if (isBookmarked) {
                                dispatch(removeBookmark(elem));
                                useEffect(() => {

                                }, [bookmarkedRecipes])
                            } else {
                                dispatch(addBookmark(elem)); // Pass the entire meal object

                            }

                        };

                        return (
                            <div className="text-black bg-[#e0e0e0] w-[84%] px-3 py-3 rounded-lg" key={elem.idMeal}>
                                <img src={`${elem.strMealThumb}`} className="w-[100%] rounded-lg" alt="" />
                                <h2 className="font-bold my-3 text-2xl">{elem.strMeal}</h2>
                                <div style={{ backgroundColor: colorsMap[elem.strCategory] }} className={`px-3 py-1 rounded-lg font-bold text-center my-1 ${elem.strCategory.toLowerCase() === "vegetarian" || elem.strCategory.toLowerCase() === "miscellaneous" || elem.strCategory.toLowerCase() === "breakfast" ? "w-32" : "w-20"}`}>
                                    {elem.strCategory}
                                </div>
                                <div style={{ backgroundColor: countries[elem.strArea] }} className="px-3 py-1 rounded-lg font-bold text-center mt-2 w-28">
                                    {elem.strArea}
                                </div>
                                <div className="flex mt-2 w-full justify-between pr-7 items-center">

                                    <Link to={`recipe/${elem.strMeal}`}>
                                        <button className="text-xl bg-blue-600 text-white px-4 py-1 rounded-lg font-bold">View Recipe</button>
                                    </Link>

                                    <button onClick={handleBookmark}>
                                        {isBookmarked ? <FaBookmark className="text-2xl cursor-pointer text-purple-700" /> : <FaRegBookmark className="text-2xl cursor-pointer" />}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
            {meals.length > 0 && <Pagination currentPage={currentPage} totalPosts={meals.length} postPerPage={postPerPage} setCurrentPage={currentPage} currentPost={currentPost}/>}
        </div>
    );
};

export default Card;
