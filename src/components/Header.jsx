import clock from './../assets/clock.png'
import circled from './../assets/circled.png'

const Header = ({ title, para, stream, duration }) => {
  return (
    <header className="flex flex-col md:flex-row md:items-center mt-10 justify-between border-b py-3 md:pb-4 md:gap-0 gap-4">
      <div>
        <h1 className="font-bold text-3xl">{title}</h1>
        <p className="text-[#444444]">{para}</p>
      </div>
      <div className="flex flex-col space-y-1 text-[#444444]">
        <p className="space-x-2 inline-flex items-center">
          {stream && (
            <>
              <span>
                <img src={circled} alt="circled-icon" />
              </span>
              <span>{stream}</span>
            </>
          )}
        </p>
        <p className="space-x-2 inline-flex items-center">
          {duration && (
            <>
              <span>
                <img src={clock} alt="clock-icon" />
              </span>
              <span>{duration}</span>
            </>
          )}
        </p>
      </div>
    </header>
  )
}

export default Header
