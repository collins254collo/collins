import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
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
    setTimeout(() => {
      setLoading(false);
      setPopupMessage("Message Sent Successfully!");
      setPopup(true);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-16 bg-gray-900 text-white">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={(main) => loadFull(main)}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 80 },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
            size: { value: 3 },
            move: { speed: 0.5 },
            links: { enable: true, color: "#ffffff", opacity: 0.2 },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-center text-indigo-400 mb-6"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center text-lg mb-10 text-gray-300"
        >
          Have a question or want to collaborate? Drop me a message below or
          reach out on my socials.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-xl shadow-xl p-8"
          >
            {["name", "email", "message"].map((field) => (
              <div className="mb-6" key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium mb-2 text-gray-400"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field === "message" ? (
                  <textarea
                    id={field}
                    rows="4"
                    placeholder={`Your ${field}`}
                    value={formData[field]}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                    className="w-full px-4 py-3 border rounded-lg bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    placeholder={`Your ${field}`}
                    value={formData[field]}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                    className="w-full px-4 py-3 border rounded-lg bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
                  />
                )}
              </div>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition flex justify-center items-center cursor-pointer shadow-md"
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
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
              ) : (
                "Send Message"
              )}
            </motion.button>
          </motion.form>
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
