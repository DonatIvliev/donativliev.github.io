import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofMetricStrip from "@/components/ProofMetricStrip";
import CurrentRoleBridge from "@/components/CurrentRoleBridge";
import WhatIDo from "@/components/WhatIDo";
import OperatingSystem from "@/components/OperatingSystem";
import FeaturedProjects from "@/components/FeaturedProjects";
import LeadershipPreview from "@/components/LeadershipPreview";
import Capabilities from "@/components/Capabilities";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProofMetricStrip />
        <CurrentRoleBridge />
        <WhatIDo />
        <OperatingSystem />
        <FeaturedProjects />
        <LeadershipPreview />
        <Capabilities />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
