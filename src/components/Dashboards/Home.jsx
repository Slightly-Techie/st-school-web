import { useAuthContext } from '../../context/AuthContext'
import Header from '../Header'


const Home = () => {
  const { user } = useAuthContext()
  const title = `Welcome ${user?.first_name || '...' }`
  const para = `Be excited for the days ahead`
  const stream = `${user?.stack_option['stack']['name'] || '...'} (Caramel) - ${user?.stack_option['name'] || '...'}`
  const duration = `90d`
 
  return (
    <div className="home">
      <Header title={title} para={para} stream={stream} duration={duration} />
    </div>
  )
}

export default Home
