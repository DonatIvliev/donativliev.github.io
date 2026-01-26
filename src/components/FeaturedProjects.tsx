import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

export const projects = [
  {
    id: "smaked",
    title: "Smaked",
    role: "Founder & Product Lead",
    shortDescription:
      "Mobile-first platform connecting local restaurants with consumers seeking affordable, healthy food—bypassing expensive delivery platforms.",
    problem:
      "Local restaurants and consumers lacked affordable, convenient access to healthy, high-quality food without relying on expensive delivery platforms.",
    impact: [
      "Led discovery → MVP delivery",
      "Built mobile-first product experience",
      "Conducted market and financial analysis",
      "Owned execution across product and operations",
    ],
    link: "https://smaked.com",
  },
  {
    id: "safeplan",
    title: "SafePlan",
    role: "Scrum Master",
    shortDescription:
      "Trauma-informed safety planning tool for individuals in unsafe situations, delivered through structured Agile processes.",
    problem:
      "Individuals in unsafe or abusive situations lacked accessible, trauma-informed tools to plan and manage personal safety.",
    impact: [
      "Coordinated Agile delivery",
      "Managed backlog, epics, and sprint execution",
      "Facilitated planning, reviews, and retrospectives",
      "Aligned stakeholders with development output",
    ],
    link: "https://github.com/samtjhia/SafePlan",
  },
  {
    id: "igluva",
    title: "Igluva",
    role: "Product & Business Analysis",
    shortDescription:
      "Streamlined rental platform addressing fragmented processes and weak screening in Ontario's rental market.",
    problem:
      "Renters and landlords faced inefficient, fragmented rental processes with weak screening and poor regulatory alignment in Ontario.",
    impact: [
      "Market research and requirements analysis",
      "Feasibility evaluation",
      "Process design aligned with Ontario regulations",
    ],
    link: "https://igluva.ca",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 150} animation="fade-up">
              <div className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border flex flex-col h-full">
                {/* Card Header */}
                <div className="p-6 bg-primary">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-primary-foreground mb-1">
                        {project.title}
                      </h3>
                      <p className="text-primary-foreground/70 text-sm">
                        {project.role}
                      </p>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-primary-foreground" />
                    </a>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {project.shortDescription}
                  </p>
                  <Button variant="outline" size="sm" className="w-full group" asChild>
                    <Link to={`/portfolio#${project.id}`}>
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-10" delay={450}>
          <Button variant="hero" size="lg" asChild>
            <Link to="/portfolio">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FeaturedProjects;
