import { useEffect, useState } from "react"

const useTheme = (inital) => {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem("theme")
    return localValue !== null ? localValue : inital
  })

  useEffect(() => {
    localStorage.setItem("theme", value)
  }, [value])
  return [value, setValue]
}

const DarkModeToggle = () => {
  const [mode, setMode] = useTheme("dark")
  useEffect(() => {
    const html = window.document.documentElement
    if (localStorage.theme) {
      html.classList.remove("dark", "light")
      html.classList.add(localStorage.theme)
    }
  }, [mode])

  return (
    <button
      onClick={() => setMode((prev) => (prev === "dark" ? "light" : "dark"))}
      className={` 
       dark:bg-white bg-orange
       absolute top-4 right-2 md:left-4 w-12 h-12 z-30 rounded-full`}>
      {mode === "dark" ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-7 w-7 m-auto'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
          />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-7 w-7 m-auto'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
          />
        </svg>
      )}
    </button>
  )
}

export default DarkModeToggle
