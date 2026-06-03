import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react"; // icons same rakhe hain
import { useState } from "react";
import "../CSS/contact.css";
import emailjs from "@emailjs/browser";


// Variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -80, rotateX: 15 },
  visible: { 
    opacity: 1, 
    x: 0, 
    rotateX: 0,
    transition: { duration: 1, ease: "easeOut" }
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 80, scale: 0.9 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { duration: 1, ease: "easeOut" }
  },
};

const staggerInputs = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // inputs ek ek karke aayenge
    },
  },
};

const inputItem = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

function Contact() {
    
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (!validateForm()) {
    setStatus("Please fill in all required fields correctly.");
    return;
  }

  emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name: formData.name,
      email: formData.email,
      subject: formData.subject || "New Contact Form Submission",
      message: formData.message,
    },
     import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
  .then(
    (result) => {
      console.log(result.text);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    },
    (error) => {
      console.error(error.text);
      setStatus("Failed to send message. Please try again.");
    }
  );
};




  return (
       <section className="dk hero min-h-screen flex items-center relative " id="contact">
      <div className=" w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center ">

      
          <motion.div 
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="space-y-8 glow-card  rounded-3xl shadow-xl   text-center lg:text-left"
          >
            <div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="text-gray-300 text-lg">
                Have a question or want to work together? Drop us a message!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 justify-center lg:justify-normal">
                <div className="bg-purple-500/10 p-3 rounded-lg glow-element ">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-400">deepakb21000@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 justify-center lg:justify-normal  ">
                <div className="bg-pink-500/10 p-3 rounded-lg glow-element">
                  <MapPin className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
              <p className="text-gray-400">Delhi, India</p>

                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div 
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{  once: false }}
            className="backdrop-blur-lg p-[16px] md:p-[24px] lg:p-[32px] rounded-2xl shadow-xl glow-card border-[skyblue]   border-[2px]" >
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              variants={staggerInputs}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              <div className="grid grid-cols-1 gap-6">

                {/* Input fields */}
                <motion.div variants={inputItem}  >
                  <input type="text" placeholder="Your Name"
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.name ? "border-red-500" : "border-gray-700"} focus:border-[skyblue]  focus:outline-none transition-colors glow-input`}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </motion.div>

                <motion.div variants={inputItem}>
                  <input type="email" placeholder="Your Email"
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.email ? "border-red-500" : "border-gray-700"} focus:border-[skyblue] focus:outline-none transition-colors  `}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />

                 
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </motion.div>

                <motion.div variants={inputItem}   >
                  <input type="text" placeholder="Subject"
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.subject ? "border-red-500" : "border-gray-700"} focus:border-[skyblue]  focus:outline-none transition-colors glow-input`}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </motion.div>

                <motion.div variants={inputItem} >
                  <textarea placeholder="Your Message" rows="4"
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.message ? "border-red-500" : "border-gray-700"} focus:border-[skyblue]  focus:outline-none transition-colors resize-none glow-input`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </motion.div>
              </div>

      

               <motion.button  type="submit" variants={inputItem}
                 className=" btn btn-primary w-full flex items-center justify-center space-x-2" >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </motion.button>
            </motion.form>

            {status && (
              <motion.div
                animate={{ opacity: 1 }}
                className={`mt-4 text-center ${status.includes("success")
                   ? "text-green-400" : "text-red-400"}`} >
                <p>{status}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact














// import { motion } from "framer-motion";
// import { Mail, MapPin, Send } from "lucide-react";
// import { useState } from "react";
// import "../CSS/contact.css";
// import emailjs from "@emailjs/browser";

// // ── Variants (same logic, same names) ────────────────────────────────────────
// const fadeInLeft = {
//   hidden: { opacity: 0, x: -80, rotateX: 15 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     rotateX: 0,
//     transition: { duration: 1, ease: "easeOut" },
//   },
// };

// const fadeInRight = {
//   hidden: { opacity: 0, x: 80, scale: 0.9 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     scale: 1,
//     transition: { duration: 1, ease: "easeOut" },
//   },
// };

// const staggerInputs = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.2 },
//   },
// };

// const inputItem = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// // ── Shared styles ─────────────────────────────────────────────────────────────
// const inputBase = {
//   background: "rgba(120,180,255,0.04)",
//   border: "1px solid rgba(120,180,255,0.15)",
//   color: "#e2eeff",
//   borderRadius: "10px",
//   padding: "12px 16px",
//   width: "100%",
//   outline: "none",
//   fontSize: "14px",
//   transition: "border-color 0.3s, box-shadow 0.3s",
// };

// const inputFocusStyle = {
//   borderColor: "rgba(120,180,255,0.55)",
//   boxShadow: "0 0 0 3px rgba(120,180,255,0.08)",
// };

// function CosmicInput({ as: Tag = "input", error, ...props }) {
//   const [focused, setFocused] = useState(false);
//   return (
//     <Tag
//       {...props}
//       style={{
//         ...inputBase,
//         ...(focused ? inputFocusStyle : {}),
//         borderColor: error
//           ? "rgba(239,68,68,0.7)"
//           : focused
//           ? "rgba(120,180,255,0.55)"
//           : "rgba(120,180,255,0.15)",
//       }}
//       onFocus={() => setFocused(true)}
//       onBlur={() => setFocused(false)}
//     />
//   );
// }

// // ── Component ─────────────────────────────────────────────────────────────────
// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [status, setStatus] = useState(null);

//   const validateForm = () => {
//     let tempErrors = {};
//     let isValid = true;
//     if (!formData.name.trim()) { tempErrors.name = "Name is required"; isValid = false; }
//     if (!formData.email.trim()) { tempErrors.email = "Email is required"; isValid = false; }
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) { tempErrors.email = "Email is invalid"; isValid = false; }
//     if (!formData.subject.trim()) { tempErrors.subject = "Subject is required"; isValid = false; }
//     if (!formData.message.trim()) { tempErrors.message = "Message is required"; isValid = false; }
//     setErrors(tempErrors);
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateForm()) { setStatus("Please fill in all required fields correctly."); return; }
//     emailjs.send(
//       import.meta.env.VITE_EMAILJS_SERVICE_ID,
//       import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//       { name: formData.name, email: formData.email, subject: formData.subject || "New Contact Form Submission", message: formData.message },
//       import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//     ).then(
//       () => { setStatus("Message sent successfully!"); setFormData({ name: "", email: "", subject: "", message: "" }); setErrors({}); },
//       (error) => { console.error(error.text); setStatus("Failed to send message. Please try again."); }
//     );
//   };

