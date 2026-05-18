import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { projects, portfolioFilters } from "@/data/site";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const location = useLocation();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [location]);

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.filters.includes(filter))),
    [filter]
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 pb-12 bg-gradient-navy text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-60" />
          <div className="container mx-auto px-6 max-w-screen-content relative">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">Portfolio</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl leading-tight">
              Product, business analysis, Agile delivery, emerging technology, and execution work.
            </h1>
            <p className="text-primary-foreground/75 max-w-2xl leading-relaxed">
              Selected case studies — from concept and product strategy to Agile delivery, business analysis, and financial dashboarding.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-16 z-30 bg-background/85 backdrop-blur border-b border-border">
          <div className="container mx-auto px-6 max-w-screen-content py-3 overflow-x-auto">
            <div className="flex gap-2 min-w-max">
              {portfolioFilters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`text-sm font-medium px-3.5 py-1.5 rounded-md transition-all ${
                    filter === f.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-screen-content space-y-8">
            {visible.map((p, i) => (
              <AnimatedSection key={p.id} delay={i * 60} animation="fade-up">
                <article id={p.id} className="scroll-mt-32 bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                  <header className={`${p.accent === "blue" ? "bg-accent" : p.accent === "deep" ? "bg-navy-deep" : p.accent === "pro" ? "bg-navy-pro" : "bg-primary"} text-primary-foreground p-6 md:p-8`}>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        {p.badge && (
                          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-3 ${p.badge === "1st Place" ? "bg-award text-navy-deep" : "bg-accent text-accent-foreground"}`}>
                            {p.badge}
                          </span>
                        )}
                        <p className="text-xs uppercase tracking-wider text-primary-foreground/60 font-semibold mb-1.5">{p.category}</p>
                        <h2 className="text-2xl md:text-3xl font-bold leading-tight">{p.title}</h2>
                        <p className="text-sm text-primary-foreground/75 mt-1">{p.role}{p.status && ` · ${p.status}`}</p>
                      </div>
                      {p.link && (
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-xs font-medium hover:bg-primary-foreground/20 transition-colors w-fit">
                          <ExternalLink size={14} /> Visit
                        </a>
                      )}
                    </div>
                  </header>

                  <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider font-semibold text-accent mb-2">Headline</p>
                      <p className="text-base font-medium text-foreground mb-5 leading-snug">{p.headline}</p>

                      <p className="text-[11px] uppercase tracking-wider font-semibold text-accent mb-2">Problem</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.problem}</p>

                      <p className="text-[11px] uppercase tracking-wider font-semibold text-accent mb-2">Tools & Methods</p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tools.map((t) => (
                          <span key={t} className="text-[11px] font-medium px-2 py-0.5 rounded bg-secondary text-secondary-foreground border border-border">{t}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-wider font-semibold text-accent mb-2">What I did</p>
                      <ul className="space-y-2.5 mb-5">
                        {p.did.map((d) => (
                          <li key={d} className="flex gap-3 text-sm text-foreground/85 leading-relaxed">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>

                      <p className="text-[11px] uppercase tracking-wider font-semibold text-accent mb-2">Tags</p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span key={t} className="text-[11px] font-medium px-2 py-0.5 rounded bg-accent/10 text-accent">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
