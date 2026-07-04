"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, ShoppingCart, Layers, Bot, LineChart, Megaphone } from "lucide-react";

const services = [
  {
    icon: <MonitorSmartphone size={32} />,
    title: "Full Stack Web & App Dev",
    description: "Custom React/Next.js applications with robust Node.js/Express backends and scalable databases."
  },
  {
    icon: <ShoppingCart size={32} />,
    title: "E-Commerce & Shopify",
    description: "End-to-end Shopify store development, custom themes, and payment gateway integrations."
  },
  {
    icon: <Layers size={32} />,
    title: "ERP & CRM Implementation",
    description: "ERPNext implementations and CRM integrations tailored to streamline your business operations."
  },
  {
    icon: <Bot size={32} />,
    title: "Automation & AI Workflows",
    description: "n8n automated workflows and custom AI chatbot development to save time and reduce manual work."
  },
  {
    icon: <Megaphone size={32} />,
    title: "Social Media & Viral Content",
    description: "Strategic social media management and viral Instagram Reels/posts to boost brand awareness."
  },
  {
    icon: <LineChart size={32} />,
    title: "SEO & Paid Ads Setup",
    description: "Data-driven SEO strategies and optimized Google/Meta Ads campaigns for maximum ROI."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            My <span className="text-primary">Services</span>
          </motion.h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A comprehensive suite of technical and marketing services to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-lg hover:border-primary/20 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
