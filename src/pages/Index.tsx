import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import CollegePartnerCTA from "@/components/CollegePartnerCTA";
import TrainlanceSection from "@/components/TrainlanceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  // Handle hash links when navigating from other pages
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Small delay to ensure page is rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PartnersSection />
        <CollegePartnerCTA />
        <TrainlanceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
