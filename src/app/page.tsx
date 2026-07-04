import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import PharmaFocusSection from "@/components/sections/PharmaFocusSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import WhyWorkWithMeSection from "@/components/sections/WhyWorkWithMeSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'V.Avinash - Full Stack Developer & Digital Growth Partner',
  description: 'Portfolio of V.Avinash, a domain-agnostic Full Stack Developer showcasing web development, e-commerce, ERP, and automation capabilities.',
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full flex flex-col">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <PharmaFocusSection />
        <SkillsSection />
        <CertificationsSection />
        <WhyWorkWithMeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
