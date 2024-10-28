import {useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { fetchRecipe } from '../../feature/fetchRecipeSlice';
const Search = () => {
    const [search,setSearch] = useState("")
    const handleSubmit = () => {
        dispatch(fetchRecipe(search));
      };
      const dispatch = useDispatch();
      useEffect(()=>{
        dispatch(fetchRecipe(""))
    },[])
  return (
    <div className='flex gap-3 w-full justify-center py-4'>
        <input 
        className='border w-[60%] rounded-sm border-black px-2 py-1' 
        type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />
      <button className='bg-purple-400 hover:bg-purple-500 px-3 py-2 rounded-lg text-white font-bold' type='submit' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Search