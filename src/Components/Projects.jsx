// Projects.jsx
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projectData = [
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with OpenWeatherMap API integration, featuring dynamic UI updates and responsive design",
    image: "https://via.placeholder.com/500/2d2d2d/ffffff?text=Weather+App",
    technologies: ["React", "OpenWeatherMap API", "TailwindCSS", "Axios"],
    githubLink: "https://github.com/yourusername/weather-app",
    liveLink: "https://weather-app-demo.com",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with user authentication, product filtering, and shopping cart functionality",
    image: "https://via.placeholder.com/500/2d2d2d/ffffff?text=E-Commerce",
    technologies: ["React", "Firebase", "Redux", "Stripe"],
    githubLink: "https://github.com/yourusername/ecommerce",
    liveLink: "https://ecommerce-demo.com",
  },
  {
    title: "Expense Tracker",
    description: "Financial management tool with data visualization and CRUD operations for expense tracking",
    image: "https://via.placeholder.com/500/2d2d2d/ffffff?text=Expense+Tracker",
    technologies: ["React", "Chart.js", "MongoDB", "Express"],
    githubLink: "https://github.com/yourusername/expense-tracker",
    liveLink: "https://expense-tracker-demo.com",
  },
  {
    title: "Interactive Resume",
    description: "Dynamic resume application with animations and interactive elements",
    image: "https://via.placeholder.com/500/2d2d2d/ffffff?text=Interactive+Resume",
    technologies: ["React", "Framer Motion", "TailwindCSS", "Three.js"],
    githubLink: "https://github.com/yourusername/interactive-resume",
    liveLink: "https://interactive-resume-demo.com",
  },
  {
    title: "Quiz Application",
    description: "Dynamic quiz platform with timer functionality and score tracking",
    image: "https://via.placeholder.com/500/2d2d2d/ffffff?text=Quiz+App",
    technologies: ["React", "TypeScript", "Redux", "Trivia API"],
    githubLink: "https://github.com/yourusername/quiz-app",
    liveLink: "https://quiz-app-demo.com",
  },
  {
    title: "Recipe Finder",
    description: "Recipe search application with filtering and favorites functionality using Spoonacular API",
    image: "https://via.placeholder.com/500/2d2d2d/ffffff?text=Recipe+Finder",
    technologies: ["React", "Spoonacular API", "Context API", "TailwindCSS"],
    githubLink: "https://github.com/yourusername/recipe-finder",
    liveLink: "https://recipe-finder-demo.com",
  },
  {
    title: "Blog Platform",
    description: "Full-stack blogging platform with authentication and rich text editing",
    image: "https://via.placeholder.com/500/2d2d2d/ffffff?text=Blog+Platform",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    githubLink: "https://github.com/yourusername/blog-platform",
    liveLink: "https://blog-platform-demo.com",
  },
  {
    title: "Real-time Chat",
    description: "Live chat application with WebSocket integration and message history",
    image: "https://via.placeholder.com/500/2d2d2d/ffffff?text=Chat+App",
    technologies: ["React", "Socket.io", "Firebase", "Express"],
    githubLink: "https://github.com/yourusername/chat-app",
    liveLink: "https://chat-app-demo.com",
  },
  {
    title: "Job Board",
    description: "Job tracking platform with search and filter functionality",
    image: "https://via.placeholder.com/500/2d2d2d/ffffff?text=Job+Board",
    technologies: ["React", "Node.js", "PostgreSQL", "Redux"],
    githubLink: "https://github.com/yourusername/job-board",
    liveLink: "https://job-board-demo.com",
  }
];

const Projects = () => {
  return (
    <div className="flex-1 ml-[200px] min-h-screen bg-[#0f0f0f] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project, index) => (
            <div 
              key={index}
              className="bg-[#1f1f1f] rounded-lg overflow-hidden border border-[#2d2d2d] hover:border-[#3d3d3d] transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0f0f]/80"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-[#2d2d2d] text-gray-400 rounded-full text-xs hover:bg-[#3d3d3d] hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <FiGithub className="text-lg" /> GitHub
                  </a>
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <FiExternalLink className="text-lg" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;