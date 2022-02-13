import { NavLink } from "react-router-dom"
import { ContactIcon, HomeIcon, MyProjectIcon } from "../img/icons/navbarIcon"

const Navbar = () => {
  return (
    <div className='fixed md:relative bottom-0 md:h-screen z-10  '>
      <nav className='bg-newblue dark:bg-newblack w-screen h-16 md:w-20 md:h-screen justify-between flex flex-col '>
        <div className='flex justify-center w-full h-full md:mt-10 md:mb-10'>
          <div className='md:mt-10 flex flex-col  w-full h-16 md:h-full items-center justify-center'>
            <ul className='flex md:flex-col w-screen  px-4 md:px-0 h-20 md:w-20 md:h-auto justify-between md:justify-center items-center md:space-y-40 '>
              <li className='md:my-auto text-center'>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    (isActive
                      ? "dark:text-orange text-orange-dark"
                      : "text-gray-800 dark:text-gray-300 ") +
                    "  mx-auto hover:text-gray-200 dark:hover:text-white transition-colors duration-200"
                  }>
                  <HomeIcon />
                </NavLink>
              </li>

              <li className='md:my-auto text-center'>
                <NavLink
                  to='/my-projects'
                  className={({ isActive }) =>
                    (isActive
                      ? "dark:text-orange text-orange-dark"
                      : "text-gray-800 dark:text-gray-300 ") +
                    "   mx-auto hover:text-gray-200 dark:hover:text-white transition-colors duration-200"
                  }>
                  <MyProjectIcon />
                </NavLink>
              </li>
              <li className='md:my-auto text-center'>
                <NavLink
                  to='contact'
                  className={({ isActive }) =>
                    (isActive
                      ? "dark:text-orange text-orange-dark "
                      : "text-gray-800 dark:text-gray-300 ") +
                    "  hover:text-gray-200 dark:hover:text-white transition-colors duration-200"
                  }>
                  <ContactIcon />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
