 
import Hero from './Hero'
import { About } from './About'
import Footer from './Footer'
import Project from './Project'
import Contact from './Contact'

function Animate() {
   return (
  <div className=" relative z-0  w-full  max-w-[90%] sm:px-6  md:px-8  lg:px-12  xl:px-0 mx-auto">
        <Hero/>
        <About/>
        <Project/>
        <Contact/>
        <Footer/>
 
</div>
  )
}

export default Animate