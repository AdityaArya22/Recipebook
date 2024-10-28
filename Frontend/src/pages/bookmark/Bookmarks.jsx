import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import colorsMap from "../../colors.json";
import countries from "../../countries.json";
import { addBookmark, removeBookmark } from "../../feature/fetchRecipeSlice";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import '../../App.css'; // Import CSS for animations

const Bookmarks = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.fetchRecipe);
  const { bookmarkedRecipes } = state || [];

  return (
    <div className='px-10 py-5'>
      {bookmarkedRecipes.length <= 0 ? (
        <h1 className='no-bookmarks animate'>No Bookmarks Available</h1>
      ) : (
        <h1 className='text-center font-black text-3xl mt-30'>Your Bookmarks</h1>
      )}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {bookmarkedRecipes.map((book) => {
          const isBookmarked = bookmarkedRecipes.some(item => item.idMeal === book.idMeal);

          const handleBookmark = () => {
            if (isBookmarked) {
              dispatch(removeBookmark(book));
            } else {
              dispatch(addBookmark(book));
            }
          };

          return (
            <div className="text-black bg-[#e0e0e0] w-[84%] px-3 py-3 rounded-lg" key={book.idMeal}>
              <img src={`${book.strMealThumb}`} className="w-[100%] rounded-lg" alt="" />
              <h2 className="font-bold my-3 text-2xl">{book.strMeal}</h2>
              <div style={{ backgroundColor: colorsMap[book.strCategory] }} className={`px-3 py-1 rounded-lg font-bold text-center my-1 ${book.strCategory.toLowerCase() === "vegetarian" || book.strCategory.toLowerCase() === "miscellaneous" || book.strCategory.toLowerCase() === "breakfast" ? "w-32" : "w-20"}`}>
                {book.strCategory}
              </div>
              <div style={{ backgroundColor: countries[book.strArea] }} className="px-3 py-1 rounded-lg font-bold text-center mt-2 w-28">
                {book.strArea}
              </div>
              <div className="flex mt-2 w-full justify-between pr-7 items-center">
                <button className="text-xl bg-blue-600 text-white px-4 py-1 rounded-lg font-bold">View Recipe</button>
                <button onClick={handleBookmark}>
                  {isBookmarked ? <FaBookmark className="text-2xl cursor-pointer text-purple-700" /> : <FaRegBookmark className="text-2xl cursor-pointer" />}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bookmarks;
