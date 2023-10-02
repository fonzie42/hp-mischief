import { Home } from "@/routes/Home"

import "react-loading-skeleton/dist/skeleton.css"
import { createBrowserRouter } from "react-router-dom"
import { Error } from "@/routes/error"
import { Character } from "@/routes/character"

import { QueryClient } from "@tanstack/react-query"
import { ListCharacters } from "@/routes/list-characters"
import { characterLoader } from "./loaders"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "character/:characterId",
    element: <Character />,
    loader: characterLoader,
  },
])

export const queryClient = new QueryClient()
