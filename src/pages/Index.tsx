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
