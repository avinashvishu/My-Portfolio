"use client";

import { motion } from "framer-motion";
import { Activity, Pill, Database, Truck } from "lucide-react";

export default function PharmaFocusSection() {
  const highlights = [
    {
      icon: <Database size={24} />,
      title: "ERPNext Implementation",
      description: "Customized ERP systems for pharmaceutical manufacturing and distribution, ensuring compliance and traceability."
    },
    {
      icon: <Activity size={24} />,
      title: "PCD Franchise Platforms",
      description: "End-to-end digital presence and portals for PCD Pharma franchises to manage orders and distributors."
    },
    {
      icon: <Truck size={24} />,
      title: "Warehouse Automation",
      description: "Inventory tracking, automated low-stock alerts, and batch-expiry management systems."
    },
    {
      icon: <Pill size={24} />,
      title: "Pharma-Tech Solutions",
      description: "Developing HIPAA-compliant and secure platforms for medical devices and wellness products."
    }
  ];

  return (
    <section id="pharma" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border-[40px] border-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border-[60px] border-white rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Specialized <br/>
                <span className="text-accent">Pharma Industry</span> <br/>
                Focus
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                With deep hands-on experience in the highly regulated pharmaceutical and healthcare sectors, 
                I understand the critical need for compliance, data security, and operational efficiency.
              </p>
              <a 
                href="#contact" 
                className="inline-flex px-6 py-3 bg-white text-primary rounded-full font-bold hover:bg-slate-100 transition-colors shadow-lg"
              >
                Discuss a Pharma Project
              </a>
            </motion.div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all"
                >
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
