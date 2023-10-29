import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Slider({ heading, children }) {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 340;
    }
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 340;
    }
  };

  return (
    <div>
      <div>
        <div className="flex gap-5 items-center justify-between p-5 lg:p-0">
          <h1 className="text-2xl lg:text-3xl font-semibold">
            {heading}
          </h1>

          <div className="flex gap-5 items-center">
            <button
              title="scroll left"
              className="bg-white text-black p-3 rounded-full"
              onClick={slideLeft}
            >
              <AiOutlineArrowLeft />
            </button>
            <button
              title="scroll right"
              className="bg-white text-black p-3 rounded-full"
              onClick={slideRight}
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
        <div className="row-container w-full" id="slider">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Slider;
