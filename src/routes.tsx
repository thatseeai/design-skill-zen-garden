import { createBrowserRouter, Navigate } from "react-router-dom"

import StyleAPage from "@/pages/style-a/page"
import StyleBPage from "@/pages/style-b/page"

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to="/style-a" replace />,
    },
    {
      path: "/style-a",
      element: <StyleAPage />,
    },
    {
      path: "/style-b",
      element: <StyleBPage />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
)
