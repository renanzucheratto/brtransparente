import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Navbar from "./components/Navbar"
import { globalSyles } from './config/appStyle'
import InternaDeputado from "./pages/deputados/home"
import Votacoes from "./pages/deputados/votacoes"
import Home from "./pages/Home"

function App() {

  globalSyles()

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deputados" element={<InternaDeputado />} />
        <Route path="/votacoes" element={<Votacoes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
