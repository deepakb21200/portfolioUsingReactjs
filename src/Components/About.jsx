// import { motion } from "framer-motion";
//  import { FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
// import {
//   SiExpress,
//   SiJavascript,
//   SiMongodb,
//   SiPostman,
//   SiRedux,
//   SiTailwindcss,
//   SiVercel,  
// } from "react-icons/si";
// import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
// import { TbBrandVscode } from "react-icons/tb";
// import { useEffect, useState } from "react";
// import lottieFile from "../assets/Technology.json";
// import AnimationLottie from "../helper/Animation_Lottie";
// import { FiLayers } from "react-icons/fi";
// import { SiCloudinary } from "react-icons/si";

//  import RenderLogo from "../assets/RenderBlack.svg";

// const fadeInRight = {
//   hidden: { opacity: 0, x: 50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
// };

// const textContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.25,  

//     },
//   },
// };


// const fadeInLeft = {
//   hidden: { opacity: 0, x: -50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
// };




// function SkillCard({ skills }) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [hoverIndex, setHoverIndex] = useState(null);
//   const [animationsDone, setAnimationsDone] = useState(
//     new Array(skills.length).fill(false)
//   );
//   const [cycle, setCycle] = useState(0);
//   const [justReset, setJustReset] = useState(false);

//   const animationsFinished = animationsDone.every(Boolean);


//   useEffect(() => {
//     if (animationsFinished) {
//       setActiveIndex(0);
//       setJustReset(true);
//       setCycle((c) => c + 1);
//     }
//   }, [animationsFinished]);

//   // Automatic cycling
//   useEffect(() => {
//     if (!animationsFinished) return;

//     const interval = setInterval(() => {
//       if (hoverIndex === null) {
//         if (justReset) {
//           setJustReset(false);
//           return;
//         }
//         setActiveIndex((prev) => (prev + 1) % skills.length);
//       }
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [animationsFinished, hoverIndex, skills.length, cycle, justReset]);

//   return (



// <div className="group relative  rounded-lg   shadow-sm " id="about">

//       <div className="p-6 px-0 relative z-10 pt-0">
//         <div className="xl:flex xl:flex-wrap gap-2 leading-relaxed    
//           lg:justify-start grid justify-center   sm:grid-cols-2 place-items-center">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: false }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               onViewportEnter={() => {
//                 setAnimationsDone((prev) => {
//                   const updated = [...prev];
//                   updated[index] = false;
//                   return updated;
//                 });
//               }}
//               onAnimationComplete={() => {
//                 setAnimationsDone((prev) => {
//                   const updated = [...prev];
//                   updated[index] = true;
//                   return updated;
//                 });
//               }}
//               onViewportLeave={() => {
//                 setActiveIndex(0);
//                 setJustReset(true);
//                 setAnimationsDone(new Array(skills.length).fill(false));
//               }}
//             >

//               <div
//                 className={`relative inline-flex items-center gap-2  lg:px-3 rounded-full xl:py-2    transition-all duration-300 tracking-widest md:text-[14px]   font-semibold text-[12px] px-[6px] py-[2px] justify-center cursor-text   
//                     ${
//                   hoverIndex !== null
//                     ? hoverIndex === index
//                       ? "bg-gray-700/80 scale-105 shadow-lg shadow-blue-500/20"
//                       : "bg-gray-800/50 hover:bg-gray-700/80"
//                     : activeIndex === index
//                     ? "bg-gray-700/80 scale-105 shadow-lg shadow-blue-500/20"
//                     : "bg-gray-800/50 hover:bg-gray-700/80"
//                 }`}
//                 onMouseEnter={() => setHoverIndex(index)}
//                 onMouseLeave={() => {
//                   setActiveIndex(index);
//                   setHoverIndex(null);
//                 }}
//               >
//                 <span>{skill.icon}</span>
//                 <span className=" ">{skill.name}</span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SkillCard;


// const BugIcon = () => (
//   <svg
//     stroke="currentColor"
//     fill="currentColor"
//     strokeWidth="0"
//     role="img"
//     viewBox="0 0 24 24"
//     className=" text-orange-500 "
//     height="1em"
//     width="1em"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"></path>
//   </svg>
// );



// export function About() {
//   const skillCategories = [
//     { name: "ReactJS", icon: <FaReact className="w-5 h-5 text-[#61DAFB]" /> },
//     { name: "JavaScript", icon: <SiJavascript className="w-5 h-5 text-yellow-400" /> },
//     { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5  text-[#38B2AC]" /> },

