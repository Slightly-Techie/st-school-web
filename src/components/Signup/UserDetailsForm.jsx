import React from 'react'
import { Link } from 'react-router-dom';
import LayoutWrapper from './components/LayoutWrapper';

const UserDetailsForm = ({onNext}) => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        onNext();
    }
  return (
    <LayoutWrapper>
      <form>
        <div className="mb-7">
          <label
            htmlFor="fullName"
            className="block text-gray-800 font-medium mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="John Doe"
            className="border border-[#C9C9C9] focus:outline-gray-600  w-full p-2 rounded-lg "
            required
          />
        </div>
        <div className="mb-7">
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
        <div className="mb-7">
          <label
            htmlFor="password"
            className="block text-gray-800 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="************"
            name="password"
            className="border border-[#C9C9C9] focus:outline-gray-600  w-full p-2 rounded-lg "
            required
          />
        </div>
        <div className="mb-7">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-800 font-medium mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="************"
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
            <Link to={"/login"} className="font-semibold ml-2">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </LayoutWrapper>
  );
}

export default UserDetailsForm