//   return (
//     <section className="dk hero min-h-screen flex items-center relative" id="contact">
//       <div className="w-full">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">

//           {/* ── Left info card ── */}
//           <motion.div
//             variants={fadeInLeft}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false }}
//             className="space-y-8 text-center lg:text-left rounded-3xl p-8"
//             style={{
//               background: "linear-gradient(135deg, rgba(10,13,22,0.9) 0%, rgba(20,25,40,0.85) 100%)",
//               border: "1px solid rgba(120,180,255,0.12)",
//               boxShadow: "0 0 40px rgba(120,180,255,0.05)",
//             }}
//           >
//             {/* Heading */}
//             <div>
//               <h2
//                 className="text-4xl font-bold mb-4 text-transparent bg-clip-text"
//                 style={{ backgroundImage: "linear-gradient(to right, #78b4ff, #b482ff, #50dcc8)" }}
//               >
//                 Get in Touch
//               </h2>
//               {/* top accent bar */}
//               <div
//                 className="w-16 h-[3px] rounded-full mb-4 mx-auto lg:mx-0"
//                 style={{ background: "linear-gradient(to right, #78b4ff, #50dcc8)" }}
//               />
//               <p style={{ color: "#8899bb" }} className="text-lg">
//                 Have a question or want to work together? Drop me a message!
//               </p>
//             </div>

//             {/* Info rows */}
//             <div className="space-y-6">
//               {/* Email */}
//               <div className="flex items-center space-x-4 justify-center lg:justify-normal">
//                 <div
//                   className="p-3 rounded-xl"
//                   style={{
//                     background: "rgba(120,180,255,0.08)",
//                     border: "1px solid rgba(120,180,255,0.2)",
//                   }}
//                 >
//                   <Mail className="w-6 h-6" style={{ color: "#78b4ff" }} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-white">Email</h3>
//                   <p style={{ color: "#8899bb" }}>deepakb21000@gmail.com</p>
//                 </div>
//               </div>

