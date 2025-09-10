import {
  FaJs,
  FaReact,
  FaNode,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
  FaCode,
  FaRocket,
  FaCloud,
  FaServer,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiRedis,
  SiKubernetes,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiVercel,
  SiFirebase,
  SiSupabase,
} from "react-icons/si";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend Development",
    icon: <FaCode className="text-indigo-500" />,
    skills: [
      {
        name: "JavaScript",
        level: 95,
        icon: <FaJs className="text-yellow-500" />,
        description: "ES6+, Modern JS, Async Programming",
      },
      {
        name: "TypeScript",
        level: 90,
        icon: <SiTypescript className="text-blue-600" />,
        description: "Type Safety, Interfaces, Generics",
      },
      {
        name: "React",
        level: 95,
        icon: <FaReact className="text-blue-400" />,
        description: "Hooks, Context, Performance Optimization",
      },
      {
        name: "Next.js",
        level: 85,
        icon: <SiNextdotjs className="text-black dark:text-white" />,
        description: "SSR, SSG, App Router, Vercel",
      },
      {
        name: "Tailwind CSS",
        level: 90,
        icon: <SiTailwindcss className="text-teal-400" />,
        description: "Utility-first, Responsive Design",
      },
    ],
  },
  {
    category: "Backend Development",
    icon: <FaServer className="text-green-500" />,
    skills: [
      {
        name: "Node.js",
        level: 90,
        icon: <FaNode className="text-green-500" />,
        description: "Event Loop, Streams, Performance",
      },
      {
        name: "Express.js",
        level: 85,
        icon: <SiExpress className="text-gray-400" />,
        description: "REST APIs, Middleware, Security",
      },
      {
        name: "C#",
        level: 60,
        icon: <div className="text-purple-600 font-bold text-2xl">C#</div>,
        description: "Currently Learning - .NET, ASP.NET Core",
      },
      {
        name: "GraphQL",
        level: 75,
        icon: <SiGraphql className="text-pink-500" />,
        description: "Schema Design, Resolvers, Apollo",
      },
    ],
  },
  {
    category: "Database & Storage",
    icon: <FaDatabase className="text-blue-500" />,
    skills: [
      {
        name: "PostgreSQL",
        level: 90,
        icon: <SiPostgresql className="text-blue-500" />,
        description: "Complex Queries, Indexing, Performance",
      },
      {
        name: "MongoDB",
        level: 80,
        icon: <SiMongodb className="text-green-400" />,
        description: "Document Design, Aggregation, Atlas",
      },
      {
        name: "Redis",
        level: 75,
        icon: <SiRedis className="text-red-500" />,
        description: "Caching, Sessions, Pub/Sub",
      },
      {
        name: "Supabase",
        level: 85,
        icon: <SiSupabase className="text-green-600" />,
        description: "Real-time, Auth, Edge Functions",
      },
    ],
  },
  {
    category: "Tools & Testing",
    icon: <FaRocket className="text-pink-500" />,
    skills: [
      {
        name: "Git",
        level: 95,
        icon: <FaGitAlt className="text-red-500" />,
        description: "Version Control, Branching, Merging",
      },
      {
        name: "GitHub",
        level: 90,
        icon: <FaGithub className="text-gray-400" />,
        description: "CI/CD, Actions, Project Management",
      },
      {
        name: "Jasmine",
        level: 85,
        icon: <SiJest className="text-red-600" />,
        description: "Unit Testing, BDD, Test Suites",
      },
      {
        name: "Webpack",
        level: 75,
        icon: <SiWebpack className="text-blue-500" />,
        description: "Bundling, Optimization, Plugins",
      },
      {
        name: "Vercel",
        level: 90,
        icon: <SiVercel className="text-black dark:text-white" />,
        description: "Deployment, Edge Functions, Analytics",
      },
    ],
  },
];

const Skills = () => {
  return (
        <section
        id="skills"
        className="py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50
        dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 
        text-gray-900 dark:text-white transition-colors duration-300 relative overflow-hidden"
      >

          {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-200 dark:bg-indigo-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse"></div>
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
            Technical Expertise
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that power today's digital solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="w-full max-w-6xl mx-auto"
            >
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg">
                  {category.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
                  {category.category}
                </h3>
              </motion.div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 cursor-pointer"
                  >
                    {/* Skill Icon */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                    </div>

                    {/* Skill Name */}
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-center">
                      {skill.name}
                    </h4>

                    {/* Skill Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                      {skill.description}
                    </p>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
       
      </div>
    </section>
  );
};

export default Skills;
