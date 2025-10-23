// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
 
 

// dotenv.config()

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post("/contact", async (req, res) => {
//   const { name, email, subject, message } = req.body;

//   try {
//     console.log("prcess.wevformkey",process.env.WEB3FORMS_KEY);
    
//     const formData = new FormData();
//     formData.append("access_key", process.env.WEB3FORMS_KEY);
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("subject", subject || "New Contact Form Submission");
//     formData.append("message", message);

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const result = await response.json();

//     if (response.ok) res.status(200).json(result);
//     else res.status(500).json(result);
//   } catch (error) {
//     res.status(500).json({ message: "Error sending message.", error });
//   }
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));









// import dotenv from "dotenv";

// dotenv.config();

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }

//   try {
//     const { name, email, subject, message } = req.body;

//     const formData = new FormData();
//     formData.append("access_key", process.env.WEB3FORMS_KEY);
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("subject", subject || "New Contact Form Submission");
//     formData.append("message", message);

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const result = await response.json();

//     if (response.ok) {
//       return res.status(200).json(result);
//     } else {
//       return res.status(500).json(result);
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     return res.status(500).json({ message: "Error sending message.", error });
//   }
// }










// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config()

// const app = express();
 
// app.use(cors({
//   origin: "https://portfolio-using-reactjs-3d65.vercel.app"
// }));


// app.use(express.json());

// app.post("/contact", async (req, res) => {
//   const { name, email, subject, message } = req.body;

//   try {
//     const formData = new FormData();
//     formData.append("access_key", process.env.WEB3FORMS_KEY);
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("subject", subject || "New Contact Form Submission");
//     formData.append("message", message);

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const result = await response.json();

//     if (response.ok) res.status(200).json(result);
//     else res.status(500).json(result);
//   } catch (error) {
//     res.status(500).json({ message: "Error sending message.", error });
//   }
// });


// app.post("/contact", async (req, res) => {
//   console.log("Request received:", req.body);
// });


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));











//try

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch"; // Node 18+ has global fetch; else install node-fetch

dotenv.config();
const app = express();
// app.use(cors({ origin: "https://deepakbisht-com.onrender.com" })); 
app.use(cors({
  origin: "https://deepakbisht-com.onrender.com", // tumhara frontend URL
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

// Optional: preflight requests ke liye
app.options("*", cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ success:false, message:"Missing fields" });

  try {
    const payload = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      template_params: { name, email, subject, message }
    };

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      return res.status(200).json({ success:true, message:"Message sent successfully!" });
    } else {
      const errText = await response.text();
      console.error("EmailJS error:", errText);
      return res.status(500).json({ success:false, message:"Failed to send message via EmailJS." });
    }
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ success:false, message:"Server error." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
