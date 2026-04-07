import { RouterProvider } from "react-router-dom"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/ThemeProvider"
import { router } from "./routes"

const routeLoadingFallback = (
  <div className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
    <div className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3">
      <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-primary" />
      <span className="text-sm font-medium text-muted-foreground">Loading style...</span>
    </div>
  </div>
)

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="zen-garden-theme">
      <RouterProvider router={router} fallbackElement={routeLoadingFallback} />
      <Toaster position="bottom-right" />
    </ThemeProvider>
  )
}

export default App
