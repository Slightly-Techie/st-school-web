import LessonCard from '../components/Lessons/LessonCard'
import Header from '../components/Header'

const Lessons = () => {
  return (
    <div className="lessons ">
      <Header
        title="Your Lessons"
        para="Explore all your lessons at a glance."
        stream="Backend (Caramel) - Javascript"
        duration="90d"
      />
      <LessonCard />
    </div>
  )
}

export default Lessons
