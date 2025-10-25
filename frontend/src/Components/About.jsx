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
const RenderIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 110 21"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Render"
  >
    <path d="M38.1801 3.45902C41.7067 3.45902 43.9994 5.45905 43.9994 8.67133C43.9994 11.0232 42.6512 12.7708 40.5375 13.5165L44.6811 20.6218H41.6077L37.7421 13.8798H33.4728V20.6218H30.8259V3.45902H38.1801ZM33.469 5.84911V11.5165H38.0544C40.1567 11.5165 41.2421 10.3387 41.2421 8.67133C41.2421 6.96576 40.1605 5.84911 38.0544 5.84911H33.469Z"></path>
    <path d="M51.4145 8.22773C54.9412 8.22773 57.2339 10.8587 57.2339 14.1093C57.2339 14.4878 57.2073 14.8817 57.1349 15.2718H47.7508C47.865 17.0921 49.4151 18.5223 51.506 18.5223C53.0179 18.5223 54.2252 17.876 55.1316 16.4496L56.9711 17.7919C55.8514 19.8149 53.6463 20.878 51.506 20.878C47.8536 20.878 45.1686 18.1705 45.1686 14.5682C45.1686 10.9467 47.7508 8.22773 51.4145 8.22773ZM54.7013 13.398C54.5489 11.6924 53.1284 10.4878 51.3879 10.4878C49.537 10.4878 48.124 11.6886 47.8117 13.398H54.7013Z"></path>
    <path d="M59.5495 20.6218V8.48012H62.0555V10.0098C62.4592 9.39027 63.6055 8.22773 65.7725 8.22773C69.0973 8.22773 70.8492 10.3004 70.8492 13.2488V20.6218H68.3547V13.7804C68.3547 11.7689 67.2578 10.6063 65.3803 10.6063C63.5408 10.6063 62.044 11.7689 62.044 13.7804V20.6218H59.5495Z"></path>
    <path d="M78.9766 8.22773C81.0293 8.22773 82.389 8.98491 83.284 10.136V2.81274H85.7785V20.6218H83.284V18.9659C82.389 20.117 81.0293 20.8742 78.9766 20.8742C75.5375 20.8742 72.9058 18.2164 72.9058 14.4878C72.9058 10.7555 75.5375 8.22773 78.9766 8.22773ZM75.3966 14.4878C75.3966 16.725 76.9466 18.6217 79.2774 18.6217C81.6082 18.6217 83.2687 16.725 83.2687 14.4878C83.2687 12.2507 81.593 10.4801 79.2774 10.4801C76.9466 10.4763 75.3966 12.2469 75.3966 14.4878Z"></path>
    <path d="M94.1382 8.22773C97.6648 8.22773 99.9575 10.8587 99.9575 14.1093C99.9575 14.4878 99.9309 14.8817 99.8585 15.2718H90.4744C90.5886 17.0921 92.1387 18.5223 94.2295 18.5223C95.7415 18.5223 96.9488 17.876 97.8552 16.4496L99.6947 17.7919C98.575 19.8149 96.3699 20.878 94.2295 20.878C90.5772 20.878 87.8922 18.1705 87.8922 14.5682C87.8884 10.9467 90.4706 8.22773 94.1382 8.22773ZM97.4249 13.398C97.2725 11.6924 95.852 10.4878 94.1115 10.4878C92.2606 10.4878 90.8476 11.6886 90.5353 13.398H97.4249Z"></path>
    <path d="M102.368 20.6218V8.48012H104.874V10.136C105.556 8.809 106.702 8.22773 108.024 8.22773C108.968 8.22773 109.688 8.52983 109.688 8.52983L109.425 10.832C109.288 10.7823 108.744 10.5528 107.952 10.5528C106.615 10.5528 104.878 11.2603 104.878 14.006V20.6218H102.368Z"></path>
    <path d="M15.6491 0.00582604C12.9679 -0.120371 10.7133 1.81847 10.3286 4.373C10.3134 4.49154 10.2905 4.60627 10.2715 4.72099C9.67356 7.90268 6.88955 10.3119 3.5457 10.3119C2.35364 10.3119 1.23395 10.006 0.258977 9.47058C0.140914 9.40557 0 9.4897 0 9.62354V10.3081V20.6218H10.2677V12.8894C10.2677 11.4668 11.4178 10.3119 12.8346 10.3119H15.4015C18.3074 10.3119 20.6458 7.89121 20.5315 4.94662C20.4287 2.29649 18.2884 0.132023 15.6491 0.00582604Z"></path>
  </svg>
);
 
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
    // { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
     { name: "Render", icon: <RenderIcon className="w-4 h-4 text-[#000000]" /> }, 
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