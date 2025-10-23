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








import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import FormData from "form-data";      // npm install form-data
import fetch from "node-fetch";        // npm install node-fetch (agar Node 18+ global fetch nahi)

dotenv.config();

const app = express();

app.use(cors({
  origin: "https://deepakbisht-com-0e8g.onrender.com/"
}));

app.use(express.json());

// Single /contact route
app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log("Request received:", req.body); // Debug

  try {
    const formData = new FormData();
    formData.append("access_key", process.env.WEB3FORMS_KEY);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject || "New Contact Form Submission");
    formData.append("message", message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
      headers: formData.getHeaders(),   // Node FormData ke liye zaruri
    });

    const result = await response.json();

    if (response.ok) res.status(200).json(result);
    else res.status(500).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error sending message.", error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
