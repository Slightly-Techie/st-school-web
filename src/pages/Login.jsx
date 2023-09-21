import React from "react";
import Background from "../components/Background";

const Login = () => {
  return (
    <div className="flex ">
      <div className="w-full h-full">
        <h2 className="py-8 px-12 text-xl text-[#615F5F]">
          slightly<span className="font-bold text-black">techie</span>
        </h2>
        <div className="lg:pt-[7.5rem] pt-16 px-40">
          <h2 className="lg:text-[32px] md:text-xl font-bold mt-4">
            Welcome Back!
          </h2>
          <div className="lg:text-xl text-sm text-[#615F5F] mt-4">
            Enter your credentials to access your account
          </div>
          <div className="w-full  mx-auto mt-8">
            <form className="">
              <div className="mb-6">
                <label className="block text-[#615F5F] mb-2">Email</label>
                <input
                  className="border border-gray-300 rounded-[10px] w-full p-2"
                  type="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="mb-6">
                <label className="block text-[#615F5F]  mb-2">Password</label>
                <input
                  className="border border-gray-300 rounded-[10px] w-full p-2"
                  type="password"
                  placeholder="**********"
                />
              </div>
              <button
                className="bg-black text-white font-bold px-3 py-3 w-full rounded-[10px] mt-6"
                type="submit"
              >
                Login
              </button>
              <div className="my-6">
                <input type="checkbox" name="checkbox" className="mr-2" />
                Keep me logged in
              </div>
              <div className="text-base">
                Don&apos;t have an account ?
                <span className="font-bold">Sign Up</span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Background />
      </div>
    </div>
  );
};

export default Login;
