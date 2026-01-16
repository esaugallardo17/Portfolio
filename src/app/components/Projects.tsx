import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  index: number;
}

function ProjectCard({ title, description, technologies, github, demo, index }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="flex-1">{title}</h3>
        <div className="flex gap-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, i) => (
          <span
            key={i}
            className="px-2 py-1 bg-white dark:bg-gray-700 rounded text-xs text-gray-700 dark:text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Music Social App",
      description: "Collaborative task management tool with real-time updates and team features",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          Projects
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
