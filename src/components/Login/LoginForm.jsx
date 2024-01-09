import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { toast } from "react-hot-toast";
import LoginHeading from "./LoginHeading";
import logo from "../../assets/logo.png";
import { useAuthContext } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import { handleLogin } from "./api/loginApi.js";
import { setToken, verifyAndExtractUser } from "../../utils/helpers";

function LoginForm() {
  const { setUser, setIsAuthenticated } = useAuthContext();
  const [type, setType] = useState("password");
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  const { state } = useLocation()


  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
    if(state?.email) setValue("email", state?.email)
  }, [isAuthenticated]);


  const onSubmit = (data) => {
    const { email, password } = data;
    setLoading(true);

    handleLogin(email, password)
    .then(async(data) => {

      // console.log("login token data ", data)
      const { token } = data;
      const user = await verifyAndExtractUser(token);

      if (user) {
        setUser(user);
        setIsAuthenticated(true);
        setToken(token);
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        toast.error(String(err));
      })
      .finally(() => {
        setLoading(false)
      })
  };

  return (
    <div className="justify-self-center w-full max-w-[480px] mx-4">
      <Link to="/">
          <img
            src={logo}
            alt="SlightlyTechie's logo"
            className="mb-4 md:my-0 absolute top-[5.5rem] left-2 md:top-5 md:left-6"
          />
      </Link>
      <LoginHeading />
      <form
        className=" flex flex-col w-full py-2 gap-5 text-[#444444]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col w-full  gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            className="outline-none p-2 h-10 rounded-lg outline outline-1 outline-[#444444]"
            autoComplete="off"
            {...register("email", { required: true })}
            defaultValue={""}
          />
        </div>
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="password">Password</label>
          <input
            type={type}
            id="password"
            name="password"
            placeholder="•••••••••••••"
            autoComplete="off"
            className="outline-none h-10 p-2 rounded-lg outline outline-1 outline-[#444444]"
            required
            {...register("password", { required: true })}
            defaultValue={""}
          />
          {type === "password" ? (
            <div
              className="absolute right-6 top-[2.5rem] cursor-pointer"
              onClick={() => setType("text")}
            >
              <BsEyeSlashFill size={24} />
            </div>
          ) : (
            <div
              className="absolute right-6 items-center  top-[2.5rem] cursor-pointer"
              onClick={() => setType("password")}
            >
              <BsEyeFill size={24} />
            </div>
          )}
        </div>
        <input
          type="submit"
          id="submit"
          name="submit"
          value={`${loading ? "loading..." : "submit"}`}
          className=" bg-gray-900 hover:bg-gray-800 p-2 h-11 cursor-pointer text-white text-center rounded-lg"
        />
        <div className="flex items-center gap-3 my-2 text-sm justify-between">
          <div className="flex flex-row justify-start gap-2 items-center">
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            className="w-5 h-5"
            value="keep-me-logged-in"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <p>Keep me logged in</p>
          </div>
          <Link to="/forgot_password" className="text-blue-700 cursor-pointer hover:underline">forgot password</Link>
        </div>
        <p>
          <span>Don&apos;t have an account?</span>
          <Link to={"/signup"} className="font-semibold ml-2">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
