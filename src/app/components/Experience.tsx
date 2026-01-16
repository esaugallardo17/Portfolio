import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  description: string[];
  index: number;
}

function ExperienceItem({ company, role, period, description, index }: ExperienceItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="py-20 px-4 border-l-2 border-gray-300 dark:border-gray-700 pl-6 pb-8 relative"
    >
      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-900 dark:bg-gray-100" />
      <h3 className="mb-1">{role}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-2">
        {company} • {period}
      </p>
      <ul className="space-y-1 text-gray-700 dark:text-gray-300">
        {description.map((item, i) => (
          <li key={i} className="text-sm">• {item}</li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Experience() {
  const experiences = [
    {
      company: "Uber Freight",
      role: "IT Intern",
      period: "November 2025 - Present",
      description: [
        "Performed OS installations and configuration in multiple environments",
        "Administered users, groups, and permissions",
        "Managed and resolved support tickets in Jira and ServiceNow",
        "Diagnosed and resolved software and hardware issues"

      ]
    },
    
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
          Experience
        </motion.h2>
        <div>
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
