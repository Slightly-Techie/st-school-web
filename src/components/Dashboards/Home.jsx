
import LessonHeading from '../Lessons/LessonHeading'

const Home = () => {
    const title = `Welcome Andrew`
    const para = `Be excited for the days ahead`
  return (
    <div className="home">
        <LessonHeading title={title} para={para}/>
    </div>
  )
}

export default Home
