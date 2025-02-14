import { useState } from "react";
import contactImg from "../assets/contact-img.svg";
import { motion } from "framer-motion";

function Connect() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if all fields are filled
    if (
      !formDetails.firstName ||
      !formDetails.lastName ||
      !formDetails.email ||
      !formDetails.phone ||
      !formDetails.message
    ) {
      setStatus({
        success: false,
        message: "Please fill out all fields before submitting.",
      });
      return;
    }

    setButtonText("Sending...");

    try {
      let response = await fetch(
        "https://krishna-portfolio-server-henna.vercel.app/connect",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formDetails),
        }
      );

      setButtonText("Send");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      let result = await response.json();

      setFormDetails(formInitialDetails);

      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        setStatus({
          success: false,
          message: "Something went wrong, please try again later.",
        });
      }
    } catch {
      setStatus({
        success: false,
        message: "Failed to send message. Please check your server connection.",
      });
    }
  };

  return (
    <section className="py-16 mt-6 px-5 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* 3D Animated Image */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-11/12"
          >
            <img src={contactImg} alt="Contact Us" className="drop-shadow-lg" />
          </motion.div>

          {/* Contact Form */}
          <div id="connect">
            <h2 className="text-white mt-8 text-4xl font-bold mb-6">
              Get In Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.input
                  type="text"
                  value={formDetails.firstName}
                  placeholder="First Name"
                  onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-xl text-white p-4 placeholder-gray-400 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:bg-white/5 focus:text-white transition-all duration-300"
                />
                <motion.input
                  type="text"
                  value={formDetails.lastName}
                  placeholder="Last Name"
                  onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-xl text-white p-4 placeholder-gray-400 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:bg-white/5 focus:text-white transition-all duration-300"
                />
              </div>
              <motion.input
                type="email"
                value={formDetails.email}
                placeholder="Email Address"
                onChange={(e) => onFormUpdate("email", e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded-xl text-white p-4 placeholder-gray-400 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:bg-white/5 focus:text-white transition-all duration-300"
              />
              <motion.input
                type="tel"
                value={formDetails.phone}
                placeholder="Phone No."
                onChange={(e) => onFormUpdate("phone", e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded-xl text-white p-4 placeholder-gray-400 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:bg-white/5 focus:text-white transform transition-all duration-300"
              />
              <motion.textarea
                rows="6"
                value={formDetails.message}
                placeholder="Message"
                onChange={(e) => onFormUpdate("message", e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded-xl text-white p-4 placeholder-gray-400 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:bg-white/5 focus:text-white transition-all duration-300"
              ></motion.textarea>
              <motion.button
                type="submit"
                disabled={
                  !formDetails.firstName ||
                  !formDetails.lastName ||
                  !formDetails.email ||
                  !formDetails.phone ||
                  !formDetails.message
                }
                className="relative bg-gray-400 rounded-lg hover:bg-gray-600 text-white font-bold py-3 px-8 text-lg mt-6 transition-all duration-400 ease-in overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">{buttonText}</span>
                <span className="absolute inset-0 bg-black w-0 transition-all duration-300 hover:w-full"></span>
              </motion.button>
              {status.message && (
                <p
                  className={status.success ? "text-green-400" : "text-red-400"}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connect;
