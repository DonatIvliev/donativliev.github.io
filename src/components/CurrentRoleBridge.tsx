import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { experiences } from "@/data/site";

const CurrentRoleBridge = () => {
  const rbc = experiences[0];

  return (
    <section className="py-20 md:py-24 bg-secondary/50" aria-labelledby="current-role-heading">
      <div className="container mx-auto px-6 max-w-screen-content">
        <AnimatedSection className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Current Role</p>
          <h2 id="current-role-heading" className="text-3xl md:text-4xl font-bold text-foreground max-w-3xl">
            Delivering projects inside an enterprise data and technology organisation.
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fade-up">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-md grid lg:grid-cols-[1.5fr_1fr]">
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {rbc.period}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">{rbc.title}</h3>
              <p className="text-base text-navy-pro font-medium mb-6">{rbc.org}</p>

              <p className="text-muted-foreground leading-relaxed mb-6">{rbc.context}</p>

              <ul className="space-y-3 mb-6">
                {rbc.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-foreground/85 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {rbc.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium border border-border">
                    {t}
                  </span>
                ))}
              </div>

              <Link to="/experience#rbc" className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm hover:gap-2.5 transition-all">
                See full experience <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-gradient-navy relative overflow-hidden p-8 md:p-10 flex flex-col justify-between text-primary-foreground min-h-[320px]">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, hsl(0 0% 100% / 0.5) 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-accent/15 border border-accent/25 mb-5">
                  <Briefcase className="w-7 h-7 text-accent" />
                </div>
                <p className="text-sm text-primary-foreground/70 mb-1">Where the work happens</p>
                <p className="text-xl font-bold leading-tight mb-1">Royal Bank of Canada</p>
                <p className="text-sm text-primary-foreground/60">Project delivery · Data talent programs</p>
              </div>

              <div className="relative grid gap-2.5 mt-6">
                {[
                  { k: "35+", v: "Program participants supported" },
                  { k: "1,000+", v: "Practitioners reached by learning work" },
                  { k: "Kanban", v: "Recurring delivery workflows" },
                ].map((s) => (
                  <div key={s.k} className="px-3 py-2.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/15 backdrop-blur-sm">
                    <p className="text-lg font-bold text-accent leading-none">{s.k}</p>
                    <p className="text-xs text-primary-foreground/75 mt-1">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CurrentRoleBridge;
