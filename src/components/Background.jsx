import background from '../assets/backgroundImage.jpg'

const Background = () => {
  return (
    <div className="hidden md:flex h-screen  float-right overflow-hidden">
      <img
        src={background}
        alt="background-img"
        className="w-[90dvw] object-center object-fill"
      />
    </div>
  )
}

export default Background
