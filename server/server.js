import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const router = express.Router();
const submittedData = []; // Array to store submitted form data

// Middleware
app.use(cors());
app.use(express.json());
app.use("/", router);

// Root route
router.get("/", (req, res) => {
  res.send("Server running");
});

// `/connect` route to show submitted form data
router.get("/connect", (req, res) => {
  res.status(200).json({ message: "Form submissions:", data: submittedData });
});

// Start the server
app.listen(5000, () => console.log("Server Running on port 5000"));

// Nodemailer transporter setup
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yourskrish840@gmail.com",
    pass: "tuwm kcrw dfxn dfoq", // Use environment variables instead
  },
});

// Verify email transporter
contactEmail.verify((error) => {
  if (error) {
    console.log("Error setting up email transporter:", error);
  } else {
    console.log("Ready to Send Emails");
  }
});

// `/contact` route to receive form data
router.post("/connect", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const name = `${firstName} ${lastName}`;

  // Store submitted form data in the array
  const formData = { name, email, phone, message };
  submittedData.push(formData);

  const mail = {
    from: name,
    to: "********@gmail.com", // Replace with recipient email
    subject: "Contact Form Submission - Portfolio",
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res
        .status(500)
        .json({ code: 500, status: "Error Sending Message", error });
    } else {
      res
        .status(200)
        .json({ code: 200, status: "Message Sent", submittedData: formData });
    }
  });
});

export default app;
