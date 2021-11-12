import techIcons from "../img/icons/icons"

const Card = ({ cardStyle, title, img, description, technologies }) => {
  return (
    <div className={cardStyle}>
      <div className='flex flex-col h-full relative '>
        <div className=' text-2xl lg:text-4xl uppercase text-center'>
          {title}
        </div>
        <div className='bg-blue-200 h-full flex'>
          <img
            src={img}
            className='w-full object-cover rounded-lg shadow-xl hover:shadow-2xl '
          />
        </div>
        <div>{description}</div>
      </div>
      <span className='absolute mt-2 top-16 left-0 md:-left-2 space-y-3 z-50 w-7 h-7 md:w-10 md:h-10'>
        {technologies.map((el) =>
          techIcons.hasOwnProperty(el) ? techIcons[el]() : null
        )}{" "}
      </span>
    </div>
  )
}

export default Card
