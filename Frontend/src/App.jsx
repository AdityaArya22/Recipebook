import { useDispatch, useSelector } from "react-redux";
import './App.css';
import Search from './components/serach/Search';
import Loading from './components/loading/Loading';
import Card from './components/card/Card';
import Navbar from './components/navbar/Navbar';

function App() {
  
  const state = useSelector(state => state.fetchRecipe);

  const {isLoading } = state || {};

  

  return (
    <div className='bg-zinc-300'>
      <Search/>
      {isLoading && <Loading/>}
      <Card/>
    </div>
  );
}

export default App;