//               {/* Location */}
//               <div className="flex items-center space-x-4 justify-center lg:justify-normal">
//                 <div
//                   className="p-3 rounded-xl"
//                   style={{
//                     background: "rgba(180,130,255,0.08)",
//                     border: "1px solid rgba(180,130,255,0.2)",
//                   }}
//                 >
//                   <MapPin className="w-6 h-6" style={{ color: "#b482ff" }} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-white">Location</h3>
//                   <p style={{ color: "#8899bb" }}>Delhi, India</p>
//                 </div>
//               </div>
//             </div>

//             {/* Decorative bottom gradient line */}
//             <div
//               className="w-full h-[1px] rounded-full mt-4"
//               style={{ background: "linear-gradient(to right, rgba(120,180,255,0.3), rgba(80,220,200,0.1), transparent)" }}
//             />
//           </motion.div>

//           {/* ── Right form card ── */}
//           <motion.div
//             variants={fadeInRight}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: false }}
//             className="p-[16px] md:p-[24px] lg:p-[32px] rounded-2xl shadow-xl"
//             style={{
//               background: "linear-gradient(135deg, rgba(10,13,22,0.95) 0%, rgba(18,22,38,0.9) 100%)",
//               border: "1px solid rgba(120,180,255,0.18)",
//               boxShadow: "0 0 50px rgba(120,180,255,0.06), inset 0 1px 0 rgba(120,180,255,0.08)",
//             }}
//           >
//             {/* Form top accent */}
//             <div
//               className="w-full h-[2px] rounded-full mb-6"
//               style={{ background: "linear-gradient(to right, #78b4ff, #b482ff, #50dcc8)" }}
//             />

//             <motion.form
//               onSubmit={handleSubmit}
//               className="space-y-6"
//               variants={staggerInputs}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: false }}
//             >
//               <div className="grid grid-cols-1 gap-6">

//                 {/* Name */}
//                 <motion.div variants={inputItem}>
//                   <CosmicInput
//                     type="text"
//                     placeholder="Your Name"
//                     error={errors.name}
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   />
//                   {errors.name && <p className="text-red-400 text-sm mt-1 pl-1">{errors.name}</p>}
//                 </motion.div>

//                 {/* Email */}
//                 <motion.div variants={inputItem}>
//                   <CosmicInput
//                     type="email"
//                     placeholder="Your Email"
//                     error={errors.email}
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   />
//                   {errors.email && <p className="text-red-400 text-sm mt-1 pl-1">{errors.email}</p>}
//                 </motion.div>

//                 {/* Subject */}
//                 <motion.div variants={inputItem}>
//                   <CosmicInput
//                     type="text"
//                     placeholder="Subject"
//                     error={errors.subject}
//                     value={formData.subject}
//                     onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
//                   />
//                   {errors.subject && <p className="text-red-400 text-sm mt-1 pl-1">{errors.subject}</p>}
//                 </motion.div>

//                 {/* Message */}
//                 <motion.div variants={inputItem}>
//                   <CosmicInput
//                     as="textarea"
//                     placeholder="Your Message"
//                     rows="4"
//                     error={errors.message}
//                     value={formData.message}
//                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                     style={{ ...inputBase, resize: "none" }}
//                   />
//                   {errors.message && <p className="text-red-400 text-sm mt-1 pl-1">{errors.message}</p>}
//                 </motion.div>
//               </div>

//               {/* Submit button */}
//               <motion.button
//                 type="submit"
//                 variants={inputItem}
//                 className="w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300"
//                 style={{
//                   background: "linear-gradient(to right, #78b4ff, #b482ff, #50dcc8)",
//                   backgroundSize: "200% 100%",
//                   boxShadow: "0 0 20px rgba(120,180,255,0.2)",
//                 }}
//                 whileHover={{
//                   scale: 1.03,
//                   boxShadow: "0 0 32px rgba(120,180,255,0.4)",
//                 }}
//                 whileTap={{ scale: 0.97 }}
//               >
//                 <span>Send Message</span>
//                 <Send className="w-4 h-4" />
//               </motion.button>
//             </motion.form>

//             {/* Status message */}
//             {status && (
//               <motion.div
//                 animate={{ opacity: 1 }}
//                 initial={{ opacity: 0 }}
//                 className="mt-4 text-center text-sm font-medium"
//                 style={{
//                   color: status.includes("success") ? "#50dcc8" : "#f87171",
//                 }}
//               >
//                 <p>{status}</p>
//               </motion.div>
//             )}
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;