//     { name: "NodeJS", icon: <FaNodeJs className="w-5 h-5  text-[#339933]" /> },
//     { name: "ExpressJS", icon: <SiExpress className="w-5 h-5  text-[#000000]" /> },
//     { name: "MongoDB", icon: <SiMongodb className="w-5 h-5 text-[#47A248]" /> },
//     { name: "RESTful APIs", icon: <BsGrid1X2 className="w-5 h-5  text-[#FF6C37]" /> },
//     { name: "Redux", icon: <SiRedux className="w-5 h-5  text-[#764ABC]" /> },
//      { name: "Redux Toolkit", icon: <SiRedux className="w-5 h-5 text-orange-500" /> },
//     { name: "Git/GitHub", icon: <FaGitAlt className="w-5 h-5  text-[#F05032]" /> },
//    { name: "Cloudinary", icon: <SiCloudinary className="w-5 h-5 text-blue-400" /> },

//     { name: "VS Code", icon: <TbBrandVscode className="w-5 h-5  text-[#007ACC]" /> },

//   { name: "Render", icon: <img src={RenderLogo} alt="Render" className="w-5 h-5" /> },

//     { name: "Postman", icon: <BugIcon className="w-5 h-5  " /> },

//   ];



//   return (


//  <div id="about"  className=" py-20 px-4 flex items-center  relative   min-h-screen pt-20 transition-colors
//   duration-300" >

//  <div className="grid xl:grid-cols-2 gap-16 items-center container mx-auto ">

//         <motion.div className="about-text    rounded-3xl shadow-2xl space-y-6"
//           variants={textContainer} initial="hidden" whileInView="visible" viewport={{ once: false }} >

//           <motion.h2 variants={fadeInLeft} className="text-xl md:text-2xl xl:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-center xl:text-left">
//             About me
//           </motion.h2>

//           <motion.p variants={fadeInLeft} className="text-white xl:text-lg leading-relaxed tracking-widest
//           text-sm text-center xl:text-left">
//             Hi there! I'm Deepak Bisht, a passionate Frontend Developer who loves building modern, responsive, and user-friendly web applications.
//           </motion.p>

//           <motion.p variants={fadeInLeft} className="text-white xl:text-lg leading-relaxed tracking-widest
//           text-sm text-center xl:text-left">
//             My focus is on writing clean code, designing professional UIs, and continuously learning new technologies to grow as a developer.
//           </motion.p>


//           <motion.h3 variants={fadeInLeft} className="text-xl xl:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500  text-center  
//           xl:text-left  md:text-2xl
//             ">
//             Here are my main skills:
//           </motion.h3>



// <motion.div variants={fadeInLeft}>
//  <SkillCard
//     icon={() => <FiLayers className="w-6 h-6 text-white " />}
//     title="My Skills"
//     skills={skillCategories}/>  
// </motion.div>


//         </motion.div>


//         <motion.div
//           className=" flex justify-center lg:justify-end w-full h-full relative"    
//           variants={fadeInRight}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false }}
//           transition={{ delay: 0.2 }}>


//             <AnimationLottie
//               animationPath={lottieFile}
//               style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}/>
//         </motion.div>
//       </div>
//     </div>







//   );
// }













