import { useNavigate } from "react-router-dom";

import assignmentImage from "../../assets/assignment-image.png";

const Assignment = () => {
    const navigate = useNavigate();

    const openAssignment = () => {
        navigate(`/dashboard/Assignments/1`)
    }

    return (
        <div className="flex items-center mb-4 cursor-pointer" onClick={openAssignment}>
            <img className="m-2" src={assignmentImage} alt="assignmentImage" />
            <div>
                <h3>Assignment 01 - Basic Linux Commands</h3>
                <p className="text-gray-600">lorem ipsum dolor sit amet wai.</p>
            </div>
        </div>
    )
}

export default Assignment