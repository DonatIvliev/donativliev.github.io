import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "@/data/site";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="absolute inset-0 bg-gradient-navy" />
      <div className="absolute inset-0 bg-gradient-glow opacity-80" />

      <div className="container mx-auto px-6 max-w-screen-content relative text-primary-foreground">
        <p className="text-accent font-semibold text-xs tracking-[0.2em] uppercase mb-6">{site.role}</p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] max-w-4xl mb-6">
          I turn complex, ambiguous work into structured delivery and measurable outcomes.
        </h1>

        <p className="text-base md:text-lg text-primary-foreground/75 leading-relaxed max-w-2xl mb-8">
          Project Delivery Specialist Intern at RBC, supporting data talent programs, enterprise platform work, and
          delivery automation. Previously and concurrently piloting emerging technology with the Department of
          Management at the University of Toronto Scarborough.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <Button variant="accent" size="lg" asChild>
            <Link to="/work" className="flex items-center gap-2">
              View Work <ArrowRight size={16} />
            </Link>
          </Button>
          <Button variant="navyGhost" size="lg" className="border border-primary-foreground/25" asChild>
            <Link to="/experience">Experience</Link>
          </Button>
          <Button variant="navyGhost" size="lg" className="border border-primary-foreground/25" asChild>
            <a href={site.resume} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FileText size={16} /> Resume
            </a>
          </Button>
          <Button variant="navyGhost" size="lg" className="border border-primary-foreground/25" asChild>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 pt-8 border-t border-primary-foreground/15 text-sm text-primary-foreground/70">
          <span className="flex items-center gap-2"><MapPin size={14} className="text-accent" /> {site.location}</span>
          <span>{site.currentRole}</span>
          <span>BBA Management &amp; IT, U of T Scarborough</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
