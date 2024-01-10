import AssignmentBody from '../components/Assignment/AssignmentBody'
import Header from '../components/Header'
import { useAuthContext } from '../context/AuthContext'

const Assingments = () => {
  const {user } = useAuthContext()
  const stream = `${user?.stack_option['stack']['name'] || '...'} (Caramel) - ${user?.stack_option['name'] || '...'}`
  return (
    <section className="flex flex-col">
      <Header
        title={'Your Assignments 🧑🏾‍💻'}
        para={'Your assignment central – explore them all here.'}
        stream={stream}
        duration={'90d'}
      />
      <AssignmentBody />
    </section>
  )
}

export default Assingments
