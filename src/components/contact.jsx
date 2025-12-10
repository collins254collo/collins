// import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaUser, FaPaperPlane, FaCheckCircle, FaExclamationTriangle, FaSpinner, FaClock, FaStar } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect, useRef, useCallback } from "react";

// // Advanced form validation with detailed rules
// const validateField = (name, value, formData) => {
//   switch (name) {
//     case 'name':
//       if (!value.trim()) return "Name is required";
//       if (value.trim().length < 2) return "Name must be at least 2 characters";
//       if (value.trim().length > 50) return "Name must be less than 50 characters";
//       if (!/^[a-zA-Z\s]+$/.test(value.trim())) return "Name can only contain letters and spaces";
//       return "";
      
//     case 'email':
//       if (!value.trim()) return "Email is required";
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(value.trim())) return "Please enter a valid email address";
//       return "";
      
//     case 'message':
//       if (!value.trim()) return "Message is required";
//       if (value.trim().length < 20) return "Message must be at least 20 characters";
//       if (value.trim().length > 1000) return "Message must be less than 1000 characters";
//       return "";
      
//     default:
//       return "";
//   }
// };



// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
  
//   const [loading, setLoading] = useState(false);
//   const [notifications, setNotifications] = useState([]);
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [focusedField, setFocusedField] = useState(null);
//   const formRef = useRef(null);

//   // Notification system
//   const addNotification = useCallback((type, title, message, duration = 4000) => {
//     const id = Date.now() + Math.random();
//     const notification = { id, type, title, message, duration };
    
//     setNotifications(prev => [...prev, notification]);
    
//     setTimeout(() => {
//       removeNotification(id);
//     }, duration);
//   }, []);

//   const removeNotification = useCallback((id) => {
//     setNotifications(prev => prev.filter(n => n.id !== id));
//   }, []);

//   // Real-time validation
//   const handleInputChange = useCallback((field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
    
//     if (touched[field]) {
//       const error = validateField(field, value, formData);
//       setErrors(prev => ({ ...prev, [field]: error }));
//     }
//   }, [formData, touched]);

//   const handleBlur = useCallback((field) => {
//     setTouched(prev => ({ ...prev, [field]: true }));
//     setFocusedField(null);
    
//     const error = validateField(field, formData[field], formData);
//     setErrors(prev => ({ ...prev, [field]: error }));
//   }, [formData]);

//   const handleFocus = useCallback((field) => {
//     setFocusedField(field);
//   }, []);

//   // Form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Validate all fields
//     const newErrors = {};
//     Object.keys(formData).forEach(field => {
//       const error = validateField(field, formData[field], formData);
//       if (error) newErrors[field] = error;
//     });

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       setTouched({ name: true, email: true, message: true });
//       addNotification('error', 'Validation Error', 'Please fix the errors in the form');
//       return;
//     }

//     setLoading(true);
//     addNotification('info', 'Sending...', 'Your message is being sent');

//     try {
//       // Simulate API call delay for better UX
//       await new Promise(resolve => setTimeout(resolve, 1500));

      
//       const response = await fetch("https://portfolio-t5sr.onrender.com/send_email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("Email sent successfully:", data);

//       // Success state
//       setLoading(false);
//       addNotification('success', 'Message Sent! ', "I'll get back to you within 24 hours");
      
//       // Reset form
//       setFormData({ name: "", email: "", message: "" });
//       setErrors({});
//       setTouched({});
      
//     } catch (error) {
//       console.error("Error sending email:", error);
//       setLoading(false);
//       addNotification('error', 'Send Failed', 'Please try again or email me directly');
//     }
//   };

