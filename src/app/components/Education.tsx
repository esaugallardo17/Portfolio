import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  description?: string;
  index: number;
}

function EducationItem({ degree, institution, period, description, index }: EducationItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-white dark:bg-gray-700 rounded-lg">
          <GraduationCap className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </div>
        <div className="flex-1">
          <h3 className="mb-1">{degree}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            {institution} • {period}
          </p>
          {description && (
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2014 - 2018",
      description: "Graduated with honors. Focus on software engineering and algorithms."
    },
    {
      degree: "AWS Certified Solutions Architect",
      institution: "Amazon Web Services",
      period: "2021",
      description: "Professional certification for cloud architecture and infrastructure."
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
          Education
        </motion.h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <EducationItem key={index} {...edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
