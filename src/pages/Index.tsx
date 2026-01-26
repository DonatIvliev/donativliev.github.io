import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import OperatingSystem from "@/components/OperatingSystem";
import Capabilities from "@/components/Capabilities";
import FeaturedProjects from "@/components/FeaturedProjects";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatIDo />
      <OperatingSystem />
      <Capabilities />
      <FeaturedProjects />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
