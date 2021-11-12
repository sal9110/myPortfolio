import Card from "./Card"

const Projects = () => {
  return (
    <div className='h-full w-full flex flex-col justify-center items-center'>
      <h1 className='w-5/6 text-3xl md:text-4xl lg:text-5xl uppercase text-orange font-semibold'>
        My Projects
      </h1>
      <div className='w-5/6 h-4/6 '>
        <div className='flex w-full h-full text-black dark:text-white overflow-y-auto overscroll-auto '>
          <span className='w-full h-full flex flex-row justify-center items-center flex-wrap  hide scrollbar scrollbar-thumb-orange '>
            <Card
              cardStyle={
                "w-full lg:w-4/6 xl:w-5/12  h-1/2 m-8 p-8 transform-gpu hover:scale-110 duration-500"
              }
              title='Temple of athena'
              img='https://picsum.photos/400/400'
              description='This is a description the project as as some additional info related
              to it'
              technologies={["html", "css", "react", "javascript"]}
            />
            <Card
              cardStyle={
                "w-full lg:w-4/6 xl:w-5/12  h-1/2 m-8 p-8 transform-gpu hover:scale-110 duration-500"
              }
              title='Temple of athena'
              img='https://picsum.photos/400/400'
              description='This is a description the project as as some additional info related
              to it'
              technologies={["html", "css", "react", "javascript"]}
            />
            <Card
              cardStyle={
                "w-full lg:w-4/6 xl:w-5/12  h-1/2 m-8 p-8 transform-gpu hover:scale-110 duration-500"
              }
              title='Temple of athena'
              img='https://picsum.photos/400/400'
              description='This is a description the project as as some additional info related
              to it'
              technologies={["html", "css", "react", "javascript"]}
            />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Projects
//  overflow-scroll
