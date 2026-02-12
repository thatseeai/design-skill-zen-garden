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
import StyleJPage from "@/pages/style-j/page"
import StyleKPage from "@/pages/style-k/page"
import StyleLPage from "@/pages/style-l/page"
import StyleMPage from "@/pages/style-m/page"
import StyleNPage from "@/pages/style-n/page"
import StyleOPage from "@/pages/style-o/page"
import StylePPage from "@/pages/style-p/page"
import StyleQPage from "@/pages/style-q/page"

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
    {
      path: "/style-j",
      element: <StyleJPage />,
    },
    {
      path: "/style-k",
      element: <StyleKPage />,
    },
    {
      path: "/style-l",
      element: <StyleLPage />,
    },
    {
      path: "/style-m",
      element: <StyleMPage />,
    },
    {
      path: "/style-n",
      element: <StyleNPage />,
    },
    {
      path: "/style-o",
      element: <StyleOPage />,
    },
    {
      path: "/style-p",
      element: <StylePPage />,
    },
    {
      path: "/style-q",
      element: <StyleQPage />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
)
