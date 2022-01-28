import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import DarkModeToggle from "./components/DarkModeToggle"
import Contact from "./components/Contact"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

function App() {
  return (
    <main className=' h-screen flex flex-col-reverse md:flex-row overflow-y-auto  '>
      <Navbar />
      <DarkModeToggle />
      <div className=' flex justify-center items-center mb-16  md:mb-0 h-screen w-screen  bg-gradient-to-b md:bg-gradient-to-l  from-newblue-light  to-newblue dark:from-newblue-dark dark:to-newblack     dark:text-white '>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/my-projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </main>
  )
}

export default App
