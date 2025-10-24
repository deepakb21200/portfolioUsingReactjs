import { motion } from "framer-motion";
 import { FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiPostman,
  SiRedux,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { TbBrandVscode } from "react-icons/tb";
import { useEffect, useState } from "react";
import lottieFile from "../assets/Technology.json";
import AnimationLottie from "../helper/Animation_Lottie";
import { FiLayers } from "react-icons/fi";
 
 
const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
 
const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,  
  
    },
  },
};

 
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};


 
 
function SkillCard({ skills }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [animationsDone, setAnimationsDone] = useState(
    new Array(skills.length).fill(false)
  );
  const [cycle, setCycle] = useState(0);
  const [justReset, setJustReset] = useState(false);

  const animationsFinished = animationsDone.every(Boolean);

 
  useEffect(() => {
    if (animationsFinished) {
      setActiveIndex(0);
      setJustReset(true);
      setCycle((c) => c + 1);
    }
  }, [animationsFinished]);

  // Automatic cycling
  useEffect(() => {
    if (!animationsFinished) return;

    const interval = setInterval(() => {
      if (hoverIndex === null) {
        if (justReset) {
          setJustReset(false);
          return;
        }
        setActiveIndex((prev) => (prev + 1) % skills.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [animationsFinished, hoverIndex, skills.length, cycle, justReset]);

  return (
 


<div className="group relative  rounded-lg   shadow-sm " id="about">

      <div className="p-6 px-0 relative z-10 pt-0">
        <div className="xl:flex xl:flex-wrap gap-2 leading-relaxed    
          lg:justify-start grid justify-center   sm:grid-cols-2 place-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onViewportEnter={() => {
                setAnimationsDone((prev) => {
                  const updated = [...prev];
                  updated[index] = false;
                  return updated;
                });
              }}
              onAnimationComplete={() => {
                setAnimationsDone((prev) => {
                  const updated = [...prev];
                  updated[index] = true;
                  return updated;
                });
              }}
              onViewportLeave={() => {
                setActiveIndex(0);
                setJustReset(true);
                setAnimationsDone(new Array(skills.length).fill(false));
              }}
            >
        
              <div
                className={`relative inline-flex items-center gap-2  lg:px-3 rounded-full xl:py-2    transition-all duration-300 tracking-widest md:text-[14px]   font-semibold text-[12px] px-[6px] py-[2px] justify-center cursor-text   
                    ${
                  hoverIndex !== null
                    ? hoverIndex === index
                      ? "bg-gray-700/80 scale-105 shadow-lg shadow-blue-500/20"
                      : "bg-gray-800/50 hover:bg-gray-700/80"
                    : activeIndex === index
                    ? "bg-gray-700/80 scale-105 shadow-lg shadow-blue-500/20"
                    : "bg-gray-800/50 hover:bg-gray-700/80"
                }`}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => {
                  setActiveIndex(index);
                  setHoverIndex(null);
                }}
              >
                <span>{skill.icon}</span>
                <span className=" ">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillCard;

 
export function About() {
  const skillCategories = [
    { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-4 h-4 text-yellow-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
    { name: "HTML5", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" /> },
    { name: "CSS3", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" /> },
    { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
    { name: "Express.js", icon: <SiExpress className="w-4 h-4 text-[#000000]" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
    { name: "RESTful APIs", icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" /> },
    { name: "Redux", icon: <SiRedux className="w-4 h-4 text-[#764ABC]" /> },
    { name: "Git/GitHub", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
    { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
    { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
    { name: "Postman", icon: <SiPostman className="w-4 h-4 text-[#FF6C37]" /> },
  ];



  return (
   
 
 <div id="about"  className=" py-20 px-4 flex items-center  relative   min-h-screen pt-20 transition-colors
  duration-300" >
    
 <div className="grid xl:grid-cols-2 gap-16 items-center container mx-auto ">

        <motion.div className="about-text    rounded-3xl shadow-2xl space-y-6"
          variants={textContainer} initial="hidden" whileInView="visible" viewport={{ once: false }} >

          <motion.h2 variants={fadeInLeft} className="text-xl md:text-2xl xl:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-center xl:text-left">
            About me
          </motion.h2>

          <motion.p variants={fadeInLeft} className="text-white xl:text-lg leading-relaxed tracking-widest
          text-sm text-center xl:text-left">
            Hi there! I'm Deepak Bisht, a passionate Frontend Developer who loves building modern, responsive, and user-friendly web applications.
          </motion.p>

          <motion.p variants={fadeInLeft} className="text-white xl:text-lg leading-relaxed tracking-widest
          text-sm text-center xl:text-left">
            My focus is on writing clean code, designing professional UIs, and continuously learning new technologies to grow as a developer.
          </motion.p>

    
          <motion.h3 variants={fadeInLeft} className="text-xl xl:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500  text-center  
          xl:text-left  md:text-2xl
            ">
            Here are my main skills:
          </motion.h3>

       

<motion.div variants={fadeInLeft}>
  <SkillCard
    icon={() => <FiLayers className="w-6 h-6 text-white " />}
    title="My Skills"
    skills={skillCategories}/>
</motion.div>


        </motion.div>

     
        <motion.div
          className=" flex justify-center lg:justify-end w-full h-full relative"    
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}>
          
      
            <AnimationLottie
              animationPath={lottieFile}
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}/>
        </motion.div>
      </div>
    </div>


 
 



  );
}