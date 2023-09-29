import { Link } from "react-router-dom";
import LayoutWrapper from "./components/LayoutWrapper";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const UserStackForm = ({ onNext, onPrevious, formInput }) => {
  
  const [techStack, setTechStack] = useState(["frontend", "backend", "mobile"]);
  const [languageOptions, setLanguageOptions] = useState([]);
  const [userStackForm, setUserStacKForm] = formInput

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const watchTechStackChange = watch("techStack");

  const getLanguageOptions = () => {
    let options = [];
    switch (watchTechStackChange) {
      case "frontend":
        options = ["JavaScript-react", "JavaScript-angular", "Python-django"];
        break;
      case "backend":
        options = ["Ruby", "Python", "Java"];
        break;
      case "mobile":
        options = ["React-Native", "Flutter", "Swift"];
        break;
      default:
        options = [];
    }
    setLanguageOptions(options);
  };
  

  useEffect(() => {
    getLanguageOptions();
  }, [watchTechStackChange]);

  /* 
    validation to check if fields are empty
  */


  const onSubmit = (data) => {
    console.log("user stack form data is ", data)
    setUserStacKForm(data)
    onNext()
  }

  const handleNavigatePrevious = (e) => {
    e.preventDefault();
    onPrevious();
  };

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
            defaultValue={UserStackForm?.techStack}
            {...register("techStack", { required: true})}
          >
            <option value="" disabled hidden>
              {" "}
              Please select your stack{" "}
            </option>
            {techStack.length > 0 &&
              techStack.map((stack) => <option key={stack} value={stack}>{stack}</option>)}
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
            {languageOptions.length > 0 && languageOptions.map((language) => (
              <option
                className="cursor-pointer"
                key={language}
                value={language.toLowerCase()}
              >
                {language}
              </option>
            ))}
          </select>
        </div>
        <div className="flex md:flex-row items-center flex-col gap-2">
          <button
            type="submit"
            onClick={handleNavigatePrevious}
            className="bg-white text-black border border-gray-500 px-4 py-2 w-full rounded-lg hover:border-gray-900"
          >
            Go Back
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
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
