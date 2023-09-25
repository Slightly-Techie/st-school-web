import React, { useState } from "react";
import UserDetailsForm from "./UserDetailsForm";
import UserStackForm from "./UserStackForm";
import UserPaymentForm from "./UserPaymentForm";
import PaymentSuccess from "./PaymentSuccess";

const SignupForm = () => {
  const [page, setPage] = useState(0);

  const PageDisplay = () => {
    if (page === 0) {
      return <UserDetailsForm onNext={() => setPage(1)} />;
    } else if (page === 1) {
      return <UserStackForm onNext={() => setPage(2)} />;
    } else if (page === 2) {
      return <UserPaymentForm onNext={() => setPage(3)} />;
    } else {
      return <PaymentSuccess />;
    }
  };

  return (
    <div>
      <div>{PageDisplay()}</div>
    </div>
  );
};

export default SignupForm;
