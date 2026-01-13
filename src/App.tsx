import { RouterProvider } from "react-router-dom"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/ThemeProvider"
import { router } from "./routes"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="zen-garden-theme">
      <RouterProvider router={router} />
      <Toaster position="bottom-right" />
    </ThemeProvider>
  )
}

export default App