//   // Contact information with enhanced data
//   const contactMethods = [
//     {
//       icon: FaEnvelope,
//       title: "Email",
//       value: "njogucollins10397@gmail.com",
//       displayValue: "njogucollins10397@gmail.com",
//       href: "mailto:njogucollins10397@gmail.com",
//       color: "indigo",
//       description: "Best for project discussions",
//     },
//     {
//       icon: FaLinkedin,
//       title: "LinkedIn",
//       value: "collins-njogu-4aa75a351",
//       displayValue: "Connect on LinkedIn",
//       href: "https://linkedin.com/in/collins-njogu-4aa75a351",
//       color: "blue",
//       description: "Professional networking",
//     },
//     {
//       icon: FaGithub,
//       title: "GitHub",
//       value: "collins254collo",
//       displayValue: "View my repositories",
//       href: "https://github.com/collins254collo",
//       color: "purple",
//       description: "Check out my code",
//       responseTime: "Open source projects"
//     },
//     {
//       icon: FaMapMarkerAlt,
//       title: "Location",
//       value: "Nairobi, Kenya",
//       displayValue: "Nairobi, Kenya",
//       href: null,
//       color: "emerald",
//     }
//   ];

//   const formFields = [
//     { 
//       name: "name", 
//       label: "Full Name", 
//       type: "text", 
//       icon: FaUser, 
//       placeholder: "Enter your full name"
//     },
//     { 
//       name: "email", 
//       label: "Email Address", 
//       type: "email", 
//       icon: FaEnvelope, 
//       placeholder: "your.email@example.com"
//     },
//   ];

//   return (
//     <section 
//       ref={formRef}
//       className="relative min-h-screen py-20 dark:to-indigo-950 text-gray-900 dark:text-white transition-all duration-700 overflow-hidden"
//     >
//       {/* Floating background elements */}
//       <FloatingElements />
      
//       {/* Background gradients */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div 
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.1, 0.3, 0.1]
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//           className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-indigo-500/30 to-purple-600/30 rounded-full filter blur-3xl"
//         />
//         <motion.div 
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.1, 0.3, 0.1]
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 6
//           }}
//           className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-500/30 to-pink-600/30 rounded-full filter blur-3xl"
//         />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Hero Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full border border-indigo-200 dark:border-indigo-400/20 mb-6"
//           >
//             <FaStar className="text-yellow-500" />
//             <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Available for new projects</span>
//           </motion.div>

//           <motion.h1 
//             className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-6 leading-tight"
//             animate={{
//               backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
//             }}
//             transition={{
//               duration: 8,
//               repeat: Infinity,
//               ease: "linear"
//             }}
//             style={{
//               backgroundSize: '200% 200%'
//             }}
//           >
//             Let's Build Something
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-orange-500 dark:from-pink-400 dark:via-rose-400 dark:to-orange-400">
//               Extraordinary
//             </span>
//           </motion.h1>
          
//           <motion.p 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
//           >
//             I'm passionate about crafting digital experiences that make a difference. 
//             From concept to deployment, let's collaborate and bring your vision to life.
//           </motion.p>
          
//         </motion.div>

//         <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 max-w-7xl mx-auto">
//           {/* Contact Information - Takes 2 columns */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="xl:col-span-2 space-y-8"
//           >
           

//             {/* Availability Status */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//               viewport={{ once: true }}
//               className="relative p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200 dark:border-green-400/20 overflow-hidden"
//             >
//               <motion.div
//                 animate={{ 
//                   scale: [1, 1.2, 1],
//                   opacity: [0.7, 1, 0.7]
//                 }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full shadow-lg"
//               />
//               <div className="flex items-start gap-4">
//                 <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl">
//                   <FaCheckCircle className="text-xl" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
//                     Available for Projects
//                   </h3>
//                   <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
//                     Currently accepting new clients and exciting opportunities. 
//                     I'm particularly interested in React/Node.js projects
//                     and innovative web solutions.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Contact Form - Takes 3 columns */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="xl:col-span-3"
//           >
//             <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl rounded-3xl p-8 md:p-10 border border-gray-200 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500">
//               <div className="mb-8">
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
//                   <motion.div
//                     animate={{ 
//                       rotate: [0, 15, 0],
//                       y: [0, -2, 0]
//                     }}
//                     transition={{ 
//                       duration: 3, 
//                       repeat: Infinity, 
//                       repeatDelay: 4 
//                     }}
//                   >
//                     <FaPaperPlane className="text-indigo-600 dark:text-indigo-400" />
//                   </motion.div>
//                   Send a Message
//                 </h2>
//                 <p className="text-gray-600 dark:text-gray-400">
//                   Tell me about your project and let's discuss how we can bring it to life.
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 {/* Form Fields */}
//                 {formFields.map((field, index) => {
//                   const Icon = field.icon;
//                   const hasError = errors[field.name] && touched[field.name];
//                   const isFocused = focusedField === field.name;
                  
