import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  index: number;
}

function SkillCategory({ title, skills, index }: SkillCategoryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
    >
      <h3 className="mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
            className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "MongoDB", "REST APIs"]
    },
    {
      title: "DevOps & Tools",
      skills: [ "Git"]
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          Skills
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
