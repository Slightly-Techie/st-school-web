import About from "../components/homepage/About"
import Features from "../components/homepage/Features"
import Footer from "../components/homepage/Footer"
import Hero from "../components/homepage/Hero"
import Navbar from "../components/homepage/Navbar"
import Pricing from "../components/homepage/Pricing"
import Reviews from "../components/homepage/Reviews"

function Homepage() {
  return (
    <section>
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Pricing/>
      <Reviews/>
      <Footer/>
    </section>
  )
}

export default Homepage