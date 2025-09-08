import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaUser, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const PopupMessage = ({ popup, setPopup, popupMessage }) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (popup && !isHovered) {
      const timer = setTimeout(() => setPopup(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [popup, isHovered, setPopup]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setPopup(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setPopup]);

  return (
    <AnimatePresence>
      {popup && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-2xl flex items-center gap-3 max-w-sm w-full sm:w-auto"
          role="alert"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="text-sm">{popupMessage}</span>
          <button
            onClick={() => setPopup(false)}
            className="ml-4 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded-full p-1"
            aria-label="Close popup"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const sendEmail = async () => {
      try {
        const response = await fetch(
          "https://portfolio-t5sr.onrender.com/send_email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${errorText}`);
        }

        const data = await response.json();
        console.log("Email sent successfully:", data);

        setTimeout(() => {
          setLoading(false);
          setPopupMessage("Message Sent Successfully!");
          setPopup(true);
          setFormData({ name: "", email: "", message: "" });
        }, 2000);
      } catch (error) {
        console.error("Error sending email:", error);
        setPopup(true);
        setPopupMessage("Failed to send message. Please try again.");
        setLoading(false);
      }
    };

    sendEmail();
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-800 dark:via-gray-900 dark:to-indigo-900 text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={(main) => loadFull(main)}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 60 },
            shape: { type: "circle" },
            opacity: { value: 0.2 },
            size: { value: 2 },
            move: { speed: 0.3 },
            links: { enable: true, color: "#ffffff", opacity: 0.1 },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm here to help you build something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                <FaUser className="text-indigo-500 dark:text-indigo-400" />
                Get In Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a specific project in mind or just want to chat about technology, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-white/10 hover:border-indigo-400/50 transition-all duration-300 shadow-lg dark:shadow-none"
              >
                <div className="p-3 bg-indigo-100 dark:bg-indigo-500/20 rounded-lg">
                  <FaEnvelope className="text-indigo-600 dark:text-indigo-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">wamiatucollins@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-white/10 hover:border-purple-400/50 transition-all duration-300 shadow-lg dark:shadow-none"
              >
                <div className="p-3 bg-purple-100 dark:bg-purple-500/20 rounded-lg">
                  <FaLinkedin className="text-purple-600 dark:text-purple-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">LinkedIn</h4>
                  <p className="text-gray-600 dark:text-gray-300">linkedin.com/in/collins-njogu-4aa75a351</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-white/10 hover:border-pink-400/50 transition-all duration-300 shadow-lg dark:shadow-none"
              >
                <div className="p-3 bg-pink-100 dark:bg-pink-500/20 rounded-lg">
                  <FaGithub className="text-pink-600 dark:text-pink-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">GitHub</h4>
                  <p className="text-gray-600 dark:text-gray-300">github.com/collins254collo</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-white/10 hover:border-green-400/50 transition-all duration-300 shadow-lg dark:shadow-none"
              >
                <div className="p-3 bg-green-100 dark:bg-green-500/20 rounded-lg">
                  <FaMapMarkerAlt className="text-green-600 dark:text-green-400 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Nairobi, Kenya</p>
                </div>
              </motion.div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-xl border border-indigo-200 dark:border-indigo-400/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <FaCheckCircle className="text-green-600 dark:text-green-400 text-xl" />
                <h4 className="font-semibold text-gray-800 dark:text-white">Available for Work</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Currently accepting new projects and opportunities. 
                I typically respond within 24 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 dark:border-white/20 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
              <FaPaperPlane className="text-indigo-600 dark:text-indigo-400" />
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: "name", label: "Full Name", type: "text", icon: FaUser },
                { name: "email", label: "Email Address", type: "email", icon: FaEnvelope },
              ].map((field) => {
                const Icon = field.icon;
                return (
                  <div key={field.name} className="relative">
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {field.label}
                    </label>
                    <div className="relative">
                      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                      <input
                        type={field.type}
                        id={field.name}
                        placeholder={`Enter your ${field.label.toLowerCase()}`}
                        value={formData[field.name]}
                        required
                        onChange={(e) =>
                          setFormData({ ...formData, [field.name]: e.target.value })
                        }
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-300 cursor-pointer"
                      />
                    </div>
                  </div>
                );
              })}

              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell me about your project or idea..."
                  value={formData.message}
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Popup Message */}
      <PopupMessage
        popup={popup}
        setPopup={setPopup}
        popupMessage={popupMessage}
      />
    </section>
  );
};

export default Contact;
