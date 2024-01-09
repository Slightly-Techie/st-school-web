import logo from "../../../assets/logo.png";
import SignupHeading from "./SignupHeading";
import {Link} from "react-router-dom";

const LayoutWrapper = ({ children }) => {
  return (
    <div className="max-h-screen mx-4">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="mb-4 md:my-0 absolute top-8 left-6"
          />
        </Link>
      <SignupHeading />
      {children}
    </div>
  );
};

export default LayoutWrapper;
