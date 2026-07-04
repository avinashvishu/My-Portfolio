"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    "Domain-agnostic problem solver",
    "End-to-end product development",
    "Performance & SEO focused",
    "Automation & AI integrations"
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-10 rounded-full"></div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 mb-10 text-center md:text-left">
              <p className="mb-6 text-lg leading-relaxed">
                I am a versatile, domain-agnostic full stack developer and digital growth partner. 
                I don&apos;t just write code; I build comprehensive digital ecosystems that help businesses scale, 
                streamline operations, and reach wider audiences.
              </p>
              <p className="text-lg leading-relaxed">
                From crafting highly performant React/Next.js web applications to deploying robust backend APIs, 
                implementing ERP systems, and executing data-driven digital marketing strategies—I offer a 
                complete suite of services to transform your digital presence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800"
                >
                  <CheckCircle2 className="text-accent flex-shrink-0" size={20} />
                  <span className="font-medium text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
