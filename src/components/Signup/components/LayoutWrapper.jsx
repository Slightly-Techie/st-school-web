import React from "react";
import logo from "../../../assets/logo.png";
import SignupHeading from "./SignupHeading";

const LayoutWrapper = ({ children }) => {
  return (
    <div className="max-h-screen mx-4">
      <img
        src={logo}
        alt="logo"
        className="mb-4 md:my-0 absolute top-8 left-6"
      />
      <SignupHeading />
      {children}
    </div>
  );
};

export default LayoutWrapper;
