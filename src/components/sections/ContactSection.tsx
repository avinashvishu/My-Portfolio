"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Briefcase, Send, CheckCircle2, AlertCircle, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill out all required fields.");
      setStatus("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/1453204c0419db712883a14c5c84f819", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: "New Portfolio Contact Form Submission",
          _template: "table",
          _captcha: "false"
        })
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again later or contact me directly.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to explore a collaboration? Let&apos;s talk.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 h-full">
              <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <a href="mailto:avinashvishu26@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Email</p>
                    <p className="font-medium text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">
                      avinashvishu26@gmail.com
                    </p>
                  </div>
                </a>

                <a href="tel:+919113326801" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Phone</p>
                    <p className="font-medium text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">
                      +91 9113326801
                    </p>
                  </div>
                </a>

                <a href="https://wa.me/917366970943" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">WhatsApp</p>
                    <p className="font-medium text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">
                      +91 7366970943
                    </p>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/v-avinash-22b4741b0" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">LinkedIn</p>
                    <p className="font-medium text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">
                      v-avinash-22b4741b0
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-100 dark:shadow-none">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === "error" && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3 text-red-600 dark:text-red-400 text-sm">
                      <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Your Phone Number
                    </label>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <select 
                        className="w-full sm:w-1/3 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all cursor-pointer"
                        onChange={(e) => {
                          const code = e.target.value;
                          if (!code) return;
                          
                          const currentPhone = formData.phone.trim();
                          if (!currentPhone) {
                            setFormData({ ...formData, phone: code + " " });
                          } else if (!currentPhone.startsWith('+')) {
                            setFormData({ ...formData, phone: code + " " + currentPhone });
                          } else {
                            const spaceIndex = currentPhone.indexOf(' ');
                            if (spaceIndex !== -1) {
                              setFormData({ ...formData, phone: code + " " + currentPhone.substring(spaceIndex + 1) });
                            } else {
                              setFormData({ ...formData, phone: code + " " });
                            }
                          }
                        }}
                      >
                        <option value="">Country (Optional)</option>
                        <option value="+1">US / Canada (+1)</option>
                        <option value="+44">United Kingdom (+44)</option>
                        <option value="+91">India (+91)</option>
                        <option value="+61">Australia (+61)</option>
                        <option value="+49">Germany (+49)</option>
                        <option value="+33">France (+33)</option>
                        <option value="+81">Japan (+81)</option>
                        <option value="+971">UAE (+971)</option>
                        <option value="+65">Singapore (+65)</option>
                        <option value="+27">South Africa (+27)</option>
                        <option value="+55">Brazil (+55)</option>
                        <option value="+86">China (+86)</option>
                      </select>
                      
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full sm:w-2/3 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="e.g. +91 0000000000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      placeholder="How can I help you?"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
