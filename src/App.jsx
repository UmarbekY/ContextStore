import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import MainLayout from "./layouts/MainLayout"

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          index: true,
          element: <Home/>,
        },
        {
          path: '/contact',
          element: <Contact/>
        }
      ]
    },
  ])

  return (
    <RouterProvider router={routes}/>
  )
}

export default App