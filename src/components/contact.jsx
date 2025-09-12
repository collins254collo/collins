import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaUser, FaPaperPlane, FaCheckCircle, FaExclamationTriangle, FaSpinner, FaClock, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

// Advanced form validation with detailed rules
const validateField = (name, value, formData) => {
  switch (name) {
    case 'name':
      if (!value.trim()) return "Name is required";
      if (value.trim().length < 2) return "Name must be at least 2 characters";
      if (value.trim().length > 50) return "Name must be less than 50 characters";
      if (!/^[a-zA-Z\s]+$/.test(value.trim())) return "Name can only contain letters and spaces";
      return "";
      
    case 'email':
      if (!value.trim()) return "Email is required";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value.trim())) return "Please enter a valid email address";
      return "";
      
    case 'message':
      if (!value.trim()) return "Message is required";
      if (value.trim().length < 20) return "Message must be at least 20 characters";
      if (value.trim().length > 1000) return "Message must be less than 1000 characters";
      return "";
      
    default:
      return "";
  }
};

// Multi-type notification system
const NotificationToast = ({ notifications, removeNotification }) => {
  return (
    <div className="fixed top-5 right-5 z-50 space-y-3">
      <AnimatePresence>
        {notifications.map((notification) => {
          const styles = {
            success: "bg-gradient-to-r from-emerald-500 to-green-600 text-white",
            error: "bg-gradient-to-r from-red-500 to-rose-600 text-white",
            info: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white",
            warning: "bg-gradient-to-r from-amber-500 to-orange-600 text-white"
          };

          const icons = {
            success: <FaCheckCircle />,
            error: <FaExclamationTriangle />,
            info: <FaSpinner className="animate-spin" />,
            warning: <FaExclamationTriangle />
          };

          return (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: 300, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 300, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`${styles[notification.type]} px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/20 max-w-sm`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-lg">
                  {icons[notification.type]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm">{notification.title}</p>
                  <p className="text-sm opacity-90 mt-1">{notification.message}</p>
                </div>
                <button
                  onClick={() => removeNotification(notification.id)}
                  className="text-white/80 hover:text-white transition-colors p-1"
                  aria-label="Close notification"
                >
                  ✕
                </button>
              </div>
              {/* Progress bar for auto-dismiss */}
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: notification.duration / 1000, ease: "linear" }}
                className="h-1 bg-white/30 rounded-full mt-3"
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

// Floating particles animation component
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className={`absolute w-4 h-4 ${
            i % 3 === 0 ? 'bg-indigo-400/20' : 
            i % 3 === 1 ? 'bg-purple-400/20' : 'bg-pink-400/20'
          } ${
            i % 2 === 0 ? 'rounded-full' : 'rotate-45'
          }`}
          animate={{
            y: [-20, -100, -20],
            x: [0, 30, 0],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 8 + (i * 2),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
          style={{
            left: `${10 + (i * 12)}%`,
            top: `${20 + (i * 8)}%`,
          }}
        />
      ))}
      
      {/* Gradient orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-32 h-32 rounded-full filter blur-xl opacity-20"
          style={{
            background: `linear-gradient(45deg, ${
              i === 0 ? '#6366f1, #8b5cf6' :
              i === 1 ? '#8b5cf6, #ec4899' :
              '#ec4899, #f59e0b'
            })`
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 6 + (i * 2),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5
          }}
          
        />
      ))}
    </div>
  );
};

// Skill tags component
const SkillTags = () => {
  const skills = ['React', 'Node.js', 'TypeScript',  'Express.js', 'postregreSql'];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="flex flex-wrap gap-2 mt-6"
    >
      {skills.map((skill, index) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ delay: 0.7 + (index * 0.1) }}
          className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium border border-indigo-200 dark:border-indigo-400/20 hover:shadow-lg transition-all duration-300"
        >
          {skill}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef(null);

  // Notification system
  const addNotification = useCallback((type, title, message, duration = 4000) => {
    const id = Date.now() + Math.random();
    const notification = { id, type, title, message, duration };
    
    setNotifications(prev => [...prev, notification]);
    
    setTimeout(() => {
      removeNotification(id);
    }, duration);
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  // Real-time validation
  const handleInputChange = useCallback((field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (touched[field]) {
      const error = validateField(field, value, formData);
      setErrors(prev => ({ ...prev, [field]: error }));
    }
  }, [formData, touched]);

  const handleBlur = useCallback((field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    setFocusedField(null);
    
    const error = validateField(field, formData[field], formData);
    setErrors(prev => ({ ...prev, [field]: error }));
  }, [formData]);

  const handleFocus = useCallback((field) => {
    setFocusedField(field);
  }, []);

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field], formData);
      if (error) newErrors[field] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ name: true, email: true, message: true });
      addNotification('error', 'Validation Error', 'Please fix the errors in the form');
      return;
    }

    setLoading(true);
    addNotification('info', 'Sending...', 'Your message is being sent');

    try {
      // Simulate API call delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/send_email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Email sent successfully:", data);

      // Success state
      setLoading(false);
      addNotification('success', 'Message Sent! ', "I'll get back to you within 24 hours");
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setTouched({});
      
    } catch (error) {
      console.error("Error sending email:", error);
      setLoading(false);
      addNotification('error', 'Send Failed', 'Please try again or email me directly');
    }
  };

  // Contact information with enhanced data
  const contactMethods = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "njogucollins10397@gmail.com",
      displayValue: "njogucollins10397@gmail.com",
      href: "mailto:njogucollins10397@gmail.com",
      color: "indigo",
      description: "Best for project discussions",
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "collins-njogu-4aa75a351",
      displayValue: "Connect on LinkedIn",
      href: "https://linkedin.com/in/collins-njogu-4aa75a351",
      color: "blue",
      description: "Professional networking",
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "collins254collo",
      displayValue: "View my repositories",
      href: "https://github.com/collins254collo",
      color: "purple",
      description: "Check out my code",
      responseTime: "Open source projects"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Nairobi, Kenya",
      displayValue: "Nairobi, Kenya",
      href: null,
      color: "emerald",
    }
  ];

  const formFields = [
    { 
      name: "name", 
      label: "Full Name", 
      type: "text", 
      icon: FaUser, 
      placeholder: "Enter your full name"
    },
    { 
      name: "email", 
      label: "Email Address", 
      type: "email", 
      icon: FaEnvelope, 
      placeholder: "your.email@example.com"
    },
  ];

  return (
    <section 
      ref={formRef}
      className="relative min-h-screen py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-900 dark:via-gray-900 dark:to-indigo-950 text-gray-900 dark:text-white transition-all duration-700 overflow-hidden"
    >
      {/* Floating background elements */}
      <FloatingElements />
      
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-indigo-500/30 to-purple-600/30 rounded-full filter blur-3xl"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-500/30 to-pink-600/30 rounded-full filter blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full border border-indigo-200 dark:border-indigo-400/20 mb-6"
          >
            <FaStar className="text-yellow-500" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Available for new projects</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-6 leading-tight"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% 200%'
            }}
          >
            Let's Build Something
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-orange-500 dark:from-pink-400 dark:via-rose-400 dark:to-orange-400">
              Extraordinary
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
          >
            I'm passionate about crafting digital experiences that make a difference. 
            From concept to deployment, let's collaborate and bring your vision to life.
          </motion.p>
          
          <SkillTags />
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Contact Information - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="xl:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    repeatDelay: 5 
                  }}
                >
                  <FaUser className="text-indigo-500 dark:text-indigo-400" />
                </motion.div>
                Get In Touch
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Ready to start your next project? I'm here to help you every step of the way. 
                Whether it's a complete web application,or just a consultation, 
                I'd love to hear about your ideas and see how we can work together.
              </p>
            </div>

            {/*  Contact Methods */}
            <div className="grid gap-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                const colorClasses = {
                  indigo: {
                    bg: "bg-indigo-50 dark:bg-indigo-500/10",
                    iconBg: "bg-gradient-to-br from-indigo-500 to-indigo-600",
                    border: "border-indigo-200 dark:border-indigo-400/20 hover:border-indigo-400/50",
                    text: "text-indigo-600 dark:text-indigo-400"
                  },
                  blue: {
                    bg: "bg-blue-50 dark:bg-blue-500/10",
                    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600", 
                    border: "border-blue-200 dark:border-blue-400/20 hover:border-blue-400/50",
                    text: "text-blue-600 dark:text-blue-400"
                  },
                  purple: {
                    bg: "bg-purple-50 dark:bg-purple-500/10",
                    iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
                    border: "border-purple-200 dark:border-purple-400/20 hover:border-purple-400/50", 
                    text: "text-purple-600 dark:text-purple-400"
                  },
                  emerald: {
                    bg: "bg-emerald-50 dark:bg-emerald-500/10",
                    iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
                    border: "border-emerald-200 dark:border-emerald-400/20 hover:border-emerald-400/50",
                    text: "text-emerald-600 dark:text-emerald-400"
                  }
                };

                const colors = colorClasses[method.color];

                const content = (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -4,
                      transition: { duration: 0.2 }
                    }}
                    className={`group p-6 ${colors.bg} backdrop-blur-lg rounded-2xl border ${colors.border} transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer`}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className={`p-4 ${colors.iconBg} text-white rounded-xl shadow-lg flex-shrink-0`}
                        whileHover={{ 
                          rotate: 5, 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <Icon className="text-xl" />
                      </motion.div>
                      <div className="flex-grow min-w-0">
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {method.title}
                        </h3>
                        <p className={`${colors.text} font-semibold text-sm mb-2 break-all`}>
                          {method.displayValue}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                          {method.description}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
                          <span>{method.responseTime}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );

                return method.href ? (
                  <a 
                    key={method.title} 
                    href={method.href} 
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={method.title}>{content}</div>
                );
              })}
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200 dark:border-green-400/20 overflow-hidden"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full shadow-lg"
              />
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl">
                  <FaCheckCircle className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                    Available for Projects
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Currently accepting new clients and exciting opportunities. 
                    I'm particularly interested in React/Node.js projects
                    and innovative web solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="xl:col-span-3"
          >
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl rounded-3xl p-8 md:p-10 border border-gray-200 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <motion.div
                    animate={{ 
                      rotate: [0, 15, 0],
                      y: [0, -2, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      repeatDelay: 4 
                    }}
                  >
                    <FaPaperPlane className="text-indigo-600 dark:text-indigo-400" />
                  </motion.div>
                  Send a Message
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Tell me about your project and let's discuss how we can bring it to life.
                </p>
              </div>

              <div className="space-y-6">
                {/* Form Fields */}
                {formFields.map((field, index) => {
                  const Icon = field.icon;
                  const hasError = errors[field.name] && touched[field.name];
                  const isFocused = focusedField === field.name;
                  
                  return (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="space-y-2"
                    >
                      <label
                        htmlFor={field.name}
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                      >
                        {field.label} 
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      
                      <div className="relative group">
                        <motion.div
                          animate={{
                            scale: isFocused ? 1.1 : 1,
                            color: hasError ? '#ef4444' : isFocused ? '#6366f1' : '#9ca3af'
                          }}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg z-10"
                        >
                          <Icon />
                        </motion.div>
                        
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          type={field.type}
                          id={field.name}
                          placeholder={field.placeholder}
                          value={formData[field.name]}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                          onFocus={() => handleFocus(field.name)}
                          onBlur={() => handleBlur(field.name)}
                          className={`w-full pl-14 pr-4 py-4 bg-gray-50 dark:bg-gray-800/50 border-2 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                            hasError 
                              ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/20' 
                              : 'border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20'
                          }`}
                          aria-invalid={hasError}
                          aria-describedby={hasError ? `${field.name}-error` : undefined}
                        />
                        
                        {/* Animated border effect */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl pointer-events-none"
                          animate={{
                            opacity: isFocused ? 1 : 0,
                            scale: isFocused ? 1 : 0.95
                          }}
                          style={{
                            background: 'linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899)',
                            backgroundSize: '300% 300%',
                            padding: '2px'
                          }}
                        >
                          <motion.div
                            animate={{
                              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                            className="w-full h-full bg-gray-50 dark:bg-gray-800/50 rounded-2xl"
                          />
                        </motion.div>
                      </div>
                      
                      <AnimatePresence>
                        {hasError && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.9 }}
                            className="flex items-center gap-2 text-red-500 text-sm"
                          >
                            <FaExclamationTriangle className="w-4 h-4" />
                            <span>{errors[field.name]}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="space-y-2"
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Project Details <span className="text-red-500 ml-1">*</span>
                  </label>
                  
                  <div className="relative">
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      id="message"
                      rows="6"
                      placeholder="Tell me about your project: What are you building? What's your timeline? Any specific requirements or technologies you prefer? The more details, the better I can help!"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      onFocus={() => handleFocus('message')}
                      onBlur={() => handleBlur('message')}
                      className={`w-full px-4 py-4 bg-gray-50 dark:bg-gray-800/50 border-2 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none transition-all duration-300 resize-none ${
                        errors.message && touched.message
                          ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/20' 
                          : 'border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20'
                      }`}
                      aria-invalid={errors.message && touched.message}
                    />
                    
                    {/* Character counter */}
                    <motion.div
                      animate={{
                        color: formData.message.length > 900 ? '#ef4444' : 
                               formData.message.length > 700 ? '#f59e0b' : '#6b7280'
                      }}
                      className="absolute bottom-3 right-3 text-xs font-medium"
                    >
                      {formData.message.length}/1000
                    </motion.div>
                  </div>
                  
                  <AnimatePresence>
                    {errors.message && touched.message && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.9 }}
                        className="flex items-center gap-2 text-red-500 text-sm"
                      >
                        <FaExclamationTriangle className="w-4 h-4" />
                        <span>{errors.message}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.5)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  disabled={loading}
                  className="group relative w-full px-8 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed text-lg overflow-hidden"
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent"
                    animate={{
                      x: loading ? ['-100%', '100%'] : '-100%',
                      opacity: loading ? [0.3, 0.6, 0.3] : 0
                    }}
                    transition={{
                      duration: 2,
                      repeat: loading ? Infinity : 0,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Button content */}
                  <div className="relative flex items-center justify-center gap-3">
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <FaSpinner className="text-xl" />
                        </motion.div>
                        <span>Sending Your Message...</span>
                      </>
                    ) : (
                      <>
                        <motion.div
                          animate={{ 
                            x: [0, 3, 0],
                            rotate: [0, 15, 0]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            repeatDelay: 3 
                          }}
                        >
                          <FaPaperPlane className="text-xl" />
                        </motion.div>
                        <span>Send Message</span>
                        <motion.div
                          className="absolute -right-2 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all duration-300"
                          animate={{
                            x: [0, 5, 0]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          →
                        </motion.div>
                      </>
                    )}
                  </div>
                </motion.button>

                {/* Form Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-center pt-4"
                >
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    🔒 Your information is secure and will only be used to respond to your inquiry.
                    <br />
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 max-w-4xl mx-auto"
        >
          <div className="p-8 bg-gradient-to-r from-indigo-50 via-white to-purple-50 dark:from-indigo-950/50 dark:via-gray-900/50 dark:to-purple-950/50 rounded-3xl border border-indigo-200 dark:border-indigo-800/30 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
              Whether you're a startup with a revolutionary idea or an established business 
              looking to innovate, I'm here to help transform your vision into reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                <span>Fast turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                <span>Ongoing support</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Notification System */}
      <NotificationToast 
        notifications={notifications} 
        removeNotification={removeNotification} 
      />
    </section>
  );
};

export default Contact;