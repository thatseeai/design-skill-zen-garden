import type { ComponentType } from "react"
import { createBrowserRouter, Navigate, type RouteObject } from "react-router-dom"
import { pages } from "@/pages"

type StyleSlug = (typeof pages)[number]["slug"]
type StylePageModule = { default: ComponentType }

const stylePageLoaders: Record<StyleSlug, () => Promise<StylePageModule>> = {
  "style-a": () => import("@/pages/style-a/page"),
  "style-b": () => import("@/pages/style-b/page"),
  "style-c": () => import("@/pages/style-c/page"),
  "style-d": () => import("@/pages/style-d/page"),
  "style-e": () => import("@/pages/style-e/page"),
  "style-f": () => import("@/pages/style-f/page"),
  "style-g": () => import("@/pages/style-g/page"),
  "style-h": () => import("@/pages/style-h/page"),
  "style-i": () => import("@/pages/style-i/page"),
  "style-j": () => import("@/pages/style-j/page"),
  "style-k": () => import("@/pages/style-k/page"),
  "style-l": () => import("@/pages/style-l/page"),
  "style-m": () => import("@/pages/style-m/page"),
  "style-n": () => import("@/pages/style-n/page"),
  "style-o": () => import("@/pages/style-o/page"),
  "style-p": () => import("@/pages/style-p/page"),
  "style-q": () => import("@/pages/style-q/page"),
  "style-r": () => import("@/pages/style-r/page"),
  "style-s": () => import("@/pages/style-s/page"),
}

const styleRoutes: RouteObject[] = pages.map(({ slug }) => ({
  path: `/${slug}`,
  lazy: async () => {
    const module = await stylePageLoaders[slug]()
    return { Component: module.default }
  },
}))

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to="/style-a" replace />,
    },
    ...styleRoutes,
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
)
