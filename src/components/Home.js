import { Transition } from "@headlessui/react"
import React, { useContext, useEffect, useState } from "react"
import { MutatingDots } from "react-loader-spinner"
import techIcons from "../img/icons/icons"
import { FirebaseContext } from "../Context/FirebaseContext"
import ReactTooltip from "react-tooltip"

const Home = () => {
  const { PersonalInfo } = useContext(FirebaseContext)
  const [isShowingPic, setIsShowingPic] = useState(false)
  const [isShowingText, setIsShowingText] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsShowingPic(true)
    }, 1000)
    setTimeout(() => {
      setIsShowingText(true)
    }, 2000)

    return () => {
      setIsShowingPic(false)
      setIsShowingText(false)
    }
  }, [])

  if (!PersonalInfo)
    return (
      <MutatingDots
        ariaLabel='loading-indicator'
        wrapperClass='flex justify-center'
        color='black'
        secondaryColor='white'
      />
    )

  return (
    <div className='h-screen flex flex-col space-y-4 overflow-y-auto'>
      <Transition
        show={isShowingPic}
        className='flex flex-col md:flex-row justify-center items-center pt-1 md:pt-8 px-6 lg:pt-14  w-full'
        enter='transition ease-linear duration-1000 transform '
        enterFrom='-translate-x-full'
        enterTo='translate-x-0'
        //   leave='transition ease-in-out duration-300 transform'
        //   leaveFrom='translate-x-0'
        //   leaveTo='-translate-x-full'
      >
        <h1 className='w-full md:w-2/3 font-mochiy text-3xl md:text-5xl lg:text-6xl text-shadow  px-3 py-6 text-center'>
          {" "}
          Hi, I'm <span className='text-orange'>Salvo</span>{" "}
          <span className='text-4xl'>👋🏻 </span>
        </h1>

        <div className='flex flex-col justify-center items-center w-3/6 md:w-auto '>
          <img
            className='h-auto rounded-full filter border-4 border-orange w-1/2'
            alt='me'
            src={PersonalInfo.picture}
          />
        </div>
      </Transition>
      <Transition
        show={isShowingText}
        className=' flex flex-col justify-center items-center w-full px-6 '
        enter='transition ease-linear duration-1000 transform '
        enterFrom='translate-x-full '
        enterTo='translate-x-0'
        //   leave='transition ease-in-out duration-300 transform'
        //   leaveFrom='translate-x-0'
        //   leaveTo='-translate-x-full'
      >
        <div className='md:w-5/6  md:p-10'>
          <h1 className='text-xl md:text-4xl lg:text-5xl uppercase text-orange font-semibold'>
            About me
          </h1>
          <p className='text-2xl md:text-3xl lg:text-4xl '>
            {PersonalInfo.about}
          </p>
        </div>
        <div className='w-full flex justify-center'>
          <a
            className='flex px-4 py-2 my-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-orange rounded text-2xl md:text-3xl lg:text-4xl justify-center  '
            target='_blank'
            rel='noreferrer'
            href='https://drive.google.com/file/d/1ecaLFNLJzFfTvUNUPlw-FC-F811_wOWc/view'>
            {" "}
            Check out my CV
          </a>
        </div>
      </Transition>
      <Transition
        show={isShowingText}
        className=' flex justify-center items-center w-full h-5/6 py-4 px-6  '
        enter='transition ease-linear duration-1000 transform '
        enterFrom='translate-y-full '
        enterTo='translate-y-0'>
        <div
          data-tip='hiiii'
          className='flex flex-col justify-center items-center text-3xl md:text-4xl lg:text-5xl uppercase text-orange font-semibold'>
          Technologies I use
          <div className='flex justify-center flex-wrap  xl:w-full '>
            <span className='flex justify-center items-center  flex-wrap  w-full lg:w-5/6 h-2/6 space-x-3 md:space-x-5'>
              {PersonalInfo?.techStack?.map((el) =>
                techIcons.hasOwnProperty(el) ? (
                  <span key={el} className='flex flex-col justify-center'>
                    <i className='h-16 w-16 md:w-24 md:h-24 lg:h-26 lg:w-26 2xl:w-30  2xl:h-30 p-3 '>
                      {" "}
                      {techIcons[el]()}{" "}
                    </i>
                    <span className='text-lg 2xl:text-xl text-center text-black dark:text-orange '>
                      {el}
                    </span>
                  </span>
                ) : null
              )}
            </span>
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default Home
