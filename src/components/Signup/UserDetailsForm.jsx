import React, { useState } from "react";
import { Link } from "react-router-dom";
import LayoutWrapper from "./components/LayoutWrapper";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useForm } from "react-hook-form";

const UserDetailsForm = ({ onNext, formInput }) => {
  const [type, setType] = useState("password");

  const [userForm, setUserForm] = formInput;

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  

  const onSubmit = (data) => {

    // remove the confirmPassword before submiting
    delete data.confirmPassword

    const userDetailForm = {...userForm, ...data}
    setUserForm({...userDetailForm})
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
              defaultValue={userForm?.firstname || ''}
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
              defaultValue={userForm?.lastname || ''}
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
            type="text"
            placeholder="example@gmail.com"
            name="email"
            className="border border-[#C9C9C9] focus:outline-gray-600  w-full p-2 rounded-lg "
            required
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            defaultValue={userForm?.email || ''}
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
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
            {...register("password", {
              required: true,
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, and one number.",
              },
            })}
            defaultValue={userForm?.password || ''}
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
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
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
            {...register("confirmPassword", {
              required: true,
              validate: (val) => {
                const { password } = getValues();
                return password === val || "Passwords do not match!";
              },
            })}
            defaultValue={userForm?.confirmPassword || ''}
          />
          {errors.confirmPassword && (
            <p className="text-red-600">{errors.confirmPassword.message}</p>
          )}
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
