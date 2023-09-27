import Header from '../Header'

const Home = () => {
  const title = `Welcome Andrew`
  const para = `Be excited for the days ahead`
  const stream = `Backend (Caramel) - Javascript`
  const duration = `90d`
  return (
    <div className="home">
      <Header title={title} para={para} stream={stream} duration={duration} />
    </div>
  )
}

export default Home
