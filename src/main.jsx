import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { Home, About, Card, Fetch, Form, Pagination } from "./Pages"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom'
import { userLoader } from './Pages/Fetch.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/card' element={<Card channel="Hello" btnText="Visit Me" />} />
      <Route
        path='/page'
        element={<Pagination />} />
      <Route
        path='/fetch'
        loader={userLoader}
        element={<Fetch />} />
      <Route
        path='/form'
        element={<Form />} />
    </Route>
  ))



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
