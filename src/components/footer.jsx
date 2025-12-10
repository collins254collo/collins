import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode, FaRocket } from "react-icons/fa";


//bd consulting agency
const Footer = () => {

  const socialLinks = [
    {
      href: "https://github.com/collins254collo",
      icon: FaGithub,
      label: "GitHub",
      hoverColor: "hover:text-gray-300"
    },
    {
      href: "https://linkedin.com/in/collinsnjogu",
      icon: FaLinkedin,
      label: "LinkedIn",
      hoverColor: "hover:text-blue-400"
    },
    {
      href: "mailto:wamiatucollins@gmail.com",
      icon: FaEnvelope,
      label: "Email",
      hoverColor: "hover:text-red-400"
    }
  ];

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" }
  ];

  const techStack = ['React', 'TypeScript', 'Next.js', 'Express JS', 'Node.js', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Docker'];

  return (
    <footer className="relative overflow-hidden bg-gray-900/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700/50 dark:border-gray-600/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Floating Icons */}
      <div className="absolute top-4 left-4 text-indigo-400 opacity-20">
        <FaCode className="text-2xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
      </div>
      <div className="absolute top-8 right-8 text-purple-400 opacity-20">
        <FaRocket className="text-xl animate-pulse" style={{ animationDuration: '2s' }} />
      </div>
      
      <div className="relative text-gray-100 py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">
            
            {/* Left Section */}
            <div className="text-center lg:text-left space-y-4">
              <div className="group">
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105">
                  Collins Njogu
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto lg:mx-0 transition-all duration-300 group-hover:w-32"></div>
              </div>
              <p className="text-gray-300 text-lg font-medium">
                Your go-to software developer
              </p>
              <p className="text-gray-400 text-sm max-w-xs">
                Crafting digital experiences with passion and precision
              </p>
            </div>

            {/* Middle Section - Navigation */}
            <div className="flex flex-col md:flex-row gap-6 text-center">
              <div className="flex flex-wrap justify-center gap-6">
                {navigationLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="relative group px-3 py-2 text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Section - Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? "_blank" : undefined}
                    rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className={`group relative p-3 text-gray-400 ${social.hoverColor} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                  >
                    <div className="absolute inset-0 bg-white bg-opacity-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <IconComponent className="text-xl relative z-10" />
                    
                    {/* Tooltip */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      {social.label}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm mb-6">
            {/* <div className="text-gray-400">
              <span>&copy; 2025 Collins Njogu. All rights reserved.</span>
            </div> */}
            
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <FaHeart className="text-red-400 animate-pulse" />
              <span>and lots of coffee</span>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-2 opacity-60">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs bg-white bg-opacity-10 rounded-full text-gray-900 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;