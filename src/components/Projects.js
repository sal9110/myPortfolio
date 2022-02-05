import { useContext, useEffect, useState } from "react"
import Card from "../components/Card"

import { FirebaseContext } from "../Context/FirebaseContext"

const Projects = () => {
  const { ProjectsRef } = useContext(FirebaseContext)

  const [projects, setProjects] = useState([])

  useEffect(() => {
    ProjectsRef.onSnapshot((snap) => {
      setProjects(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    })
    return () => {}
  }, [])

  console.log(projects)

  return (
    <div className='h-full w-full flex flex-col justify-center items-center'>
      <h1 className='w-5/6 text-3xl md:text-4xl lg:text-5xl uppercase dark:text-orange text-orange-dark font-semibold'>
        My Projects
      </h1>
      <div className='w-screen h-5/6 md:w-5/6 md:h-4/6 '>
        <div className='flex w-full h-full text-black dark:text-white overflow-y-auto overscroll-auto '>
          <span className='w-full h-full flex flex-row justify-center items-center flex-wrap  hide scrollbar scrollbar-thumb-orange '>
            {projects.map((project) => (
              <Card key={project.id} {...project} />
            ))}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Projects
//  overflow-scroll
