import { useContext, useEffect, useState } from "react"
import { FirebaseContext } from "../Context/FirebaseContext"
import { ReactComponent as Discord } from "../img/icons/icons8-discord.svg"
import { ReactComponent as Github } from "../img/icons/icons8-github.svg"
import { ReactComponent as Linkedin } from "../img/icons/icons8-linkedin.svg"
import { ReactComponent as Twitter } from "../img/icons/twitter-3.svg"

const defaultInfo = {
  name: "",
  email: "",
  message: "",
}

const Contact = () => {
  const { MessagesRef, PersonalInfo } = useContext(FirebaseContext)
  const [messageInfo, setMessageInfo] = useState(defaultInfo)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function submitMessage(e) {
    e.preventDefault()
    setIsLoading(true)
    try {
      if (
        !messageInfo.email.length ||
        !messageInfo.name.length ||
        !messageInfo.message.length
      ) {
        throw new Error("Fill out all the fields")
      }
      await MessagesRef.add(messageInfo)

      setMessageInfo(defaultInfo)
      setTimeout(() => {
        setIsSubmitted("Your message has been submitted")
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.log(error.message)
      setIsSubmitted(error.message || "Sorry something went wrong")
      setIsLoading(false)
    }

    setTimeout(() => {
      setIsSubmitted(false)
    }, 4000)
  }

  return (
    <div className='h-full w-full grid grid-cols-1 xl:grid-cols-2 p-5 overflow-auto'>
      <form
        onSubmit={(e) => submitMessage(e)}
        className='flex flex-col justify-center items-center '>
        <h1 className='w-5/6 text-3xl md:text-4xl lg:text-5xl uppercase dark:text-orange text-orange-dark font-semibold'>
          Get in Touch
        </h1>

        <div className='w-5/6 h-auto text-2xl md:text-3xl lg:text-4xl space-y-2 flex flex-col '>
          <p className='text-3xl'>
            Dropping a line to say hi or see if we can build something amazing
            together? I’d love to hear from you! Fill in your info in the form
            below and get in touch with me!
          </p>
          <div className='p-5 pl-0 w-full text-black '>
            <input
              type='text'
              placeholder='Name'
              className='p-4 w-full rounded'
              value={messageInfo.name}
              onChange={(e) =>
                setMessageInfo((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>
          <div className='p-5 pl-0 w-full text-black'>
            <input
              type='email'
              placeholder='Email'
              className='p-4 w-full  rounded'
              value={messageInfo.email}
              onChange={(e) =>
                setMessageInfo((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div className='p-5 pl-0 w-full text-black'>
            <textarea
              placeholder='Your message'
              className='p-4 w-full rounded'
              value={messageInfo.message}
              onChange={(e) =>
                setMessageInfo((prev) => ({ ...prev, message: e.target.value }))
              }
            />
          </div>
        </div>

        <button
          className='flex px-4 py-2 dark:bg-orange bg-orange-dark rounded text-2xl md:text-3xl lg:text-4xl'
          type='submit'>
          {!isLoading
            ? isSubmitted
              ? isSubmitted
              : "Send message"
            : "loading..."}
        </button>
      </form>

      <div className='flex flex-col justify-center items-center py-10'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl'>
          Feeling social? Find me on these online spaces too!
        </h1>
        <div className='flex justify-center items-center gap-5 '>
          {PersonalInfo?.linkedin && (
            <a
              className='flex px-4 py-2 my-4 w-full justify-center  '
              target='_blank'
              rel='noreferrer'
              href={PersonalInfo.linkedin}>
              {" "}
              <Linkedin className='h-16 w-16  ' />
            </a>
          )}
          {PersonalInfo?.github && (
            <a
              className='flex px-4 py-2 my-4 w-full justify-center '
              target='_blank'
              rel='noreferrer'
              href={PersonalInfo.github}>
              {" "}
              <Github className='h-14 w-16 dark:text-gray-200  text-black' />
            </a>
          )}
          {PersonalInfo?.discord && (
            <a
              className='flex px-4 py-2 my-4 w-full justify-center '
              target='_blank'
              rel='noreferrer'
              href={PersonalInfo.discord}>
              {" "}
              <Discord className='h-16 w-16 ' />
            </a>
          )}
          {PersonalInfo?.twitter && (
            <a
              className='flex px-4 py-2 my-4 w-full justify-center '
              target='_blank'
              rel='noreferrer'
              href={PersonalInfo.twitter}>
              {" "}
              <Twitter className='h-16 w-16 ' />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
