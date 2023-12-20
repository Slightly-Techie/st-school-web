import { FaArrowLeft } from "react-icons/fa";
import Background from "../assets/backgroundImage.jpg";
import GenericFormHeader from "../components/GenericFormHeader";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiUrl } from "../utils/helpers";
import toast from "react-hot-toast";

const ChangePassword = () => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/reset-password`, {
        method: "POST",
        body: {
          token: data["token"],
          password: data["change-password"]
        },
      });

      if (response.ok) {
        console.log("chnage password response ", response);
        toast.success("sent reset email");
      }
    } catch (err) {

      console.warn(err);
      toast.error(String(err));

    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-row w-screen h-screen justify-center items-center overflow-hidden">
      <div className="flex-1 flex w-full justify-center md:px-4 lg:px-0">
        <div className="justify-self-center flex flex-col w-full max-w-[400px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full gap-8 flex flex-col"
          >
            <GenericFormHeader
              title={"Change password? "}
              subtitle={"change and confirm new password"}
            />

            <div className="flex flex-col w-full gap-2">
              <label htmlFor="email">Please Enter New Password</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                className="outline-none p-2 h-10 rounded-lg outline outline-1 outline-[#444444]"
                autoComplete="off"
                {...register("token", { required: true })}
                defaultValue={""}
              />
            </div>

            <div className="flex flex-col w-full gap-2">
              <label htmlFor="email">Confirm New Password</label>
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

export default ChangePassword;
