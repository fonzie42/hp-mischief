import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"

import "react-loading-skeleton/dist/skeleton.css"
import { GlobalStyle } from "./global-styles.ts"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Error } from "./routes/error.tsx"
import { Character, characterLoader } from "./routes/character.tsx"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "character/:characterId",
    element: <Character />,
    loader: characterLoader,
  },
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
