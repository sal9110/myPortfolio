import techIcons from "../img/icons/icons"
import { HiOutlineCursorClick } from "react-icons/hi"
import { BsGithub } from "react-icons/bs"

const Card = ({ title, preview, description, technologies, github, link }) => {
  return (
    <div className='w-full lg:w-4/6 xl:w-5/12  h-1/2 m-8 p-8 transform-gpu hover:scale-110 duration-500 group'>
      <div className='flex flex-col h-full relative '>
        <div className=' text-2xl lg:text-4xl uppercase text-center'>
          {title}
        </div>
        <div className='bg-blue-200 h-full w-full flex relative'>
          <img
            src={preview}
            alt={title}
            className='w-full object-cover object-top rounded-lg shadow-xl hover:shadow-2xl max-h-full '
          />
          <div className=' opacity-0 group-hover:opacity-100 group-hover:bg-black text-white group-hover:bg-opacity-50 absolute  mx-auto w-full h-full p-2'>
            <div className='flex flex-col w-full h-full justify-center items-center'>
              <h2
                className=' break-all text-lg lg:text-2xl p-2  overflow-y-scroll'
                dangerouslySetInnerHTML={{
                  __html: description.replaceAll("-", "<br>"),
                }}>
                {/* {description.replace("-", "<br>")}{" "} */}
              </h2>
              <div className='w-full flex justify-end gap-8 py-3 pr-4'>
                {link && (
                  <a
                    href={link}
                    rel='noreferrer'
                    target={"_blank"}
                    className='text-white hover:text-orange whitespace-nowrap'>
                    <HiOutlineCursorClick className='h-6 w-6 lg:h-8 lg:w-8' />
                  </a>
                )}
                {github && (
                  <a
                    href={github}
                    rel='noreferrer'
                    target={"_blank"}
                    className='hover:text-orange'>
                    <BsGithub className='h-6 w-6 lg:h-8 lg:w-8' />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className='absolute mt-2 top-16 left-0 md:-left-2 space-y-3 z-50 w-6 h-6 md:w-8 md:h-8 2xl:w-10 2xl:h-10'>
        {technologies.map((el) =>
          techIcons.hasOwnProperty(el) ? (
            <i key={el}> {techIcons[el]()} </i>
          ) : null
        )}{" "}
      </span>
    </div>
  )
}

export default Card
