"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Dr. Odin (US)",
    url: "https://www.drodin.us/",
    description: "E-commerce platform for healthcare and wellness products targeting the US market.",
    tags: ["E-Commerce", "Shopify", "Healthcare"]
  },
  {
    title: "Dr. Odin (India)",
    url: "https://www.drodin.in/",
    description: "Localized Indian storefront for Dr. Odin medical devices and wellness products.",
    tags: ["E-Commerce", "Shopify", "Healthcare"]
  },
  {
    title: "Biolexa",
    url: "https://biolexa.in/",
    description: "Digital presence and product catalog for Biolexa pharma and healthcare solutions.",
    tags: ["Web Dev", "Pharma", "Frontend"]
  },
  {
    title: "Mployee.me",
    url: "https://www.mployee.me/",
    description: "HR and employee management platform to streamline recruitment and onboarding.",
    tags: ["Full Stack", "SaaS", "Dashboard"]
  },
  {
    title: "LifeKey",
    url: "https://www.lifekey.live/",
    description: "Digital platform for life-saving medical emergency data and smart health profiles.",
    tags: ["Web App", "Healthcare", "Database"]
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Featured <span className="text-primary">Projects</span>
          </motion.h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Card Header / Visual Placeholder */}
              <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 z-10 text-center">
                  {project.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white dark:bg-slate-900 text-xs font-medium text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-end">
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
                  >
                    Visit Live Site <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
