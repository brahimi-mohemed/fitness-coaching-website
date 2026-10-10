import Navbar from "./Components/Navbar/Navbar"
import Hero from './Components/hero/Hero.jsx'
import SocialProof from './Components/social proof/SocialProof.jsx'
import WhoIHelp from "./Components/who i help/WhoIHelp.jsx"
import CoachingServices from "./Components/coaching services/CoachingServices.jsx"
import AboutTheCoach from './Components/AboutTheCoach/AboutTheCoach.jsx'
import CoachingProcess from './Components/CoachingProcess/CoachingProcess.jsx'
import ResultsTestimonials from './Components/ResultsTestimonials/ResultsTestimonials.jsx'
import FAQ from "./Components/FAQ/FAQ.jsx"
import FinalCTA from "./Components/final CTA/FinalCTA.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import { useRef } from "react"


function ScrollProgressBar(){

  const updateProgressBar = () => {
    const {scrollTop, scrollHeight} = document.documentElement
    const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + "%"

    document.querySelector("#scrollProgressBar").style.setProperty('--progressWidth', scrollPercent)
  }

  document.addEventListener("scroll", updateProgressBar)

  return(
    <div id="scrollProgressBar">
    
    </div>
  )

}

function App() {
  return (
    <>
    <ScrollProgressBar></ScrollProgressBar>
    <Navbar></Navbar>
      <main>
      <Hero></Hero>
      <SocialProof></SocialProof>
      <WhoIHelp></WhoIHelp>
      <CoachingServices></CoachingServices>
      <ResultsTestimonials />
      <CoachingProcess />
      <AboutTheCoach />
      <FAQ></FAQ>
      <FinalCTA></FinalCTA>
      </main>
    <Footer></Footer>
    </>
  )
}

export default App
