import { useState } from 'react'
import Header from '../components/Header'
import BasicBreadcrumbs from '../components/BreadCrumbs'
import { useParams } from 'react-router-dom'
import { ASSIGNMENT_TABS_TITLE } from '../utils/tabs'
import { ASSIGNMENT_TABS } from '../data/dummy_assignment_data'

const AssignmentDetails = () => {
  const { assignment_title } = useParams()
  const [currentTab, setCurrentTab] = useState(0)

  return (
    <section className="flex flex-col ">
      <div className="py-3">
        <BasicBreadcrumbs
          title={assignment_title}
          prevRoutePath={'/Dashboard/Assignments'}
          prevRouteTitle={'Assignments '}
        />
        <Header title={assignment_title} para={'Prof. Nana Kwesi Asante'} />
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-6">
        <div className="md:w-3/4 flex flex-col  border-b md:border-b-0 md:border-r-2 md:pr-14">
          <div className="flex items-center justify-between ">
            {ASSIGNMENT_TABS_TITLE.map((title, index) => (
              <button
                key={index}
                onClick={() => setCurrentTab(index)}
                className={`md:py-3 pr-2 md:pr-5 text-sm font-bold ${
                  currentTab === index
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
            {ASSIGNMENT_TABS.map((section) => (
              <div
                key={section.id}
                className={`py-4 ${
                  currentTab === section.id ? 'block' : 'hidden'
                }`}
              >
                <h3 className="font-bold text-lg">{section.title}</h3>
                <p className="text-sm text-[#444444]">{section.description}</p>
                <br />
              </div>
            ))}
          </>
        </div>
        <div className=" md:w-1/4 flex flex-col pl-2 mt-4 md:mt-0">
          <h1 className="font-medium text-15px mb-2">Course Objective</h1>
          <p className="text-15px text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AssignmentDetails
