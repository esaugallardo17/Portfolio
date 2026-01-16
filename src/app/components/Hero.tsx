import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-4xl font-display font-bold text-foreground mb-6 animate-fade-in-up delay-100">
          Esaú Gallardo Avila
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            TELEMATICS ENGINEERING STUDENT    |     IT intern
          </p>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Passionate about building eficient solutions to complex problems. 
            Actively developing my profesional profile with the same energy from the day 0.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="https://github.com/esaugallardo17"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/gallardo-avila-esaú-60501335a/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:gallardo.avila.esau.com"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
