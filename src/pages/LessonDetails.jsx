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
    <main className="py-5">
      <LessonDetailBreadCrumb title={course_title} />
      <LessonHeading title={course_title} para="Prof. Nana Kwesi Asante" />

      <section className="flex flex-col md:flex-row overflow-hidden md:h-screen md:items-start py-4">
        <article className="w-[120rem] border-r md:pr-3">
          <div className="w-[19rem] md:w-full h-auto overflow-hidden bg-gray-200">
            <video controls width={'100%'}>
              <source src={testVideo} type="video/mp4" />
            </video>
          </div>
          <div className="w-[21rem] md:w-full my-3 pr-10">
            <div className="border-b flex items-center justify-between overflow-x-auto">
              {LessonSectionTitle.map((title, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSection(index)}
                  className={`py-3 pr-2 md:pr-5 text-sm font-bold ${
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
        <aside className="md:pl-3">
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
              <span>
                1 /{' '}
                {DUMMY_COURSE_DATA.map(
                  (lesson) => lesson.lessons && lesson.lessons.length
                )}
              </span>
            </p>
          </div>
          <div className="mt-5">
            {DUMMY_COURSE_DATA.map(
              (course) =>
                course.lessons &&
                course.lessons.map((lesson) => (
                  <Link
                    to={''}
                    key={lesson.id}
                    className=" flex items-center mt-2 mb-2 rounded-md px-2  bg-black"
                  >
                    <div className="flex px-1 my-3">
                      <img
                        src={lesson.img}
                        alt=""
                        className="h-8 w-8 object-cover "
                      />
                    </div>
                    <div className="flex flex-col px-1">
                      <h4 className="text-sm  text-white font-bold">
                        {lesson.title}
                      </h4>
                      <p className="text-white text-xs">{lesson.desc}</p>
                    </div>
                  </Link>
                ))
            )}
          </div>
        </aside>
      </section>
    </main>
  )
}

export default LessonDetails
