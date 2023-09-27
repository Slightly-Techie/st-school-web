import clock from "../../assets/clock.png";
import target from "../../assets/target-05.png";

const AssignmentHeading = () => {
    return (
        <div className="flex justify-between px-2 border-b pb-2 border-gray-400 mb-4">
          <div className="flex flex-col">
              <h1>Your Assignments 🧑🏾‍💻</h1>
              <p className="text-gray-700 mt-1">Your assignment central – explore them all here.</p>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
                <img src={target} alt="target" className="mr-2  h-5" />
                <p className="text-gray-700">Backend (Caramel) - JavaScript</p>
            </div>
            <div className="flex items-center">
                <img src={clock} alt="duration" className="mr-2  h-5" />
                <p className="text-gray-700">90d</p>
            </div>
          </div>
        </div>
    )
}

export default AssignmentHeading;