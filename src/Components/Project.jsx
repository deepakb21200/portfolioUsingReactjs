// import { motion } from "framer-motion";
// import ProjectCard from "./ProjectCard";
// import { projects } from "./projectlist";
 
// const headingVariants = {
//   hidden: { opacity: 0, y: 50 },    
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 1, ease: "easeOut" } 
//   },
// };

// function Project() {
//   return (
//   <div   className=" py-20  px-4 xl:px-0  " id="projects">
//      <motion.h2
//   className="text-xl sm:text-3xl md:text-4xl xl:text-5xl leading-[1.3] mb-[60px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-center py-[5px]"
//   variants={headingVariants}
//   initial="hidden"
//   whileInView="visible"
//   viewport={{ once: false }}
// >
//   My Projects
// </motion.h2>  
    
//       <div className="projects">
//         {projects.map((p, i) => (
//         <ProjectCard key={i} {...p}  />
//       ))}
//         </div>
//         </div>
//   );
// }

// export default Project








import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectlist";

const headingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

function Project() {
  return (
    <div className="py-20 px-4 xl:px-0 " id="projects">

      {/* heading */}
      <motion.h2
        className="text-xl sm:text-3xl md:text-4xl xl:text-5xl leading-[1.3] mb-4 font-extrabold 
        text-transparent bg-clip-text text-center py-[5px]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #78b4ff, #b482ff, #50dcc8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        My Projects
      </motion.h2>

      {/* subtle subheading */}
      <motion.p
        className="text-center text-sm mb-14 tracking-widest uppercase"
        style={{ color: "#4a5a7a" }}
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        Things I've built
      </motion.p>

      {/* responsive 2-col grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}

export default Project;