import React from "react";
import { Link } from "react-router-dom";
import LayoutWrapper from "./components/LayoutWrapper";
import { useForm } from "react-hook-form";

const UserPaymentForm = ({ onNext, onPrevious, formInput, formData }) => {
  const [paymentForm, setPaymentForm] = formInput;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* 
    validation checks 
    -> phone number must be valid phone number - length, type etc
    -> fields must not be empty...
  */

  const onSubmit = (data) => {

    // every data in this form ends up here...
    setPaymentForm(data);
    const userData = {...formData, ...data}
    console.log("user payment data ", userData);
    onNext()
  };

  const handleNavigatePrevious = (e) => {
    e.preventDefault();
    onPrevious();
  };

  return (
    <LayoutWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-7">
          <label htmlFor="text" className="block text-[#706E6E] mb-2">
            Would you like to make a full or partial payment ?
          </label>
          <select
            type="text"
            id="paymentType"
            name="paymentType"
            placeholder="make partial/full payment"
            className="border border-[#C9C9C9] focus:outline-gray-600  w-full p-2 rounded-lg text-[#706E6E] "
            required
            {...register("paymentType", { required: true })}
            defaultValue={paymentForm?.paymentType}
          >
            <option name="partial">Partial Payment &#40;GHC 100/m&#41;</option>
            <option name="full">Full Payment &#40;GHC 300/m&#41;</option>
          </select>
        </div>
        <div className="mb-7">
          <label htmlFor="text" className="block text-[#706E6E] mb-2">
            Select your payment option
          </label>
          <select
            type="paymentOption"
            name="paymentOption"
            className="border border-[#C9C9C9] focus:outline-gray-600  w-full p-2 rounded-lg text-[#706E6E]"
            required
            {...register("paymentOption", { required: true })}
            defaultValue={paymentForm?.paymentOption}
          >
            <option value="mtn">MTN Mobile Money</option>
            <option value="vodafone">Vodafone Cash</option>
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
            {...register("phoneNumber", { required: true })}
            defaultValue={paymentForm?.phoneNumber}
          />
        </div>
        <div className="flex md:flex-row items-center  flex-col gap-2">
          <button
            type="submit"
            onClick={handleNavigatePrevious}
            className="bg-white text-black border border-gray-500 px-4 py-2 w-full rounded-lg hover:border-gray-900"
          >
            Go Back
          </button>
          <button
            type="submit"
            className="bg-gray-900 text-white px-4 py-2 w-full rounded-lg md:mb-0 border border-gray-900 hover:bg-gray-800 mb-4"
          >
            Proceed
          </button>
        </div>
        <div className="pb-3 md:mt-4">
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
