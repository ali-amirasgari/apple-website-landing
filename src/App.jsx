import { lazy, Suspense } from "react"
const Hero = lazy(() => import("@/components/Hero"))
const Highlights = lazy(() => import("@/components/Highlights"))
const PageLoader = lazy(() => import("@/components/PageLoader"))
const Model = lazy(() => import("@/components/Model"))
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks"

const App = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlights />
        <Model />
        <Features />
        <HowItWorks />
        <Footer />
      </main>
    </Suspense>
  )
}

export default App
