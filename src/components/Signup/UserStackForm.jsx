import React from "react";
import { Link } from "react-router-dom";
import LayoutWrapper from "./components/LayoutWrapper";
import { useState } from "react";

const UserStackForm = ({onNext, onPrevious}) => {

    const [techStack, setTechStack] = useState("");
    const [languageOptions, setLanguageOptions] = useState([]);
  
    const handleTechStackChange = (e) => {
      const selectedTechStack = e.target.value;
      setTechStack(selectedTechStack);
  
      if (selectedTechStack === "frontend") {
        setLanguageOptions(["JavaScript-react","JavaScript-angular","Python-django"]);
      } else if (selectedTechStack === "backend") {
        setLanguageOptions(["Ruby", "Python", "Java"]);
      } else if (selectedTechStack === "Mobile") {
        setLanguageOptions(["React-Native", "Flutter", "Swift"]);
      }
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  const handleNavigatePrevious = (e) => {
    e.preventDefault()
    onPrevious()
  }
  

  return (
    <LayoutWrapper>
      <form>
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
          value={techStack}
          onChange={handleTechStackChange}
        >
          <option value=""></option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="Mobile">Mobile</option>
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
        >
          {languageOptions.map((language) => (
            <option className="cursor-pointer" key={language} value={language.toLowerCase()}>
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
