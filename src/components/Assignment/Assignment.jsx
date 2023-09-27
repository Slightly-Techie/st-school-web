import { useNavigate } from 'react-router-dom'

import assignmentImage from '../../assets/assignment-image.png'

const Assignment = () => {
  const navigate = useNavigate()

  const openAssignment = () => {
    navigate(`/dashboard/Assignments/1`)
  }

  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
        <div
          key={index}
          className="flex md:items-center my-4 cursor-pointer space-x-2"
          onClick={openAssignment}
        >
          <img
            className="space-x-2 h-16 w-16 object-cover"
            src={assignmentImage}
            alt="assignmentImage"
          />
          <div>
            <h3>Assignment 01 - Basic Linux Commands</h3>
            <p className="text-gray-600">lorem ipsum dolor sit amet wai.</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default Assignment
