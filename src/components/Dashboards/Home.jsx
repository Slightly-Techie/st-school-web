import Header from '../Header'
import DataTable from './DataTable'

const Home = () => {
  const title = `Welcome Andrew`
  const para = `Be excited for the days ahead`
  const stream = `Backend (Caramel) - Javascript`
  const duration = `90d`
  return (
    <div className="home">
      <Header title={title} para={para} stream={stream} duration={duration} />
      <DataTable />
    </div>
  )
}

export default Home
