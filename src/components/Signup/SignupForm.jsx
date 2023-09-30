import React, { useState } from "react";
import UserDetailsForm from "./UserDetailsForm";
import UserStackForm from "./UserStackForm";
import UserPaymentForm from "./UserPaymentForm";

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

  const [userStackForm, setUserStackForm] = useState({
    stack: "",
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
        formInput={[userStackForm, setUserStackForm]}
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
  };

  return (
    <div className="justify-self-center w-full max-w-[508px]">
      <div>{pageComponents[page]}</div>
    </div>
  );
};

export default SignupForm;
