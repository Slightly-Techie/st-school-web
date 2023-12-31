import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LayoutWrapper from "./components/LayoutWrapper";
import { useForm } from "react-hook-form";
import { createUser } from "./api/SignupApi";
import { toast } from "react-hot-toast";
import { PaystackButton } from 'react-paystack'

const UserPaymentForm = ({ onPrevious, formInput }) => {
  const [userForm, setUserForm] = formInput;
  const [isPaid, setIsPaid] = useState(false)
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm();

  const paymentValue = watch("payment_type")
  const phoneNumber = watch("phone_number")

  const percentageToAdd = 0.0195;
  const baseAmount = getValues('payment_type') === 'Full' ? 800 * 100 : 300 * 100;
  
  const componentProps = {
      email: userForm.email,
      amount: baseAmount + (baseAmount * percentageToAdd),
      currency: 'GHS',
      metadata: {
          name: `${userForm['first_name']} ${userForm['last_name']}`,
          phone: phoneNumber,
  },
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    text: "Proceed",
    onSuccess: (response) => {

    //   {
    //     "reference": "T679202112520310",
    //     "trans": "3230325782",
    //     "status": "success",
    //     "message": "Approved",
    //     "transaction": "3230325782",
    //     "trxref": "T679202112520310",
    //     "redirecturl": "?trxref=T679202112520310&reference=T679202112520310"
    // }

    const options = {
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_PAYSTACK_PRIVATE_KEY}`
      }
    }

    fetch(`https://api.paystack.co/transaction/verify/${response.reference}`, options)
    .then(response => response.json())
    .then(data => {

      if(data.status) {

        const phoneNumber = getValues('phone_number')
        const paymentType = paymentValue
        const userInfo = {...userForm, ['phone_number']: phoneNumber, ['payment_type']: paymentType, ['reference']: response.reference}


        createUser(userInfo)
        .then((responseData) => {
      
          const { email } = responseData;
          toast.success("user created successfully");
          navigate("/login", { state: { email } });
        })
        .catch((err) => {
          toast.error(String(err));
          toast.error("email already in use or network error")
        });
      }
    })
    .catch(err => console.warn("error on line 55 ", err))
    }
  }


  const onSubmit = (data) => {
    // phone number, payment
    const formDataSubmit = { ...userForm, ...data };
    setUserForm({ ...formDataSubmit });

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
            {...register("payment_type", { required: true })}
            defaultValue={userForm["payment_type"]}
          >
            <option value="" disabled>
              Select Payment Type
            </option>
            <option name="partial" value="Part">
              Partial Payment &#40;GHC 300/m&#41;
            </option>
            <option name="full" value="Full">
              Full Payment &#40;GHC 800&#41;
            </option>
          </select>
        </div>

        <div className="mb-7">
          <label htmlFor="password" className="block text-[#706E6E]">
            Enter your Mobile Money Number
          </label>
          <input
            type="text"
            name="phone"
            placeholder="024-736-9812"
            className="border border-[#C9C9C9] focus:outline-gray-600  w-full p-2 rounded-lg "
            {...register("phone_number", {
              required: "Enter a valid phone number",
              maxLength: { value: 10, message: "Should be a 10 digit number" },
              pattern: {
                value: /^0\d{9}$/,
                message: "Enter a valid phone number",
              },
            })}
            defaultValue={userForm["phone_number"] || null}
          />
          {errors.phoneNumber && (
            <p className="text-red-600">{errors["phone_number"].message}</p>
          )}
        </div>
        <div className="flex md:flex-row items-center  flex-col gap-2">
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              onPrevious();
            }}
            className="bg-white text-black border border-gray-500 px-4 py-2 w-full rounded-lg hover:border-gray-900"
          >
            Go Back
          </button>
          <PaystackButton {...componentProps} className="bg-gray-900 text-white px-4 py-2 w-full rounded-lg md:mb-0 border border-gray-900 hover:bg-gray-800 mb-4" />
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
