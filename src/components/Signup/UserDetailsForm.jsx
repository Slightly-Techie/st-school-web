import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LayoutWrapper from './components/LayoutWrapper'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'

const UserDetailsForm = ({ onNext }) => {
  const [type, setType] = useState('password')

  const handleSubmit = (e) => {
    e.preventDefault()
    onNext()
  }
  return (
    <LayoutWrapper>
      <form>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div className="firstname">
            <label
              htmlFor="firstName"
              className="block text-gray-800 font-medium mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="John"
              className="border border-[#C9C9C9] focus:outline-gray-600  w-full p-2 rounded-lg "
              required
            />
          </div>
          <div className="lastname">
            <label
              htmlFor="LastName"
              className="block text-gray-800 font-medium mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Doe"
              className="border border-[#C9C9C9] focus:outline-gray-600  w-full p-2 rounded-lg "
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-800 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            name="email"
            className="border border-[#C9C9C9] focus:outline-gray-600  w-full p-2 rounded-lg "
            required
          />
        </div>
        <div className="mb-4 relative">
          <label
            htmlFor="password"
            className="block text-gray-800 font-medium mb-2"
          >
            Password
          </label>
          <input
            type={type}
            placeholder="•••••••••••••"
            name="password"
            className="border border-[#C9C9C9] focus:outline-gray-600  w-full p-2 rounded-lg "
            required
          />
          {type === 'password' ? (
            <div
              className="absolute right-6 top-[2.5rem] cursor-pointer"
              onClick={() => setType('text')}
            >
              <BsEyeSlashFill size={24} className="text-[#444444]" />
            </div>
          ) : (
            <div
              className="absolute right-6 items-center  top-[2.5rem] cursor-pointer"
              onClick={() => setType('password')}
            >
              <BsEyeFill size={24} className="text-[#444444]" />
            </div>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-800 font-medium mb-2"
          >
            Confirm Password
          </label>
          <input
            type={type}
            placeholder="•••••••••••••"
            name="confirmPassword"
            className="border border-[#C9C9C9] focus:outline-gray-600  w-full p-2 rounded-lg "
            required
          />
        </div>
        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-gray-900 text-white px-4 py-2 w-full rounded-lg mb-4 hover:bg-gray-800"
          >
            Proceed
          </button>
        </div>
        <div className="pb-3">
          <p>
            <span>Already have an account?</span>
            <Link to={'/'} className="font-semibold ml-2">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </LayoutWrapper>
  )
}

export default UserDetailsForm
