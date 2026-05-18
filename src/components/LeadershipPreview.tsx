import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { leadership } from "@/data/site";

const accentRing: Record<string, string> = {
  navy: "from-primary to-navy-pro",
  blue: "from-accent to-navy-pro",
  pro: "from-navy-pro to-primary",
  award: "from-[hsl(var(--accent-yellow))] to-[hsl(45_85%_50%)]",
};

const LeadershipPreview = () => {
  return (
    <section className="py-20 md:py-24 bg-secondary/50" aria-labelledby="leadership-heading">
      <div className="container mx-auto px-6 max-w-screen-content">
        <AnimatedSection className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Leadership in Live Operating Environments</p>
          <h2 id="leadership-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            University has been more than coursework — it's been a real operating environment.
          </h2>
          <p className="text-muted-foreground">
            Coordination, communication, technology exposure, and execution across roles that mattered.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {leadership.map((l, i) => (
            <AnimatedSection key={l.id} delay={i * 100} animation="fade-up">
              <article className={`relative bg-card border border-border rounded-2xl p-6 h-full hover:shadow-lg transition-all overflow-hidden ${l.accent === "award" ? "ring-1 ring-[hsl(var(--accent-yellow))/0.4]" : ""}`}>
                <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${accentRing[l.accent]}`} />
                <div className={`inline-flex p-2.5 rounded-lg mb-4 ${l.accent === "award" ? "bg-[hsl(var(--accent-yellow))/0.15] text-[hsl(45_85%_40%)]" : "bg-accent/10 text-accent"}`}>
                  <l.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground leading-tight mb-1">{l.title}</h3>
                <p className="text-sm text-navy-pro font-medium mb-4">{l.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{l.proof}</p>
                <div className="flex flex-wrap gap-1">
                  {l.tags.map((t) => (
                    <span key={t} className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-secondary text-secondary-foreground">{t}</span>
                  ))}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-10 flex justify-center" delay={400}>
          <Link to="/studying" className="text-accent font-semibold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
            See full Studying, Leadership & Execution <ArrowRight size={14} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LeadershipPreview;
