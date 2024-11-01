import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'
import {  createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import {About,ErrorPage,Bookmarks,RecipeDetails} from "./pages/index.js"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<App/>}/>
      <Route path='/bookmarks' element={<Bookmarks/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/recipe/:id" element={<RecipeDetails/>} />
      <Route path = "*" element={<ErrorPage/>} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
