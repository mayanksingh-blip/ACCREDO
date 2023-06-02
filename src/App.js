import Navbar from "./components/Navbar"
import Body from "./components/Body"
import { Route, Routes } from "react-router-dom"
import Ten from "./pages/Ten"
import Twelve from "./pages/Twelve"
import Proj from "./pages/Proj"
import Cert from "./pages/Cert"
import Participations from "./pages/Participations"
import Papers from "./pages/Papers"



function App(){
  return(
    <Routes>
      <Route path="/" element={<Body/>} />
      <Route path="/10th" element={<Ten/>} />
      <Route path="/12th" element={<Twelve/>} />
      <Route path="/certificates" element={<Cert/>} />
      <Route path="/projects" element={<Proj/>} />
      <Route path="/papers" element={<Papers/>} />
      <Route path="/Participations" element={<Participations/>} />
    </Routes>
  )
}

export default App