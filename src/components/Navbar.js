import { NavLink } from "react-router-dom"
import { ReactComponent as WebDevLogo } from "../img/icons/webDev.svg"

const Navbar = () => {
  return (
    <div className='fixed md:relative  bottom-0 md:h-screen z-10'>
      <nav className='bg-newblue dark:bg-newblack w-screen h-16 md:w-20 md:h-screen justify-between flex flex-col '>
        <div className='flex justify-center w-full h-full md:mt-10 md:mb-10'>
          <div className='md:mt-10 flex flex-col  w-full h-16 md:h-full items-center justify-center'>
            <ul className='flex md:flex-col w-screen  px-4 md:px-0 h-20 md:w-20 md:h-auto justify-between md:justify-center items-center md:space-y-40 '>
              <li className='md:my-auto text-center'>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    (isActive
                      ? "text-orange"
                      : "text-gray-800 dark:text-gray-300 ") +
                    "  mx-auto hover:text-gray-200 dark:hover:text-white transition-colors duration-200"
                  }>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-12 w-12 mx-auto'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                    />
                  </svg>
                </NavLink>
              </li>

              <li className='md:my-auto text-center'>
                <NavLink
                  to='/my-projects'
                  className={({ isActive }) =>
                    (isActive
                      ? "text-orange"
                      : "text-gray-800 dark:text-gray-300 ") +
                    "   mx-auto hover:text-gray-200 dark:hover:text-white transition-colors duration-200"
                  }>
                  <WebDevLogo className='stroke-current h-12 w-12 mx-auto ' />
                </NavLink>
              </li>
              <li className='md:my-auto text-center'>
                <NavLink
                  to='contact'
                  className={({ isActive }) =>
                    (isActive
                      ? "text-orange "
                      : "text-gray-800 dark:text-gray-300 ") +
                    "  hover:text-gray-200 dark:hover:text-white transition-colors duration-200"
                  }>
                  <svg
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    viewBox='80 0 1000 1000'
                    className='w-12 h-12 mx-auto'
                    fill='currentColor'
                    stroke='currentColor'
                    strokeWidth='1'>
                    <g>
                      <g>
                        <path d='M835.3,35.8H267.9c-85.3,0-154.7,69.4-154.7,154.7v51.6H61.6c-28.5,0-51.6,23.1-51.6,51.6c0,28.5,23.1,51.6,51.6,51.6h51.6v103.2H61.6C33.1,448.4,10,471.5,10,500c0,28.5,23.1,51.6,51.6,51.6h51.6v103.2H61.6c-28.5,0-51.6,23.1-51.6,51.6c0,28.5,23.1,51.6,51.6,51.6h51.6v51.6c0,85.3,69.4,154.7,154.7,154.7h567.4c85.3,0,154.7-69.4,154.7-154.7V190.5C990,105.2,920.6,35.8,835.3,35.8L835.3,35.8z M216.3,190.5c0-28.4,23.2-51.6,51.6-51.6v103.2h-51.6V190.5L216.3,190.5z M216.3,345.3h51.6v103.2h-51.6V345.3z M216.3,551.6h51.6v103.2h-51.6V551.6z M216.3,809.5v-51.6h51.6V861C239.5,861,216.3,837.9,216.3,809.5L216.3,809.5z M886.8,809.5c0,28.4-23.2,51.6-51.6,51.6H319.5V138.9h515.8c28.4,0,51.6,23.2,51.6,51.6V809.5L886.8,809.5z' />
                        <path d='M680.5,422.6c0,57-46.2,103.2-103.2,103.2s-103.2-46.2-103.2-103.2s46.2-103.2,103.2-103.2S680.5,365.7,680.5,422.6z' />
                        <path d='M577.4,569.9c-80.6,0-128.9,36.9-128.9,73.7c0,18.4,48.4,36.9,128.9,36.9c75.6,0,128.9-18.4,128.9-36.9C706.3,606.8,655.8,569.9,577.4,569.9z' />
                      </g>
                    </g>
                  </svg>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className='mb-4'>
          <NavLink to='#'>
            <svg
              className='fill-current h-5 w-5 text-gray-300 mx-auto hover:text-red-500'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M13 4.00894C13.0002 3.45665 12.5527 3.00876 12.0004 3.00854C11.4481 3.00833 11.0002 3.45587 11 4.00815L10.9968 12.0116C10.9966 12.5639 11.4442 13.0118 11.9965 13.012C12.5487 13.0122 12.9966 12.5647 12.9968 12.0124L13 4.00894Z'
                fill='currentColor'></path>
              <path
                d='M4 12.9917C4 10.7826 4.89541 8.7826 6.34308 7.33488L7.7573 8.7491C6.67155 9.83488 6 11.3349 6 12.9917C6 16.3054 8.68629 18.9917 12 18.9917C15.3137 18.9917 18 16.3054 18 12.9917C18 11.3348 17.3284 9.83482 16.2426 8.74903L17.6568 7.33481C19.1046 8.78253 20 10.7825 20 12.9917C20 17.41 16.4183 20.9917 12 20.9917C7.58172 20.9917 4 17.41 4 12.9917Z'
                fill='currentColor'></path>
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path d='M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z' />
            </svg>
          </NavLink>
        </div> */}
      </nav>
    </div>
  )
}

export default Navbar