import { motion } from "framer-motion";
import { FaGitAlt, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiVercel,
  SiNetlify,
  SiCloudinary,
  SiReactquery,
  SiNextdotjs,
  SiCss3,
  SiHtml5,
  // SiZustand,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { useEffect, useState } from "react";
// import lottieFile from "../assets/Technology.json";
import lottieFile from "../assets/Technology2.json";
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

// ─── SkillCard ────────────────────────────────────────────────────────────────
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
    <div className="group relative rounded-lg shadow-sm" id="about">
      <div className="p-6 px-0 relative z-10 pt-0">
        <div
          className="xl:flex xl:flex-wrap gap-2 leading-relaxed
          lg:justify-start grid justify-center sm:grid-cols-2 place-items-center"
        >
          {skills.map((skill, index) => {
            const isActive =
              hoverIndex !== null
                ? hoverIndex === index
                : activeIndex === index;

            return (
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
                {/* ✅ Cosmic-themed active/hover pill */}
                <div
                  className="relative inline-flex items-center gap-2 lg:px-3 rounded-full xl:py-2
                    transition-all duration-300 tracking-widest md:text-[14px] font-semibold
                    text-[12px] px-[6px] py-[2px] justify-center cursor-default"
                  style={{
                    background: isActive
                      ? "rgba(120,180,255,0.13)"
                      : "rgba(255,255,255,0.04)",
                    border: isActive
                      ? "1px solid rgba(120,180,255,0.35)"
                      : "1px solid rgba(255,255,255,0.06)",
                    color: isActive ? "#c4d8ff" : "#8899bb",
                    transform: isActive ? "scale(1.06)" : "scale(1)",
                    boxShadow: isActive
                      ? "0 0 14px rgba(120,180,255,0.15)"
                      : "none",
                  }}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => {
                    setActiveIndex(index);
                    setHoverIndex(null);
                  }}
                >
                  <span>{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
export function About() {
  // ✅ Frontend Developer focused skills
  const skillCategories = [
    { name: "HTML5", icon: <SiHtml5 className="w-5 h-5 text-[#E44D26]" /> },
    { name: "CSS3", icon: <SiCss3 className="w-5 h-5 text-[#1572B6]" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-5 h-5 text-yellow-400" /> },
    { name: "ReactJS", icon: <FaReact className="w-5 h-5 text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5 text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5 text-[#38B2AC]" /> },
    { name: "Redux", icon: <SiRedux className="w-5 h-5 text-[#764ABC]" /> },
    { name: "Redux Toolkit", icon: <SiRedux className="w-5 h-5 text-orange-400" /> },
    // { name: "Zustand",      icon: <SiZustand className="w-5 h-5 text-amber-300" /> },
    { name: "Zustand", icon: <FiLayers className="w-5 h-5 text-amber-300" /> },
    { name: "React Query", icon: <SiReactquery className="w-5 h-5 text-[#FF4154]" /> },
    { name: "Git/GitHub", icon: <FaGitAlt className="w-5 h-5 text-[#F05032]" /> },
    { name: "Vercel", icon: <SiVercel className="w-5 h-5 text-white" /> },
    { name: "Netlify", icon: <SiNetlify className="w-5 h-5 text-[#00C7B7]" /> },
    { name: "Cloudinary", icon: <SiCloudinary className="w-5 h-5 text-blue-400" /> },
    { name: "VS Code", icon: <TbBrandVscode className="w-5 h-5 text-[#007ACC]" /> },
  ];

  // Gradient text style reusable
  const gradientText = {
    backgroundImage: "linear-gradient(to right, #78b4ff, #b482ff, #50dcc8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div
      id="about"
      className="py-20 px-4 flex items-center relative min-h-screen pt-20 transition-colors duration-300"
    >
      <div className="grid xl:grid-cols-2 gap-16 items-center container mx-auto">

        {/* ── Left: text + skills ── */}
        <motion.div
          className="about-text rounded-3xl shadow-2xl space-y-6"
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {/* Heading */}
          <motion.h2
            variants={fadeInLeft}
            className="text-xl md:text-2xl xl:text-3xl font-extrabold text-transparent bg-clip-text text-center xl:text-left"
            style={gradientText}
          >
            About Me
          </motion.h2>

          {/* ✅ Updated about text — Frontend Developer */}
          <motion.p
            variants={fadeInLeft}
            className="text-white xl:text-lg leading-relaxed tracking-widest text-sm text-center xl:text-left"
          >
            Hi there! I'm{" "}
            <span
              className="font-bold text-transparent bg-clip-text"
              style={gradientText}
            >
              Deepak Bisht
            </span>
            , a passionate Frontend Developer who loves crafting modern,
            responsive, and visually engaging web experiences.
          </motion.p>

          <motion.p
            variants={fadeInLeft}
            className="text-white xl:text-lg leading-relaxed tracking-widest text-sm text-center xl:text-left"
          >
            I focus on building pixel-perfect UIs with clean, maintainable
            code — turning design concepts into smooth, interactive interfaces
            that users love. Always curious, always learning.
          </motion.p>

          {/* Skills heading */}
          <motion.h3
            variants={fadeInLeft}
            className="text-xl xl:text-3xl font-extrabold text-transparent bg-clip-text text-center xl:text-left md:text-2xl"
            style={gradientText}
          >
            My Tech Stack:
          </motion.h3>

          {/* Skills */}
          <motion.div variants={fadeInLeft}>
            <SkillCard
              icon={() => <FiLayers className="w-6 h-6 text-white" />}
              title="My Skills"
              skills={skillCategories}
            />
          </motion.div>
        </motion.div>

        {/* ── Right: Lottie (untouched) ── */}
        <motion.div
          className="flex justify-center lg:justify-end w-full h-full relative   "
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
        >
          {/* <AnimationLottie
            animationPath={lottieFile}
            className="border-6 border-green-500 w-full h-full"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          /> */}

          <AnimationLottie
            animationPath={lottieFile}
            // className="border-4 border-green-500 w-full h-full"
              className="w-full h-full"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </motion.div>

      </div>
    </div>
  );
}