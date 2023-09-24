import Background from '../components/Background'
import LoginForm from '../components/Login/LoginForm'

const Login = () => {
  return (
    <div className="flex flex-col  md:flex-row items-center md:justify-between md:w-screen gap-[8rem]">
      <LoginForm />
      <Background />
    </div>
  )
}

export default Login
