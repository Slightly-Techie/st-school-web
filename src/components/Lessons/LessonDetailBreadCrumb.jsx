const LessonDetailBreadCrumb = ({ title }) => {
  return (
    <>
      <p className="-mb-10">
        <span className="text-[#777777fb] font-medium"> Lessons /</span>{' '}
        <span className="font-bold">{title}</span>
      </p>
    </>
  )
}

export default LessonDetailBreadCrumb
