import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LayoutWrapper from "./LayoutWrapper";

const UserPaymentForm = ({ onNext }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <LayoutWrapper>
      <form>
        <div className="mb-7">
          <label htmlFor="text" className="block text-[#706E6E] mb-2">
            Would you like to make a full or partial payment ?
          </label>
          <select
            type="text"
            id="fullName"
            name="fullName"
            placeholder="John Doe"
            className="border border-[#C9C9C9] focus:outline-gray-600  w-full p-2 rounded-lg text-[#706E6E] "
            required
          >
            <option name="frontend">Partial Payment &#40;GHC 100/m&#41;</option>
            <option name="frontend">Full Payment &#40;GHC 300/m&#41;</option>
          </select>
        </div>
        <div className="mb-7">
          <label htmlFor="text" className="block text-[#706E6E] mb-2">
            Select your payment option
          </label>
          <select
            type="email"
            name="email"
            className="border border-[#C9C9C9] focus:outline-gray-600  w-full p-2 rounded-lg text-[#706E6E]"
            required
          >
            <option value="mtn">MTN Mobile Money</option>
            <option value="voda">Vodafone Cash</option>
          </select>
        </div>
        <div className="mb-7">
          <label htmlFor="password" className="block text-[#706E6E]">
            Enter your Mobile Money Number
          </label>
          <input
            type="text"
            name="password"
            placeholder="024-736-9812"
            className="border border-[#C9C9C9] focus:outline-gray-600  w-full p-2 rounded-lg "
            // required
          />
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

export default UserPaymentForm;