//                   return (
//                 <motion.div
//                   key={field.name}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1, duration: 0.6 }}
//                   className="space-y-2"
//                 >
//                   <label
//                     htmlFor={field.name}
//                     className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
//                   >
//                     {field.label}
//                     <span className="text-red-500 ml-1">*</span>
//                   </label>

//                   <div className="relative group">
//                     {/* Icon */}
//                     <motion.div
//                       animate={{
//                         scale: isFocused ? 1.1 : 1,
//                         color: hasError ? "#ef4444" : isFocused ? "#6366f1" : "#9ca3af",
//                       }}
//                       className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg z-10"
//                     >
//                     </motion.div>

//                     {/* Input (always visible on top) */}
//                     <motion.input
//                       whileFocus={{ scale: 1.01 }}
//                       type={field.type}
//                       id={field.name}
//                       placeholder={field.placeholder}
//                       value={formData[field.name]}
//                       onChange={(e) => handleInputChange(field.name, e.target.value)}
//                       onFocus={() => handleFocus(field.name)}
//                       onBlur={() => handleBlur(field.name)}
//                       className={`relative z-20 w-full pl-14 pr-4 py-4 bg-gray-50 dark:bg-gray-800/50 border-2 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none transition-all duration-300 ${
//                         hasError
//                           ? "border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/20"
//                           : "border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
//                       }`}
//                       aria-invalid={hasError}
//                       aria-describedby={hasError ? `${field.name}-error` : undefined}
//                     />

//                     {/* Animated border effect */}
//                     <motion.div
//                       className="absolute inset-0 rounded-2xl pointer-events-none z-0"
//                       animate={{
//                         opacity: isFocused ? 1 : 0,
//                         scale: isFocused ? 1 : 0.95,
//                       }}
//                       style={{
//                         background: "linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899)",
//                         backgroundSize: "300% 300%",
//                         padding: "2px",
//                       }}
//                     >
//                       <motion.div
//                         animate={{
//                           backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//                         }}
//                         transition={{
//                           duration: 3,
//                           repeat: Infinity,
//                           ease: "linear",
//                         }}
//                         className="w-full h-full bg-gray-50 dark:bg-gray-800/50 rounded-2xl"
//                       />
//                     </motion.div>
//                   </div>

//                   <AnimatePresence>
//                     {hasError && (
//                       <motion.div
//                         initial={{ opacity: 0, y: -10, scale: 0.9 }}
//                         animate={{ opacity: 1, y: 0, scale: 1 }}
//                         exit={{ opacity: 0, y: -10, scale: 0.9 }}
//                         className="flex items-center gap-2 text-red-500 text-sm"
//                       >
//                         <FaExclamationTriangle className="w-4 h-4" />
//                         <span>{errors[field.name]}</span>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>

//                   );
//                 })}

//                 {/* Message Field */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2, duration: 0.6 }}
//                   className="space-y-2"
//                 >
//                   <label
//                     htmlFor="message"
//                     className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
//                   >
//                     Project Details <span className="text-red-500 ml-1">*</span>
//                   </label>
                  
