import { ReactComponent as Discord } from "../img/icons/icons8-discord.svg"
import { ReactComponent as Github } from "../img/icons/icons8-github.svg"
import { ReactComponent as Linkedin } from "../img/icons/icons8-linkedin.svg"

const Contact = () => {
  return (
    <div className='h-full w-full grid grid-cols-1 xl:grid-cols-2 p-5 overflow-auto'>
      <div className='flex flex-col justify-center items-center '>
        <h1 className='w-5/6 text-3xl md:text-4xl lg:text-5xl uppercase text-orange font-semibold'>
          Get in Touch
        </h1>

        <div className='w-5/6 h-auto text-2xl md:text-3xl lg:text-4xl space-y-2 flex flex-col'>
          <p className='text-3xl'>
            Dropping a line to say hi, ask for my resume or see if we can build
            something amazing together? I’d love to hear from you! Fill in your
            info in the form below and I look forward to hearing from you!
          </p>
          <div className='p-5 pl-0 w-full '>
            <input
              type='text'
              placeholder='Name'
              className='p-4 w-full rounded'
            />
          </div>
          <div className='p-5 pl-0 w-full'>
            <input
              type='email'
              placeholder='Email'
              className='p-4 w-full  rounded'
            />
          </div>
          <div className='p-5 pl-0 w-full'>
            <textarea
              placeholder='Your message'
              className='p-4 w-full rounded'
            />
          </div>
        </div>
        <button className='flex px-4 py-2 bg-orange rounded text-2xl md:text-3xl lg:text-4xl'>
          Send message
        </button>
      </div>

      <div className='flex flex-col justify-center items-center py-10'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl'>
          Feeling social? Find me on these online spaces too!
        </h1>
        <div className='flex justify-center items-center gap-5 '>
          <Linkedin className='h-16 w-16  ' />
          <Github className='h-14 w-16  ' />
          <Discord className='h-16 w-16 ' />
        </div>
      </div>
    </div>
  )
}

export default Contact
