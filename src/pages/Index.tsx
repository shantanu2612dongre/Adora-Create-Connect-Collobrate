
import Navbar from "@/components/landing/Navbar";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CallToActionSection from "@/components/landing/CallToActionSection";
import ServicesSection from "@/components/landing/ServicesSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <FeaturesSection />
      <ServicesSection/>
      <HowItWorksSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
};

export default Index;
