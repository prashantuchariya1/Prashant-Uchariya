import Navbar from "./components/Navbar"
import AboutPage from "./pages/AboutPage"
import Contact from "./pages/Contact"
import Education from "./pages/Education"
import Experience from "./pages/Experience"
import HeroPage from "./pages/HeroPage"
import Portfolio from "./pages/Portfolio"
import TechStack from "./pages/TechStacks"


function App() {


  return (
    <div>
      
      <Navbar/>
       <HeroPage/> 
      <AboutPage/>     
      <TechStack/>
      <Experience/>
      <Education/> 
      <Portfolio/>
      <Contact/>
      
    </div>
  )
}

export default App
 