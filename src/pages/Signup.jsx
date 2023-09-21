import Background from "../components/Background";
import Select from "react-select";

const Signup = () => {
  const options_stack = [
    { value: "Frontend", label: "Frontend Development" },
    { value: "backend", label: "Backend Development" },
    { value: "fullstack", label: "Fullstack" },
  ];
  const options_lang = [
    { value: "javascript", label: "Javascript" },
    { value: "ruby", label: "Ruby" },
    { value: "node", label: "Node" },
  ];

  return (
    <div className="flex ">
      <div className="w-full h-full">
        <h2 className="py-8 px-12 text-xl text-[#615F5F]">
          slightly<span className="font-bold text-black">techie</span>
        </h2>
        <div className=" px-40">
          <h2 className="lg:text-[32px] md:text-xl font-bold mt-4">
            Welcome to ST School!
          </h2>
          <div className="lg:text-xl text-sm text-[#615F5F] mt-4">
            Create an account. Join 30+ students level up in tech!
          </div>
          <div className="w-full  mx-auto mt-8">
            <form className="">
              <div className="mb-6">
                <label className="block text-[#615F5F] mb-2">Tech Stack</label>
                <Select
                  options={options_stack}
                  // styles={{
                  //   control: () => ({
                  //     border: "1px solid #E5E7EB",
                  //   }),
                  // }}
                />
              </div>
              <div className="mb-6">
                <label className="block text-[#615F5F]  mb-2">
                  Backend Language
                </label>
                <Select options={options_lang} />
              </div>
              <button
                className="bg-black text-white font-bold px-3 py-3 w-full rounded-[10px] mt-6"
                type="submit"
              >
                Proceed
              </button>
              
              <div className="text-base my-6">
               Already have an account ?{" "}
                <span className="font-bold">Sign In</span>
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

export default Signup;
