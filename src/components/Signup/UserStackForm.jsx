import { Link } from "react-router-dom";
import LayoutWrapper from "./components/LayoutWrapper";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { fetchTechStack } from "./api/SignupApi";

const UserStackForm = ({ onNext, onPrevious, formInput }) => {
  const [techStackApi, setTechStackApi] = useState([]);

  const [userStackForm, setUserStackForm] = formInput;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const watchTechStackChange = watch("stack");

  const onSubmit = (data) => {
    setUserStackForm(data);
    onNext();
  };

  const handleNavigatePrevious = (e) => {
    e.preventDefault();
    onPrevious();
  };

  useEffect(() => {

    fetchTechStack()
      .then((responseData) => setTechStackApi(responseData))
      .catch((err) => console.error(err));

  }, []);

  return (
    <LayoutWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-7">
          <label
            htmlFor="stack"
            className="block text-gray-800 font-medium mb-2"
          >
            Tech Stack
          </label>
          <select
            type="text"
            id="techStack"
            name="techStack"
            className="border border-[#C9C9C9] focus:outline-gray-600 w-full p-2 rounded-lg"
            required
            defaultValue={userStackForm?.stack}
            {...register("stack", { required: true })}
          >
            <option value="" disabled>
              Please select your stack
            </option>
            {techStackApi.length > 0 &&
              techStackApi.map((stack) => (
                <option key={stack?.name} value={stack?.name}>
                  {stack?.name}
                </option>
              ))}
          </select>
        </div>
        <div className="mb-7">
          <label
            htmlFor="language"
            className="block text-gray-800 font-medium mb-2"
          >
            Language
          </label>
          <select
            type="text"
            id="language"
            name="language"
            className="border border-[#050505] cursor-pointer focus:outline-gray-600 w-full p-2 rounded-lg"
            required
            {...register("language", { required: true })}
            defaultValue={userStackForm?.language}
          >
            {watchTechStackChange &&
              techStackApi
                .find((stack) => stack?.name === watchTechStackChange)
                ?.stack_options.map((language) => (
                  <option
                    className="cursor-pointer"
                    key={language?.name}
                    value={language?.name.toLowerCase()}
                  >
                    {language?.name}
                  </option>
                ))}
          </select>
        </div>
        <div className="flex md:flex-row items-center flex-col gap-2">
          <button
            type="button"
            onClick={handleNavigatePrevious}
            className="bg-white text-black border border-gray-500 px-4 py-2 w-full rounded-lg hover:border-gray-900"
          >
            Go Back
          </button>
          <button
            type="submit"
            className="bg-gray-900 text-white px-4 py-2 w-full rounded-lg md:mb-0 border border-gray-900 mb-4 hover:bg-gray-800"
          >
            Proceed
          </button>
        </div>
        <div className="pb-3 md:mt-4">
          <p>
            <span>Already have an account?</span>
            <Link to={"/login"} className="font-semibold ml-2">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </LayoutWrapper>
  );
};

export default UserStackForm;
