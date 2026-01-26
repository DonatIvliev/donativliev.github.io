import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/components/FeaturedProjects";
import { ExternalLink, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Portfolio
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            A selection of projects where I've led product thinking, Agile delivery, 
            and strategic analysis to solve real problems.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            {projects.map((project, index) => (
              <article
                key={project.id}
                id={project.id}
                className="scroll-mt-24"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-md border border-border">
                  {/* Project Header */}
                  <div className={`p-8 ${project.headerBg}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <span className="text-primary-foreground/60 text-sm font-medium mb-2 block">
                          Project {String(index + 1).padStart(2, '0')}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                          {project.title}
                        </h2>
                        <p className="text-primary-foreground/80 mt-1">
                          {project.role}
                        </p>
                      </div>
                      <Button variant="navyGhost" size="sm" className="border border-primary-foreground/30 w-fit" asChild>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink size={16} />
                          Visit Project
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8 space-y-6">
                    {/* Problem */}
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                        Problem Solved
                      </h3>
                      <p className="text-foreground leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* Role & Impact */}
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                        Role & Contribution
                      </h3>
                      <ul className="space-y-2">
                        {project.impact.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
