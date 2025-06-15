import {
  FaJs,
  FaReact,
  FaNode,
  FaDatabase,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiC,
  SiNextdotjs,
} from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      {
        name: "JavaScript",
        level: "Advanced",
        icon: <FaJs className="text-yellow-500 mx-auto" />,
      },
      {
        name: "React",
        level: "Advanced",
        icon: <FaReact className="text-blue-400 mx-auto" />,
      },
      {
        name: "Tailwind CSS",
        level: "Advanced",
        icon: <SiTailwindcss className="text-teal-400 mx-auto" />,
      },
      {
        name: "Next.js",
        level: "Intermediate",
        icon: <SiNextdotjs className="text-black dark:text-white mx-auto" />,
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        level: "Advanced",
        icon: <FaNode className="text-green-500 mx-auto" />,
      },
      {
        name: "Express.js",
        level: "Advanced",
        icon: <SiExpress className="text-gray-400 mx-auto" />,
      },
    ],
  },
  {
    category: "Database",
    skills: [
      {
        name: "PostgreSQL",
        level: "Advanced",
        icon: <SiPostgresql className="text-blue-500 mx-auto" />,
      },
      {
        name: "MongoDB",
        level: "Intermediate",
        icon: <FaDatabase className="text-green-400 mx-auto" />,
      },
    ],
  },
  {
    category: "Version Control & Tools",
    skills: [
      {
        name: "Git",
        level: "Advanced",
        icon: <FaGitAlt className="text-red-500 mx-auto" />,
      },
      {
        name: "GitHub",
        level: "Advanced",
        icon: <FaGithub className="text-gray-400 mx-auto" />,
      },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16  dark:bg-gray-300 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="container mx-auto px-6 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold text-center text-indigo-500 mb-12">
          Tools & Skills
        </h2>
        {skillsData.map((category, index) => (
          <div key={index} className="mb-8 w-full max-w-4xl">
            <h3 className="text-2xl font-semibold  mb-6 text-indigo-400">
              {category.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 text-center justify-center">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="relative bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-gray-300 dark:hover:bg-gray-700"
                >
                  <div className="text-5xl mb-3 flex justify-center">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
