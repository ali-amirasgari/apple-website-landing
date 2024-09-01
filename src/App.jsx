import { lazy, Suspense } from "react"
const Hero = lazy(() => import("@/components/Hero"))
const Highlights = lazy(() => import("@/components/Highlights"))
const PageLoader = lazy(() => import("@/components/PageLoader"))
import Navbar from "@/components/Navbar"

const App = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlights />
      </main>
    </Suspense>
  )
}

export default App
