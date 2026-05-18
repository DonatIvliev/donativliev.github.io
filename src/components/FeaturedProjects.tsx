import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/site";

const accentBg: Record<string, string> = {
  navy: "bg-primary",
  blue: "bg-accent",
  deep: "bg-navy-deep",
  pro: "bg-navy-pro",
};

const FeaturedProjects = () => {
  // Home: Smaked (dominant) + SafePlan + Igluva + Bridge
  const list = projects.filter((p) => ["smaked", "safeplan", "igluva", "bridge"].includes(p.id));
  const smaked = list.find((p) => p.id === "smaked")!;
  const rest = list.filter((p) => p.id !== "smaked");

  return (
    <section className="py-20 md:py-24 bg-background" aria-labelledby="featured-heading">
      <div className="container mx-auto px-6 max-w-screen-content">
        <AnimatedSection className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Featured Work</p>
            <h2 id="featured-heading" className="text-3xl md:text-4xl font-bold text-foreground">
              Selected work showing product thinking, Agile delivery, emerging technology, and execution.
            </h2>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link to="/portfolio" className="flex items-center gap-1.5">All projects <ArrowRight size={14} /></Link>
          </Button>
        </AnimatedSection>

        {/* Smaked dominant */}
        <AnimatedSection animation="fade-up">
          <article className="bg-card border border-border rounded-2xl overflow-hidden shadow-md grid lg:grid-cols-[1.2fr_1fr] mb-6 group hover:shadow-xl transition-shadow">
            <div className={`${accentBg[smaked.accent]} text-primary-foreground p-8 md:p-10 relative overflow-hidden`}>
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, hsl(0 0% 100% / 0.5) 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative">
                {smaked.badge && (
                  <span className="inline-block px-2.5 py-1 rounded-md bg-accent text-accent-foreground text-[11px] font-bold uppercase tracking-wider mb-4">
                    {smaked.badge}
                  </span>
                )}
                <p className="text-xs uppercase tracking-wider text-primary-foreground/60 font-semibold mb-2">{smaked.category}</p>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">{smaked.title}</h3>
                <p className="text-primary-foreground/80 text-sm mb-4">{smaked.role}</p>
                <p className="text-base md:text-lg text-primary-foreground/85 leading-relaxed mb-6">{smaked.headline}</p>
                <div className="flex flex-wrap gap-1.5">
                  {smaked.tags.slice(0, 5).map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-primary-foreground/10 border border-primary-foreground/15 text-[11px] font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-8 md:p-10 flex flex-col">
              <p className="text-[11px] uppercase tracking-wider font-semibold text-accent mb-2">Problem</p>
              <p className="text-sm text-foreground/85 leading-relaxed mb-5">{smaked.problem}</p>
              <p className="text-[11px] uppercase tracking-wider font-semibold text-accent mb-2">What I did</p>
              <ul className="space-y-2 mb-6 flex-1">
                {smaked.did.slice(0, 3).map((d) => (
                  <li key={d} className="flex gap-2.5 text-sm text-foreground/80 leading-snug">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="sm" asChild className="w-fit">
                <Link to={`/portfolio#${smaked.id}`} className="flex items-center gap-1.5">View case study <ArrowRight size={14} /></Link>
              </Button>
            </div>
          </article>
        </AnimatedSection>

        {/* Three secondary */}
        <div className="grid md:grid-cols-3 gap-5">
          {rest.map((p, i) => (
            <AnimatedSection key={p.id} delay={i * 100} animation="fade-up">
              <article className="bg-card border border-border rounded-2xl overflow-hidden h-full flex flex-col hover:shadow-lg hover:border-accent/30 transition-all">
                <div className={`${accentBg[p.accent]} text-primary-foreground p-5 relative`}>
                  {p.badge && (
                    <span className="inline-block px-2 py-0.5 rounded bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider mb-3">
                      {p.badge}
                    </span>
                  )}
                  <h3 className="text-lg font-bold leading-tight">{p.title}</h3>
                  <p className="text-xs text-primary-foreground/70 mt-1">{p.role}</p>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.headline}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {p.tags.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-secondary text-secondary-foreground">{t}</span>
                    ))}
                  </div>
                  <Link to={`/portfolio#${p.id}`} className="text-accent text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Read more <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
