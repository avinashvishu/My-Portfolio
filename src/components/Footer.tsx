import { Briefcase, Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">V.Avinash</h3>
            <p className="text-slate-400 max-w-sm">
              Full Stack Developer & Digital Growth Partner. Helping businesses scale with robust code and strategic digital marketing.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#pharma" className="hover:text-accent transition-colors">Pharma Focus</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <a href="mailto:avinashvishu26@gmail.com" className="hover:text-white transition-colors">
                  avinashvishu26@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <a href="tel:+919113326801" className="hover:text-white transition-colors">
                  +91 9113326801
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-accent" />
                <a href="https://wa.me/917366970943" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +91 7366970943 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Briefcase size={18} className="text-accent" />
                <a 
                  href="https://www.linkedin.com/in/v-avinash-22b4741b0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {currentYear} V Avinash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
