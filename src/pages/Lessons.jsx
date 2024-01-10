import LessonCard from '../components/Lessons/LessonCard'
import Header from '../components/Header'
import { useAuthContext } from '../context/AuthContext'

const Lessons = () => {
  const { user } = useAuthContext()
  const title = `Your Lessons`
  const para="Explore all your lessons at a glance."
  const stream = `${user?.stack_option['stack']['name'] || '...'} (Caramel) - ${user?.stack_option['name'] || '...'}`
  const duration = `90d`
  return (
    <div className="lessons ">
      <Header
        title={title}
        para={para}
        stream= {stream}
        duration={duration}
      />
      <LessonCard />
    </div>
  )
}

export default Lessons
