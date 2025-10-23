import { FaGithub, FaLinkedin,   FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "../CSS/footer.css";


const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,  
    },
  },
};

// Variants for each child (Y-axis slide)
const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
function Footer() {
   return (
<motion.footer
  className="  text-white px-[16px] py-[30px] text-center overflow-hidden
  "
  variants={container}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
>
  <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start md:text-left  
   ">
    
    {/* Logo / Name */}
    <motion.div className="mb-4 md:mb-0" variants={item}>
      <h2 className="text-xl  font-bold mb-2 text-center">Deepak Bisht</h2>
      <p className="text-sm md:text-base text-gray-400">
        Frontend Developer & MERN Enthusiast
      </p>
    </motion.div>

    {/* Quick Links */}
    <motion.div variants={item}>
      <h3 className="text-lg   font-semibold mb-3 text-center">Quick Links</h3>
      <ul className="flex flex-col gap-[12px] md:gap-3 md:items-start xl:flex-row justify-center">
        <li><a href="#home" className="text-gray-400 hover:text-white transition ">Home</a></li>
        <li><a href="#about" className="text-gray-400 hover:text-white transition">About</a></li>
        <li><a href="#projects" className="text-gray-400 hover:text-white transition">Projects</a></li>
        <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
      </ul>
    </motion.div>

    {/* Social Links */}
    <motion.div variants={item}>
      <h3 className="text-lg font-semibold mb-3">Follow Me</h3>
      <div className="flex justify-center md:justify-start gap-4 text-2xl md:text-3xl">
      <a href="https://github.com/deepakb21200" target="_blank" rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/deepak-bisht-a8a585358"
  target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
  <FaLinkedin /></a>

        <a href="mailto:deepakb21000@gmail.com" className="text-gray-400 hover:text-white transition"><FaEnvelope /></a>
      </div>
    </motion.div>

  </div>

  {/* Copyright */}
  <motion.div className="border-t border-gray-700 pt-4 mt-6 text-gray-500 text-sm md:text-base" variants={item}>
    <p>© {new Date().getFullYear()} Deepak Bisht. All Rights Reserved.</p>
  </motion.div>
</motion.footer>


  );
}

export default Footer