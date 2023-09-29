import React, { useState } from "react";
import UserDetailsForm from "./UserDetailsForm";
import UserStackForm from "./UserStackForm";
import UserPaymentForm from "./UserPaymentForm";
import PaymentSuccess from "./PaymentSuccess";

const SignupForm = () => {
  const [page, setPage] = useState(0);

  const navigateToNextPage = () => setPage(page + 1);
  const navigateToPreviousPage = () => setPage(page - 1);

  const [userDetail, setUserDetail] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [userStackForm, setUserStacKForm] = useState({
    techStack: "",
    language: "",
  });

  const [paymentForm, setPaymentForm] = useState({
    paymentType: "",
    paymentOption: "",
    phoneNumber: "",
  });

  const pageComponents = {
    0: (
      <UserDetailsForm
        formInput={[userDetail, setUserDetail]}
        onNext={navigateToNextPage}
      />
    ),
    1: (
      <UserStackForm
        formInput={[userStackForm, setUserStacKForm]}
        onNext={navigateToNextPage}
        onPrevious={navigateToPreviousPage}
      />
    ),
    2: (
      <UserPaymentForm
        formInput={[paymentForm, setPaymentForm]}
        formData={{ ...userDetail, ...userStackForm}}
        onNext={navigateToNextPage}
        onPrevious={navigateToPreviousPage}
      />
    ),
    3: <PaymentSuccess />,
  };

  return (
    <div className="justify-self-center w-full max-w-[508px]">
      <div>{pageComponents[page]}</div>
    </div>
  );
};

export default SignupForm;
