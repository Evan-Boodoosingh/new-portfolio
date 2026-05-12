// Home page — assembles all sections in scroll order
// This file should stay clean — just a list of components, no logic

import { LavaBackground } from "../components/canvas/LavaBackground"
import { Nav } from "../components/layout/Nav"
import { Footer } from "../components/layout/Footer"
import { Hero } from "../components/sections/Hero"
import { About } from "../components/sections/About"
import { Projects } from "../components/sections/Projects"
import { Stack } from "../components/sections/Stack"
import { Contact } from "../components/sections/Contact"
// import { RainbowBar } from "../components/ui/RainbowBar"
// import { RainbowBar } from "../components/ui/RainbowBar"

export function Home() {
  return (
    <>
      {/* Fixed animated background — sits behind everything */}
      <LavaBackground />

      {/* Fixed floating pill nav */}
      <Nav />

      {/* Main content — z-index 2 keeps it above the canvas */}
      <main style={{ position: "relative", zIndex: 2 }}>
        <Hero />
        {/* <RainbowBar /> */}
        <About />
        {/* <RainbowBar /> */}
        <Projects />
        {/* <RainbowBar /> */}
        <Stack />
        {/* <RainbowBar /> */}
        <Contact />
      </main>

      {/* White footer */}
      <Footer />
    </>
  )
}