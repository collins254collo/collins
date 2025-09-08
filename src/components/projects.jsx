import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiPostgresql, SiTailwindcss, SiJavascript } from "react-icons/si";

const projectsData = [
  // ... your projects remain the same
];

const Project = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-800 dark:via-gray-900 dark:to-indigo-900 text-gray-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-indigo-200 dark:bg-indigo-800 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse delay-1000"></div>
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
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and projects that demonstrate my skills in full-stack development
          </p>
        </motion.div>

        {/* Projects Section */}
        <div className="grid grid-cols-1 gap-14 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{
                rotateX: 4,
                rotateY: -4,
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-indigo-500/40 transition-all duration-500 overflow-hidden"
            >
              <div
                className={`flex flex-col lg:flex-row ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Project Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="lg:w-1/2 relative group"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-indigo-500 text-white text-xs font-medium rounded-full shadow">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 bg-green-500 text-white text-xs font-medium rounded-full shadow">
                      {project.status}
                    </span>
                  </div>
                </motion.div>

                {/* Project Details */}
                <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech, techIndex) => {
                        const Icon = project.icons[techIndex] || FaCode;
                        return (
                          <span
                            key={techIndex}
                            className="flex items-center gap-1 px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                          >
                            <Icon className="w-3 h-3" />
                            {tech}
                          </span>
                        );
                      })}
                    </div>

                    {/* Features */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="mt-6"
                    >
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-300">
                        Key Features
                      </h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <FaRocket className="w-3 h-3 text-indigo-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex gap-3 mt-6"
                  >
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 bg-gray-800 dark:bg-gray-700 text-white text-sm rounded-lg hover:bg-indigo-600 transition"
                    >
                      <FaGithub className="w-4 h-4" /> Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" /> Live
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaCode />
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
