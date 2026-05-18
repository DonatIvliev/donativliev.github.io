import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { site } from "@/data/site";

const ContactCTA = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-navy text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-60" />
      <div className="container mx-auto px-6 max-w-screen-content relative">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">Let's Connect</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
            Currently seeking Fall 2026 & Winter 2027 internships in product, consulting, business analysis, Agile delivery, and emerging technology.
          </h2>
          <p className="text-primary-foreground/75 leading-relaxed mb-8 max-w-2xl mx-auto">
            Open to conversations with recruiters, student programs, and product or business teams interested in a structured, business-and-technology-oriented student executor.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="accent" size="lg" asChild>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2">
                <Mail size={16} /> Email Me <ArrowRight size={14} />
              </a>
            </Button>
            <Button variant="navyGhost" size="lg" className="border border-primary-foreground/25" asChild>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin size={16} /> LinkedIn
              </a>
            </Button>
            <Button variant="navyGhost" size="lg" className="border border-primary-foreground/25" asChild>
              <a href={site.resume} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <FileText size={16} /> Resume
              </a>
            </Button>
            <Button variant="navyGhost" size="lg" className="border border-primary-foreground/25" asChild>
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactCTA;
