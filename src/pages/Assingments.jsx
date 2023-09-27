import AssignmentBody from '../components/Assignment/AssignmentBody'
import Header from '../components/Header'

const Assingments = () => {
  return (
    <section className="flex flex-col">
      <Header
        title={'Your Assignments 🧑🏾‍💻'}
        para={'Your assignment central – explore them all here.'}
        stream={'Backend (Caramel) - JavaScript'}
        duration={'90d'}
      />
      <AssignmentBody />
    </section>
  )
}

export default Assingments
