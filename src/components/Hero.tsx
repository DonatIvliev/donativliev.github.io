import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import headshot from "@/assets/headshot.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Navy Gradient Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: "var(--gradient-navy)" }}
      />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 100% / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Avatar */}
          <div className="mb-8 relative">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-primary-foreground/20 shadow-2xl">
              <img
                src={headshot}
                alt="Donat Ivliev"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-accent rounded-full border-2 border-primary" />
          </div>

          {/* Name & Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 tracking-tight">
            Donat Ivliev
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-3 font-medium">
            BBA (Management & IT) @ UTSC • Product • Agile • Project Coordination
          </p>
          
          <p className="text-base md:text-lg text-primary-foreground/60 mb-8 italic">
            Product-minded executor with an Agile delivery backbone.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button variant="accent" size="xl" asChild>
              <Link to="/portfolio" className="flex items-center gap-2">
                <ArrowDown size={18} />
                View Portfolio
              </Link>
            </Button>
            
            <Button variant="navyGhost" size="xl" className="border border-primary-foreground/30" asChild>
              <a href="/resume.pdf" target="_blank" className="flex items-center gap-2">
                <FileText size={18} />
                Download Resume
              </a>
            </Button>
            
            <Button variant="navyGhost" size="xl" className="border border-primary-foreground/30" asChild>
              <a 
                href="/contact"
                className="flex items-center gap-2"
              >
                <Mail size={18} />
                Contact Me
              </a>
            </Button>
          </div>

          {/* Location Badge */}
          <div className="mt-12 px-4 py-2 bg-primary-foreground/10 rounded-full">
            <p className="text-primary-foreground/70 text-sm">
              📍 Toronto, ON, Canada • Targeting Summer 2026 Internships
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary-foreground/50" size={24} />
      </div>
    </section>
  );
};

export default Hero;
