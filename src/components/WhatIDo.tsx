import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { capabilities } from "@/data/site";

const WhatIDo = () => {
  return (
    <section className="py-20 md:py-24 bg-background" aria-labelledby="value-heading">
      <div className="container mx-auto px-6 max-w-screen-content">
        <AnimatedSection className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">How I Create Value</p>
          <h2 id="value-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            I work best where business problems need structure, teams need coordination, and ideas need to become usable outputs.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Five practical lanes where I have applied product thinking, Agile delivery, business research, and execution to real student-led and product work.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 80} animation="fade-up">
              <article className="group bg-card border border-border rounded-2xl p-6 h-full hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                <div className="inline-flex p-2.5 rounded-lg bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <c.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.body}</p>
                <div className="border-l-2 border-accent/40 pl-3 mb-4">
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-accent mb-1">Proof</p>
                  <p className="text-xs text-foreground/80 leading-relaxed">{c.proof}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {c.tags.map((t) => (
                    <span key={t} className="text-[11px] font-medium px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
