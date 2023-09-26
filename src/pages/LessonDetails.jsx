import { Link, useParams } from 'react-router-dom'
import LessonHeading from '../components/Lessons/LessonHeading'
import LessonDetailBreadCrumb from '../components/Lessons/LessonDetailBreadCrumb'
import { DUMMY_COURSE_DATA, COURSE_DETAILS } from '../data/dummy_couse_data'
import { useState } from 'react'
import { LessonSectionTitle } from '../utils/lessonSectionTitle'
import testVideo from '../assets/Test_Video.mp4'

const LessonDetails = () => {
  const { course_title } = useParams()

  const [currentSection, setCurrentSection] = useState(0)

  return (
    <main className="py-5 ">
      <LessonDetailBreadCrumb title={course_title} />
      <LessonHeading title={course_title} para="Prof. Nana Kwesi Asante" />

      <section className="flex overlfow-auto h-screen items-start py-4">
        <article className="w-[120rem] border-r pr-3">
          <div className="w-full overflow-hidden bg-gray-200">
            <video autoPlay="true" controls>
              <source src={testVideo} type="video/mp4" />
            </video>
          </div>
          <div className="my-3 pr-10">
            <div className="border-b flex items-center justify-between">
              {LessonSectionTitle.map((title, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSection(index)}
                  className={`py-3 pr-6 text-sm font-bold ${
                    currentSection === index
                      ? 'text-black border-b-2 border-black'
                      : 'text-[#444444]'
                  }`}
                >
                  {title}
                </button>
              ))}
            </div>
            <>
              {/* Render Section based on #id */}
              {COURSE_DETAILS.map((section) => (
                <div
                  key={section.id}
                  className={`py-4 ${
                    currentSection === section.id ? 'block' : 'hidden'
                  }`}
                >
                  <h3 className="font-bold text-lg">{section.title}</h3>
                  <p className="text-sm text-[#444444]">
                    {section.description_1}
                  </p>
                  <br />
                </div>
              ))}
            </>
          </div>
        </article>
        <aside className="pl-3">
          <div className="border-b pb-3 mb-2">
            <h3 className="font-bold text-lg">About the Lesson</h3>
            <p className="text-sm text-[#444444]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">{course_title}</h3>
            <p className="text-[#444444] text-sm">
              <span>Prof. Nana Kwesi Asante - </span>
              <span>1 / 4</span>
            </p>
          </div>
          <>
            {DUMMY_COURSE_DATA.map((course) => (
              <Link
                to={''}
                key={course.id}
                className=" flex items-center mt-2 mb-2 rounded-md px-2  bg-black"
              >
                <div className="flex px-1 my-3">
                  <img
                    src={course.img}
                    alt=""
                    className="h-8 w-8 object-cover "
                  />
                </div>
                <div className="flex flex-col px-1">
                  <h4 className="text-sm  text-white font-bold">
                    {course.title}
                  </h4>
                  <p className="text-white text-xs">{course.desc}</p>
                </div>
              </Link>
            ))}
          </>
        </aside>
      </section>
    </main>
  )
}

export default LessonDetails
