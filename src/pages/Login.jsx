import Background from '../assets/backgroundImage.jpg'
import LoginForm from '../components/Login/LoginForm'

const Login = () => {
  return (
    <div className="flex flex-row w-screen h-screen justify-center items-center overflow-hidden">
    <div className="flex-1 flex w-full justify-center md:px-4 lg:px-0">
      <LoginForm />
    </div>

    <div className="hidden md:flex w-full flex-1 ">
      <img
        src={Background}
        alt="background side img"
        className="w-[100dvw] object-center object-cover h-screen"
      />
    </div>
  </div>
  )
}

export default Login
