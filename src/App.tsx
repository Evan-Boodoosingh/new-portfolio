// App — handles routing
// Currently only one route but structured to scale

import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}