import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter,  RouterProvider } from "react-router-dom";

import { TarefasFilho } from './routes/TarefasFilho.jsx';
import { TarefasPai } from './routes/TarefasPai.jsx';
import { Home } from './routes/Home.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/", 
//     element : <Home/>
//   },
//   {
//     path: "TarefasFilho", 
//     element : <TarefasFilho/>
//   },
//   {
//     path: "TarefasPai", 
//     element : <TarefasPai/>
//   },


// ])

const router = createBrowserRouter([
  {
    path: "/", 
    element : <App/>,
    children: [
      {
        path: "/", 
        element : <Home/>
      },
      {
        path: "TarefasFilho", 
        element : <TarefasFilho/>
      },
      {
        path: "TarefasPai", 
        element : <TarefasPai/>
      },
    
    ]
  },
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
