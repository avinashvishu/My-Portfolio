"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "ShadCN UI", "Material UI"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL APIs", "JWT Auth", "RBAC"]
  },
  {
    title: "Databases & Platforms",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Supabase (Auth, RLS, Edge Functions, Triggers)"]
  },
  {
    title: "E-Commerce & Integrations",
    skills: ["Shopify", "Stripe", "Sanity CMS", "WhatsApp Business API", "React-PDF"]
  },
  {
    title: "ERP & Automation",
    skills: ["ERPNext", "n8n", "AI Chatbot Development", "Agentic AI Workflows"]
  },
  {
    title: "Marketing & Content",
    skills: ["SEO", "Social Media Management", "Instagram Reels Strategy", "Google Ads", "Meta Ads"]
  },
  {
    title: "DevOps",
    skills: ["Vercel", "Render", "Nginx", "Certbot/SSL", "Git/GitHub"]
  },
  {
    title: "AI Tools",
    skills: ["Claude", "ChatGPT", "Cursor", "GitHub Copilot"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Technical <span className="text-primary">Skills</span>
          </motion.h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
