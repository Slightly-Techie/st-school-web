import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated]);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    setLoading(true);

    handleLogin(email, password)
      .then((data) => {
        const { token } = data;
        const user = verifyAndExtractUser(token);

        if (user) {
          setUser(user);
          setIsAuthenticated(true);
          setToken(token);
          setLoading(false);
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        toast.error(err);
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col justify-center items-start p-3 md:px-[7rem] mx-auto md:ml-20 max-w-[100dvw] md:w-[80dvw] h-screen relative ">
      <img
        src={logo}
        alt="SlightlyTechie's logo"
        className="mb-4 md:my-0 absolute top-[5.5rem] left-2 md:top-5 md:left-6"
      />
      <LoginHeading />
      <form
        className=" flex flex-col w-full p-2 gap-5 text-[#444444]"
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
          className=" bg-black p-2 h-11 cursor-pointer text-white text-center rounded-lg"
        />
        <div className="flex items-center gap-3 my-2">
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
