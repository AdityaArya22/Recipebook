import { useDispatch } from "react-redux"
import { pagination } from "../feature/fetchRecipeSlice"

const Pagination = ({currentPage,totalPosts,postPerPage}) => {
    let pages = []
    for(let i =1;i<=Math.ceil(totalPosts/postPerPage);i++){
        pages.push(i)
    }
    const handleClick = (item)=>{
      window.scrollTo(0,0)
      dispatch(pagination(item))
    }
    const dispatch = useDispatch()
  return (
    <div className='flex gap-5 justify-center items-center mt-6 w-full'>
       {pages.map((item,index)=>{
            return  <button key={index} onClick={()=>{handleClick(item)}} className={`${item === currentPage ? "bg-purple-500" : "bg-purple-400"} px-4 py-2 rounded-lg text-white font-bold`}>{item}</button>
       })}
    </div>
  )
}

export default Pagination