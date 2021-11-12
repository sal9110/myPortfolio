import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import { Switch } from "@headlessui/react"
import { useEffect, useState } from "react"
import DarkModeToggle from "./components/DarkModeToggle"
import Contact from "./components/Contact"

function App() {
  return (
    <main className=' h-screen flex flex-col-reverse md:flex-row overflow-y-auto  '>
      <Navbar />
      <DarkModeToggle />
      <div className=' mb-16  md:mb-0 h-screen w-screen  bg-gradient-to-b md:bg-gradient-to-l  from-newblue-light  to-newblue dark:from-newblue-dark dark:to-newblack     dark:text-white '>
        <Routes>
          {/* HOME */}
          <Route path='/' element={<Home />} />
          {/* MY PROJECTS */}
          <Route path='/my-projects' element={<Projects />} />

          {/* ABOUT */}
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </main>
  )
}

export default App
