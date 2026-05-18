import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { proofMetrics } from "@/data/site";

const ProofMetricStrip = () => {
  return (
    <section className="py-16 md:py-20 bg-background" aria-labelledby="proof-heading">
      <div className="container mx-auto px-6 max-w-screen-content">
        <AnimatedSection className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Evidence</p>
          <h2 id="proof-heading" className="text-3xl md:text-4xl font-bold text-foreground">Proof at a Glance</h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {proofMetrics.map((m, i) => (
            <AnimatedSection key={m.label} delay={i * 60} animation="fade-up">
              <div className="bg-card border border-border rounded-xl p-5 h-full hover:shadow-md hover:border-accent/30 transition-all">
                <p className="text-3xl md:text-4xl font-bold text-primary leading-none mb-2">{m.value}</p>
                <p className="text-[11px] uppercase tracking-wider font-semibold text-accent mb-2">{m.label}</p>
                <p className="text-xs text-muted-foreground leading-snug">{m.proof}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofMetricStrip;
