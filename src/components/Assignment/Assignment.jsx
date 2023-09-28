import { useEffect, useState } from 'react'
import { DUMMY_ASSIGNMENT_DATA } from '../../data/dummy_assignment_data'
import { Link } from 'react-router-dom'

const Assignment = () => {
  const [data, setData] = useState(DUMMY_ASSIGNMENT_DATA)

  useEffect(() => {
    setData(DUMMY_ASSIGNMENT_DATA)
  }, [])
  return (
    <>
      {data.map((item, index) => (
        <Link
          to={`/Dashboard/Assignments/${item.title}`}
          key={index}
          className="flex md:items-center my-4 cursor-pointer space-x-2"
        >
          <img
            className="space-x-2 h-16 w-16 object-cover rounded-lg"
            src={item.img}
            alt="assignmentImage"
          />
          <div>
            <h3>{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        </Link>
      ))}
    </>
  )
}

export default Assignment
