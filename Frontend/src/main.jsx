import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'
import {  createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Bookmarks from './pages/bookmark/Bookmarks.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import About from './pages/About/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<App/>}/>
      <Route path='/bookmarks' element={<Bookmarks/>}/>
      <Route path='/about' element={<About/>}/>
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
