import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App