import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import { toast } from 'react-hot-toast'
import LoginHeading from './LoginHeading'
import logo from '../../assets/logo.png'
function LoginForm() {
  const [type, setType] = useState('password')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isChecked, setIsChecked] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()

    if (email.valueOf() === '' || password.valueOf() === '') {
      toast.error('Please fill all the fields')
    } else {
      console.log({ email, password, isChecked })
      toast.success('Login Successful')
    }

    if (isChecked) {
      setIsChecked(true)
      toast.success('Always logged in')
    } else {
      setIsChecked(false)
    }

    setEmail('')
    setPassword('')
  }
  return (
    <div className="flex flex-col justify-center items-start p-3 md:pl-[12rem] mx-auto max-w-[100dvw] md:w-[70dvw] h-screen relative ">
      <img
        src={logo}
        alt="SlightlyTechie's logo"
        className="mb-4 md:my-0 absolute top-[5.5rem] left-2 md:top-5 md:left-10"
      />
      <LoginHeading />
      <form
        className=" flex flex-col w-full p-2 gap-5 text-[#444444]"
        onSubmit={handleLogin}
      >
        <div className="flex flex-col w-full md:w-[25rem] gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            className="outline-none p-2 rounded-lg outline outline-1 outline-[#444444]"
            value={email.trim()}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="password">Password</label>
          <input
            type={type}
            name="password"
            placeholder="pass********"
            className="outline-none  p-2 rounded-lg outline outline-1 outline-[#444444]"
            value={password.trim()}
            onChange={(e) => setPassword(e.target.value)}
          />
          {type === 'password' ? (
            <div
              className="absolute right-6 top-[2.5rem] cursor-pointer"
              onClick={() => setType('text')}
            >
              <BsEyeSlashFill size={24} />
            </div>
          ) : (
            <div
              className="absolute right-6 items-center  top-[2.5rem] cursor-pointer"
              onClick={() => setType('password')}
            >
              <BsEyeFill size={24} />
            </div>
          )}
        </div>
        <input
          type="submit"
          value="Login"
          className=" bg-black p-2 cursor-pointer text-white text-center rounded-lg"
        />
        <div className="flex items-center gap-3 my-2">
          <input
            type="checkbox"
            className="w-5 h-5"
            value="keep-me-logged-in"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <p>Keep me logged in</p>
        </div>
        <p>
          <span>Don&apos;t have an account?</span>
          <Link to={'/signup'} className="font-semibold ml-2">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  )
}

export default LoginForm
