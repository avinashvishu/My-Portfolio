"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Target, Users } from "lucide-react";

export default function WhyWorkWithMeSection() {
  const reasons = [
    {
      icon: <Zap size={28} />,
      title: "Fast Execution & Delivery",
      description: "I prioritize building and shipping functional products quickly without compromising on quality or code architecture."
    },
    {
      icon: <Target size={28} />,
      title: "Business-First Approach",
      description: "I don't just write code; I align technology with your specific business goals, whether it's increasing sales or reducing costs."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Reliable & Transparent",
      description: "Clear communication, regular updates, and a commitment to delivering exactly what was promised."
    },
    {
      icon: <Users size={28} />,
      title: "End-to-End Ownership",
      description: "From the initial server setup to the final UI polish and marketing campaigns, I handle the full lifecycle."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Why Work <span className="text-primary">With Me?</span>
          </motion.h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
