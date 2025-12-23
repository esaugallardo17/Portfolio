import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Summary() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-8 items-start"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <ImageWithFallback
              src="foto.HEIC"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
            />
          </motion.div>
          
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-gray-700 dark:text-gray-300"
            >
              <p>
                I'm a passionate software developer with over 6 years of experience building 
                scalable web applications and leading development teams. My journey in tech 
                started with a curiosity for problem-solving and has evolved into a career 
                focused on creating impactful digital solutions.
              </p>
              <p>
                I specialize in full-stack development with expertise in modern JavaScript 
                frameworks, cloud infrastructure, and agile methodologies. I thrive in 
                collaborative environments where innovation and continuous learning are valued.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects
                 or exploring the latest trends in technology
                and software architecture. Also I love go to the gym, spend free time with my colegues
                and explore amazing places in the city. 
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
