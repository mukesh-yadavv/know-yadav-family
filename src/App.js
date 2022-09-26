import Navbar from "./Navbar"

import About from "./pages/About"
import Details from "./pages/Details"
import Home from "./pages/Home"
import Pics from "./pages/Pics"

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    
    <>
      <Navbar />
      {/* */}
      {/* */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/know-yadav-family" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/pics" element={<Pics />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
