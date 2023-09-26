import clock from '../../assets/clock.png'
import circled from '../../assets/circled.png'

const LessonHeading = ({title, para}) => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between border-b p-3 space-y-8 md:p-5">
      <div>
        <h1 className="font-bold text-3xl">{title}</h1>
        <p className="text-[#444444]">{para}</p>
      </div>
      <div className="flex flex-col space-y-1 text-[#444444]">
        <p className="space-x-2 inline-flex items-center">
          <span>
            <img src={circled} alt="circled-icon" />
          </span>
          <span>Backend (Caramel) - Javascript</span>
        </p>
        <p className="space-x-2 inline-flex items-center">
          <span>
            <img src={clock} alt="clock-icon" />
          </span>
          <span>90d</span>
        </p>
      </div>
    </header>
  )
}

export default LessonHeading
