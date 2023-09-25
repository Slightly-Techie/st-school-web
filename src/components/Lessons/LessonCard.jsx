import { useState } from 'react'
import { DUMMY_COURSE_DATA } from '../../data/dummy_couse_data'
import { useEffect } from 'react'

const LessonCard = () => {
  const [data, setData] = useState(DUMMY_COURSE_DATA)

  useEffect(() => {
    setData(DUMMY_COURSE_DATA)
  }, [])
  return (
    <main className="pt-5 md:p-5 space-y-9">
      {data.map((course) => (
        <div
          className="flex flex-col md:flex-row space-y-4 items-center md:justify-between"
          key={course.id}
        >
          <div className="flex items-start md:items-center max-w-[80dvw] mx-auto md:w-[120rem] gap-3">
            <div className="w-20 h-16 md:w-14 md:h-14 ">
              <img
                src={course.img}
                alt="course-cover"
                className="w-full h-full overflow-hidden  rounded-lg object-cover"
              />
            </div>
            <span>
              <h4>{course.title}</h4>
              <p className="text-[#444444]">{course.desc}</p>
            </span>
          </div>
          <div className="flex flex-col">
            <div className="mb-1 h-2 w-[18rem] bg-neutral-300 rounded-full">
              <div
                className="h-2 bg-black rounded-full"
                style={{ width: course.completion + '%' }}
              ></div>
            </div>
            <p className="text-center">{course.completion}% completed</p>
          </div>
        </div>
      ))}
    </main>
  )
}

export default LessonCard
