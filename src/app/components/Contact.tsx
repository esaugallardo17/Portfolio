import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "esau.gallardo.avila@gmail.com",
      href: "mailto:john.developer@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+52 5584686486",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mxico City, Mexico"
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-4">
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          I'm currently open to new opportunities and collaborations. 
          Feel free to reach out if you'd like to work together!
        </motion.p>
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
            >
              <info.icon className="w-8 h-8 mx-auto mb-3 text-gray-700 dark:text-gray-300" />
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {info.label}
              </p>
              {info.href ? (
                <a
                  href={info.href}
                  className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <p>{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:john.developer@example.com"
            className="inline-block px-8 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
          >
            Send Message
          </a>
        </motion.div>
      </div>
    </section>
  );
}
