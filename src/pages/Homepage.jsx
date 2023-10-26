import About from "../components/homepage/About"
import Features from "../components/homepage/Features"
import Footer from "../components/homepage/Footer"
import Hero from "../components/homepage/Hero"
import Mentors from "../components/homepage/Mentors"
import Navbar from "../components/homepage/Navbar"
import Pricing from "../components/homepage/Pricing"

function Homepage() {
  return (
    <section>
      <Navbar/>
      <Hero/>
      <About/>
      <Mentors/>
      <Features/>
      <Pricing/>
      <Footer/>
    </section>
  )
}

export default Homepage