//                   <div className="relative">
//                     <motion.textarea
//                       whileFocus={{ scale: 1.01 }}
//                       id="message"
//                       rows="6"
                     
//                       value={formData.message}
//                       onChange={(e) => handleInputChange('message', e.target.value)}
//                       onFocus={() => handleFocus('message')}
//                       onBlur={() => handleBlur('message')}
//                       className={`w-full px-4 py-4 bg-gray-50 dark:bg-gray-800/50 border-2 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none transition-all duration-300 resize-none ${
//                         errors.message && touched.message
//                           ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/20' 
//                           : 'border-gray-200 dark:border-gray-700 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20'
//                       }`}
//                       aria-invalid={errors.message && touched.message}
//                     />
                    
//                     {/* Character counter */}
//                     <motion.div
//                       animate={{
//                         color: formData.message.length > 900 ? '#ef4444' : 
//                                formData.message.length > 700 ? '#f59e0b' : '#6b7280'
//                       }}
//                       className="absolute bottom-3 right-3 text-xs font-medium"
//                     >
//                       {formData.message.length}/1000
//                     </motion.div>
//                   </div>
                  
//                   <AnimatePresence>
//                     {errors.message && touched.message && (
//                       <motion.div
//                         initial={{ opacity: 0, y: -10, scale: 0.9 }}
//                         animate={{ opacity: 1, y: 0, scale: 1 }}
//                         exit={{ opacity: 0, y: -10, scale: 0.9 }}
//                         className="flex items-center gap-2 text-red-500 text-sm"
//                       >
//                         <FaExclamationTriangle className="w-4 h-4" />
//                         <span>{errors.message}</span>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>

//                 {/* Submit Button */}
//                 <motion.button
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3, duration: 0.6 }}
//                   whileHover={{ 
//                     scale: 1.02,
//                     boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.5)"
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={handleSubmit}
//                   disabled={loading}
//                   className="group relative w-full px-8 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed text-lg overflow-hidden"
//                 >
//                   {/* Animated background */}
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent"
//                     animate={{
//                       x: loading ? ['-100%', '100%'] : '-100%',
//                       opacity: loading ? [0.3, 0.6, 0.3] : 0
//                     }}
//                     transition={{
//                       duration: 2,
//                       repeat: loading ? Infinity : 0,
//                       ease: "linear"
//                     }}
//                   />
                  
//                   {/* Button content */}
//                   <div className="relative flex items-center justify-center gap-3">
//                     {loading ? (
//                       <>
//                         <motion.div
//                           animate={{ rotate: 360 }}
//                           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                         >
//                           <FaSpinner className="text-xl" />
//                         </motion.div>
//                         <span>Sending Your Message...</span>
//                       </>
//                     ) : (
//                       <>
//                         <motion.div
//                           animate={{ 
//                             x: [0, 3, 0],
//                             rotate: [0, 15, 0]
//                           }}
//                           transition={{ 
//                             duration: 2, 
//                             repeat: Infinity, 
//                             repeatDelay: 3 
//                           }}
//                         >
//                           <FaPaperPlane className="text-xl" />
//                         </motion.div>
//                         <span>Send Message</span>
//                         <motion.div
//                           className="absolute -right-2 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all duration-300"
//                           animate={{
//                             x: [0, 5, 0]
//                           }}
//                           transition={{
//                             duration: 1.5,
//                             repeat: Infinity,
//                             ease: "easeInOut"
//                           }}
//                         >
//                           →
//                         </motion.div>
//                       </>
//                     )}
//                   </div>
//                 </motion.button>

//                 {/* Form Footer */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.5, duration: 0.6 }}
//                   className="text-center pt-4"
//                 >
//                   <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
//                      Your information is secure and will only be used to respond to your inquiry.
//                     <br />
//                   </p>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

      
//       </div>

     
//     </section>
//   );
// };

// export default Contact;