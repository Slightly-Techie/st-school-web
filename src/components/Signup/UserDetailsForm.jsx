import React, { useState } from "react";
import { Link } from "react-router-dom";
import LayoutWrapper from "./components/LayoutWrapper";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useForm } from "react-hook-form";

const UserDetailsForm = ({ onNext, formInput }) => {
  const [type, setType] = useState("password");
  const [confirmPassword, setConfirmPassword] = useState('')

  const [userDetail, setUserDetail] = formInput;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  /*
    validation checks 
    -> check if password is same as confirm password -> return error msg
    -> check if email is a valid email type and not empty
    -> check if password is a strong password type and return error or success msg
    -> All should probably have a min length and a maxLength
  */

  const onSubmit = (data) => {
    console.log("data is  ", data);
    console.log("confirm password ", confirmPassword)
    setUserDetail(data);
    onNext();
  };

  return (
    <LayoutWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              {...register("firstname", { required: true })}
              defaultValue={userDetail?.firstname}
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
              {...register("lastname", { required: true })}
              defaultValue={userDetail?.lastname}
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
            {...register("email", { required: true })}
            defaultValue={userDetail?.email}
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
            {...register("password", { required: true })}
            defaultValue={userDetail?.password}
          />

          <div
            className="absolute right-6 top-[2.5rem] cursor-pointer"
            onClick={() =>
              type === "password" ? setType("text") : setType("password")
            }
          >
            {type === "password" ? (
              <BsEyeSlashFill size={24} className="text-[#444444]" />
            ) : (
              <BsEyeFill size={24} className="text-[#444444]" />
            )}
          </div>
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
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-gray-900 text-white px-4 py-2 w-full rounded-lg mb-4 hover:bg-gray-800"
          >
            Proceed
          </button>
        </div>
        <div className="pb-3">
          <p>
            <span>Already have an account?</span>
            <Link to={"/"} className="font-semibold ml-2">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </LayoutWrapper>
  );
};

export default UserDetailsForm;
