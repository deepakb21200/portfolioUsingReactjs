// import { motion } from "framer-motion";
// import githubIcon from "../assets/github.svg";
// import "../CSS/project.css";
// import { useEffect, useRef, useState } from "react";





// const flipInX = {
//   hidden: {
//     rotateX: 90,
//     opacity: 0,
//     transformPerspective: 800,
//   },
//   visible: {
//     rotateX: [90, -25, 10, -5, 0],
//     opacity: [0, 1, 1, 1, 1],
//     transition: {
//       duration: 1.2,
//       times: [0, 0.4, 0.6, 0.8, 1],
//       ease: "easeInOut",
//     },
//   },
// };

// function ProjectCard({ title, desc, link, tech , videoUrl, live}) {
    
//             const videoRef = useRef(null);
//         const [isHovered, setIsHovered] = useState(false);
//         const [isMobile, setIsMobile] = useState(false);


//     useEffect(() => {
//             const checkMobile = () => setIsMobile(window.innerWidth < 640);
//             checkMobile();
//             window.addEventListener('resize', checkMobile);
//             return () => window.removeEventListener('resize', checkMobile);
//         }, [])




//     const handleMouseEnter = () => {
//             if (isMobile) return;
//             setIsHovered(true);
//             if (videoRef.current) {
//                 videoRef.current.playbackRate = 1.25;
//                 videoRef.current.play().catch(e => console.log('Video play failed:', e));
//             }
//         };

//         const handleMouseLeave = () => {
//             if (isMobile) return;
//             setIsHovered(false);
//             if (videoRef.current) {
//                 videoRef.current.pause();
//                 videoRef.current.currentTime = 0;
//             }
//         };
        
//   return (
    
 
//        <motion.div variants={flipInX} initial="hidden" whileInView="visible" viewport={{ once: false}}
//            onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//                 whileHover={!isMobile ? { scale: 1.05, y: -8, transition: { duration: 0.3 } } : {}}>
//    <div className="project lg:h-[400px] xl:h-[370px]" style={{background:"#1E2127"}}>
//      <div   className="  h-full relative">
      
//       <header>
//        <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
//          <title>Folder</title>
//          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
//        </svg>


//          <video 
//   ref={videoRef}  
//   className={`absolute inset-0 w-full h-full object-cover
//     transition-transform duration-500 ${isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-95'}`}
//   src={videoUrl} 
//   muted 
//   loop
//   playsInline
//   preload="none"
//   loading="lazy"
// />


//    </header>
//     <div className="body">
//            <h3>{title}</h3>
//          <p>{desc}</p>
//    </div>
  
//    </div>
//  <div className="tech-container flex justify-between items-center">
//   <ul className="tech-list  ">
//     {tech.map((t, i) => (
//       <li key={i} className="bg-gray-800/40 px-3 py-1 rounded-full border border-gray-600/40">{t}</li>
//     ))}
//   </ul>
 


      
      

// </div>
//  <div className="flex justify-between items-center   tech-container">
//       <a
//         href={link}
//         target="_blank"
//         rel="noreferrer"
//         className="text-blue-400 hover:underline font-medium"
//       >
//         Source Code
//       </a>

//       {live && (
//         <a
//           href={live}
//           target="_blank"
//           rel="noreferrer"
//           className="text-green-400 hover:underline font-semibold"
//         >
//           Live Demo
//         </a>
//       )}
//     </div>
//    </div>
//          </motion.div>






//   );
// }

// export default ProjectCard

 











import { motion } from "framer-motion";

const flipInX = {
  hidden: {
    rotateX: 90,
    opacity: 0,
    transformPerspective: 800,
  },
  visible: {
    rotateX: [90, -25, 10, -5, 0],
    opacity: [0, 1, 1, 1, 1],
    transition: {
      duration: 1.2,
      times: [0, 0.4, 0.6, 0.8, 1],
      ease: "easeInOut",
    },
  },
};

function ProjectCard({ title, desc, link, tech, live, tag }) {
  return (
    <motion.div
      variants={flipInX}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      whileHover={{ scale: 1.03, y: -6, transition: { duration: 0.3 } }}
      className="group relative rounded-2xl overflow-hidden cursor-default"
      style={{
        background: "linear-gradient(135deg, #0f1117 0%, #161b27 100%)",
        border: "1px solid rgba(120,180,255,0.12)",
      }}
    >
    
          <div className="absolute 
    inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] 
    animate-shimmer"></div>

      {/* hover glow overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(120,180,255,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 p-6 flex flex-col h-full gap-4">

        {/* top row: folder icon + tag */}
        <div className="flex items-center justify-between">
          {/* folder icon */}
          <svg
            width="38"
            height="38"
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#folderGrad)"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <defs>
              <linearGradient id="folderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#78b4ff" />
                <stop offset="100%" stopColor="#50dcc8" />
              </linearGradient>
            </defs>
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>

          {/* tag badge */}
          {tag && (
            <span
              className="text-[11px] font-semibold px-3 py-1 rounded-full tracking-widest uppercase"
              style={{
                background: "rgba(180,130,255,0.12)",
                border: "1px solid rgba(180,130,255,0.3)",
                color: "#b482ff",
              }}
            >
              {tag}
            </span>
          )}
        </div>

        {/* title */}
        <h3
          className="text-lg sm:text-xl font-bold leading-snug"
          style={{
            background:
              "linear-gradient(to right, #e2eeff, #c4d8ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </h3>

        {/* desc */}
        <p className="text-sm leading-relaxed flex-1" style={{ color: "#8899bb" }}>
          {desc}
        </p>

        {/* tech pills */}
        <ul className="flex flex-wrap gap-2 mt-1">
          {tech.map((t, i) => (
            <li
              key={i}
              className="text-[11px] px-2.5 py-1 rounded-md font-medium tracking-wide"
              style={{
                background: "rgba(120,180,255,0.08)",
                border: "1px solid rgba(120,180,255,0.18)",
                color: "#78b4ff",
              }}
            >
              {t}
            </li>
          ))}
        </ul>

        {/* divider */}
        <div
          className="w-full h-[1px] mt-1"
          style={{ background: "rgba(120,180,255,0.1)" }}
        />

        {/* links row */}
        <div className="flex items-center justify-between pt-1">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: "#78b4ff" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#b4d4ff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#78b4ff")}
          >
            {/* github icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.623-5.479 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Source Code
          </a>

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group/live"
              style={{ color: "#50dcc8" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#80ede0")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#50dcc8")}
            >
              Live Demo
              {/* arrow icon */}
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;












  {/* top glow bar */}
      {/* <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(to right, #78b4ff, #b482ff, #50dcc8)",
          opacity: 0.7,
        }}
      /> */}