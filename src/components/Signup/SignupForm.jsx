import React, { useState } from "react";
import UserDetailsForm from "./UserDetailsForm";
import UserStackForm from "./UserStackForm";
import UserPaymentForm from "./UserPaymentForm";
import PaymentSuccess from "./PaymentSuccess";

const SignupForm = () => {
  const [page, setPage] = useState(0);

  const navigateToNextPage = () => setPage(page + 1)
  const navigateToPreviousPage = () => setPage(page - 1)
  
  const pageComponents = {
    0: <UserDetailsForm onNext={navigateToNextPage} />,
    1: <UserStackForm onNext={navigateToNextPage} onPrevious={navigateToPreviousPage} />,
    2: <UserPaymentForm onNext={navigateToNextPage} onPrevious={navigateToPreviousPage} />,
    3: <PaymentSuccess />
  };



  return (
    <div className="justify-self-center w-full max-w-[508px]">
      <div>{pageComponents[page]}</div>
    </div>
  );
};

export default SignupForm;
