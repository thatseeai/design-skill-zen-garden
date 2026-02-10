import { createBrowserRouter, Navigate } from "react-router-dom"

import StyleAPage from "@/pages/style-a/page"
import StyleBPage from "@/pages/style-b/page"
import StyleCPage from "@/pages/style-c/page"
import StyleDPage from "@/pages/style-d/page"
import StyleEPage from "@/pages/style-e/page"
import StyleFPage from "@/pages/style-f/page"
import StyleGPage from "@/pages/style-g/page"
import StyleHPage from "@/pages/style-h/page"
import StyleIPage from "@/pages/style-i/page"

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
    {
      path: "/style-c",
      element: <StyleCPage />,
    },
    {
      path: "/style-d",
      element: <StyleDPage />,
    },
    {
      path: "/style-e",
      element: <StyleEPage />,
    },
    {
      path: "/style-f",
      element: <StyleFPage />,
    },
    {
      path: "/style-g",
      element: <StyleGPage />,
    },
    {
      path: "/style-h",
      element: <StyleHPage />,
    },
    {
      path: "/style-i",
      element: <StyleIPage />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
)
