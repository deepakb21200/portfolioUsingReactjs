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

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    setStatus("Please fill in all required fields correctly.");
    return;
  }

  try {
    const response = await fetch("https://dkbisht.onrender.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject || "New Contact Form Submission",
        message: formData.message,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      setStatus(result.message);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } else {
      setStatus(result.message || "Failed to send message. Try again.");
    }
  } catch (error) {
    console.error("Error sending message:", error);
    setStatus("Server error. Please try again.");
  }
};










// const handleSubmit = async (e) => {
//   e.preventDefault();

//   // 1️⃣ Validate form
//   if (!validateForm()) {
//     setStatus("Please fill in all required fields correctly.");
//     return;
//   }

//   // 2️⃣ Prepare payload
//   const payload = {
//     name: formData.name,
//     email: formData.email,
//     subject: formData.subject || "New Contact Form Submission",
//     message: formData.message,
//   };

//   try {
//     // 3️⃣ Call your deployed backend/serverless function
//     const response = await fetch("/api/contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });

//     // 4️⃣ Parse result
//     const result = await response.json();
//     console.log(result);

//     // 5️⃣ Check response status
//     if (response.ok) {
//       setStatus("✅ Message sent successfully!");
//       setFormData({ name: "", email: "", subject: "", message: "" });
//       setErrors({});
//     } else {
//       setStatus(result.message || "❌ There was an error sending your message.");
//     }
//   } catch (error) {
//     // 6️⃣ Network or unexpected errors
//     console.error("Error sending message:", error);
//     setStatus("⚠️ An error occurred. Please try again later.");
//   }
// };
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