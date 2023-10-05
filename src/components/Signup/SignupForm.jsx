import React, { useState } from "react";
import UserDetailsForm from "./UserDetailsForm";
import UserStackForm from "./UserStackForm";
import UserPaymentForm from "./UserPaymentForm";

const SignupForm = () => {
  const [page, setPage] = useState(0);

  const navigateToNextPage = () => setPage(page + 1);
  const navigateToPreviousPage = () => setPage(page - 1);

  const [userForm, setUserForm] = useState({})

  const pageComponents = {
    0: (
      <UserDetailsForm
        formInput={[userForm, setUserForm]}
        onNext={navigateToNextPage}
      />
    ),
    1: (
      <UserStackForm
        formInput={[userForm, setUserForm]}
        onNext={navigateToNextPage}
        onPrevious={navigateToPreviousPage}
      />
    ),
    2: (
      <UserPaymentForm
        formInput={[userForm, setUserForm]}
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
