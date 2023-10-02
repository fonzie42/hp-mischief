import React from "react"
import ReactDOM from "react-dom/client"

import "react-loading-skeleton/dist/skeleton.css"
import { GlobalStyle } from "./global-styles.ts"
import { RouterProvider } from "react-router-dom"

import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient, router } from "./routes/router.tsx"



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
