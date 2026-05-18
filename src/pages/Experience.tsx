import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { experiences, proofMetrics, site } from "@/data/site";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Experience = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-navy text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-60" />
          <div className="container mx-auto px-6 max-w-screen-content relative">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">Experience</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl leading-tight">
              Roles where I build structure, support execution, and connect business, technology, and people.
            </h1>
            <p className="text-primary-foreground/75 max-w-2xl leading-relaxed">
              {site.availability}. Current role: {site.currentRole}.
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-primary-foreground/10 rounded-xl overflow-hidden border border-primary-foreground/15">
              {proofMetrics.map((m) => (
                <div key={m.label} className="bg-[hsl(215_80%_11%/0.6)] backdrop-blur-sm p-4 text-center">
                  <p className="text-2xl font-bold text-accent leading-none">{m.value}</p>
                  <p className="text-[10px] uppercase tracking-wider text-primary-foreground/70 font-semibold mt-1.5">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-screen-content">
            <div className="space-y-6">
              {experiences.map((e, i) => (
                <AnimatedSection key={e.id} delay={i * 80} animation="fade-up">
                  <article id={e.id} className="scroll-mt-24 bg-card border border-border rounded-2xl p-7 md:p-9 hover:shadow-md transition-shadow">
                    <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-8">
                      <div className="inline-flex p-3 rounded-xl bg-accent/10 text-accent self-start">
                        <e.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                          <div>
                            <h2 className="text-xl md:text-2xl font-bold text-foreground leading-tight">{e.title}</h2>
                            <p className="text-sm text-navy-pro font-medium mt-0.5">{e.org}</p>
                          </div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-accent">{e.period}</span>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed mb-5 mt-3">{e.context}</p>

                        <ul className="space-y-2.5 mb-5">
                          {e.bullets.map((b) => (
                            <li key={b} className="flex gap-3 text-sm text-foreground/85 leading-relaxed">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-1.5">
                          {e.tags.map((t) => (
                            <span key={t} className="text-xs font-medium px-2 py-0.5 rounded bg-secondary text-secondary-foreground border border-border">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Experience;
