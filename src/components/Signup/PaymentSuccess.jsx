import React, { useState } from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  const [isPaymentVerified, setPaymentVerified] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
    {isLoading && (
        <div className="max-h-screen mx-6">
        <div className="flex flex-col gap-3  h-screen  justify-center">
          <h1 className="font-bold text-lg text-center">Please Wait...</h1>
          <span className="text-[#706E6E] text-center mb-3">
            Your payment is being verified
          </span>
        </div>
      </div>
    )}
    {!isLoading && isPaymentVerified && (
      <div className="max-h-screen mx-6">
        <div className="flex flex-col gap-3  h-screen  justify-center">
          <h1 className="font-bold text-lg text-center">Welcome!&#127881;</h1>
          <span className="text-[#706E6E] text-center mb-3">
            Your payment has been verified. You can proceed to your first lesson!
          </span>
          <Link to="/dashboard">
            <button
              type="submit"
              className="bg-gray-900 text-white px-4 py-2 w-full rounded-md mb-4"
            >
              Proceed
            </button>
          </Link>
        </div>
      </div>

    )}
    </>
  );
};

export default PaymentSuccess;
