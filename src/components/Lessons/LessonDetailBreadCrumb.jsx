import { Link } from 'react-router-dom'

const LessonDetailBreadCrumb = ({ title }) => {
  return (
    <>
      <p className="-mb-10">
        <span className="text-[#777777fb] font-medium">
          {' '}
          <Link to={'/Dashboard/Lessons'}>Lessons</Link> /
        </span>{' '}
        <span className="font-bold">{title}</span>
      </p>
    </>
  )
}

export default LessonDetailBreadCrumb
