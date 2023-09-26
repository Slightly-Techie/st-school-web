import LessonCard from '../components/Lessons/LessonCard'
import LessonHeading from '../components/Lessons/LessonHeading'

const Lessons = () => {
  return (
    <div className="lessons ">
      <LessonHeading title="Your Lessons" para="Explore all your lessons at a glance."/>
      <LessonCard />
    </div>
  )
}

export default Lessons
