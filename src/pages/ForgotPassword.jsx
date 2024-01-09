import { FaArrowLeft, FaTimesCircle } from "react-icons/fa";
import Background from "../assets/backgroundImage.jpg";
import GenericFormHeader from "../components/GenericFormHeader";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiUrl } from "../utils/helpers";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, getValues } = useForm();

  const startResendTimer = () => {
    setResendTimer(60);
    localStorage.setItem("resendTimer", "60");
  };

  const clearResendTimer = () => {
    setResendTimer(0);
    localStorage.removeItem("resendTimer");
  };

  useEffect(() => {
    const savedResendTimer = localStorage.getItem("resendTimer");
    if (savedResendTimer) {
      const remainingTime = parseInt(savedResendTimer, 10);
      if (remainingTime > 0) {
        setResendTimer(remainingTime);

        const timerId = setInterval(() => {
          setResendTimer((prevTimer) => {
            if (prevTimer > 1) {
              localStorage.setItem("resendTimer", (prevTimer - 1).toString());
              return prevTimer - 1;
            } else {
              localStorage.removeItem("resendTimer");
              clearInterval(timerId);
              return 0;
            }
          });
        }, 1000);

        return () => clearInterval(timerId);
      }
    }
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data["reset-email"] }),
      });

      if (response.ok) {
        toast.success("sent reset email");
        navigate("/reset-password")
      }
    } catch (err) {
      toast.error(String(err));
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-row w-screen h-screen justify-center items-center overflow-hidden">
      <div className="flex-1 flex w-full justify-center md:px-4 mx-4 lg:px-0">
        <div className="justify-self-center flex flex-col w-full max-w-[400px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full gap-5 flex flex-col"
          >
            <GenericFormHeader
              title={"Forgot password? "}
              subtitle={"no worries we would send you reset instructions"}
            />

           {emailSent && <div className="w-full bg-green-100 border-2 flex flex-row items-center justify-between border-green-400 p-4 rounded-xl">
              <div>
                <div className="flex flex-col">
                  <span className="text-sm text-green-700">Email sent successfully</span>
                  <span className="text-xs text-green-400">to { getValues("reset-email") } </span>
                </div>
              </div>
              <div>
                <FaTimesCircle 
                onClick={() => setEmailSent(false)}
                className="cursor-pointer hover:text-green-400" />
              </div>
            </div>}

            <div className="flex flex-col w-full gap-2">
              <label htmlFor="email">Please Enter your email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                className="outline-none p-2 h-10 rounded-lg outline outline-1 outline-[#444444]"
                autoComplete="off"
                {...register("reset-email", { required: true })}
                defaultValue={""}
              />
            </div>

            <button
              type="submit"
              className=" bg-gray-900 hover:bg-gray-800 p-2 h-11 cursor-pointer text-white text-center rounded-lg"
            >
              {`${loading ? "loading..." : "Reset Password"}`}
            </button>
          </form>
          {resendTimer > 0 && <div>reset password again in {resendTimer}</div>}
          <Link
            to="/login"
            className="text-center mt-5 flex flex-row items-center hover:underline hover:text-blue-700 gap-1 self-center"
          >
            <span>
              <FaArrowLeft className="text-xs font-light" />
            </span>{" "}
            <span>back to login</span>
          </Link>
        </div>
      </div>

      <div className="hidden md:flex w-full flex-1 ">
        <img
          src={Background}
          alt="background side img"
          className="w-[100dvw] object-center object-cover h-screen"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
