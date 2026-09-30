import './App.css'
import NavBar from './components/NavBar'
import AboutSection from './features/AboutSection'
import CourseSection from './features/CourseSection'
import FooterSection from './features/Footer'
import FQASection from './features/FQASection'

// theme component
import HeroSection from './features/HeroSection'
import ScheduleSection from './features/ScheduleSection'
import WhoItFor from './features/WhoItFor'

function App(){


  return (
    <>  
        <NavBar/>
        <HeroSection/>
        <AboutSection/>
        <CourseSection/>
        <ScheduleSection/>
        <WhoItFor/>
        <FQASection/>
       <FooterSection/>
    </>
  )
}

export default App
