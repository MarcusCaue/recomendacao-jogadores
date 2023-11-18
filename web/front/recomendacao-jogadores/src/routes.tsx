import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Main from "./pages/Main"
import FilterPage from "./pages/FilterPage"
import ResultPage from "./pages/ResultPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "/", 
        element: <Main />,
      },
      {
        path: "/players/filter",
        element: <FilterPage />,
      },
      {
        path: "/players/result",
        element: <ResultPage />
      }
    ]
  }
])
