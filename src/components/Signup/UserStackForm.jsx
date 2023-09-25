import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LayoutWrapper from "./LayoutWrapper";

const UserStackForm = ({onNext}) => {
const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <LayoutWrapper>
      <form>
        <div className="mb-7">
          <label
            htmlFor="fullName"
            className="block text-gray-800 font-medium mb-2"
          >
            Tech Stack
          </label>
          <select
            type="text"
            id="fullName"
            name="fullName"
            placeholder="John Doe"
            className="border border-[#C9C9C9] focus:outline-gray-600  w-full p-2 rounded-lg "
            required
          >
            <option name="frontend"> Frontend</option>
            <option name="backend">Backend</option>
          </select>
        </div>
        <div className="mb-7">
          <label
            htmlFor="email"
            className="block text-gray-800 font-medium mb-2"
          >
            Backend Language
          </label>
          <select
            type="email"
            id="email"
            name="email"
            className="border border-[#050505] focus:outline-gray-600  w-full p-2 rounded-lg "
            required
          >
            <option name="male"> Javscript</option>
            <option name="female">Ruby</option>
            <option name="female">Python</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <button
            type="submit"
            onClick={() => navigate(-1)}
            className="bg-white text-black border border-black px-4 py-2 w-full rounded-lg"
          >
            Go Back
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-gray-900 text-white px-4 py-2 w-full rounded-lg mb-4"
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
};

export default UserStackForm;
