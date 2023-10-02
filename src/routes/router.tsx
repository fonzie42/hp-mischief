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
  {
    path: "characters/",
    element: <ListCharacters type="all" />,
  },
  {
    path: "students/",
    element: <ListCharacters type="students" />,
  },
  {
    path: "staff/",
    element: <ListCharacters type="staff" />,
  },
  {
    path: "favorites/",
    element: <ListCharacters type="favorites" />,
  },
], { basename: import.meta.env.DEV ? "/" : "/hp-mischief/" }
)

export const queryClient = new QueryClient()
