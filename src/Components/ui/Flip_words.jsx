// import  { useCallback, useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// function Flip_words({ words, duration = 3000, className = "" }) {
// const [currentWord, setCurrentWord] = useState(words[0]);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const startAnimation = useCallback(() => {
//     const word = words[words.indexOf(currentWord) + 1] || words[0];
//     setCurrentWord(word);
//     setIsAnimating(true);
//   }, [currentWord, words]);

//   useEffect(() => {
//     if (!isAnimating) {
//       const timeout = setTimeout(() => {
//         startAnimation();
//       }, duration);

//       return () => clearTimeout(timeout);
//     }
//   }, [isAnimating, duration, startAnimation]);
//    return (
//     <AnimatePresence
//       onExitComplete={() => {
//         setIsAnimating(false);
//       }}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ type: "spring", stiffness: 100, damping: 10 }}
//         exit={{
//           opacity: 0,
//           y: -40,
//           x: 40,
//           filter: "blur(8px)",
//           scale: 2,
//           position: "absolute",
//         }}
//         className={`z-10 inline-block relative text-center  dark:text-neutral-100  ${className}`}
//           key={currentWord} >
//         {currentWord.split(" ").map((word, wordIndex) => (
//           <motion.span
//             key={word + wordIndex}
//             initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
//             animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//             transition={{ delay: wordIndex * 0.3, duration: 0.3 }}
//             className="inline-block  sm:tracking-wider tracking-wide"
//           >
//             {word.split("").map((letter, letterIndex) => (
//               <motion.span
//                 key={word + letterIndex}
//                 initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
//                 animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//                 transition={{
//                   delay: wordIndex * 0.3 + letterIndex * 0.05,
//                   duration: 0.2,
//                 }}
//                 className="inline-block" >
//                 {letter}
//               </motion.span>
//             ))}
//             <span className="inline-block">&nbsp;</span>
//           </motion.span>
//         ))}
//       </motion.div>
//     </AnimatePresence>



        
//   );
// }

// export default Flip_words







// import { useCallback, useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// function Flip_words({ words, duration = 3000, className = "" }) {
//   const [currentWord, setCurrentWord] = useState(words[0]);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const startAnimation = useCallback(() => {
//     const word = words[words.indexOf(currentWord) + 1] || words[0];
//     setCurrentWord(word);
//     setIsAnimating(true);
//   }, [currentWord, words]);

//   useEffect(() => {
//     if (!isAnimating) {
//       const timeout = setTimeout(() => {
//         startAnimation();
//       }, duration);
//       return () => clearTimeout(timeout);
//     }
//   }, [isAnimating, duration, startAnimation]);

//   return (
//     <AnimatePresence
//       onExitComplete={() => {
//         setIsAnimating(false);
//       }}
//     >
//       <motion.div
//         key={currentWord}
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ type: "spring", stiffness: 100, damping: 10 }}
//         exit={{
//           opacity: 0,
//           y: -40,
//           x: 40,
//           filter: "blur(8px)",
//           scale: 2,
//           position: "absolute",
//         }}
//         // ✅ Fix: -webkit-background-clip needs the text color to be transparent
//         // className prop se gradient classes aayenge (bg-gradient-to-r ... bg-clip-text)
//         // inline-block zaroori hai bg-clip-text ke liye
//         className={`z-10 inline-block relative text-center dark:text-neutral-100 ${className}`}
//         style={
//           className.includes("bg-clip-text")
//             ? { WebkitTextFillColor: "transparent" }
//             : {}
//         }
//       >
//         {currentWord.split(" ").map((word, wordIndex) => (
//           <motion.span
//             key={word + wordIndex}
//             initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
//             animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//             transition={{ delay: wordIndex * 0.3, duration: 0.3 }}
//             className="inline-block sm:tracking-wider tracking-wide"
//           >
//             {word.split("").map((letter, letterIndex) => (
//               <motion.span
//                 key={word + letterIndex}
//                 initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
//                 animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//                 transition={{
//                   delay: wordIndex * 0.3 + letterIndex * 0.05,
//                   duration: 0.2,
//                 }}
//                 className="inline-block"
//               >
//                 {letter}
//               </motion.span>
//             ))}
//             <span className="inline-block">&nbsp;</span>
//           </motion.span>
//         ))}
//       </motion.div>
//     </AnimatePresence>
//   );
// }

// export default Flip_words;









// import { useCallback, useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// function Flip_words({ words, duration = 3000, className = "" }) {
//   const [currentWord, setCurrentWord] = useState(words[0]);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const startAnimation = useCallback(() => {
//     const word = words[words.indexOf(currentWord) + 1] || words[0];
//     setCurrentWord(word);
//     setIsAnimating(true);
//   }, [currentWord, words]);

//   useEffect(() => {
//     if (!isAnimating) {
//       const timeout = setTimeout(() => {
//         startAnimation();
//       }, duration);
//       return () => clearTimeout(timeout);
//     }
//   }, [isAnimating, duration, startAnimation]);

//   // const isGradient = className.includes("bg-clip-text");

//   return (
//     <AnimatePresence onExitComplete={() => setIsAnimating(false)}>
//       <motion.div
//         key={currentWord}
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ type: "spring", stiffness: 100, damping: 10 }}
//         exit={{
//           opacity: 0,
//           y: -40,
//           x: 40,
//           filter: "blur(8px)",
//           scale: 2,
//           position: "absolute",
//         }}
//         className={`z-10 inline-block relative text-center ${className}`}
//         // style={
//         //   isGradient
//         //     ? {
//         //         WebkitBackgroundClip: "text",
//         //         WebkitTextFillColor: "transparent",
//         //         backgroundClip: "text",
//         //         color: "transparent",
//         //       }
//         //     : {}
//         // }

//           style={{
//     WebkitBackgroundClip: "text",
//     backgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//     color: "transparent",
//   }}
//       >

//           {currentWord}
//         {currentWord.split(" ").map((word, wordIndex) => (
//           <motion.span
//             key={word + wordIndex}
//             initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
//             animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//             transition={{ delay: wordIndex * 0.3, duration: 0.3 }}
//             className="inline-block sm:tracking-wider tracking-wide"
//           >
//             {word.split("").map((letter, letterIndex) => (
//               <motion.span
//                 key={word + letterIndex}
//                 initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
//                 animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//                 transition={{
//                   delay: wordIndex * 0.3 + letterIndex * 0.05,
//                   duration: 0.2,
//                 }}
//                 className="inline-block"
//                 // style={{ WebkitTextFillColor: "inherit", color: "inherit" }}
 
//               >
//                 {letter}
//               </motion.span>
//             ))}
//             <span className="inline-block">&nbsp;</span>
//           </motion.span>
//         ))}
//       </motion.div>
//     </AnimatePresence>
//   );
// }

// export default Flip_words;
















import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Flip_words({ words, duration = 3000, className = "" }) {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating) {
      const timeout = setTimeout(() => {
        startAnimation();
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        key={currentWord}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={`z-10 inline-block relative text-center ${className}`}
      >
        {currentWord.split(" ").map((word, wordIndex) => (
          <motion.span
            key={word + wordIndex}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: wordIndex * 0.3, duration: 0.3 }}
            className="inline-block sm:tracking-wider tracking-wide"
          >
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={word + letterIndex}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: wordIndex * 0.3 + letterIndex * 0.05,
                  duration: 0.2,
                }}
                className="inline-block bg-gradient-to-r from-[#50dcc8] to-[#b482ff] bg-clip-text text-transparent"
              >
                {letter}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

export default Flip_words;