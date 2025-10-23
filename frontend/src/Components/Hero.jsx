import FlipWords  from "./ui/Flip_words";
import { motion, } from "framer-motion";

 import Resume from "../assets/resume.pdf";

function Hero() {
    const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,   // fast, smoother
      delayChildren: 0.08,     
    },
  },
};


 const item = {
  hidden: { opacity: 0, y: 12 }, // chhota movement, natural feel
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }, // thoda fast
  },
};

const imageItem = {
  hidden: { opacity: 0, scale: 0.95 }, // thoda subtle zoom
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" }, // fast & smooth
  },
};


const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

 
const words = [
  "MERN Stack Developer",
  "Frontend Enthusiast with React & Tailwind",
  "Backend Developer with Node & Express",
  "MongoDB Explorer & API Builder",
];
 

   return (
    <>
<section className="relative min-h-screen flex items-center justify-center px-4 lg:px-[0px] pt-20  
transition-colors duration-300 text-white  xl:w-[80%] md:w-full mx-auto" id="home">

        <motion.div
        className="w-full flex flex-col-reverse lg:flex-row  lg:gap-20  gap-y-[20px] items-center"
        variants={container}
         initial="hidden"  whileInView="visible" viewport={{ once: false, amount: 0.2 }} >
       
        <motion.div className="flex-1 text-center lg:text-left space-y-6">
          <motion.h1  variants={item}
            className="text-2xl sm:text-5xl lg:text-5xl xl:text-6xl  font-extrabold leading-tight">
          Hi, I’m{" "}
            <span className=" bg-gradient-to-r from-[#4f91f7] to-[#55e0c7]
            text-transparent bg-clip-text">
              Deepak Bisht
            </span>
          </motion.h1>

          
          <motion.div  variants={item}
            className="inline-flex items-center gap-3 px-4 sm:px-6 py-3 rounded-xl bg-white/5   border-white/10 mb-8 backdrop-blur-sm" >
             
            <span className="text-[16px] font-bold md:text-lg sm:text-md text-justify inline overflow-hidden">
                <FlipWords
                className={"text-[#55e0c7]"}
                words={words}/>
            </span>

      

          </motion.div>

          <motion.p
            variants={item}
            className="text-white xl:text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed 
            tracking-widest text-sm" >
            I specialize in building modern, responsive, and user-friendly web
            applications with clean UI and smooth interactions. Always curious
            to learn & explore new technologies.
          </motion.p>

          <motion.div variants={item}  className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start" >
            <button
  onClick={() => scrollToSection("contact")}
  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#4f91f7] to-[#1fd1c1] hover:opacity-90 transition text-white font-medium shadow-lg"
>
  Contact Me
</button>


         <a href={Resume}
          target="_blank" rel="noopener noreferrer"
           className="px-6 py-3 rounded-xl border border-gray-600 hover:border-[#1fd1c1]
            transition text-gray-200 hover:text-[#1fd1c1] font-medium">
              Get Resume
              </a>

          </motion.div>
        </motion.div>

      
        <motion.div variants={imageItem} className="flex-1 flex justify-end items-center ">
          <div className="relative ">
            <img
  src="/ed.jpg"
  alt="image_error"
  className="object-fill block w-[360px] media-object h-auto"
/>

          </div>
        </motion.div>
      </motion.div>  
     
    </section>
    </>
  );
}

export default Hero