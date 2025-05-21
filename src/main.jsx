import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ErrorPage from './pages/ErrorPage.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Home from './pages/Home.jsx'
import Skills from './pages/Skills.jsx'

const router = createBrowserRouter ([
  {
    path:"/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path:"about",
        element: <AboutMe />
      },
      {
        path:"skills",
        element:<Skills />
      }
      
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <RouterProvider router={router}/>
</React.StrictMode>
);